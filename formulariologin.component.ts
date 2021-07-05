import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from '../interfaces/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-formulariologin',
  templateUrl: './formulariologin.component.html',
  styleUrls: ['./formulariologin.component.css']
})
export class FormularioLoginComponent implements OnInit {
  arrUsuarios!: Usuario[];
  formulariologin: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    this.formulariologin = new FormGroup({
      email: new FormControl
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.formulariologin.value)
  }
}
