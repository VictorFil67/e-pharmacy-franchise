import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthComponent } from "../../components/AuthComponent/AuthComponent";
import { toast } from "react-toastify";
import { signInThunk } from "../../store/auth/operations";
import { useDispatch } from "react-redux";
import { getShopIdThunk } from "../../store/shops/operations";

const schema = yup.object({
  email: yup
    .string()
    .email("Please write a valid email")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Please write a valid email")
    .required("The email is required"),
  password: yup
    .string()
    .min(8, "The password must contain a minimum of 8 characters")
    .required("The password is required"),
});

const LoginPage = () => {
  const dispatch = useDispatch();

  const inputs = [
    {
      placeholder: "Email address",
      name: "email",
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

  function onSubmit({ email, password }) {
    dispatch(signInThunk({ email, password }))
      .unwrap()
      .then(() => {
        toast.success("Welcome!");
        dispatch(getShopIdThunk())
          .unwrap()
          .then(() => {
            toast.success(`You have your own shop`);
          })
          .catch(() => toast.error(`You don't have your own shop`));
      })

      .catch((err) => toast.error(err));
  }

  return (
    <div>
      <AuthComponent
        inputs={inputs}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        buttonName={"Log in"}
        account={"Don't have an account?"}
        rout={"/register"}
        marg={true}
      />
    </div>
  );
};

export default LoginPage;
