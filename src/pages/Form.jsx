import React from "react";
import { Button, TextField, Box } from "@mui/material";
import "./Form.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { AiFillCamera } from "react-icons/ai";
import { IoMdOptions } from "react-icons/io";
import { FiAlertTriangle } from "react-icons/fi";
import { BsFillSendCheckFill } from "react-icons/bs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Form() {
  const [tipo, setTipo] = React.useState("");

  const handleChangeTipo = (event) => {
    setTipo(event.target.value);
  };
  const [status, setStatus] = React.useState("");

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  return (
    <div className="App1">
      <div className="centralUser">CENTRAL DE COMUNICAÇÃO DE MANUTENÇÃO</div>

      <form
        action="https://getform.io/f/4b37901a-90c4-4235-a491-070e12a16afa"
        method="POST"
        encType="multipart/form-data"
        className="forms"
      >
        <div className="lineForm">
          <div className="icons">
            <BsFillPersonFill size="3.5rem" />
          </div>
          <div className="category">
            <TextField
              id="outlined-basic"
              label="User"
              variant="outlined"
              type="text"
              name="user"
              multiline
              sx={{ width: "100%", m: 0, backgroundColor: "#a1a2a6" }}
            />
          </div>
        </div>
        <div className="lineForm">
          <div className="icons">
            <BsFillHouseFill size="3.5rem" />
          </div>
          <div className="category">
            <TextField
              id="outlined-basic"
              label="Local"
              variant="outlined"
              type="text"
              name="Local"
              multiline
              sx={{ width: "100%", m: 0, backgroundColor: "#a1a2a6" }}
            />
          </div>
        </div>
        <div className="description">
          <div className="icons">
            <HiChatBubbleLeftRight size="3.5rem" />
          </div>
          <div className="category">
            <TextField
              id="outlined-basic"
              label="Descrever um serviço"
              variant="outlined"
              type="text"
              name="descrição do serviço"
              sx={{ width: "100%", height: "100%", backgroundColor: "#a1a2a6" }}
              multiline
              rows={3}
            />
          </div>
        </div>
        <div className="lineForm">
          <div className="icons">
            <AiFillCamera size="3.5rem" />
          </div>
          <Button
            variant="contained"
            component="label"
            className="category"
            sx={{
              textTransform: "none",
              background: "#4C4D54",
              justifyContent: "flex-start",
              border: "none",
              boxShadow: "none",
              fontSize: "15px",
            }}
          >
            Registro Fotográfico
            <Box sx={{ width: "25%" }} />
            <input
              hidden
              accept="image/*"
              multiple
              name="foto-do-serviço"
              type="file"
            />
          </Button>
        </div>
        <div className="lineForm">
          <div className="icons">
            <IoMdOptions size="3.5rem" />
          </div>
          <Box className="category">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">TIPO</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tipo}
                label="TIPO"
                onChange={handleChangeTipo}
                name="tipo"                
              >
                <MenuItem  value={"Manutenção"}>Manutenção</MenuItem>
                <MenuItem  value={"Melhoria"}>Melhoria</MenuItem>
                <MenuItem  value={"Investimento"}>Investimento</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="lineForm">
          <div className="icons">
            <FiAlertTriangle size="3.5rem" />
          </div>
          <Box className="category">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">AREA ATIVA?</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="AREA ATIVA?"
                onChange={handleChangeStatus}
                name="STATUS"                
              >
                <MenuItem  value={"AREA ATIVA"}>AREA ATIVA</MenuItem>
                <MenuItem  value={"AREA PARALISADA"}>AREA PARALISADA</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="lineForm">
          <div className="icons">
            <BsFillSendCheckFill size="3.5rem" />
          </div>
          <Button
            variant="contained"
            component="label"
            className="category"
            sx={{
              textTransform: "none",
              background: "#4C4D54",
              justifyContent: "flex-start",
              border: "none",
              boxShadow: "none",
              fontSize: "15px",
            }}
            type="submit"
          >
            ENVIAR
            <Box sx={{ width: "25%" }} />
            <button type="submit">send</button>
          </Button>
        </div>
      </form>
    </div>
  );
}
export default Form;
