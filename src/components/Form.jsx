import {useState} from "react";
import PropTypes from "prop-types";

import Training from "../models/Training";

export default function Form({onAdd}) {

  const [form, setForm] = useState({
    date: '',
    distance: '',
  });

  const handleDate = evt => {
    setForm(prevForm => ({...prevForm, date: evt.target.value}))
  }

  const handleDistance = evt => {
    setForm(prevForm => ({...prevForm, distance: evt.target.value}))
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    const training = new Training(form.date, form.distance)
    onAdd(training)
    setForm({
      date: '',
      distance: '',
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <input type="text" id="date" name="date" value={form.date} onChange={handleDate} />
        </div>
        <div className="form-group">
          <label htmlFor="distance">Пройдено км</label>
          <input type="text" id="distance" name="distance" value={form.distance} onChange={handleDistance} />
        </div>
        <div className="form-group">
          <button type="submit">OK</button>
        </div>
      </div>
    </form>
  )
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
