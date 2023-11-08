import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopesBulk, faGlobe, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ContactContent.css'

function ContactContent() {
  return (
    <>
        <div className="contact-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-3">
                        <div className="left-box">
                        <input type="text" name="" id="" placeholder='Your Name' />
                        <input type="email" name="" id="" placeholder='Email' />
                        <input type="number" name="" id="" placeholder='Phone Numbers' />
                        <div className="select-group one-select">
                                <select name="" id="">
                                    <option value="">Select Department</option>
                                    <option value="InternalMedicine">Internal Medicine</option>
                                    <option value="Pediatrics">Pediatrics</option>
                                    <option value="Surgery">Surgery</option>
                                    <option value="ObstetricsGynecology">Obstetrics and Gynecology</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Dermatology">Dermatology</option>
                                    <option value="Ophthalmology">Ophthalmology</option>
                                    <option value="Otolaryngology">Otolaryngology</option>
                                    <option value="Psychiatry">Psychiatry</option>
                                    <option value="Radiology">Radiology</option>
                                    <option value="Anesthesiology">Anesthesiology</option>
                                    <option value="EmergencyMedicine">Emergency Medicine</option>
                                    <option value="Pulmonology">Pulmonology</option>                                   



                                </select>
                        </div>
                        <textarea name="" id="" cols="1" rows="6" placeholder='Type Message'></textarea>
                        <button>Sumbit</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mb-3">
                        <div className="right-box">
                        <h2>Contact Us For Any Informations</h2>
                        <p><FontAwesomeIcon icon={faMapLocationDot} />Location</p>
                        <span>Apeksh</span>
                        <p><FontAwesomeIcon icon={faEnvelopesBulk} />Email & Phone</p>
                        <div className="email-phone">
                            Apeksh@gmail.com<br/>
                            (+20) 1060088542
                        </div>
                        <p><FontAwesomeIcon icon={faGlobe} />Follow Us</p>
                        <ul>
                            <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#!"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a href="#!"><FontAwesomeIcon icon={faGithub} /></a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactContent