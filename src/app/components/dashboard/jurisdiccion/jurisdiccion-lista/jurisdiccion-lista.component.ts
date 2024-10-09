import { Component } from '@angular/core';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { Jurisdiccion } from '../jurisdicion.model';
import { JurisdiccionService } from '../jurisdiccion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JurisdiccionDto } from '../jurisdicionDto.model';

@Component({
  selector: 'app-jurisdiccion-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './jurisdiccion-lista.component.html',
  styleUrl: './jurisdiccion-lista.component.css'
})
export class JurisdiccionListaComponent {
  displayedColumns: string[] = ['idjurisdiccion', 'nomjurisdiccion','nompais'];
  jurisdicciones: JurisdiccionDto[] = [];

  constructor(private jurisdiccionService: JurisdiccionService,
    private route: ActivatedRoute,
    private router: Router
  ){
    
  }
  
  ngOnInit(): void {
    this.jurisdiccionService.getAllJurisdicciones()
    .subscribe((data)=>{
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
