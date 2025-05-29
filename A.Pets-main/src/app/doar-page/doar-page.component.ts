import { Component } from '@angular/core';

@Component({
  selector: 'app-doar-page',
  standalone: false,
  templateUrl: './doar-page.component.html',
  styleUrl: './doar-page.component.scss'
})
export class DoarPageComponent {

  petsRecentes = [
  { nome: 'ONG', genero: 'Doar', imagem: '/logoapets3.png' },
  { nome: 'ONG', genero: 'Doar', imagem: '/logoapets3.png' },
  { nome: 'ONG', genero: 'Doar', imagem: '/logoapets3.png' },
  // ...
];

petsDestaque = [
  { nome: 'ONG', genero: 'Doar', imagem: '/logoapets3.png' },
  { nome: 'ONG', genero: 'Doar', imagem: '/logoapets3.png' },
  { nome: 'ONG', genero: 'Doar', imagem: '/logoapets3.png' },
  // ...
];

}
