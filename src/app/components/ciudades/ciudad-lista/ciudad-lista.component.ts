import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Ciudad } from '../ciudad.model';
import { CiudadService } from '../ciudad.service';

@Component({
  selector: 'app-ciudad-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './ciudad-lista.component.html',
  styleUrl: './ciudad-lista.component.css'
})
export class CiudadListaComponent {
  displayedColumns: string[] = ['idciudad', 'descripcion','jurisddicion'];
  ciudades: Ciudad[] = [];

  constructor(private ciudadService: CiudadService){}
  
  ngOnInit(): void {
    this.ciudadService.getAllCiudades()
    .subscribe((data)=>{
      console.log(data);
      this.ciudades = data;
    })
  }
}
