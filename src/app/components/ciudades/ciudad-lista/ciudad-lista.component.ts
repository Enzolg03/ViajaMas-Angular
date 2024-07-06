import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Ciudad } from '../ciudad.model';
import { CiudadService } from '../ciudad.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ciudad-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './ciudad-lista.component.html',
  styleUrl: './ciudad-lista.component.css'
})
export class CiudadListaComponent {
  displayedColumns: string[] = ['idciudad', 'descripcion','jurisdiccion'];
  ciudades: Ciudad[] = [];

  constructor(private ciudadService: CiudadService,
    private route: ActivatedRoute,
    private router: Router
  ){
    
  }
  
  ngOnInit(): void {
    this.ciudadService.getAllCiudades()
    .subscribe((data)=>{
      console.log(data);
      this.ciudades = data;
    })
    
  }

  onNavigateCiudadDetail(ciudadId: string): void {
    this.router.navigate([ciudadId], {relativeTo: this.route});
  }

  onNavigateCreateCiudad(): void {
    this.router.navigate(['nuevo'], {relativeTo: this.route});
  }
}
