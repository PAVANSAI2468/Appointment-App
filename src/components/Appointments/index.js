import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {AppointmentsList: [], title: '', date: ''}

  getTitle = e => {
    this.setState({title: e.target.value})
  }

  getDate = e => {
    this.setState({date: e.target.value})
  }

  onAddAppointment = e => {
    e.preventDefault()
    const {title, date} = this.state

    const appointmentCard = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }

    this.setState(prev => ({
      AppointmentsList: [...prev.AppointmentsList, appointmentCard],
    }))
  }

  toggleStar = id => {
    this.setState(prev => ({
      AppointmentsList: prev.AppointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  filterStarredAppointments = () => {
    this.setState(prev => ({
      AppointmentsList: prev.AppointmentsList.filter(eachAppointment => {
        if (eachAppointment.isStarred === true) {
          return eachAppointment
        }
        return ''
      }),
    }))
  }

  render() {
    const {AppointmentsList} = this.state
    return (
      <div className="bg">
        <div className="main-container">
          <div className="form-container">
            <div>
              <h1 className="page-title">Add Appointment</h1>
              <form onSubmit={this.onAddAppointment}>
                <label htmlFor="title">Title</label>
                <br />
                <input
                  type="text"
                  id="title"
                  placeholder="title"
                  onChange={this.getTitle}
                />
                <br />
                <label htmlFor="date">Date</label>
                <br />
                <input
                  type="date"
                  id="date"
                  placeholder="date"
                  onChange={this.getDate}
                />
                <br />
                <button type="submit" className="submit">
                  Add
                </button>
              </form>
            </div>
            <img
              className="appointment-img"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="starred-container">
            <h1 className="page-title">Appointments</h1>
            <button
              type="button"
              className="starred-btn"
              onClick={this.filterStarredAppointments}
            >
              Starred
            </button>
          </div>
          <ul>
            {AppointmentsList.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
                toggleStar={this.toggleStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
