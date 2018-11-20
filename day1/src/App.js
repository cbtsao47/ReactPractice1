import React from "react";
import "./App.css";

const App = () => {
  const MeComponent = props => {
    return (
      <div>
        <h1>{props.me.name}</h1>
        <p>{props.me.age}</p>
        <p>{props.me.location}</p>
      </div>
    );
  };
  const myObj = {
    name: "Ben",
    age: 31,
    location: "dallas"
  };
  return (
    <div>
      <MeComponent me={myObj} />
    </div>
  );
};

export default App;
