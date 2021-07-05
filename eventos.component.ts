import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';
import { Evento } from '../interfaces/evento';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-eventos',
  template: `<mat-table [source]="data"></mat-table>`,
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  displayDate: string;
  eventos: Evento[]

  constructor(
    private eventosService: EventosService,
    private router: Router,
    private httpClient: HttpClient) {
    this.eventos = [

    ]

    this.displayDate = formatDate(new Date(), 'EEEE d MMMM yyyy HH:mm', 'es');
  }

  async ngOnInit() {
    this.eventos = await this.eventosService.getAll()
    console.log(this.eventos)
  }
  async delete(pEventoId: number | any) {
    await this.eventosService.delete(pEventoId)
    this.eventos = await this.eventosService.getAll()
  }

  directTo() {//BOTON FORMULARIO EVENTOS QUE ME LLEVE A FORMULARIOEVENTOS
    (<any>this.router).navigate(['/formulario-eventos'])
  }

}
