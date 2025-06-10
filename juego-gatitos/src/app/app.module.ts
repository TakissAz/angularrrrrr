import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './nav/nav.component';
import { HistoriaComponent } from './historia/historia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FeaturesComponent,
    GalleryComponent,
    FooterComponent,
    AboutComponent,
    NavComponent,
    HistoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
