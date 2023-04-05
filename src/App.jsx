import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form
        action="https://getform.io/f/4b37901a-90c4-4235-a491-070e12a16afa"
        method="POST"
        encType="multipart/form-data"
      >
        <div></div>
        <input type="text" name="name" placeholder="Coloque seu nome"/>
        <input  accept="image/*" multiple type="file" name="photos" />
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
