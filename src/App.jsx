import { useState } from "react";
import Form from "./Form/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>formik form</h1>
      <Form />
    </div>
  );
}

export default App;
