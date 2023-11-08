import React from 'react'
import img from '../../images/doctor-Ind.jpg'
import img11 from '../../images/patient.jpg'
import './Home.css'
import img1 from '../../images/download (1).png'
import img2 from '../../images/download (2).png'
import img3 from '../../images/download (3).png'
import img5 from '../../images/download (5).png'
function Home() {
  return (
    <>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className='radius-img'>
                        <h5>We Provide AI Health Care Solution</h5>
                        <h2>Upload your report and AI will recommend you best Doctors</h2>
                        <button>Upload Report</button>
                        </div>
                    </div>
                    <div className="col-md-4 img">
                    <ul className='image-list'>
                    <li> <img className='img' src={img} alt="" /></li>
                        
                    <li> <img className='img' src={img11} alt="" /></li>
                    </ul> 
                    </div>
                    
                   
                    

                    
                </div>
            </div>
            {/* <div className="images">
                <img className='img-o  ne' src={img1} alt="" />
                <img className='img-two' src={img2} alt="" />
                <img className='img-three' src={img3} alt="" />
                <img className='img-five' src={img5} alt="" />
            </div> */}
        </header>
    </>
  )
}

export default Home