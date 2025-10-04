import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodgroup: "",
    city: "",
    date: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    }
    setValidated(true);
  };

  return (
    <div>


      {/* Contact Section */}
      <section>
        <div className="p-5">
          <div className="row g-4 p-4 justify-content-center">
            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="glass-card p-4 shadow-sm rounded">
                <h4 className="mb-3 text-danger">Register / Enquiry</h4>
                <form
                  noValidate
                  className={validated ? "was-validated" : ""}
                  onSubmit={handleSubmit}
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your full name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">Please enter your name.</div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">Enter a valid email.</div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Phone *</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">Please enter your phone number.</div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Blood Group *</label>
                      <select
                        className="form-select"
                        name="bloodgroup"
                        required
                        value={formData.bloodgroup}
                        onChange={handleChange}
                      >
                        <option value="">Choose...</option>
                        <option>A+</option><option>A-</option>
                        <option>B+</option><option>B-</option>
                        <option>AB+</option><option>AB-</option>
                        <option>O+</option><option>O-</option>
                      </select>
                      <div className="invalid-feedback">Please select your blood group.</div>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        placeholder="Your city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Preferred Donation Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        name="message"
                        placeholder="Any notes or questions..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-12 text-end">
                      <button type="submit" className="btn btn-danger">
                        Send Enquiry
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="glass-card p-4 shadow-sm rounded">
                <h5 className="text-danger">Get in Touch</h5>
                <p><strong>Phone:</strong> <a href="tel:+919768645467">+91 9768645467</a></p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:vijayoneline2@gmail.com">
                    <u>vijayoneline2@gmail.com</u>
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> Ola Vakola Hall, Vakola Pipe Line,
                  Santacruz East, Mumbai No.400055.
                </p>

                <h6 className="mt-4 text-danger">Camp Timings</h6>
                <p>9:00 AM — 4:00 PM (Sat & Sun)</p>

                <h6 className="mt-4 text-danger">Location</h6>
                <div className="map-placeholder rounded shadow-sm">
                  <iframe
                    src="https://maps.google.com/maps?q=Mumbai/Santacruz/400055/&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
