import React from 'react'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, sed sit dolor saepe exercitationem nam officia aut eius odit repellendus accusantium vel, eos, culpa dolorum deserunt? Esse molestias, sit fugit a eveniet modi qui, perferendis repudiandae iste laboriosam eius quidem placeat enim earum fugiat. Veritatis ea quia praesentium saepe ad unde quaerat incidunt repellendus soluta adipisci aliquid porro nam rerum natus, fuga sed expedita magnam itaque. Pariatur in labore distinctio magnam natus, perspiciatis praesentium dignissimos harum totam, repudiandae reiciendis quidem ipsam eius, voluptates consectetur molestiae eligendi! Expedita, sint aperiam. Perferendis quibusdam eligendi iusto quo illo ut corporis dolorem voluptas atque?
            </p>
          <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about.jpg" alt="About Us"
            height="400px" width="400px" />
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default About