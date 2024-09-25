import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Fetchdata = () => {

  const [states, setStates] = useState([])
  useEffect(() => {
    getdata()
  }, [])
  const getdata = async () => {
    const data = await fetch(`https://fakestoreapi.com/users`)
    const result = await data.json()
    // console.log(result);
    setStates(result)
  }
  return (
    <>
      {/* <h2 className='text-center'>Tabular data</h2> */}

      {states.length > 0 ? (
        <div className='container'>
          <div className='row mt-4 mb-4'>
            <caption><h2 className='text-center mt-4 mb-4' style={{ color: 'black' }}>Fetch Details from users</h2></caption>
            <table className='table table-hover'>
              <thead>
                <tr className='table-primary'>
                  <th>Id</th>
                  <th>UserName</th>
                  <th>FullName</th>
                  <th>Email</th>
                  <th>Phoneno</th>
                  <th>Address</th>
                </tr>
              </thead>
              {states.map((item) => (
                <tbody>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.name.firstname} {item.name.lastname}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address.city} {item.address.street} {item.address.number} {item.address.zipcode}</td>
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

export default Fetchdata
