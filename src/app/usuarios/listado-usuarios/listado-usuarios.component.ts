import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {


  displayedColumns: string[] = ['id', 'avatar','first_name','last_name','email'];

  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listUser();
  }

  get resultados(){
    // console.log(this.userService.result);
    return this.userService.result;
    
  }

  get totalRegis(){
    return this.userService.totalRegis;
  }

  get registPag(){
    return this.userService.regisPag;
  }

  onPaginadoChange(event: PageEvent){
    let pagina = event.pageIndex;
    let size = event.pageSize;
    pagina++;
    this.userService.listUser(pagina, size);

  }

}
