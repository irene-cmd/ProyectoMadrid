import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

//HttpClientModule usará la pestaña API XMLHttpRequest para ejecutar la petición HTTP. Para ejecutarla se usan los métodos: get(consultar 1 recurso), post(consultar otro recurso, crear 1 nuevo, cambiar), put, delete(eliminar), patch, head, jsonp;
@Injectable({
    providedIn: 'root'
})
export class EventosService {
    //servicio y componente solo se unen mediante el metodo
    eventos: Evento[]

    private baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = 'http://localhost:3000/eventos'
        this.eventos = [
            {
                id: 1,
                nombre: 'Ocho apellidos vascos',
                lugar: 'Cines Callao. Plaza del Callao, 3, 28013',
                fecha: new Date('2021-07-12 12:00'),
                descripcion: 'cine V.O.(español)'
            },
            {
                id: 2,
                nombre: 'Retiro´s Park History',
                lugar: 'Estanque Grande Retiro. Paseo de Colombia, 2, 28016',
                fecha: new Date('2021-07-13 13:00'),
                descripcion: 'historia parque Retiro inglés'
            },
            {
                id: 3,
                nombre: 'Tapas in Madrid',
                lugar: 'Cervecería Restaurante Plaza Mayor. Plaza Mayor, 2, 28012',
                fecha: new Date('2021-07-14 15:00'),
                descripcion: 'Tapas en Madrid inglés'
            },
        ]
    }
    getAll() {
        return this.httpClient.get<Evento[]>(this.baseUrl).toPromise()

    }
    create(pEvento: Evento) {
        return this.httpClient.post(this.baseUrl, pEvento).toPromise()
    }
    delete(pEventoId: number) {
        return this.httpClient.delete(this.baseUrl + '/' + pEventoId).toPromise()
    }
    //getEvento() {
    //  this.httpClient.get<EventosResponse>('http://localhost:4200/api/eventos/1').subscribe(evento => {
    //     console.log("Id" + evento.id)
    //     console.log("Nombre" + evento.nombre)
    //     console.log("lugar" + evento.lugar)
    //     console.log("fecha" + evento.fecha)
    //     console.log("descripcion" + evento.descripcion)
    // },
    //     (err: HttpErrorResponse) => {
    //         if (err.error instanceof Error) {
    //             console.log("error")
    //         } else {
    //             console.log("error")
    //         }
    //     }
    // }

}

