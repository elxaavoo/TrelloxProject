import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

const componentes = [DragDropModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, componentes
  ],
  exports: componentes
})
export class DragModule { }
