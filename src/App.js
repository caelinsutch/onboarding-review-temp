import "./App.css";
import OnboardingForm from "./Pages/OnboardingForm.js";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4}>
        <OnboardingForm />
      </Box>
    </ChakraProvider>
  );
}

export default App;
