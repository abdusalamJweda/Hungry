import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ResturantsList(props) {
  let resturants = Object.entries(props.payload);

  return (
    <div>
      <h3>These are the 10 closest resturants to your location... enjoy :)</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"> Resturant Name</TableCell>
              <TableCell align="center">How Far away from you (in meters) </TableCell>
              <TableCell align="center">Address </TableCell>

              <TableCell align="center">  show on map</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            
            resturants[0][1].map((item,i) =>
    <TableRow key={i}>
                <TableCell key={item.title} align="center">{item.title}</TableCell>
                <TableCell key={item.distance} align="center">{item.distance / 1000}</TableCell>
                <TableCell key={item.address} align="center">{item.address.label}</TableCell>

                <TableCell key={item.position.lat} align="center"><a href={'http://maps.google.com/maps?q='+ item.position.lat + ',' + item.position.lng}>show on maps</a></TableCell>
              </TableRow>
  
  )
            }

          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
}


export default ResturantsList