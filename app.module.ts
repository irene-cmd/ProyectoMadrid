import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EventosComponent } from './eventos/eventos.component';
import { FormularioLoginComponent } from './formulariologin/formulariologin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlidesComponent } from './slides/slides.component';
import { MatSliderModule } from '@angular/material/slider'
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormularioEventosComponent } from './formulario-eventos/formulario-eventos.component';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');
import { Pipe } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//HttpClientModule para peticiones al servidor con GET,POST, PUT, DELETE
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    EventosComponent,
    FormularioLoginComponent,
    SlidesComponent,
    PerfilUsuarioComponent,
    ListaUsuariosComponent,
    NavBarComponent,
    FormularioEventosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }, Pipe, DatePipe],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
