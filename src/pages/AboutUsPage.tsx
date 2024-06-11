import { Box, Typography } from "@mui/material";
import { TypographyEnum } from "../Enums/Typography.enum";

export default function AboutUs(){
  return(
   <Box component="main">
      <Typography sx={{textAlign: 'center', marginTop: '2rem'}} variant={TypographyEnum.h1}>
        Pàgina do blog
      </Typography>
   </Box>
  );
}