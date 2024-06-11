/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from 'react';
import tt from '@tomtom-international/web-sdk-maps'

/**
 * 
 * @atribute center => deve ser um parâmetro ou talvez algo que venha do componente principal
 * 
 * 
 * @method getMap => essa função bs=
 * 
 * 
 * 
 * **/


export class GetMap{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public mapRef = useRef<any>();

    getMap(_longitude?:number, _latitude?: number){
        return tt.map({
            key: import.meta.env.VITE_APIKEY,
            center: [-46.707605, -23.459459],
            container: this.mapRef.current,
            zoom: 12
           }) 
    }
}