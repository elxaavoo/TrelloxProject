import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServicioTareasService } from '../servicio-tareas.service';
import { TareaSchema } from './TareaSchema';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  @Input() tarea: TareaSchema;
  @Output() eliminar = new EventEmitter<TareaSchema>();
  @Output() updatear = new EventEmitter<TareaSchema>();
  @Output() listarUno = new EventEmitter<TareaSchema>();
  @Output() listarDos = new EventEmitter<TareaSchema>();
  @Output() listarTres = new EventEmitter<TareaSchema>();
 

  todasTareas:TareaSchema[] = [];

  constructor(){}


  removeTarea():void{
    this.eliminar.emit(this.tarea)
  }

  updatearTarea():void{
    this.updatear.emit(this.tarea)
  }

  listarUnoTarea():void{
    this.listarUno.emit(this.tarea)
  }

  listarDosTarea():void{
    this.listarDos.emit(this.tarea)
  }

  listarTresTarea():void{
    this.listarTres.emit(this.tarea)
  }


}
