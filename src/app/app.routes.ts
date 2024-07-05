import { Routes } from '@angular/router';
import { JurisdiccionComponent } from './components/jurisdiccion/jurisdiccion.component';
import { CiudadListaComponent } from './components/ciudades/ciudad-lista/ciudad-lista.component';
import { PaisListaComponent } from './components/pais/pais-lista/pais-lista.component';
import { PaisDetalleComponent } from './components/pais/pais-detalle/pais-detalle.component';

export const routes: Routes = [
    { path: "paises", component: PaisListaComponent},
    { path: "paises/:idpais", component: PaisDetalleComponent },
    { path: "jurisdicciones", component: JurisdiccionComponent},
    { path: "ciudades", component: CiudadListaComponent}
];
