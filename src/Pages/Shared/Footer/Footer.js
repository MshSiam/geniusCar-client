import logo from "../../../images/logo.png"
import React from "react"

const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <div className=" bg-dark text-white py-5 mt-5 ">
      <footer className="text-center text-lg-start border border-white mt-xl-5 pt-4">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <img className="mb-3" height={30} src={logo} alt="" />

              <ul className="list-unstyled mb-4">
                <li>
                  <a href="/about" className="text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/home#services" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Environmental philosophy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Artist collaborations
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4">Assistance</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Payment
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4">Careers</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">
                    Jobs
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="text-uppercase mb-4">Sign up to our newsletter</h5>

              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="form5Example2"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form5Example2">
                  Email address
                </label>
              </div>

              <button type="submit" className="btn btn-outline-white btn-block">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-center p-3 border-top border-white pb-5 -mb-5">
          ?? {year} Copyright :
          <a className="text-white" href="https://mdbootstrap.com/">
            GeniusCar || Muhammad Siam
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
