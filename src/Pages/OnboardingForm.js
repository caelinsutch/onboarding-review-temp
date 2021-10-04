import {
  Heading,
  FormLabel,
  FormControl,
  Input,
  Button,
  Switch,
  Select,
  Container,
  ButtonGroup,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import "./OnboardingForm.css";
import React, { useState } from "react";
import useForm from "../utils/useForm";
import { useDisclosure } from "@chakra-ui/react";

function OnboardingForm() {
  const register = () => {
    console.log(values);
  };
  const [values, handleChange, handleSubmit] = useForm(register);
  const [textInputs, setTextInputs] = useState([]);
  const [textInputName, setTextInputName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  function addTextInput() {
    console.log("hi");
    setTextInputs((oldArray) => [...oldArray, textInputName]);
    onClose();
  }

  return (
    <Container mt="20vh">
      <Heading>Custom Form</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mt={25}>
          <InputGroup colorScheme="cyan">
            <InputLeftAddon>Name</InputLeftAddon>
            <Input
              colorScheme="cyan"
              id="name"
              placeholder="Chad Chaddington"
              borderColor="deepskyblue"
              isRequired
              value={values.name}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>

        <FormControl mt={4} className="inputs">
          <FormLabel htmlFor="frontend">I want to learn frontend</FormLabel>
          <Switch
            colorScheme="cyan"
            id="frontend"
            mt={1}
            spacing="1 em"
            value={values.frontend === "false"}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4} className="inputs">
          <FormLabel htmlFor="backend">I want to learn backend</FormLabel>
          <Switch
            colorScheme="cyan"
            id="backend"
            mt={1}
            spacing="1 em"
            value={values.backend === "false"}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mt={4}>
          <Select
            placeholder="I am a ..."
            isRequired
            borderColor="deepskyblue"
            id="grade"
            onChange={handleChange}
            value={values.grade}
          >
            <option>Freshman</option>
            <option>Sophomore</option>
            <option>Junior</option>
            <option>Senior</option>
          </Select>
        </FormControl>
        {textInputs.map((textInput) => (
          <InputGroup colorScheme="cyan" mt={4}>
            <InputLeftAddon>{textInput}</InputLeftAddon>
            <Input
              colorScheme="cyan"
              id={textInput}
              borderColor="deepskyblue"
              isRequired
              value={values.textInput}
              onChange={handleChange}
            />
          </InputGroup>
        ))}
        <ButtonGroup direction="row">
          <Button mt={4} colorScheme="cyan" type="submit">
            Submit
          </Button>
          <Button mt={4} colorScheme="cyan" variant="outline" onClick={onOpen}>
            Add a text Input
          </Button>
        </ButtonGroup>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>New Text Input ... </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <InputGroup colorScheme="cyan">
                <InputLeftAddon>Name</InputLeftAddon>
                <Input
                  colorScheme="cyan"
                  id="new-name"
                  placeholder="textInputOne"
                  borderColor="deepskyblue"
                  isRequired
                  onChange={(e) => setTextInputName(e.target.value)}
                />
              </InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="cyan" type="submit" onClick={addTextInput}>
                Add Input
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </Container>
  );
}

export default OnboardingForm;
