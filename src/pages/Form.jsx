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
function Form() {
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
              sx={{ width: "100%", m: 0 }}
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
              sx={{ width: "100%", m: 0 }}
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
              sx={{ width: "100%", m: 0 }}
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
            <input hidden accept="image/*" multiple name="foto-do-serviço" type="file"/>
            
          </Button>
        </div>
        <div className="lineForm">
          <div className="icons">
            <IoMdOptions size="3.5rem" />
          </div>
          <div className="categories">
            <Button
              variant="contained"
              className="whatis"
              sx={{
                textTransform: "none",
                height: "100%",
                background: "#4C4D54",
                justifyContent: "flex-start",
                border: "none",
                boxShadow: "none",
                fontSize: "0.8rem",
                wordBreak: "break-word",
              }}
            >
              Manutenção
              <input
                type="radio"
                name="tipo-de-investimento"
                value="manutenção"
                
                hidden
              />
            </Button>
            <Button
              variant="contained"
              className="whatis"
              sx={{
                textTransform: "none",
                height: "100%",
                background: "#4C4D54",
                justifyContent: "flex-start",
                border: "none",
                boxShadow: "none",
                fontSize: "0.8rem",
                wordBreak: "break-word",
              }}
            >
              Melhoria
              <input
                type="radio"
                name="tipo-de-investimento"
                value="melhoria"
                hidden
              />
            </Button>
            <Button
              variant="contained"
              className="whatis"
              sx={{
                textTransform: "none",
                height: "100%",
                background: "#4C4D54",
                justifyContent: "flex-start",
                border: "none",
                boxShadow: "none",
                fontSize: "0.8rem",
                wordBreak: "break-word",
              }}
            >
              Investimento
              <input
                type="radio"
                name="tipo-de-investimento"
                value="Investimento"
                hidden
              />
            </Button>
          </div>
        </div>
        <div className="lineForm">
          <div className="icons">
            <FiAlertTriangle size="3.5rem" />
          </div>
          <div className="categories">
            <Button
              variant="contained"
              className="whatis2"
              sx={{
                textTransform: "none",
                height: "100%",
                background: "#4C4D54",
                justifyContent: "flex-start",
                border: "none",
                boxShadow: "none",
                fontSize: "0.8rem",
                wordBreak: "break-word",
              }}
            >
              Área
              <br />
              ativa
              <input
                type="radio"
                name="status"
                value="ÁREA ATIVA"
                hidden
                className="inputs"
              />
            </Button>
            <Button
              variant="contained"
              className="whatis2"
              sx={{
                textTransform: "none",
                height: "100%",
                background: "#4C4D54",
                justifyContent: "flex-start",
                border: "none",
                boxShadow: "none",
                fontSize: "0.8rem",
                wordBreak: "break-word",
              }}
            >
              Área
              <br /> Paralisada
              <input
                type="radio"
                name="status"
                value="ÁREA PARALISADA"
                hidden
              />
            </Button>
          </div>
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
