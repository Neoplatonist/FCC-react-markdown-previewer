import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Header from './components/header';
import Footer from './components/footer';

var markdown = require( 'markdown' ).markdown;

export default class App extends Component {
  constructor(props) {
    super(props);

    // All context binding goes here
    this.userInput = this.userInput.bind(this);

    // Defines all states used
    this.state = {
      rendered: '### Uses Github syntax',
    }
  }

  userInput(event) {
    this.setState({ rendered: event.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <Helmet title='Go + React + Redux = rocks!' />
          <div className="row">
            <div className="s12 m6 col">
              <textarea name="userInput" id="userInput" onChange={this.userInput} defaultValue={this.state.rendered}></textarea>
            </div>
            <div className="s12 m6 col">
              <div className="card white">
                <div className="card-content" dangerouslySetInnerHTML={{__html: markdown.toHTML(this.state.rendered)}}>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
