import { Component } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  standalone: false,
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.scss'
})
export class RightSidebarComponent {

   instituicoes = [
  { nome: 'ONG', seguidores: 784 },
  { nome: 'ONG', seguidores: 784 },
  { nome: 'ONG', seguidores: 784 },

];

 pets = [
  { nome: 'Doguinha', info: 'Femea, 8 semanas' },
  { nome: 'Doguinha', info: 'Femea, 8 semanas' },
  { nome: 'Doguinha', info: 'Femea, 8 semanas' },


];


}
