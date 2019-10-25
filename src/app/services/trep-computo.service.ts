import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrepComputoService {

  constructor( public http: HttpClient ) { }

  getDataTableTrep( code: number ) {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://trep.oep.org.bo/resul/resulActa/' + code + '/1', {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
          'X-Random-Shit': '123123123'
      }
    });
  }

  getDataTableComp( code: number ) {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://computo.oep.org.bo/resul/resulActa/' + code + '/1', {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
          'X-Random-Shit': '123123123'
      }
    });
  }

  getMesaElector( CI: number ) {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://trep.oep.org.bo/resul/mesaElector/' + CI , {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
          'X-Random-Shit': '123123123'
      }
    }).pipe(
      map( (data: any) => {
        console.log( data );
        return data.listaMesa[0] ? data.listaMesa[0].mesa.numMesa : 0;
      } )
    );
  }
}
