import React, { Component } from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="navbar-fixed">
        <nav>
          <div className="nav-wrapper cyan">
            <a href="" className="brand-logo center">Markdown Previewer</a>
          </div>
        </nav>
      </header>
    );
  }
}
