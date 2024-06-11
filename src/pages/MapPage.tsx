import { useEffect, useState } from "react";
import { Drawer, Button, FormControl, TextField, Box, Typography, Container, Card, CardHeader, CardContent, CardActions } from "@mui/material";
import { TypographyEnum } from "../Enums/Typography.enum";
import { GetMap } from "../Service/GetMap.service";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import "./css/map.css";

export default function Map() {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const mapService = new GetMap();

    useEffect(() => {
        console.log(mapService.getMap());
    }, []);

    return (
        <>
            <Box
                component="div"
                className="mapBox"
                ref={mapService.mapRef}
            >
            </Box>

            <Box component="section" sx={{ flexGrow: 1 }}>
                <Box className="fixedContainer">
                    <Container component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant={TypographyEnum.h3} color="primary">Denuncie agora</Typography>
                        <Button variant="contained" onClick={() => setOpenDrawer(true)} style={{ marginTop: '1rem' }}>
                            Abra o formulário
                        </Button>
                    </Container>
                </Box>

                <Container>
                    <Drawer
                        open={openDrawer}
                        onClose={() => setOpenDrawer(false)}
                        anchor="bottom"
                        classes={{ paper: 'drawerPaper' }}
                    >
                        <Card className="card">
                            <CardHeader title={<Typography variant="h5">Abaixo digíte as informações da sua localização</Typography>} />
                            <CardContent
                                component="form"
                                className="cardContent"
                            >
                                <FormControl className="formControl">
                                    <TextField label="Estado, cidade, rua" fullWidth />
                                    <TextField label="CEP (opcional)" fullWidth />
                                </FormControl>
                            </CardContent>
                            <CardActions className="cardActions">
                                <Button variant="contained">Pesquisar</Button>
                            </CardActions>
                        </Card>
                    </Drawer>
                </Container>
            </Box>
        </>
    );
}
