import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthComponent } from "../../components/AuthComponent/AuthComponent";
import { toast } from "react-toastify";
import { signUpThunk } from "../../store/auth/operations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z0-9 _-]{3,15}$/,
      "The name must be from 3 to 15 characters of lowercase, uppercase letters, numbers and '-', '_'."
    )
    .required("The name is required"),
  email: yup
    .string()
    .email("Please write a valid email")
    .matches(
      /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      "Please write an email like this someone@mail.me"
    )
    .required("The email is required"),
  phone: yup
    .string()
    .matches(
      /^[\\+]?[0-9]{12}$/,
      "Format must be +123456789012 or 123456789012 and  have 12 digits"
    )
    // .min(12, "The phone number must contain a minimum of 12 characters")
    .required("The phone number is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "The password may contain at least one upper case, lower case English letter, digit, and special character or space and have a length of at least 8 characters"
    )
    // .min(8, "The password must contain a minimum of 8 characters")
    .required("The password is required"),
});

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputs = [
    {
      placeholder: "User Name",
      name: "name",
      type: "text",
    },
    {
      placeholder: "Email address",
      name: "email",
      type: "text",
    },
    {
      placeholder: "Phone number",
      name: "phone",
      type: "text",
    },
    {
      placeholder: "Password",
      name: "password",
      type: "password",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onSubmit({ name, email, phone, password }) {
    dispatch(signUpThunk({ name, email, phone, password }))
      .unwrap()
      .then(() => {
        toast.success("Sign up done!");
        navigate("/login");
      })

      .catch((err) => toast.error(err));
  }

  return (
    <>
      <AuthComponent
        inputs={inputs}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        buttonName={"Register"}
        account={"Already have an account?"}
        rout={"/login"}
        reg={true}
      />
    </>
  );
};

export default RegisterPage;
