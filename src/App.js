import './Styles/mainStyle.css';
import Button from '@mui/material/Button';
import ResturantsList from './Components/ResturantsList.js';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchResturants = this.fetchResturants.bind(this)

    this.state = {
      payload: null,

    };
  }
  fetchResturants() {
 // fetchs resturant list
    if (navigator.geolocation) {
      let self = this
      let url = ''
      navigator.geolocation.getCurrentPosition(async function (position) {
        url = 'https://discover.search.hereapi.com/v1/discover?at=' + position.coords.latitude + ',' + position.coords.longitude + '&limit=10&q=restaurant&apiKey=' + process.env.REACT_APP_HERE_API_KEY
        await fetch(url)
        .then((response) => response.json())
        .then(response => {
          self.setState({ payload: response });
        }).catch(error => {
          console.log(error);
        })
      });


    }

  }


  render() {
    let resturantsList;
    const payload = this.state.payload
    if (payload !== null) {
      resturantsList = <ResturantsList payload={payload}></ResturantsList>
    }
    return (
      <div className='main'>
        <h3 className='title'>Hungry? </h3>
        <Button onClick={this.fetchResturants} variant="contained"> Click Me </Button>
        {
          resturantsList
        }
      </div>
    );
  }


}


export default App;