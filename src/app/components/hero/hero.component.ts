import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  scrollToTrailer(): void {
    const section = document.getElementById('trailerSection');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }
}
