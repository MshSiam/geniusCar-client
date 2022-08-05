import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    const url = `https://geniuscarnew.herokuapp.com/service`
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Service Added")

        console.log(result)
      })
  }
  return (
    <div className="w-50 mx-auto">
      <h1 className="my-5"> Add a service</h1>
      <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-75"
          placeholder="service  name"
          {...register("name", { required: true })}
        />
        <br />
        <br />

        <input
          className="w-75"
          type="number"
          placeholder="price"
          {...register("price", { required: true })}
        />
        <br />
        <br />
        <input
          className="w-75"
          type="text"
          placeholder="img-url"
          {...register("img", { required: true })}
        />
        <br />
        <br />
        <textarea
          className="w-75"
          placeholder="description"
          {...register("description", { required: true })}
        />
        <br />
        <br />

        <input value="Add Service" className="w-75 btn-warning" type="submit" />
      </form>
    </div>
  )
}

export default AddService
