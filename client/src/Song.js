import React from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react';
import SongForm from './SongForm';

class Song extends React.Component {
  state = { editing: false };

  toggleEdit = () => this.setState({ editing: !this.state.editing });

  render() {
    const { editing } = this.state;
    const { song: { title, artist, genre, rank, id }, deleteSong, updateSong } = this.props;
    
    if(!editing) {
      return (
        <Grid.Column mobile={16} computer={4}>
          <Card fluid>
            <Card.Content>
              <Card.Header>
                {artist} - {title}
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Genre: {genre}
                </span>
              </Card.Meta>
              <Card.Description>
                Rank: {rank}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a style={{ padding: '3px' }} onClick={ () => deleteSong(id) }>
                <Icon name='trash' />
                Delete Song
              </a>
              <a style={{ padding: '3px' }} onClick={this.toggleEdit}>
                <Icon name='edit' />
                Edit Song
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    } else {
      return(
        <Grid.Column mobile={16} computer={4}>
          <SongForm song={this.props.song} toggleEdit={this.toggleEdit} updateSong={updateSong} />
        </Grid.Column>
      )
    }
  }
}

export default Song;