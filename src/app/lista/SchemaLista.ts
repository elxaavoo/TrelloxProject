import { TareaSchema } from "../tarea/TareaSchema";

export interface SchemaLista{
    id:Number;
    name:String;
    tareas:TareaSchema[];
}