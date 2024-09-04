import React from "react";
import { useForm } from "react-hook-form";
import "./faq.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function () {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <div className="col-lg-6 mt-4 ">
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
                    * Enter your contact number.
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
                    * Enter your region.
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
                    * Enter your service.
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
                    * Define your industry type.
                  </p>
                )}
              </div>

              <div className="col-md-12 mt-4">
                <textarea
                  type="text"
                  placeholder="Message"
                  className="contact_text_area form-control contact_border shadow-none resize-none"
                  {...register("Message", { required: true })}
                  aria-invalid={errors.Message ? "true" : "false"}
                />
                {errors.Message?.type === "required" && (
                  <p className="text-danger" role="alert">
                    * Enter your message.
                  </p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 mt-3 text-center">
                <input type="submit" className="contact_button" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
