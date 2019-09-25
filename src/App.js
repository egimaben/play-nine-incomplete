import React from "react";
import "./App.css";
import Header from "./components/Header";
import Stars from "./components/Stars";
import GameControllers from "./components/GameControllers";
import ChosenNumbers from "./components/ChosenNumbers";
import NumbersDeck from "./components/NumbersDeck";

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   result: "",
    //   chances: 5,
    //   stars: this.getRandomStarsNumber(),
    //   disabled: [],
    //   chosen: []
    // };

    // TODO: Remove testing data
    this.state = {
      result: "SUCCESS",
      chances: 5,
      stars: this.getRandomStarsNumber(),
      disabled: [1, 2],
      chosen: [4, 5]
    };
  }

  getRandomStarsNumber() {
    return Math.round(Math.random() * 8 + 1);
  }

  displayNewStarsSet() {
    const starsNumber = this.getRandomStarsNumber();
    this.setState({
      stars: starsNumber
    });
  }

  render() {
    const { result, chances, stars, disabled, chosen } = this.state;

    return (
      <div className="App">
        <Header result={result} chances={chances} />

        <main>
          <Stars starsNumber={stars} />
          <GameControllers />
          <ChosenNumbers chosenNumbers={chosen} />
        </main>

        <footer>
          <NumbersDeck disabledNumbers={disabled} />
        </footer>
      </div>
    );
  }
}

export default App;
