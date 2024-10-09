import { Component } from '@angular/core';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { AeropuertoService } from '../aeropuerto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AeropuertoDto } from '../aeropuertoDto.model';

@Component({
  selector: 'app-aeropuerto-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './aeropuerto-lista.component.html',
  styleUrl: './aeropuerto-lista.component.css'
})
export class AeropuertoListaComponent {
  displayedColumns: string[] = ['idaeropuerto', 'nomaeropuerto', 'nomciudad', 'nomjurisdiccion', 'nompais'];
  aeropuertos: AeropuertoDto[] = [];

  constructor(private aeropuertoService: AeropuertoService,
    private route: ActivatedRoute,
    private router: Router
  ){
    
  }
  
  ngOnInit(): void {
    this.aeropuertoService.getAllAeropuertos()
    .subscribe((data)=>{
      this.aeropuertos = data;
    })
    
  }

  onNavigateAeropuertoDetail(aeropuertoId: string): void {
    this.router.navigate([aeropuertoId], {relativeTo: this.route});
  }

  onNavigateCreateAeropuerto(): void {
    this.router.navigate(['nuevo'], {relativeTo: this.route});
  }
}