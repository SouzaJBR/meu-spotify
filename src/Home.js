import React, { Component } from 'react';
import App from './App';
import AlbumTile from './AlbumTile';
import { GridList } from 'material-ui/GridList';
class Home extends Component {

    constructor() {
        super();

        this.state = {
            albums: []
        }
    }

    loadArtistAlbums(artistId) {
        let currentState = this.state;
        var context = this;
        App.spotifyApi.getArtistAlbums(artistId)
            .then((data) => {
                console.log(data);

                currentState.albums = data.items;
                context.setState(currentState);
                //}
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.loadArtistAlbums('3dRfiJ2650SZu6GbydcHNb'); //load albuns
    }

    render() {
        return (<div>
            <GridList style={{ backgroundColor: "#191414" }}>
                {this.state.albums.map(function (album, index) {
                    return <AlbumTile name={album.name} image={album.images[1].url} key={index} albumId={album.id} />
                })}
            </GridList>
        </div>);
    }
}

export default Home;