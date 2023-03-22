import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
 
function ResturantsList(props){
    const listItems = props.payload.map((item) =>
    <TableRow>
    <TableCell align="center">{item[1].title}</TableCell>
    <TableCell align="center">{item[1].id}</TableCell>
    <TableCell align="center">{item[1].userId}</TableCell>
    <TableCell align="center">{item[1].title}</TableCell>
</TableRow>
);
    return(
        <div>
            <h3>These resturants are within a 10K radius of you location... enjoy :)</h3>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"> Resturant Name</TableCell>
              <TableCell align="center">Rating</TableCell>
              <TableCell align="center">How Far away from you </TableCell>
              <TableCell align="center">  show on map</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {            listItems
}
            
          </TableBody>
        </Table>
      </TableContainer>
        </div>
        
    );
}


function calcDistance(){

}
export default ResturantsList