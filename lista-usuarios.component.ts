import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { UsuariosService } from '../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  listaUsuarios: Usuario[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService,
    private router: Router) {
    this.listaUsuarios = []
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      console.log(params.usuarioGustos)
      this.listaUsuarios = await this.usuariosService.getUserByGustos(params.usuarioGustos)
      console.log(this.listaUsuarios)
    })
  }
}
