import './Services.css'
import Slider from './Slider'
import img1 from '../../images/download (12).png'
import img2 from '../../images/download (13).png'
import img3 from '../../images/download (7).png'
import img4 from '../../images/download (10).png'

function Services() {
  return (
    <>
        <div className="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 left">
                        <h6>Value Services: we value your Time and Health</h6>
                        <h4>We are your family in this difficult Time</h4>
                        <p>We will act in the best interest of the Patient with outmost Honesty</p>
                        <button>All Services</button>
                    </div>
                    <div className="col-lg-8 col-md-12 mb-4">
                    
                            <div className="all-boxes">
                                <Slider />
                            </div>
                       
                    </div>
                </div>
                {/* <div className="image-decore">
                    <img className='img-decore-one' src={img1} alt="" />
                    <img className='img-decore-two' src={img2} alt="" />
                    <img className='img-decore-three' src={img3} alt="" />
                    <img className='img-decore-four' src={img4} alt='' />
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Services