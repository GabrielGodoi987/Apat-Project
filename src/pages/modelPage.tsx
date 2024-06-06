import { createRef, useEffect } from "react";
// import { Services } from "@tomtom-international/web-sdk-services";
import tt from '@tomtom-international/web-sdk-maps'
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { Box } from "@mui/material";

// const Api_key = 'RfyNEHQWOwqfUSRE7L9AVtBbWXcKbpOS';

export default function Modelo() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapRef = createRef<any>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars 

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onMounteMapComponent(){
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const map = tt.map({
          key: import.meta.env.VITE_APIKEY,
          center: [-46.707605, -23.459459],
          container: mapRef.current,
          zoom: 12
        })

    }


    useEffect(() => {
      onMounteMapComponent()
      console.log(import.meta.env.VITE_APIKEY);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return(
     <Box component='section' ref={mapRef} className="mapBox"></Box>
  );
}