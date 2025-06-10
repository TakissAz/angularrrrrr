import { Component } from '@angular/core';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.scss']
})
export class DestacadosComponent {
noticias = [
  {
    titulo: 'Campaña en Bolivia contra el abandono animal',
    imagen: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
    descripcion: 'Organizaciones bolivianas lanzan una campaña para concienciar sobre el abandono de mascotas en zonas urbanas.',
    fecha: '10 de junio de 2025'
  },
  {
    titulo: 'Refugios saturados en Santa Cruz',
    imagen: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80',
    descripcion: 'El incremento de animales abandonados está poniendo en crisis a los refugios de Santa Cruz.',
    fecha: '9 de junio de 2025'
  },
  {
    titulo: 'Voluntarios rescatan perros en El Alto',
    imagen: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80',
    descripcion: 'Grupos de voluntarios se movilizan para rescatar animales víctimas de maltrato en zonas periféricas.',
    fecha: '8 de junio de 2025'
  }
];


}
