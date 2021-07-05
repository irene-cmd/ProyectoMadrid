import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      email: new FormControl(),
      telefono: new FormControl(),
      contraseña: new FormControl(),
      gustos: new FormControl()
    })
  }

  ngOnInit(): void {//OnInit.Inicializar/Activar formulario 

  }
  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.usuariosService.create(this.formulario.value)
  }
}
