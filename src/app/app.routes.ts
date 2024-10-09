import { Routes } from '@angular/router';

import { authGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { PaisListaComponent } from './components/dashboard/pais/pais-lista/pais-lista.component';
import { PaisDetalleComponent } from './components/dashboard/pais/pais-detalle/pais-detalle.component';
import { LoginComponent } from './components/auth/login/login.component';
import { JurisdiccionListaComponent } from './components/dashboard/jurisdiccion/jurisdiccion-lista/jurisdiccion-lista.component';
import { CiudadListaComponent } from './components/dashboard/ciudades/ciudad-lista/ciudad-lista.component';
import { CiudadDetalleComponent } from './components/dashboard/ciudades/ciudad-detalle/ciudad-detalle.component';
import { JurisdiccionDetalleComponent } from './components/dashboard/jurisdiccion/jurisdiccion-detalle/jurisdiccion-detalle.component';
import { AvionListaComponent } from './components/dashboard/avion/avion-lista/avion-lista.component';
import { AvionDetalleComponent } from './components/dashboard/avion/avion-detalle/avion-detalle.component';
import { AerolineaListaComponent } from './components/dashboard/aerolinea/aerolinea-lista/aerolinea-lista.component';
import { AerolineaDetalleComponent } from './components/dashboard/aerolinea/aerolinea-detalle/aerolinea-detalle.component';
import { AeropuertoListaComponent } from './components/dashboard/aeropuerto/aeropuerto-lista/aeropuerto-lista.component';
import { AeropuertoDetalleComponent } from './components/dashboard/aeropuerto/aeropuerto-detalle/aeropuerto-detalle.component';
import { VueloListaComponent } from './components/dashboard/vuelo/vuelo-lista/vuelo-lista.component';
import { VueloDetalleComponent } from './components/dashboard/vuelo/vuelo-detalle/vuelo-detalle.component';
import { UsuarioListaComponent } from './components/dashboard/usuarios/usuario-lista/usuario-lista.component';
import { UsuarioDetalleComponent } from './components/dashboard/usuarios/usuario-detalle/usuario-detalle.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent ,canActivate: [authGuard],
        children: [
            { path: "paises", component: PaisListaComponent},
            { path: "paises/:idpais", component: PaisDetalleComponent },
            { path: "jurisdicciones", component: JurisdiccionListaComponent},
            { path: "jurisdicciones/:id", component: JurisdiccionDetalleComponent},
            { path: "ciudades", component: CiudadListaComponent},
            { path: "ciudades/:id", component: CiudadDetalleComponent },
            { path: "aviones", component: AvionListaComponent},
            { path: "aviones/:idavion", component: AvionDetalleComponent},
            { path: "aerolineas", component: AerolineaListaComponent},
            { path: "aerolineas/:id", component: AerolineaDetalleComponent},
            { path: "aeropuertos", component: AeropuertoListaComponent},
            { path: "aeropuertos/:id", component: AeropuertoDetalleComponent},
            { path: "vuelos", component: VueloListaComponent},
            { path: "vuelos/:id", component: VueloDetalleComponent},
            { path: "usuarios", component: UsuarioListaComponent},
            { path: "usuarios/:idusuario", component: UsuarioDetalleComponent},
        ]
    },
    { path: "", redirectTo: "login", pathMatch: "full"}
];
