import { useEffect, useState } from "react"

const useServiceDetails = (serviceId) => {
  const [service, setService] = useState({})

  useEffect(() => {
    const url = `https://geniuscarnew.herokuapp.com/service/${serviceId}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data))
  }, [])
  return [service, setService]
}

export default useServiceDetails
