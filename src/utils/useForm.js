import { useState } from "react";

const useForm = (submitCallback) => {
  const [values, setValues] = useState({
    name: "",
    frontend: "false",
    backend: "false",
    grade: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCallback();
  };

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({ ...values, [e.target.id]: e.target.value }));
  };

  return [values, handleChange, handleSubmit];
};

export default useForm;
