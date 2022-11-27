import {
  Button,
  Input,
  FormLabel,
  FormControl,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  async function enviaEmail() {
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      subject: subject,
    };

    //Deveria ficar na variaveis de ambiente, mas essa API n tem importancia.
    emailjs
      .send(
        "service_q70izx3",
        "template_alpijcs",
        templateParams,
        "N06sC6XTzNpQsYMKB"
      )
      .then(
        (reponse) => {
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
          window.alert("Email Enviado!")
        },
        (err) => {
          window.alert("Ocorreu algum erro.");
        }
      );
  }

  return (
    <FormControl mt="4">
      <FormLabel>Your Full Name</FormLabel>
      <Input
        border="none"
        bgColor="#F0F0F6"
        h="50px"
        borderRadius="none"
        mb="4"
        fontWeight="500"
        fontSize="18px"
        lineHeight="123%"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <FormLabel>Your Email </FormLabel>
      <Input
        border="none"
        bgColor="#F0F0F6"
        h="50px"
        borderRadius="none"
        mb="4"
        fontWeight="500"
        fontSize="18px"
        lineHeight="123%"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormLabel>Subject</FormLabel>
      <Input
        border="none"
        bgColor="#F0F0F6"
        h="50px"
        borderRadius="none"
        mb="4"
        fontWeight="500"
        fontSize="18px"
        lineHeight="123%"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <FormLabel>Your Message</FormLabel>

      <Textarea
        border="none"
        bgColor="#F0F0F6"
        h="210px"
        borderRadius="none"
        size="lg"
        fontWeight="500"
        fontSize="18px"
        lineHeight="123%"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        w="159px"
        h="35px"
        mt="4"
        fontWeight={600}
        fontSize="14px"
        lineHeight="17px"
        bgColor="#FFB400"
        color="#2B2B2B"
        borderRadius={0}
        onClick={() => enviaEmail()}
      >
        SEND MESSAGE
      </Button>
    </FormControl>
  );
}
