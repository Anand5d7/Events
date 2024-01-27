// Write your code here

import './index.css'

const EventItem = props => {
  const {eventsData, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventsData
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="title">{name}</p>
      <p className="para">{location}</p>
    </li>
  )
}

export default EventItem
