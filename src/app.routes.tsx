import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import { Container } from "@mui/material";
import { RotasModel } from "./models/routes.model";
import Modelo from "./pages/AboutUsPage";
import { PathEnum } from "./Enums/PahtName.enum";

export default function AppRoutes() {
  const allRoutes: RotasModel[] = [
    {
      name: 'Home',
      path: PathEnum.HomePath,
      component: Home,
    },
    {
      name: 'MapPage',
      path: PathEnum.MapPath,
      component: MapPage,
    },
    {
      name: "página modelo",
      path: PathEnum.ModelPath,
      component: Modelo
    }
  ];

  return (
    <Container component="main">
      <Routes>
        {allRoutes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Container>
  );
}
