import React, { Component } from 'react';
import './App.css';
import { Card, CardGrid } from './components/Card.style';
import Header from './components/Header.styles';
import moment from 'moment';

class App extends Component{
  state = {
    jobs: []
  };

  componentDidMount() {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ jobs: data });
      });
  }

  render() {
    const cards = this.state.jobs;
    return (
      <div>
        <Header>
          <div className="container">
            <div className="brand">devjobs</div>
            <div>switcher</div>
          </div>
        </Header>
        <div className="container">
          <CardGrid>
            {cards.map((item) => {
              return (
                <Card key={item.id}>
                  <div className="company-logo">
                    <img src={item.company_logo} alt="logo" />
                  </div>
                  <p>
                    {moment(new Date(item.created_at)).fromNow()} . {item.type}
                  </p>
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                  <h5>{item.location}</h5>
                </Card>
              );
            })}
          </CardGrid>
        </div>
      </div>
    );
  }
}

export default App;
