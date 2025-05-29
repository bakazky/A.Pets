import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  instituicoes = [
  { nome: 'ONG', seguidores: 784 },
  { nome: 'ONG', seguidores: 784 },
  { nome: 'ONG', seguidores: 784 },
];

  items = [
    {
      routeLink: '/main',
      icon: 'fas fa-home',
      label: 'Início',
    },
    {
      routeLink: '/explorar-page',
      icon: 'fas fa-search',
      label: 'Explorar',
    },
      {
      routeLink: '/adocoes-page',
      icon: 'fas fa-paw',
      label: 'Minhas adoções',
    },
    
      {
      routeLink: '/doar-page',
      icon: 'fas fa-heart',
      label: 'Doar',
    },
      {
      routeLink: '/configuracoes-page',
      icon: 'fas fa-cog',
      label: 'Configurações',
    },



  ]

}
