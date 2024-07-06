import { Pais } from "../pais/pais.model";

export interface Jurisdiccion{
    idjurisdiccion : number;
    descripcion : string;
    pais : Pais;
}