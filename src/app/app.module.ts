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
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { ComponenteDeForaComponent } from './components/ng-content/componente-de-fora/componente-de-fora.component';
import { ClassAndStyleBindingComponent } from './components/class-and-style-binding/class-and-style-binding.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { DiretivaPersonalizadaDirective } from './shared/diretiva-personalizada.directive';
import { DiretivasCustomizadasComponent } from './components/diretivas-customizadas/diretivas-customizadas.component';
import { DiretivaEventoDirective } from './shared/diretiva-evento.directive';

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
    NgTemplateComponent,
    NgContentComponent,
    ComponenteDeForaComponent,
    ClassAndStyleBindingComponent,
    ViewChildComponent,
    DiretivaPersonalizadaDirective,
    DiretivasCustomizadasComponent,
    DiretivaEventoDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
