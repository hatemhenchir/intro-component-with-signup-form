import "../styles/Form.css";
import icon_error from "../images/icon-error.svg";
import { useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  return (
    <section className="section2">
      <div className="alert">
        <p>
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </p>
      </div>
      <div className="form">
        <form noValidate onSubmit={handleSubmit()}>
          <div className="input">
            <input
              className={errors.firstName ? "input_error" : ""}
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <img src={icon_error} alt="" />}
            {errors.firstName && (
              <span className="form_error">First Name cannot be empty</span>
            )}
          </div>
          <div className="input">
            <input
              className={errors.lastName ? "input_error" : ""}
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <img src={icon_error} alt="" />}
            {errors.lastName && (
              <span className="form_error">Last Name cannot be empty</span>
            )}
          </div>
          <div className="input">
            <input
              className={errors.emailAdress ? "input_error" : ""}
              type="email"
              placeholder={
                errors.emailAdress ? "email@exemple/com" : "Email Address"
              }
              {...register("emailAdress", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            {errors.emailAdress && <img src={icon_error} alt="" />}
            {errors.emailAdress && errors.emailAdress.type === "pattern" && (
              <span className="form_error">
                looks like this is not an email
              </span>
            )}
            {errors.emailAdress && errors.emailAdress.type === "required" && (
              <span className="form_error">Email cannot be empty</span>
            )}
          </div>
          <div className="input">
            <input
              className={errors.password ? "input_error" : ""}
              type="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && <img src={icon_error} alt="" />}
            {errors.password && errors.password.type === "required" && (
              <span className="form_error">Password cannot be empty</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="form_error">
                Password must have at least 8 characters
              </span>
            )}
          </div>
          <button type="submit"> Claim your free trial</button>
        </form>
        <p>
          By clicking the button, you are agreeing to our{" "}
          <a href="localhost:3000/">Terms and Services</a>
        </p>
      </div>
    </section>
  );
};
export default Form;
