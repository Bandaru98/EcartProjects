import React from 'react'
import { serviceData } from '../../Images/products'

const Card = () => {
  return (
    <>
      {/* servicedata list */}
      <div className="container mt-4 mb-4">
        <div className="row">
          {serviceData.map((carddata) => (
            <div className="col-md-3">
              <div className="card text-center" style={{ backgroundColor: carddata.bg }}>
                <div className="card-body">
                  <span className='bg-light p-2 rounded-circle text-center' style={{ backgroundColor: 'blue' }} >{carddata.icon}</span>
                  <h4 className='card-title mt-4'>{carddata.title}</h4>
                  <p className='card-text m-3'>{carddata.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Card







