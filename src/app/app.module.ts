import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './components/componente/componente.component';
import { FilhoComponent } from './components/filho/filho.component';
import { DiretivasDeAtributoComponent } from './components/diretivas-de-atributo/diretivas-de-atributo.component';
import { DiretivasEstruturaisComponent } from './components/diretivas-estruturais/diretivas-estruturais.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitindo-eventos/emitter/emitter.component';
import { EmitterFilhoComponent } from './components/emitindo-eventos/emitter-filho/emitter-filho.component';
import { CicloDeVidaComponent } from './components/ciclo-de-vida/ciclo-de-vida.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './pages/home/home.component';
import { PaginaComponent } from './pages/pagina/pagina.component';
import { HttpClientModule } from '@angular/common/http';
import { RequisicoesHttpComponent } from './components/requisicoes-http/requisicoes-http.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    FilhoComponent,
    DiretivasDeAtributoComponent,
    DiretivasEstruturaisComponent,
    EventosComponent,
    EmitterComponent,
    EmitterFilhoComponent,
    CicloDeVidaComponent,
    DataBindingComponent,
    ServicesComponent,
    HomeComponent,
    PaginaComponent,
    RequisicoesHttpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
