import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthComponent } from "../../components/AuthComponent/AuthComponent";
import { toast } from "react-toastify";
import { signUpThunk } from "../../store/auth/operations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup.string().required("The name is required"),
  email: yup
    .string()
    .email("Please write a valid email")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Please write a valid email")
    .required("The email is required"),
  phone: yup
    .string()
    .matches(/^[\\+]?[0-9]{12}$/, "Please write a valid phone number")
    .min(12, "The phone number must contain a minimum of 12 characters")
    .required("The phone number is required"),
  password: yup
    .string()
    .min(8, "The password must contain a minimum of 8 characters")
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
