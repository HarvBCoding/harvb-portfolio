import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { validateEmail } from "../../utils/helpers";
import EmailJS from '@emailjs/browser';
import "./css/Contact.css";

const ContactForm = styled(TextField)({
  "& label.Mui-focused": {
    color: "#a0852c",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#2F61E1",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#a0852c",
    },
    "&:hover fieldset": {
      borderColor: "#FFDF77",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#a0852c",
    },
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: "var(--dark-grey)",
    backgroundColor: "#D4AF3775",
    '&:hover': {
        backgroundColor: "#FFDF7750",
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

    EmailJS.send(process.env.USER_ID, process.env.TEMPLATE_ID, formState, process.env.PUBLIC_KEY)
      .then((result) => {
        alert("Message sent! We'll get back to you shortly!", result.text);
      })
      .catch((err) => {
        alert("An error occured! Please try again!", err.text);
      });
    console.log( typeof formState);
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
        sx={{ pt: 20, pb: 1.5 }}
      >
        Get in Touch
      </Typography>
      <Typography
        className="content"
        variant="subtitle1"
        align="center"
        sx={{ mx: 10, pb: 2 }}
        gutterBottom
      >
        Thanks again for taking the time to view my portfolio and get to know me
        a little better. If you'd like to get in touch with me for an
        opportunity or to collaborate, please enter your information below to
        send me a message.
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
          <Typography variant="subtitle1" align="center" sx={{ p: 4 }}>
            {errorMessage}
          </Typography>
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
