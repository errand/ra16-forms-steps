export default function TrainingsList({list, handleRemove}) {

  const listItems = list.map(item =><li key={item.id}>{item.date}{item.distance}</li>)

  return(
    <ul>
      {listItems}
    </ul>
  )
}
