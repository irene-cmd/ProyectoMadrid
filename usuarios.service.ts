import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
//HttpClientModule usará la pestaña API XMLHttpRequest para ejecutar la petición HTTP. Para ejecutarla se usan los métodos: get(consultar 1 recurso), post(consultar otro recurso, crear 1 nuevo, cambiar), put, delete(eliminar), patch, head, jsonp;;
//private httpClient:HttpClient
@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    usuarios: Usuario[];

    private baseUrl: string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = 'http://localhost:3000/usuarios'
        this.usuarios = [
            {
                id: 1,
                nombre: 'Irene',
                apellidos: 'Alarcon',
                direccion: 'Calle Gran Vía, 12',
                email: 'ire@gmail.com',
                edad: 28,
                sexo: 'mujer',
                gustos: 'cine'
            },
            {
                id: 2,
                nombre: 'Juan',
                apellidos: 'Perez',
                direccion: 'Calle Gran Vía, 13',
                email: 'juan@gmail.com',
                edad: 37,
                sexo: 'hombre',
                gustos: 'futbol'
            },
            {
                id: 3,
                nombre: 'Jose',
                apellidos: 'Perez',
                direccion: 'Calle Gran Vía, 14',
                email: 'jose@gmail.com',
                edad: 23,
                sexo: 'hombre',
                gustos: 'cine'
            },
        ]

    } //servicio y componente solo se unen mediante el metodo

    getAll() {
        return this.httpClient.get<Usuario[]>(this.baseUrl).toPromise()
    }
    getUser(pUsuario: string) {//?
        return this.httpClient.get(this.baseUrl + '/' + pUsuario).toPromise();
    }
    getUserById(pUsuarioId: number) {
        return this.httpClient.get(this.baseUrl + '/' + pUsuarioId).toPromise()
    }
    async getUserByGustos(pUsuarioGustos: string) {//?
        //Recuperar todos los usuarios
        //Filtrar los usuario por gustos usando por parametro los gustos(filter)

        const usuarios = await this.httpClient.get<Usuario[]>(this.baseUrl).toPromise()
        return usuarios.filter(usuario => usuario.gustos === pUsuarioGustos)
        // .subscribe(
        //     usuarios =>
        //         usuarios.filter(usuario => usuario.gustos === pUsuarioGustos)
        // )

    }

    create(pUsuario: Usuario) {
        return this.httpClient.post(this.baseUrl, pUsuario).toPromise()
    }
    registro(formValues: any) {
        return this.httpClient.post(`${this.baseUrl}`, formValues).toPromise()
    }
    login(formValues: any) {
        return this.httpClient.post(`${this.baseUrl},/login`, formValues).toPromise()
    }

}