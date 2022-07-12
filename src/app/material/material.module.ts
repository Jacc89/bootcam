import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modulos de angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginatorIntlEs } from '../usuarios/MatPaginatorIntlEs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule

  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers:[
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlEs }
  ]
})
export class MaterialModule { }
