import { Component } from '@angular/core';

@Component({
  selector: 'app-explorar-page',
  standalone: false,
  templateUrl: './explorar-page.component.html',
  styleUrl: './explorar-page.component.scss'
})
export class ExplorarPageComponent {

petsRecentes = [
  { nome: 'Doguinho', genero: 'Macho', idade: '24 semanas', imagem: '/doguinhoimg.jpg' },
  { nome: 'Gatinha', genero: 'Fêmea', idade: '1 ano', imagem: '/gatinhaimg.jpg' },
  { nome: 'Doguinho', genero: 'Macho', idade: '24 semanas', imagem: '/doguinhoimg.jpg' },
  // ...
];

petsDestaque = [
  { nome: 'Doguinho', genero: 'Macho', idade: '24 semanas', imagem: '/doguinhoimg.jpg' },
  { nome: 'Gatinha', genero: 'Fêmea', idade: '1 ano', imagem: '/gatinhaimg.jpg' },
  { nome: 'Doguinho', genero: 'Macho', idade: '24 semanas', imagem: '/doguinhoimg.jpg' },
  // ...
];

}
