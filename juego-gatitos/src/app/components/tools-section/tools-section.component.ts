import { Component } from '@angular/core';

interface Tool {
  name: string;
  logoUrl: string;
  description: string;
  usageDetails: string[];
  reasons: string[];
  officialUrl: string;
  colorClass: string;
}

@Component({
  selector: 'app-tools-section',
  templateUrl: './tools-section.component.html',
  styleUrls: ['./tools-section.component.scss']
})
export class ToolsSectionComponent {
  tools: Tool[] = [
    {
      name: 'Godot Engine',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/512px-Godot_icon.svg.png',
      officialUrl: 'https://godotengine.org/',
      description: 'Motor de juego open source utilizado para el desarrollo principal',
      usageDetails: [
        'Programación en GDScript para la lógica del juego',
        'Implementación de físicas y colisiones',
        'Diseño de niveles y escenas'
      ],
      reasons: [
        'Facilidad de uso',
        'Excelente para proyectos 2D y 3D',
        'Comunidad activa y documentación completa',
        'Editor integrado liviano y eficiente'
      ],
      colorClass: 'bg-purple-100 text-purple-800 border-purple-300 hover:bg-purple-200'
    },
    {
      name: 'Blender',
      logoUrl: 'https://download.blender.org/branding/blender_logo_socket.png',
      officialUrl: 'https://www.blender.org/',
      description: 'Software de modelado 3D y animación',
      usageDetails: [
        'Modelado de personajes y objetos',
        'Rigging y animación de los gatos',
        'Creación de assets para los entornos'
      ],
      reasons: [
        'Completamente gratuito y open source',
        'Potente conjunto de herramientas 3D',
        'Soporte para exportación a Godot',
        'Comunidad enorme con recursos de aprendizaje'
      ],
      colorClass: 'bg-orange-100 text-orange-800 border-orange-300 hover:bg-orange-200'
    },
    {
      name: 'FBX Format',
  logoUrl: 'https://cdn0.iconfinder.com/data/icons/file-format-3d-graphics-glyph-1/64/file_document_3d-33-512.png',
  officialUrl: 'https://www.autodesk.com/products/fbx/overview',
  description: 'Formato estándar para intercambio de modelos 3D',
  usageDetails: [
    'Exportación de modelos desde Blender',
    'Intercambio de assets entre herramientas',
    'Compatibilidad con Godot Engine',
    'Preservación de jerarquías de objetos y animaciones'
  ],
  reasons: [
    'Formato ampliamente soportado en la industria',
    'Mantiene animaciones y estructuras de huesos',
    'Soporte para texturas y materiales',
    'Estandarizado por Autodesk y aceptado universalmente'
  ],
  colorClass: 'bg-green-100 text-green-800 border-green-300 hover:bg-green-200'
    }
  ];

  isExpanded: {[key: string]: boolean} = {};

  toggleDetails(toolName: string): void {
    this.isExpanded[toolName] = !this.isExpanded[toolName];
  }
}