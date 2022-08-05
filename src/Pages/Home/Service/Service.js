import React from "react"
import { useNavigate } from "react-router-dom"
import "./Service.css"

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service
  const navigate = useNavigate()

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${_id}`)
  }
  return (
    <div className="service p-3 m-2">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p className="text-danger fw-bolder btn-info">${price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => navigateToServiceDetail(_id)}
        className="btn btn-primary">
        Book: {name}
      </button>
    </div>
  )
}

export default Service
