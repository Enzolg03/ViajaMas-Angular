
export interface VueloDto{
    idvuelo : number;
    numerovuelo : string;
    idaerolinea : number;
    nomaerolinea : string;
    idavion : number;
    modelo : string;
    id_nomaeropuerto_origen : number;
    nomaeropuerto_origen : string;
    id_aeropuerto_destino : number;
    nomaeropuerto_destino : string;
    fechasalida : string;
    fechallegada : string;
    duracion : number;
}