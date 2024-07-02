import { Routes } from '@angular/router';
import { PaisComponent } from './components/pais/pais.component';
import { JurisdiccionComponent } from './components/jurisdiccion/jurisdiccion.component';
import { CiudadListaComponent } from './components/ciudades/ciudad-lista/ciudad-lista.component';

export const routes: Routes = [
    { path: "paises", component: PaisComponent},
    { path: "jurisdicciones", component: JurisdiccionComponent},
    { path: "ciudades", component: CiudadListaComponent}
];
