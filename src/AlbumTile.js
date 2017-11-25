import React, { Component } from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from 'react-router-dom';

class AlbumTile extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Link to={`/album/${this.props.albumId}`}>
                <GridTile
                    key={this.props.key}
                    title={this.props.name}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                    <img src={this.props.image} style={{ height: 150, width: 'auto' }} />
                </GridTile>
            </Link>
        );
    }
}

export default AlbumTile;