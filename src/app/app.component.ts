import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentSection: string='About';

  constructor(private location: Location) {}

  scrollToSection(section:string):void {
    this.currentSection=section;
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
    this.location.replaceState('', '', `#${section}`);
  }

}
