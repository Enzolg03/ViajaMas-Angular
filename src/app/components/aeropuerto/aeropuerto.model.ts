import { Ciudad } from "../ciudades/ciudad.model";
import { Jurisdiccion } from "../jurisdiccion/jurisdicion.model";
import { Pais } from "../pais/pais.model";

export interface Aeropuerto{
    idaeropuerto : number;
    nombre : string;
    ciudad : Ciudad;
    jurisdiccion : Jurisdiccion;
    pais : Pais;
}