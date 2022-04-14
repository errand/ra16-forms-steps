import {useState} from "react";
import Form from "./Form";

export default function StepsCalculator() {

  const [steps, setSteps] = useState('')

  return (
    <div className="wrapper" data-testid="test">
      <div className="wrapper--inner">
        <Form />
      </div>
    </div>
  );
}
