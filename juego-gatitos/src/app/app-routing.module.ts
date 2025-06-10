import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaComponent } from './historia/historia.component'; // importa el componente

const routes: Routes = [
  { path: 'historia', component: HistoriaComponent },
  // otras rutas aquí si tienes
  { path: '', redirectTo: '/', pathMatch: 'full' }, // ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
