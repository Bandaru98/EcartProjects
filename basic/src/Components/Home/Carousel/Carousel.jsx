import React from 'react'
import { SliderData } from '../../Images/products'

const Carousel = () => {
  return (
    <>
      {/* Carousel */}
      <div style={{ backgroundColor: '#f6f9fc' }} >
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" >
          <div class="carousel-inner" style={{ height: '75vh' }}>
            {/* Active item */}
            <div class="carousel-item active" data-bs-interval='1000'>
              <div className="row d-flex align-items-center">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                  <h1>{SliderData[0].title}</h1>
                  <p className='text-secondary'>{SliderData[0].desc}</p>
                  <button style={{ border: 'none', backgroundColor: 'none' }}>Visit Collections</button>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                  <img className='img-fluid' src={SliderData[0].cover} alt="sofa" />
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
            {/* item2 */}
            <div class="carousel-item" data-bs-interval='1000'>
              <div className="row d-flex align-items-center">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                  <h1>{SliderData[1].title}</h1>
                  <p className='text-secondary'>{SliderData[1].desc}</p>
                  <button style={{ border: 'none', backgroundColor: 'none' }}>Visit Collections</button>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                  <img className='img-fluid' src={SliderData[1].cover} alt="phone" />
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
            {/* item3 */}
            <div class="carousel-item" data-bs-interval='1000'>
              <div className="row d-flex align-items-center">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                  <h1>{SliderData[2].title}</h1>
                  <p className='text-secondary'>{SliderData[2].desc}</p>
                  <button style={{ border: 'none', backgroundColor: 'none' }}>Visit Collections</button>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                  <img className='img-fluid' src={SliderData[2].cover} alt="wireless" />
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
            {/* item4 */}
            <div class="carousel-item" data-bs-interval='1000'>
              <div className="row" >
                <div className="col-md-1"></div>
                <div className="col-md-4 d-flex align-items-center">
                  <div>
                    <h1>{SliderData[3].title}</h1>
                    <p className='text-secondary'>{SliderData[3].desc}</p>
                    <button style={{ border: 'none', backgroundColor: 'none' }}>Visit Collections</button>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                  <img className='h-75' src={SliderData[3].cover} alt="watch" />
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel



// ---------Another method for carousel section-------

// import React, { useEffect } from 'react'
// import { SliderData } from '../../Images/products'
// const Carousel = () => {

//   useEffect(() => {
//     const carouselele = document.querySelector('#Carousel')
//     if (carouselele) {
//       const carousel = new window.bootstrap.Carousel(carouselele, { interval: 2000, ride: 'carousel', })
//     }
//   }, [])

//   return (
//     <div>
//       <div className="carousel slide" id='Carousel'>
//         <div className="carousel-inner">
//           {SliderData.map((slide, item) => (
//             <div className={`carousel-item ${item === 0 ? 'active' : ''}`} key={slide.id}>
//               <div className="row d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
//                 <div className="col-md-1"></div>
//                 <div className="col-md-4">
//                   <h2>{slide.title}</h2>
//                   <p>{slide.desc}</p>
//                   <button>Visit Collection</button>
//                 </div>
//                 <div className="col-md-1"></div>
//                 <div className="col-md-5">
//                   <img src={slide.cover} alt="" />
//                 </div>
//                 <div className="col-md-1"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Carousel



