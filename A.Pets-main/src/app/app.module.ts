import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { ExplorarPageComponent } from './explorar-page/explorar-page.component';
import { AdocoesPageComponent } from './adocoes-page/adocoes-page.component';
import { DoarPageComponent } from './doar-page/doar-page.component';
import { ConfiguracoesPageComponent } from './configuracoes-page/configuracoes-page.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    ExplorarPageComponent,
    AdocoesPageComponent,
    DoarPageComponent,
    ConfiguracoesPageComponent,
    HeaderComponent,
    RightSidebarComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
