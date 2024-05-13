import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  currentSection: string='About';

  @Output() navigate = new EventEmitter<string>();

  sections=['About', 'Skills', 'Experience', 'Projects'];

  onNavigate(section: string):void {
    this.navigate.emit(section);
  }
  
}
