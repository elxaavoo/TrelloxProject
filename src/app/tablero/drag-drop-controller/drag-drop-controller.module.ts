import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule} from '@angular/material/icon'
import { MatToolbarModule} from '@angular/material/toolbar'

const componentes = [DragDropModule, MatIconModule, MatToolbarModule]


@NgModule({
  declarations: [],
  imports: [CommonModule, componentes],
  exports: componentes,
})
export class DragDropControllerModule { }
