/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import tt from "@tomtom-international/web-sdk-maps";

/**
 *
 * @atribute center => deve ser um parâmetro ou talvez algo que venha do componente principal
 *
 *
 *
 *
 *
 *
 * **/

export class GetMap {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private map: any = tt;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public mapRef = useRef<any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getMap(_longitude?: any, _latitude?: any) {
    const mapReturn = this.map = tt.map({
      key: import.meta.env.VITE_APIKEY,
      center: [_longitude, _latitude],
      container: this.mapRef.current,
      zoom: 12,
    });

    console.log(mapReturn);
    return mapReturn;
  }
}
