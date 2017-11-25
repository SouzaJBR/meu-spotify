import React, { Component } from 'react';
import App from './App';

class Album extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        App.spotifyApi.getAlbum(this.props.albumId)
            .then((data) => {
                console.log(data);
                let currentState = this.state;
                currentState.album = data;
                this.setState(currentState);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        if (this.state.album) {
            return (
                <div>
                    <h1>{this.state.album.name}</h1>
                    <p>{this.state.album.id}</p>
                    <img src={this.state.album.images[0].url} />
                    
                    <div style={{paddingTop: '20px'}}>
                        <h3>Músicas</h3>
                        <div>
                            {this.state.album.tracks.items.map((track, index) => {
                                return (<p key={index} >{track.track_number + ' - ' + track.name} </p>)
                            })}
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.error) return (
            <div>
                <h1>Ocorreu um problema!</h1>
                <h2>{this.state.error}</h2>
            </div>);
        else return (<h1>Carregando</h1>);
    }
}

export default Album;