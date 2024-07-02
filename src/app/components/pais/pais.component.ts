import { Component } from '@angular/core';
import { Pais } from './pais.model';
import { PaisService } from './pais.service';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-pais',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pais.component.html',
  styleUrl: './pais.component.css'
})
export class PaisComponent {
  displayedColumns: string[] = ['idpais', 'descripcion'];
  paises: Pais[] = [];

  constructor(private paisService: PaisService){}
  
  ngOnInit(): void {
    this.paisService.getAllPaises()
    .subscribe((data)=>{
      console.log(data);
      this.paises = data;
    })
  }
}
