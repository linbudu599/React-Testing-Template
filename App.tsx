import React, { Component } from "react";

class App extends Component<{}, { error: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidMount() {
    throw new Error("Oops!");
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    return this.state.error ? (
      <p className="app">App!</p>
    ) : (
      <p className="error">Error</p>
    );
  }
}

export default App;
