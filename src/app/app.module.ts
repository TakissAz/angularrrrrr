import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { HomeComponent } from './home/home.component';
import { FloatingElementsComponent } from './components/floating-elements/floating-elements.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { TeamComponent } from './components/team/team.component';
import { ToolsSectionComponent } from './components/tools-section/tools-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FooterComponent,
    AboutComponent,
    DestacadosComponent,
    HomeComponent,
    FloatingElementsComponent,
    CountdownComponent,
    TrailerComponent,
    CharactersComponent,
    NewsletterComponent,
    TeamComponent,
    ToolsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


