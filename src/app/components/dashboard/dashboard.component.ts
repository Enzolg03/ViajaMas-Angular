import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService
  ){}

  salir(): void{
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }

  irPais():void{
    this.router.navigate(["paises"], {relativeTo: this.route})
  }
  irJurisdiccion():void{
    this.router.navigate(["jurisdicciones"], {relativeTo: this.route})
  }
  irCiudad():void{
    this.router.navigate(["ciudades"], {relativeTo: this.route})
  }
  irAvion():void{
    this.router.navigate(["aviones"], {relativeTo: this.route})
  }
  irAerolinea():void{
    this.router.navigate(["aerolineas"], {relativeTo: this.route})
  }
  irAeropuerto():void{
    this.router.navigate(["aeropuertos"], {relativeTo: this.route})
  }
  irVuelo():void{
    this.router.navigate(["vuelos"], {relativeTo: this.route})
  }
  irUsuario():void{
    this.router.navigate(["usuarios"], {relativeTo: this.route})
  }
}
