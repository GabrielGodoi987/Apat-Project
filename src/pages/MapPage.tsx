import { useEffect, useState } from "react";
import { Drawer, Button, FormControl, TextField, Box, Typography, Container, Card, CardHeader, CardContent, CardActions } from "@mui/material";
import { TypographyEnum } from "../Enums/Typography.enum";
import { GetMap } from "../utils/GetMap.util";

export default function Map() {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const map = new GetMap();

    const launchMap = () => {
        return map.getMap();
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

            <div style={{width: '40%'}}>
                <Container component="div" sx={{position: 'fixed', float: "rigth"}}>
                    <Typography variant={TypographyEnum.h3} color="primary">Denuncie agora</Typography>
                    <Button variant="contained" onClick={() => setOpenDrawer(true)}>Abra o formulário</Button>
                </Container>
            </div>

            <Container>
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
            <Card sx={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
                <CardHeader title={<Typography variant="h5">Abaixo digíte as informações da sua localização</Typography>} />
               <CardContent component="form" sx={{ mt: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '80%' }}>
                        <TextField
                         label="Estado, cidade, rua"
                         fullWidth
                        />
                    <TextField
                     label="CEP (opcional)"
                     fullWidth
                    />
                </FormControl>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', width: '100%' }}>
                   <Button variant="contained">Pesquisar</Button>
                </CardActions>
            </Card>

                </Drawer>
            </Container>
    </Box>
    );
}
