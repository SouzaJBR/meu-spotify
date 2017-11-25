import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Spotify from 'spotify-web-api-js';
import AlbumTile from './AlbumTile';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

class App extends Component {

  static token = 'BQBEP4aNNbhQ1rOsFY6ugl8i3SqXuXU-F2qpAR5Rcwitg2FOWjQblRn4pNm2OHBYovNQnI3euXx0FJptbcsU2J_ouGbzpQjVcBs6qnFSAqoAS3DsGSWftc72KJFy8tu3PR7ff7USH2s_';
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
            <p className="App-intro">
            </p>

            <Route path="/" exact={true} component={Home}/>

            <Route path="/album/:albumId" render={({match}) => {
              const targetAlbum = this.state.albums.find((album) => album.id === match.params.albumId);

              if(targetAlbum)
              {
                return (
                  <div>
                  <p>{targetAlbum.name}</p>
                  <p>{targetAlbum.id}</p>              
                  </div>
                );
              }

              else
                return(<h1>{match.params.albumId} not found</h1>)
            }} />

          </div>

        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
