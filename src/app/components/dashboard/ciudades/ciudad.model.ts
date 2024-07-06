import { Jurisdiccion } from "../jurisdiccion/jurisdicion.model";

export interface Ciudad{
    idciudad : number;
    descripcion: string;
    jurisdiccion: Jurisdiccion;
}