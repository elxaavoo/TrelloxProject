import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { TableroComponent } from './tablero/tablero.component';

const appRoutes:Routes=[
    {path:'', component: HomeComponent},
    {path:'tablero', component: TableroComponent}
  ];


export const routing = RouterModule.forRoot(appRoutes);  