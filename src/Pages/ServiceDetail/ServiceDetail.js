import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import useServiceDetails from "../../hooks/useServiceDetail"

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const [service, setService] = useServiceDetails(serviceId)
  const { _id, name, img, description, price } = service

  return (
    <div className="">
      <h2 className=" bg-warning py-5">Booking: {name}</h2>
      <div className="text-center my-3">
        <img className="img-fluid my-3" src={img} alt="" />
        <h5>{description}</h5>
        <h3 className="text-danger"> ${price}</h3>
        <br />
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  )
}

export default ServiceDetail
