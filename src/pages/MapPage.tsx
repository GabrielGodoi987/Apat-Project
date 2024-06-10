import { useEffect, useState } from "react";
import { Drawer, Button, Box, Typography, Container } from "@mui/material";
import { TypographyEnum } from "../Enums/Typography.enum";
import { GetMap } from "../Service/GetMap.service";
import { Form } from '../components/form/form.component';


export default function Map() {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const map = new GetMap();

    const launchMap = () => {
        return map.getMap(-121.91599, 37.36765);
    }

    useEffect(() => {
        launchMap();
        console.log(launchMap());
    }, []);
    return (
        <Box component="section" sx={{ flexGrow: 1 }}>

            <Box component="div" className="mapBox" ref={map.mapRef} sx={{ flexGrow: 1, position: 'relative', height: '100vh', width: '100vw' }}>
                {/* Map element with absolute positioning to cover the entire container */}
            </Box>

            <div style={{ width: '40%' }}>
                <Container component="div" sx={{ position: 'fixed', float: "rigth" }}>
                    <Typography variant={TypographyEnum.h3} color="primary">Denuncie agora</Typography>
                    <Button variant="contained" onClick={() => setOpenDrawer(true)}>Abra o formulário</Button>
                </Container>
            </div>

            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                anchor="bottom"
                sx={{
                    "& .MuiDrawer-paper": {
                        width: "60%",
                        margin: "auto",
                    }
                }}
            >
                <Form></Form>

            </Drawer>
        </Box>
    );
}
