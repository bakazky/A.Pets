import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adocoes-page',
  standalone: false,
  templateUrl: './adocoes-page.component.html',
  styleUrl: './adocoes-page.component.scss'
})
export class AdocoesPageComponent {

  userId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    console.log('ID do usuário:', this.userId);
  }
}


