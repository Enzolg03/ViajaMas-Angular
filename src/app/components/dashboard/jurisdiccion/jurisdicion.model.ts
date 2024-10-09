import { Pais } from "../pais/pais.model";

export interface Jurisdiccion{
    idjurisdiccion : number;
    nomjurisdiccion : string;
    pais : Pais;
}