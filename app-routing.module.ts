import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { FormularioLoginComponent } from './formulariologin/formulariologin.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { SlidesComponent } from './slides/slides.component';
import { FormularioEventosComponent } from './formulario-eventos/formulario-eventos.component';

const routes: Routes = [
  { path: '', component: FormularioComponent },//Formulario registro. path:''se carga en HOME
  { path: '', component: SlidesComponent },// Imagenes. path:'' se carga en HOME
  { path: 'usuarios/:usuarioId', component: PerfilUsuarioComponent },//NAVBAR
  { path: 'lista-usuarios/:usuarioGustos', component: ListaUsuariosComponent },
  { path: 'eventos', component: EventosComponent },//NAVBAR.
  { path: 'formulario-eventos', component: FormularioEventosComponent },
  { path: 'login', component: FormularioLoginComponent }//NAVBAR. Formulario inicio de sesion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
