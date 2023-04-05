import { useState } from "react";
import "./App.css";

function App() {

  return (
    <div className="App">
      <form
        action="https://api.sheetmonkey.io/form/8JA5swp8n81XGNZQtcKhYJ"
        method="post"
      >
        <label>
          Your Email: <input type="email" name="Email" required />
        </label>
        <label>
          Your Email: <input type="email" name="Email" required />
        </label>
        <label>
          Describe your problem:{" "}
          <textarea
            name="Problem"
            placeholder="As much detail as possible"
            required
          ></textarea>
        </label>
        <input type="hidden" name="Status" value="new" />
        <input
          type="hidden"
          name="Created"
          value="x-sheetmonkey-current-date-time"
        />
        <input type="submit" value="Submit Ticket" />
      </form>
      <form action="https://api.sheetmonkey.io/form/9h6qiRn5ckwgCXvupbontw" method="post">
  <label>Example Field: <input accept="image/*" multiple type="file" name="Imagens" required /></label>
  <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
  <input type="submit" value="Submit" />
</form>
    </div>
  );
}

export default App;
