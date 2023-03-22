import './Styles/mainStyle.css';
import Button from '@mui/material/Button';
import ResturantsList from './Components/ResturantsList.js';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchResturants = this.fetchResturants.bind(this)
    this.showPosition = this.showPosition.bind(this)

    this.state = {
      payload: null
    };
  }
  showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

  }
  fetchResturants() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()).then((response) => {
          let resturants = [];
          for (var i in response)
            resturants.push([i, response[i]]);
          this.setState({ payload: resturants });
        }).catch(error => {
          throw (error);
        })
    }
  }


    render(){
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