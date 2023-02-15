import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TableroComponent } from './tablero/tablero.component';
import { routing } from './app.routing';
import { ListaComponent } from './lista/lista.component';
import { TareaComponent } from './tarea/tarea.component';
import { HttpClientModule} from '@angular/common/http'
import { ServicioTareasService } from './servicio-tareas.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule} from '@angular/material/icon'
import { MatToolbarModule} from '@angular/material/toolbar'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TableroComponent,
    ListaComponent,
    TareaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, routing, HttpClientModule, DragDropModule,
  ],
  providers: [ServicioTareasService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

