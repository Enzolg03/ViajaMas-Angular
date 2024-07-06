import { Component } from '@angular/core';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { Vuelo } from '../vuelo.model';
import { VueloService } from '../vuelo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vuelo-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './vuelo-lista.component.html',
  styleUrl: './vuelo-lista.component.css'
})
export class VueloListaComponent {
  displayedColumns: string[] = ['idvuelo', 'numerovuelo', 'aerolinea', 'avion', 'aeropuerto_origen', 'aeropuerto_destino', 'fechasalida', 'fechallegada', 'duracion'];
  vuelos: Vuelo[] = [];

  constructor(private vueloService: VueloService,
    private route: ActivatedRoute,
    private router: Router
  ){
    
  }
  
  ngOnInit(): void {
    this.vueloService.getAllVuelos()
    .subscribe((data)=>{
      this.vuelos = data;
    })
    
  }

  onNavigateVueloDetail(vueloId: string): void {
    this.router.navigate([vueloId], {relativeTo: this.route});
  }

  onNavigateCreateVuelo(): void {
    this.router.navigate(['nuevo'], {relativeTo: this.route});
  }
}