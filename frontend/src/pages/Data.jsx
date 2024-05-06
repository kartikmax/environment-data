import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme,ht }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  // color: "",
  height: ht,
  alignItems: "center",
  justifyContent:'center'
}));

function Data() {
  return (
    <>
      <Typography variant="h4"> Data </Typography>
      <Box xs={{ flexGrow: 1 }} >
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Item ht={200}> 1 </Item>
          </Grid>
          <Grid  item xs={8}>
            <Item ht={200}> 2 </Item>
            {/* <Item> 2 </Item> */}
          </Grid>
          <Grid item xs={7}>
            <Item ht={400}> 3 </Item>
          </Grid>
          
          <Grid  item xs={5}>
            <Item ht={400}> 4 </Item>
          </Grid>
        
        </Grid>
      </Box>
    </>
  );
}

export default Data;
