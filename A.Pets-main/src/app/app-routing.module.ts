import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component'; 
import { AdocoesPageComponent } from './adocoes-page/adocoes-page.component';
import { ExplorarPageComponent } from './explorar-page/explorar-page.component';
import { DoarPageComponent } from './doar-page/doar-page.component';
import { ConfiguracoesPageComponent } from './configuracoes-page/configuracoes-page.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
   { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'adocoes-page', component: AdocoesPageComponent },
  { path: 'explorar-page', component: ExplorarPageComponent },
  { path: 'doar-page', component: DoarPageComponent },
  { path: 'configuracoes-page', component: ConfiguracoesPageComponent },
  { path: 'login-page', component: LoginPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
