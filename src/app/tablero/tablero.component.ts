import { Component, Input, OnInit } from '@angular/core';
import { SchemaLista, TareaSchema } from '../exporter';
import { ListaComponent } from '../lista/lista.component';
import { ServicioTareasService } from '../servicio-tareas.service';
import { TareaComponent } from '../tarea/tarea.component';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
    
    listas:SchemaLista[] = [];
    todasTareas:TareaSchema[] = [];
    tareasPorHacer:TareaSchema[] = [];
    tareasEnProceso:TareaSchema[] = [];
    tareasHechas:TareaSchema[] = [];

    addPrioridad:String="";
    addFecha:String="";
    addDescripcion:String="";
    index:number;

    updatePrioridad:String="";
    updateFecha:String="";
    updateDescripcion:String="";
    updateId:Number=0;
    updateIdLista:Number=0;

    constructor(private servicoTareas: ServicioTareasService){
      this.todasTareas = this.servicoTareas.getTareas();
      if (this.todasTareas.length > 0){
        this.index = this.todasTareas.length
      }else{
        this.index = 0;
      }
      this.getTareasEnProceso();
      this.getTareasHechas();
      this.getTareasPorHacer();
      this.listas = [
        {id:0,name:'¡Por hacer!',tareas: this.tareasPorHacer},
        {id:1,name:'¡En Proceso!',tareas: this.tareasEnProceso},
        {id:2,name:'¡Hecho!',tareas: this.tareasHechas}
      ]
    }

    getTareasPorHacer(): void{
      for (var tarea of this.todasTareas){
        if (tarea.idLista == 0)
            this.tareasPorHacer.push(tarea)
      }
    }

    getTareasEnProceso(): void{
      for (var tarea of this.todasTareas){
        if (tarea.idLista == 1)
            this.tareasEnProceso.push(tarea)
      }
    }

    getTareasHechas(): void{
      for (var tarea of this.todasTareas){
        if (tarea.idLista == 2)
            this.tareasHechas.push(tarea)
      }
    }

  ngOnInit(): void {
    this.todasTareas = this.servicoTareas.getTareas();
  }

  addTarea(){
    let tarea = {id: this.index,prioridad: this.addPrioridad, fecha: this.addFecha, descripcion: this.addDescripcion, idLista: 0}
    this.todasTareas.push(tarea);
    this.servicoTareas.guardarTarea(this.todasTareas);
    window.location.reload();
  }

  removeTarea(tarea:TareaSchema){
    for (var task of this.todasTareas){
      if (tarea.id == task.id){
        let indice = this.todasTareas.indexOf(task);
        console.log(indice);
        this.todasTareas.splice(indice,1)
      }
    }
    var num = 0;
    for (var task of this.todasTareas){
      task.id = num;
      num++;
    }
    this.servicoTareas.guardarTarea(this.todasTareas);

    //console.log(tarea)
    //console.log(this.todasTareas)
    
    window.location.reload();
  }

  modTarea(){
    for (var task of this.todasTareas){
      if(task.id == this.updateId){
        task.descripcion = this.updateDescripcion;
        task.fecha = this.updateFecha;
        task.prioridad = this.updatePrioridad;
      }
    }
    this.servicoTareas.guardarTarea(this.todasTareas);
    window.location.reload();
  }

  updatearTarea(tarea:TareaSchema){
    this.updateId = tarea.id;
    this.updateIdLista = tarea.idLista;
    this.updateDescripcion = tarea.descripcion;
    this.updateFecha = tarea.fecha;
    this.updatePrioridad = tarea.prioridad
  }

  listarUno(tarea:TareaSchema){
      for (var task of this.todasTareas){
        if (task.id == tarea.id){
          task.idLista = 0
        }
      }
      this.servicoTareas.guardarTarea(this.todasTareas);
      window.location.reload();
  }

  listarDos(tarea:TareaSchema){
    for (var task of this.todasTareas){
      if (task.id == tarea.id){
        task.idLista = 1
      }
    }
    this.servicoTareas.guardarTarea(this.todasTareas);
    window.location.reload();
  }

  listarTres(tarea:TareaSchema){
    for (var task of this.todasTareas){
      if (task.id == tarea.id){
        task.idLista = 2
      }
    }
    this.servicoTareas.guardarTarea(this.todasTareas);
    window.location.reload();
  }


  
}
