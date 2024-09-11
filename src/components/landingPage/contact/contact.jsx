import React from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import contact from "../../../assets/contact/Contactus_banner.svg";
import "./contact.css";

function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    // Use emailjs to send form data
    emailjs
      .send(
        'service_g33a0u6', // Replace with your EmailJS Service ID
        'template_vf550ih', // Replace with your EmailJS Template ID
        {
          Name: data.Name,
          email: data.email,
          number: data.number,
          region: data.region,
          Service: data.Service,
          industry_type: data.industry_type,
          Message: data.Message,
        },
        'a9dCNL3H_vULs7pZD' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent successfully!");
        },   
        (err) => {
          console.log(err);
          
          console.log("FAILED...", err);
          alert("Failed to send message. Please try again.");
        }    
      );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-fluid p-0">
          <div className="container-fluid p-0 mb-4">
            <div className="row mx-0 px-0 text-center mt-3">
              <h2 className="fw-bold">Contact Us</h2>
              <p>
                Ut enim ad minima veniam quis nostrum exercitationem ullam
                corporis suscipit <br /> laboriosam nisi commodi consequatur.
              </p>
            </div>

            <div className="row me-4">
              <div className="col-lg-6 text-center">
                <img src={contact} className="contact_pic" alt="Contact Us" />
                <h2 className="fw-bold mt-4">Are You Facing Any Problem..?</h2>
                <div className="row contact_subrow mt-4 ps-5">
                  <div className="col-lg-4 text-right">
                    <div className="d-flex justify-content-center">
                      <div className="contact_number">
                        <FontAwesomeIcon
                          icon={faPhone}
                          size="1x"
                          className="contact_icon mt-1"
                        />
                      </div>

                      <div>
                        <p className="ms-3">0544417515</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="d-flex justify-content-center">
                      <div>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          size="1x"
                          className="contact_icon"
                        />
                      </div>
                      <div className="ms-2 mt-0">
                        <p>gbsolutions@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row text-center mt-3">
                  <h4 className="contact_h4">Get In Touch</h4>
                </div>

                <div className="row d-flex justify-content-center align-items-center p-0 m-0">
                  <div className="card contct_subcontainer">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6 mt-4">
                          <input
                            type="text"
                            placeholder="Name"
                            className="form-control contact_border shadow-none"
                            {...register("Name", { required: true })}
                            aria-invalid={errors.Name ? "true" : "false"}
                          />
                          {errors.Name?.type === "required" && (
                            <p className="text-danger" role="alert">
                              * Enter your name
                            </p>
                          )}
                        </div>

                        <div className="col-lg-6 mt-4">
                          <input
                            type="email"
                            placeholder="E-Mail Id"
                            className="form-control contact_border shadow-none"
                            {...register("email", { required: true })}
                            aria-invalid={errors.email ? "true" : "false"}
                          />
                          {errors.email?.type === "required" && (
                            <p className="text-danger" role="alert">
                              * Enter your email
                            </p>
                          )}
                        </div>

                        <div className="col-md-6 mt-4">
                          <input
                            type="number"
                            placeholder="Phone"
                            className="form-control contact_border shadow-none"
                            {...register("number", { required: true })}
                            aria-invalid={errors.number ? "true" : "false"}
                          />
                          {errors.number?.type === "required" && (
                            <p className="text-danger" role="alert">
                              * Enter your contact number
                            </p>
                          )}
                        </div>

                        <div className="col-md-6 mt-4">
                          <input
                            type="text"
                            placeholder="Your Region"
                            className="form-control contact_border shadow-none"
                            {...register("region", { required: true })}
                            aria-invalid={errors.region ? "true" : "false"}
                          />
                          {errors.region?.type === "required" && (
                            <p className="text-danger" role="alert">
                              * Enter your region
                            </p>
                          )}
                        </div>

                        <div className="col-md-6 mt-4">
                          <input
                            type="text"
                            placeholder="Enter Your Service"
                            className="form-control contact_border shadow-none"
                            {...register("Service", { required: true })}
                            aria-invalid={errors.Service ? "true" : "false"}
                          />
                          {errors.Service?.type === "required" && (
                            <p className="text-danger" role="alert">
                              * Enter your service
                            </p>
                          )}
                        </div>

                        <div className="col-md-6 mt-4">
                          <input
                            type="text"
                            placeholder="Industry Type"
                            className="form-control contact_border shadow-none"
                            {...register("industry_type", { required: true })}
                            aria-invalid={errors.industry_type ? "true" : "false"}
                          />
                          {errors.industry_type?.type === "required" && (
                            <p className="text-danger" role="alert">
                              * Define your industry type
                            </p>
                          )}
                        </div>

                        <div className="col-md-12 mt-4">
                          <textarea
                            placeholder="Message"
                            className="contact_text_area form-control contact_border shadow-none resize-none"
                            {...register("Message", { required: true })}
                            aria-invalid={errors.Message ? "true" : "false"}
                          />
                          {errors.Message?.type === "required" && (
                            <p className="text-danger" role="alert">
                              * Enter your message
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12 text-center">
                          <input
                            type="submit"
                            className="contact_button"
                            value="Send Message"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
