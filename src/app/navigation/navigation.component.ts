import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  currentSection: string='About';

  @Output() navigate = new EventEmitter<string>();

  sections=['ABOUT', 'SKILLS', 'EXPERIENCE', 'PROJECTS'];

  onNavigate(section: string):void {
    this.currentSection=section;
    this.navigate.emit(section);
  }
  
}
