import React from 'react';
import openSocket from 'socket.io-client';
// This needs to match the server and port from server.js
const socket = openSocket('http://localhost:8080');

export default class Base extends React.Component {
  state = {}

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('ComponentMount');
  }

  componentDidUpdate() {
    console.log('ComponentUpdate');
  }

  render() {
    return (
      <div>Base</div>
    );
  }
}