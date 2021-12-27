import React, { useState } from "react";
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);

        if (!isValid) {
        setErrorMessage("Your email is invalid.");
        } else {
        setErrorMessage("");
        }
    } else {
        if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
        } else {
        setErrorMessage("");
        }
    }

    if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
  }

  return (
    <Container
      component="form"
      sx={{'& .MuiTextField-root': { m: 3, width: '35ch' }, pb: 50}}
      align="center"
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off">
      <Typography
        variant="h2"
        align="center"
        sx={{p: 5}}
        gutterBottom>
            Get in Touch
        </Typography>
        <div>
          <TextField
            id="name"
            label="Name"
            multiline
            onBlur={handleChange}
            name="name"
          ></TextField>
        </div>
        <div>
          <TextField
            id="email"
            label="Email"
            multiline
            onBlur={handleChange}
            name="email"
          ></TextField>
        </div>
        <div>
          <TextField
            id="message"
            label="Message"
            multiline
            minRows={5}
            maxRows={6}
            onBlur={handleChange}
            name="message"
          ></TextField>
        </div>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}
        <Button color="secondary" size="large" variant="outlined" type="submit" endIcon={<SendIcon fontSize="large" />}>Submit </Button>
    </Container>
  );
}

export default Contact;
