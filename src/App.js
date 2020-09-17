import React from 'react';
import { render } from 'react-dom';
// import Pet from './Pet';
import SearchParams from './SearchParams'

// code goes here. for now
// created a "rubber stamp" called App - allows you to "stamp" as many times as you want
// components - return a markup
const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Arya" animal="Dog" breed="Golden Pyrenese" />
      <Pet name="Jasper" animal="Dog" breed="Corgi" />
      <Pet name="Neo" animal="Dog" breed="Border Collie" /> */}
    </div>
  )
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Arya",
  //     animal: "Doggo",
  //     breed: "Golden Pyrenese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Jasper",
  //     animal: "Doggo",
  //     breed: "Corgi",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Kiyoshi",
  //     animal: "Cat",
  //     breed: "Tabby",
  //   }),
  // ]);
};

render(React.createElement(App), document.getElementById("root"));
