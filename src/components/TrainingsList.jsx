import PropTypes from "prop-types";

export default function TrainingsList({list, onDelete: handleDelete}) {

  const listItems = list.map(item =>
    <div className="training--item" key={item.id}>
      <div>{item.date}</div>
      <div>{item.distance}</div>
      <div className="pointer" onClick={() => handleDelete(item.id)}>✘</div>
    </div>)

  return(
    <div className="training">
      <div className="training--item"><div>Дата</div><div>Дистанция</div><div>Управление</div></div>
      {listItems}
    </div>
  )
}
TrainingsList.propTypes = {
  list: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
