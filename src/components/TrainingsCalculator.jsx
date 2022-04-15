import {useState} from "react";
import Form from "./Form";
import TrainingsList from "./TrainingsList";

export default function TrainingsCalculator() {

  const [trainings, setTrainings] = useState([])

  const handleAdd = training => {
    const index = trainings.findIndex(value => value.date === training.date)
    if(index > -1) {
      const items = [...trainings]
      const item = {...items[index]}
      item.distance += training.distance
      items[index] = item
      setTrainings(items)
    } else {
      setTrainings(prevTrainings => [...prevTrainings, training])
    }
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
