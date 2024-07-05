import { Link } from "react-router-dom";

export const AuthComponent = ({
  inputs,
  buttonName,
  account,
  register,
  handleSubmit,
  onSubmit,
  errors,
}) => {
  return (
    <div>
      <h1>
        Your medication, delivered Say goodbye to all{" "}
        <span>your healthcare</span> worries with us
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((el, idx) => (
          <label key={idx}>
            <input
              placeholder={el.placeholder}
              type={el.type}
              {...register(el.name)}
            ></input>
            <span>{errors[register(el.name).name]?.message}</span>
          </label>
        ))}
        <button name="submit" type="submit" aria-label={buttonName}>
          {buttonName}
        </button>
      </form>
      <Link to="login">{account}</Link>
    </div>
  );
};
