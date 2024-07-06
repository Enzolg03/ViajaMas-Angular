import { Component } from '@angular/core';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { Avion } from '../avion.model';
import { AvionService } from '../avion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-avion-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './avion-lista.component.html',
  styleUrl: './avion-lista.component.css'
})
export class AvionListaComponent {
  displayedColumns: string[] = ['idavion', 'modelo', 'capacidadpasajeros'];
  aviones: Avion[] = [];

  constructor(private avionService: AvionService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.avionService.getAllAviones()
    .subscribe((data)=>{
      this.aviones = data;
    })
  }
  onNavigateAvionDetail(avionId: string): void{
    this.router.navigate([avionId],{relativeTo: this.route});
   }
   onNavigateCreateAvion() {
    this.router.navigate(['nuevo'],{relativeTo: this.route});
    }
}


