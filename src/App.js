/* Right now, the application is written using class components. 
Refactor the app to use functional components with hooks.*/

//AFTER
import React from "react";
import JokeList from "./JokeList";

function App() {
  return (
    <div className="App">
      <JokeList />
    </div>
  );
}
export default App;


//BEFORE
// import React, { Component } from "react";
// import JokeList from "./JokeList";

// /** App component. Renders list of jokes. */

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <JokeList />
//       </div>
//     );
//   }
// }

//export default App;
