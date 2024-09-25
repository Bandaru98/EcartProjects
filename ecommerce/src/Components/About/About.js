import React, { useState, useEffect } from 'react'

const About = () => {

    const [pro, setPro] = useState([])
    useEffect(() => {
        getdata()
    }, [])
    const getdata = async () => {
        // const data = await fetch(`https://fakestoreapi.com/products?limit=15`)
        const data = await fetch(`https://fakestoreapi.com/products?limit=5`)
        const result = await data.json()
        setPro(result)
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className='text-center mt-4'>About Us</h2>
                    <hr className='mt-2' />
                    <div>
                        <h3 className='mt-4 mb-4'>Our Product Description:</h3>
                    </div>
                    {pro.map((item) => (
                        <div>
                            <p>{item.description}</p>
                        </div>
                    ))
                    }
                    <div className='row mt-2'>
                        <h4 className='text-center mt-4'>Our Shop Items</h4>
                        {pro.map((item) => (
                                <div className='col text-center mt-4'>
                                    <img src={item.image} alt={item.id} className='img-fluid' style={{ height: '7rem' }}></img>
                                    <p className='mt-2'>{item.category}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default About