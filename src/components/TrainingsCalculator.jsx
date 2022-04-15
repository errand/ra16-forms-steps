import {useState} from "react";
import Form from "./Form";
import TrainingsList from "./TrainingsList";

export default function TrainingsCalculator() {

  const [trainings, setTrainings] = useState([])

  const handleAdd = training => {
    setTrainings(prevTrainings => [...prevTrainings, training])
    console.log(trainings)
  }

  return (
    <div className="wrapper" data-testid="test">
      <div className="wrapper--inner">
        <Form onAdd={handleAdd} />
        <TrainingsList list={trainings} />
      </div>
    </div>
  );
}
