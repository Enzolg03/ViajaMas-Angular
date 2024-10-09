import { Component } from '@angular/core';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { Aerolinea } from '../aerolinea.model';
import { AerolineaService } from '../aerolinea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AerolineaDto } from '../aerolineaDto.model';

@Component({
  selector: 'app-aerolinea-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './aerolinea-lista.component.html',
  styleUrl: './aerolinea-lista.component.css'
})
export class AerolineaListaComponent {
  displayedColumns: string[] = ['idaerolinea', 'nomaerolinea','nompais'];
  aerolineas: AerolineaDto[] = [];

  constructor(private aerolineaService: AerolineaService,
    private route: ActivatedRoute,
    private router: Router
  ){
    
  }
  
  ngOnInit(): void {
    this.aerolineaService.getAllAerolineas()
    .subscribe((data)=>{
      this.aerolineas = data;
    })
    
  }

  onNavigateAerolineaDetail(aerolineaId: string): void {
    this.router.navigate([aerolineaId], {relativeTo: this.route});
  }

  onNavigateCreateAerolinea(): void {
    this.router.navigate(['nuevo'], {relativeTo: this.route});
  }
}
