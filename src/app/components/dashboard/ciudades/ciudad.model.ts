import { Jurisdiccion } from "../jurisdiccion/jurisdicion.model";

export interface Ciudad{
    idciudad : number;
    nomciudad: string;
    jurisdiccion: Jurisdiccion;
}