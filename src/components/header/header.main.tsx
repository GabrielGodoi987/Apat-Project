import AppRoutes from '../../app.routes';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import { RotasModel } from '../../models/routes.model';
import { PathEnum } from '../../Enums/PahtName.enum';

export default function Header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const CreatedRoutes: RotasModel[] = [
     {
      name: "Página inicial",
      path: PathEnum.HomePath
     },
     {
      name: "Buscar localização",
      path: PathEnum.MapPath
     }
  ]

  const goTo = (route: string) => {
      navigate(route);
  }

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='primary'>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* Adicione um ícone aqui se necessário */}
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              A.P.A.T
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {CreatedRoutes.map((item) => (
              <Button onClick={() => goTo(item.path)} key={item.name} sx={{ color: '#fff' }}>
                {item.name}
              </Button>
            ))}
          </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <AppRoutes />
    </div>
  );
}