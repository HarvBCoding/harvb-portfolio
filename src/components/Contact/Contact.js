import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { validateEmail } from "../../utils/helpers";
// import "./css/Contact.css";

const ContactForm = styled(TextField)({
  "& label.Mui-focused": {
    color: "#8A8AFF",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#2F61E1",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#8A8AFF",
    },
    "&:hover fieldset": {
      borderColor: "#CCCCFF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8A8AFF",
    },
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: "var(--dark-grey)",
    backgroundColor: "#92a4f775",
    '&:hover': {
        backgroundColor: "#92a4f725",
        color: "var(--dark-grey)"
    }
}))

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
      sx={{ "& .MuiTextField-root": { m: 3, width: "35ch" }, pb: 50 }}
      align="center"
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Typography
        className="title"
        variant="h2"
        align="center"
        sx={{ p: 5 }}
        gutterBottom
      >
        Get in Touch
      </Typography>
      <div>
        <ContactForm
          className="text-input"
          id="name"
          label="Name"
          multiline
          onBlur={handleChange}
          name="name"
        ></ContactForm>
      </div>
      <div>
        <ContactForm
          className="text-input"
          id="email"
          label="Email"
          multiline
          onBlur={handleChange}
          name="email"
        ></ContactForm>
      </div>
      <div>
        <ContactForm
          className="text-input"
          id="message"
          label="Message"
          multiline
          minRows={5}
          onBlur={handleChange}
          name="message"
        ></ContactForm>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <ColorButton
        className="submit-btn"
        size="large"
        variant="contained"
        type="submit"
        endIcon={<SendIcon fontSize="large" />}
      >
        Submit{" "}
      </ColorButton>
    </Container>
  );
}

export default Contact;
