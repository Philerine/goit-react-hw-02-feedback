import React, { Component } from "react";
import Section from './Section/Section';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import Container from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  badIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  goodIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  neutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  render() {
    return (
      <Container>
        <Section title={'Please live feedback'}>
          <FeedbackOptions
            badIncrement={this.badIncrement}
            goodIncrement={this.goodIncrement}
            NeutralIncrement={this.neutralIncrement}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.state.good > 0 ||
          this.state.bad > 0 ||
          this.state.neutral > 0 ? (
            <Statistics
              bad={this.state.bad}
              good={this.state.good}
              neutral={this.state.neutral}
              total={this.state.total}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
export default App;