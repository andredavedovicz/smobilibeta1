import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form
        action="https://getform.io/f/02d1c6e4-aec1-4972-b0c5-cb5ce0471c73"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="radio" name="radio" value="1" />
        <input type="radio" name="radio" value="2" />
        <input type="text" name="name" placeholder="Coloque seu nome"/>
        <input  accept="image/*" multiple type="file" name="photos" />
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
