import React, { Component } from 'react';
import { Player } from 'video-react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export default class PlayerExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      playerSource: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      inputVideoUrl: 'http://www.w3schools.com/html/mov_bbb.mp4'
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.updatePlayerInfo = this.updatePlayerInfo.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playerSource != prevState.playerSource) {
      this.refs.player.load();
    }
  }

  handleValueChange(e) {
    var value = e.target.value;
    this.setState({
      [e.target.id]: value
    });
  }

  updatePlayerInfo() {
    this.setState({
      playerSource: this.state.inputVideoUrl
    });
  }

  render() {
    return (
      <div>
        <Player ref="player" videoId="video-1">
          <source src={this.state.playerSource} />
        </Player>
        <div className="docs-example">
          <Form>
            <FormGroup>
              <Label for="inputVideoUrl">Video Url</Label>
              <Input
                ref="inputVideoUrl"
                name="inputVideoUrl"
                id="inputVideoUrl"
                value={this.state.inputVideoUrl}
                onChange={this.handleValueChange}
              />
            </FormGroup>
            <FormGroup>
              <Button type="button" onClick={this.updatePlayerInfo}>
                Update
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
