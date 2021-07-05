import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-formulario-eventos',
  templateUrl: './formulario-eventos.component.html',
  styleUrls: ['./formulario-eventos.component.css']
})
export class FormularioEventosComponent implements OnInit {
  formularioeventos: FormGroup;
  constructor(private eventosService: EventosService) {
    this.formularioeventos = new FormGroup({
      nombre: new FormControl(),
      lugar: new FormControl(),
      fecha: new FormControl(),
      descripcion: new FormControl(),
    })
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    console.log(this.formularioeventos.value)
    const response = await this.eventosService.create(this.formularioeventos.value)
  }
}
