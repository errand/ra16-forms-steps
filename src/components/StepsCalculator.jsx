import {useState} from "react";
import Form from "./Form";

export default function StepsCalculator() {

  const [steps, setSteps] = useState('')

  const handleSubmit = evt => {
    console.log(evt)
  }

  return (
    <div className="wrapper" data-testid="test">
      <div className="wrapper--inner">
        <Form onAdd={handleSubmit} />
      </div>
    </div>
  );
}
