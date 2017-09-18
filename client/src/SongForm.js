import React, { Component } from 'react';
import { Form, Header, Container } from 'semantic-ui-react';

class SongForm extends Component {
  defaultState = { title: '', artist: '', genre: '', rank: '' };
  state = this.defaultState;

  componentDidMount() {
    if(this.props.song)
      this.setState(this.props.song)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  submitForm = (e) => {
    e.preventDefault();
    const { props: { addSong, updateSong, toggleEdit }, state, defaultState } = this;
    if(this.props.song) {
      updateSong(state)
      toggleEdit();
    }
    else 
      addSong(state);
    this.setState(defaultState);
  } 

  render() {
    const { title, artist, genre, rank } = this.state;
    return (
      <Container>
        <Header textAlign='center'>Song Form</Header>
        <Form onSubmit={this.submitForm}>
          <Form.Input
            label='title'
            type='text'
            placeholder='title'
            name='title'
            value={title}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            label='artist'
            type='text'
            placeholder='artist'
            name='artist'
            value={artist}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            label='genre'
            type='text'
            placeholder='genre'
            name='genre'
            value={genre}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            label='rank'
            type='text'
            placeholder='rank'
            name='rank'
            value={rank}
            onChange={this.handleChange}
            required
          />
          <Form.Button type='submit'>Submit</Form.Button>
          { this.props.song ? <Form.Button type='button' onClick={this.props.toggleEdit}>Cancel</Form.Button> : null }
        </Form>
      </Container>
    );
  }
}

export default SongForm;