// Write your code here

import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegisterEventView = () => (
    <div className="register">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-image"
      />
      <p className="register-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredEventView = () => (
    <div className="registered">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-para">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationClosedEventView = () => (
    <div className="registration-closed">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-image"
      />
      <h1 className="closed-para">Registrations Are Closed Now!</h1>
      <p className="description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderActiveRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterEventView()
      case registrationStatus.registered:
        return renderRegisteredEventView()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosedEventView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="status-container">{renderActiveRegistrationDetails()}</div>
  )
}

export default ActiveEventRegistrationDetails
