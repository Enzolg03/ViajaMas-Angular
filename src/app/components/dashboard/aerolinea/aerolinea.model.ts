import { Pais } from "../pais/pais.model";

export interface Aerolinea{
    idaerolinea : number;
    nomaerolinea : string;
    pais : Pais;
}