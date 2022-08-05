import axios from "axios"
import { toast } from "react-toastify"
import React from "react"
import { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useParams } from "react-router-dom"
import auth from "../../../firebase.init"
import useServiceDetails from "../../../hooks/useServiceDetail"

const Checkout = () => {
  const { serviceId } = useParams()
  const [service, setService] = useServiceDetails(serviceId)
  const [user, loading, error] = useAuthState(auth)

  const handlePlaceOrder = (event) => {
    event.preventDefault()
    const order = {
      email: user.email,
      userName: user.displayName,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value
    }
    console.log(order)

    axios
      .post(`https://geniuscarnew.herokuapp.com/orders`, order)
      .then((response) => {
        const { data } = response
        console.log(response)
        if (data.insertedId) {
          toast("Order Booked Successfull")
          event.target.reset()
        }
      })
  }

  return (
    <div className="my-2 py-5 ">
      <h2 className="my-5">Provide Information to book : {service.name}</h2>
      <form action="" onSubmit={handlePlaceOrder}>
        <input
          className="w-50 mb-3"
          type="text"
          placeholder="service"
          name="service"
          value={service.name}
          readOnly
          disabled
        />
        <br />
        <input
          className="w-50 mb-3"
          type="text"
          value={user.displayName}
          placeholder="name"
          name="name"
          required
          readOnly
        />
        <br />
        <input
          className="w-50 mb-3"
          type="email"
          value={user.email}
          placeholder="email"
          name="email"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-50 mb-3"
          type="text"
          placeholder="address"
          name="address"
          required
        />
        <br />
        <input
          className="w-50 mb-3"
          type="number"
          placeholder="phone number"
          name="phone"
          required
        />
        <br />
        <input
          className="btn btn-warning w-50 py-2"
          type="submit"
          value="Place Order"
          name=""
          id=""
        />
      </form>
    </div>
  )
}

export default Checkout
