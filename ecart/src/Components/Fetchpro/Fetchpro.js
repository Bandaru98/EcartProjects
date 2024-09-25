import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Fetchpro = () => {

    const [states, setStates] = useState([])
    useEffect(() => {
        getdata()
    }, [])
    const getdata = async () => {
        const data = await fetch(`https://fakestoreapi.com/products`)
        const result = await data.json()
        // console.log(result);
        setStates(result)
    }
    return (
        <>
            <h2 className='text-center'>Fetch data from storedata</h2>

            {states.length > 0 ? (
                <div className='container'>
                    <div className='row mt-4 mb-4'>
                        <caption><h2 className='text-center mt-4 mb-4' style={{ color: 'black' }}>Fetch Details from products</h2></caption>
                        <table className='table table-striped table-hover'>
                            <thead>
                                <tr className='table-info'>
                                    <th>Id</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Ratings</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            {states.map((item) => (
                                <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.category}</td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.rating.rate} {item.rating.count}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            ) : (<h2>Loading</h2>)
            }
        </>
    )
}

export default Fetchpro
