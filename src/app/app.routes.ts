import { Routes } from '@angular/router';
import { CiudadListaComponent } from './components/ciudades/ciudad-lista/ciudad-lista.component';
import { PaisListaComponent } from './components/pais/pais-lista/pais-lista.component';
import { PaisDetalleComponent } from './components/pais/pais-detalle/pais-detalle.component';
import { JurisdiccionDetalleComponent } from './components/jurisdiccion/jurisdiccion-detalle/jurisdiccion-detalle.component';
import { JurisdiccionListaComponent } from './components/jurisdiccion/jurisdiccion-lista/jurisdiccion-lista.component';
import { AvionListaComponent } from './components/avion/avion-lista/avion-lista.component';
import { AvionDetalleComponent } from './components/avion/avion-detalle/avion-detalle.component';
import { AerolineaListaComponent } from './components/aerolinea/aerolinea-lista/aerolinea-lista.component';
import { AerolineaDetalleComponent } from './components/aerolinea/aerolinea-detalle/aerolinea-detalle.component';

export const routes: Routes = [
    { path: "paises", component: PaisListaComponent},
    { path: "paises/:idpais", component: PaisDetalleComponent },
    { path: "jurisdicciones", component: JurisdiccionListaComponent},
    { path: "ciudades", component: CiudadListaComponent},
    { path: "jurisdicciones/:id", component: JurisdiccionDetalleComponent},
    { path: "aviones", component: AvionListaComponent},
    { path: "aviones/:idavion", component: AvionDetalleComponent},
    { path: "aerolineas", component: AerolineaListaComponent},
    { path: "aerolineas/:id", component: AerolineaDetalleComponent}
];
