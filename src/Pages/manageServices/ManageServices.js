import React from "react"
import useServices from "../../hooks/useServices"
import { toast } from "react-toastify"

const ManageServices = () => {
  const [services, setServices] = useServices()

  const handleDelete = (id) => {
    const procced = window.confirm("Are You Sure to delete This Service?")
    if (procced) {
      fetch(`http://localhost:4000/service/${id}`, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          toast("Service Deleted")
          const remaining = services.filter((service) => service._id !== id)
          setServices(remaining)
        })
    }
  }
  return (
    <div className="my-5">
      <h1 className="my-3 py-4">Manage Services</h1>
      {services.map((service) => (
        <div key={service._id}>
          <h5 className="my-4 bg-warning py-3">
            {service.name}{" "}
            <button
              className="bg-danger text-white border-none"
              onClick={() => handleDelete(service._id)}>
              {" "}
              X
            </button>
          </h5>
        </div>
      ))}
    </div>
  )
}

export default ManageServices
