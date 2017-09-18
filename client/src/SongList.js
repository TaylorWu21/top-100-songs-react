import React from 'react';
import Song from './Song';
import { Grid } from 'semantic-ui-react';

const SongList = ({ songs, deleteSong, updateSong }) => {
  const songsList = songs.map( song => (
    <Song key={song.id} song={song} deleteSong={deleteSong} updateSong={updateSong} />
  ))
  return(
    <Grid>
      <Grid.Row>
        {songsList}
      </Grid.Row>
    </Grid>
  )
}

export default SongList;