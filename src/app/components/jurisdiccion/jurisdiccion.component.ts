import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Jurisdiccion } from './jurisdicion.model';
import { JurisdiccionService } from './jurisdiccion.service';

@Component({
  selector: 'app-jurisdiccion',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './jurisdiccion.component.html',
  styleUrl: './jurisdiccion.component.css'
})
export class JurisdiccionComponent implements OnInit{
  displayedColumns: string[] = ['idjurisdiccion', 'descripcion','pais'];
  jurisdicciones: Jurisdiccion[] = [];

  constructor(private jurisdiccionService: JurisdiccionService){}
  
  ngOnInit(): void {
    this.jurisdiccionService.getAllJurisdicciones()
    .subscribe((data)=>{
      console.log(data);
      this.jurisdicciones = data;
    })
    
  }
}
