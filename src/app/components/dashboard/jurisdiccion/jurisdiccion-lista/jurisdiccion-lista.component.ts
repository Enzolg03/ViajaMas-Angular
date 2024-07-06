import { Component } from '@angular/core';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { Jurisdiccion } from '../jurisdicion.model';
import { JurisdiccionService } from '../jurisdiccion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jurisdiccion-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './jurisdiccion-lista.component.html',
  styleUrl: './jurisdiccion-lista.component.css'
})
export class JurisdiccionListaComponent {
  displayedColumns: string[] = ['idjurisdiccion', 'descripcion','pais'];
  jurisdicciones: Jurisdiccion[] = [];

  constructor(private jurisdiccionService: JurisdiccionService,
    private route: ActivatedRoute,
    private router: Router
  ){
    
  }
  
  ngOnInit(): void {
    this.jurisdiccionService.getAllJurisdicciones()
    .subscribe((data)=>{
      console.log(data);
      this.jurisdicciones = data;
    })
    
  }

  onNavigateJurisdiccionDetail(jurisdiccionId: string): void {
    this.router.navigate([jurisdiccionId], {relativeTo: this.route});
  }

  onNavigateCreateJurisdiccion(): void {
    this.router.navigate(['nuevo'], {relativeTo: this.route});
  }
}
