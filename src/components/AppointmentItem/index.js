import {format, parseISO} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStar} = props
  const {title, date, isStarred, id} = appointmentDetails

  const formattedDate = format(parseISO(date), 'dd MMMM yyyy,EEEE')
  const onclickStar = () => {
    toggleStar(id)
  }

  const starDisplay = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li>
      <div>
        <p className="card-title">{title}</p>
        <p className="date">{formattedDate}</p>
      </div>
      <img
        src={starDisplay}
        alt="star"
        className="star"
        onClick={onclickStar}
      />
    </li>
  )
}
export default AppointmentItem
