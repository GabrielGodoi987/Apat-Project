import { Box, Button, ButtonGroup, TextField } from "@mui/material";

export default function Form(label: string){
    return(
       <Box component="form" className="bg-primary" sx={{ display: 'flex', flexDirection: 'column', gap: 5}}>
         <TextField label={label} defaultValue="Pesquise sua localização atual"/>

           <ButtonGroup>
             <Button>Teste</Button>
           </ButtonGroup>
       </Box>
    );
}