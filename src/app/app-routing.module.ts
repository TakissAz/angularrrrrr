import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestacadosComponent } from './destacados/destacados.component';
import { HomeComponent } from './home/home.component'; // ✅ nuevo import

const routes: Routes = [
  { path: '', component: HomeComponent }, // 👈 la ruta principal ahora carga HomeComponent
  { path: 'destacados', component: DestacadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
