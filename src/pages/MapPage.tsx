import { useEffect, useState } from "react";
import { Drawer, Button, FormControl, TextField, Box, Typography, Container, Card, CardHeader, CardContent, CardActions } from "@mui/material";
import { TypographyEnum } from "../Enums/Typography.enum";
import { GetMap } from "../utils/GetMap.util";
import "./css/map.css";

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
            <Box
                component="div"
                className="mapBox"
                ref={map.mapRef}
            >
                {/* Map element with absolute positioning to cover the entire container */}
            </Box>

            <Box className="fixedContainer">
                <Container component="div">
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
    );
}