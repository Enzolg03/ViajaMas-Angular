import { Aerolinea } from "../aerolinea/aerolinea.model";
import { Aeropuerto } from "../aeropuerto/aeropuerto.model";
import { Avion } from "../avion/avion.model";

export interface Vuelo{
    idvuelo : number;
    numerovuelo : string;
    aerolinea : Aerolinea;
    avion : Avion;
    aeropuerto_origen : Aeropuerto;
    aeropuerto_destino : Aeropuerto;
    fechasalida : string;
    fechallegada : string;
    duracion : number;
}