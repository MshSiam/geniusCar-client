import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../firebase.init"

const Orders = () => {
  const [user] = useAuthState(auth)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrder = async () => {
      const email = user.email
      const url = `http://localhost:4000/orders?email=${email}`
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
      setOrders(data)
    }
    getOrder()
  }, [user])
  return (
    <div className="my-5">
      <h1>Total Orders : {orders.length}</h1>
      <table className="table my-5 py-5">
        <thead className="thead-dark bg-info py-5">
          <tr className="">
            <th scope="col">Service</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody className="bg-secondary text-white">
          {orders.map((order) => {
            return (
              <tr>
                <th scope="row">{order.service}</th>
                <td>{order.userName}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Orders
