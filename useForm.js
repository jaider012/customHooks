import { useState } from "react";

export default function useForm(initialstate = {}) {
  const [values, setvalues] = useState(initialstate);

  const reset = () => {
    setvalues(initialstate)
  };

  const HandleInputChange = ({ target }) => {
    setvalues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, HandleInputChange,reset];
}
