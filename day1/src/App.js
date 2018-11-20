import React from "react";
import "./App.css";

const Bart = props => {
  const { bart } = props;
  return (
    <React.Fragment>
      <h3>{bart.name}</h3>
      <p>Identity:{bart.identiy}</p>
      <p>Age:{bart.age}</p>
      <ul>
        {bart.family.map((member, i) => (
          <li key={i}>{member}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const App = () => {
  const BartProfile = {
    name: "Bartholomew Jo-Jo Simpson",
    identiy: "the troublemaker of the simpson family.",
    age: 10,
    family: ["homer", "marge", "lisa", "maggie", "abe"],
    best_friend: "milhouse van houten",
    catchphrases: ["aye carumba!", "eat my shorts", "i didn't do it"]
  };
  return <Bart bart={BartProfile} />;
};

export default App;
