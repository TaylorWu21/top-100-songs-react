import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';
import SongForm from './SongForm';
import SongList from './SongList';

class App extends Component {
  state = { songs: [] };

  componentWillMount() {
    axios.get('/api/songs')
      .then(res => this.setState({ songs: res.data }));
  }

  addSong = (song) => {
    axios.post('/api/songs', { song })
      .then(res => this.setState({ songs: [...this.state.songs, res.data] }));
  }

  deleteSong = (id) => {
    axios.delete(`/api/songs/${id}`)
      .then( () => {
        const songs = this.state.songs.filter( song => song.id !== id);
        this.setState({ songs });
      });
  }

  updateSong = (song) => {
    axios.put(`/api/songs/${song.id}`, { song })
      .then(res => {
        const songs = this.state.songs.map( s => {
          if(s.id === res.data.id) {
            return res.data;
          }
          return s;
        });
        this.setState({ songs });
      });
  }

  render() {
    const { songs } = this.state;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <SongForm addSong={this.addSong} updateSong={this.updateSong} />
          </Grid.Column>
          <Grid.Column width={12}>
            <SongList songs={songs} deleteSong={this.deleteSong} updateSong={this.updateSong} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
