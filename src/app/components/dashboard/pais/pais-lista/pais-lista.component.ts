import { Component } from '@angular/core';
import { Pais } from '../pais.model';
import { PaisService } from '../pais.service';
import { MaterialModule } from '../../../../angular-material/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pais-lista',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pais-lista.component.html',
  styleUrl: './pais-lista.component.css'
})
export class PaisListaComponent {
  displayedColumns: string[] = ['idpais', 'nompais'];
  paises: Pais[] = [];

  constructor(private paisService: PaisService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.paisService.getAllPaises()
    .subscribe((data)=>{
      this.paises = data;
    })
  }
  onNavigatePaisDetail(paisId: string): void{
    this.router.navigate([paisId],{relativeTo: this.route});
   }
   onNavigateCreatePais() {
    this.router.navigate(['nuevo'],{relativeTo: this.route});
    }
}
