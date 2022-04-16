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
      const oldItems = [...trainings, training]
      const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
      const sortedItems = oldItems.sort(function(a,b){
        return new Date(b.date.replace(pattern,'$3-$2-$1')) - new Date(a.date.replace(pattern,'$3-$2-$1'));
      });
      setTrainings(sortedItems)
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
