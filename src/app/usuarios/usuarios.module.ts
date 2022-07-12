import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { UserService } from './services/user.service';
import { MaterialModule } from '../material/material.module';
import { CompartidoModule } from '../compartido/compartido.module';



@NgModule({
  declarations: [
    ListadoUsuariosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CompartidoModule
  ],
  exports: [
    ListadoUsuariosComponent
  ],
  providers:
  [
    UserService
  ]
})
export class UsuariosModule { }
