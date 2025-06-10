import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestacadosComponent } from './destacados/destacados.component';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './components/historia/historia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'destacados', component: DestacadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
