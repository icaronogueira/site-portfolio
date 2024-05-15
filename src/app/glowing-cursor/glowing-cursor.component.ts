import { Component, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-glowing-cursor',
  templateUrl: './glowing-cursor.component.html',
  styleUrl: './glowing-cursor.component.css'
})
export class GlowingCursorComponent {
  glowing: boolean = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const cursor = document.querySelector('.glowing-cursor') as HTMLElement;
    cursor.style.left=event.clientX+"px";
    cursor.style.top=event.clientY+"px";

    if (!this.glowing) {
      cursor.classList.add('glow');
      this.glowing=true;
    }
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    const cursor = document.querySelector('.glowing-cursor') as HTMLElement;
    cursor.classList.remove('glow');
    this.glowing=false;
  }
}
