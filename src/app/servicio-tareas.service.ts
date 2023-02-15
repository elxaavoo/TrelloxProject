import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { TareaSchema } from './exporter';

@Injectable({
  providedIn: 'root'
})
export class ServicioTareasService {
  CLAVE = "tareas"
  constructor() { }

  tareas:TareaSchema[] = [];

  getTareas(): TareaSchema[] {
    return JSON.parse(localStorage.getItem(this.CLAVE) || "[]")
  }

  guardarTarea(tareas: TareaSchema[]){
    localStorage.setItem(this.CLAVE,JSON.stringify(tareas))
  }
}




