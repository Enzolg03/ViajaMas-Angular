import { Pais } from "../pais/pais.model";

export interface Aerolinea{
    idaerolinea : number;
    nombre : string;
    pais : Pais;
}