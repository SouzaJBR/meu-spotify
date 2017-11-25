import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Spotify from 'spotify-web-api-js';
import AlbumTile from './AlbumTile';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Album from './Album'
import Home from './Home';

class App extends Component {

  static token = 'BQAPmjYrKA_K8-pyaGRLLrxJvqu4PSi7FBQnsuN8_3GXFYRtfBI9ljS9HaytveawREZfD0WpNDX-Si_R_lATAeWcp3WY6AQOhk0ZNCK_HfQZCF_xfUwr0SpwEfen0BNJILPqjUh7MmSX';
  static spotifyApi = null;

  constructor() {
    super();
    App.spotifyApi = new Spotify();
    App.spotifyApi.setAccessToken(App.token);
    this.state = {
      albums: []
    }

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: '75%',
        overflowY: 'auto',
      },
    };

    this.styles = styles;
  }



  render() {

    /*this.spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
      if (err) console.error(err);
      else console.log('Artist albums', data);
    });*/

    return (
      <Router>
        <MuiThemeProvider>

          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Meu Spotify</h1>
            </header>

            <Route path="/" exact={true} component={Home} />

            <Route path="/album/:albumId" render={({match})=>{
              return (<Album albumId={match.params.albumId} />);
            }}/>

          </div>

        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;