import React from "react";
import {Button,TextField} from "@mui/material";
import "./Form.css";
import { BsFillPersonFill } from "react-icons/bs";

function Form() {
  return (
    <div className="App1">
      <div className="centralUser">CENTRAL DE COMUNICAÇÃO DE MANUTENÇÃO</div>
      <form
        action="https://api.sheetmonkey.io/form/nBPykDXr18szstmBe7mRdf"
        method="post"
        className="all"
      >
        <div className="lineForm">
            <div className="icons">
            <BsFillPersonFill size="3.5rem" />
            </div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" type="user" name="user"/>
        </div>
        
      </form>
    </div>
  );
}
export default Form;
