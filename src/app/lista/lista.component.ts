import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TareaComponent } from '../tarea/tarea.component';
import { SchemaLista } from './SchemaLista';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TareaSchema } from '../exporter';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  @Input() list:SchemaLista;
  @Output() eliminar = new EventEmitter<TareaSchema>();
  @Output() updatear = new EventEmitter<TareaSchema>();
  @Output() listarUno = new EventEmitter<TareaSchema>();
  @Output() listarDos = new EventEmitter<TareaSchema>();
  @Output() listarTres = new EventEmitter<TareaSchema>();

  id:Number=0;
  nombre:String="";
  tareas:TareaComponent[] =[];

  constructor(){
    this.list = {id:0,name:'¡Por hacer!',tareas: []};
  }

  drop(event: CdkDragDrop<TareaSchema[]>) {
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  removeTarea(tarea:TareaSchema):void{
    console.log(tarea)
    this.eliminar.emit(tarea);
  }

  updatearTarea(tarea:TareaSchema):void{
    console.log(tarea)
    this.updatear.emit(tarea);
  }

  listarUnoTarea(tarea:TareaSchema):void{
    this.listarUno.emit(tarea);
  }

  listarDosTarea(tarea:TareaSchema):void{
    this.listarDos.emit(tarea);
  }

  listarTresTarea(tarea:TareaSchema):void{
    this.listarTres.emit(tarea);
  }

}
