import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  usuario: any;
  listaUsuarios!: Usuario[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.usuario = [

    ]
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(async params => {
      console.log(params.usuarioId)
      this.usuario = await this.usuariosService.getUserById(parseInt(params.usuarioId))
      console.log(this.usuario)
    })

  }

  directTo() {//BOTON  GUSTOS QUE ME LLEVE A LISTA-USUARIOS
    this.router.navigate(['/lista-usuarios', this.usuario.gustos])
  }
}
