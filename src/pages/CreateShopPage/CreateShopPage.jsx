import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Shop } from "../../components/Shop/Shop";
import { createShopThunk } from "../../store/shops/operations";
import { useDispatch } from "react-redux";

const schema = yup.object({
  shopName: yup.string().required("The shop name is required"),
  shopOwnerName: yup.string().required("The shop owner name is required"),
  shopEmail: yup
    .string()
    .email("Please write a valid email")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Please write a valid email")
    .required("The email is required"),
  shopPhone: yup
    .string()
    .matches(/^[\\+]?[0-9]{12}$/, "Please write a valid phone number")
    .min(12, "The phone number must contain a minimum of 12 characters")
    .required("The phone number is required"),
  shopStreet: yup.string().required("The name is required"),
  shopCity: yup.string().required("The name is required"),
  shopZip: yup.number().required("The name is required"),
  password: yup
    .string()
    .min(8, "The password must contain a minimum of 8 characters")
    .required("The password is required"),
});

const CreateShopPage = () => {
  const dispatch = useDispatch();

  const inputs = [
    {
      placeholder: "Shop Name",
      name: "shopName",
      type: "text",
    },
    {
      placeholder: "Shop Owner Name",
      name: "shopOwnerName",
      type: "text",
    },
    {
      placeholder: "Email address",
      name: "shopEmail",
      type: "text",
    },
    {
      placeholder: "Phone number",
      name: "shopPhone",
      type: "text",
    },
    {
      placeholder: "Street Address",
      name: "shopStreet",
      type: "text",
    },
    {
      placeholder: "City",
      name: "shopCity",
      type: "text",
    },
    {
      placeholder: "Zip / Postal",
      name: "shopZip",
      type: "number",
    },
    {
      placeholder: "Password",
      name: "password",
      type: "password",
    },
    {
      placeholder: "Upload Logo",
      name: "shopLogoURL",
      type: "file",
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

  // async
  function onSubmit({
    shopName,
    shopOwnerName,
    shopEmail,
    shopPhone,
    shopStreet,
    shopCity,
    shopZip,
    password,
    shopLogoURL,
    shopOwnDelivery,
  }) {
    const formData = new FormData();
    formData.append("shopName", shopName);
    formData.append("shopOwnerName", shopOwnerName);
    formData.append("shopEmail", shopEmail);
    formData.append("shopPhone", shopPhone);
    formData.append("shopStreet", shopStreet);
    formData.append("shopCity", shopCity);
    formData.append("shopZip", shopZip);
    formData.append("password", password);
    // formData.append("shopLogoURL", shopLogoURL);
    formData.append("shopOwnDelivery", shopOwnDelivery);

    if (shopLogoURL[0]) {
      formData.append("shopLogoURL", shopLogoURL[0]);
    } else {
      alert("No file selected");
      return;
    }

    // Log formData contents for debugging
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    console.log(shopLogoURL[0].name);

    // await
    dispatch(createShopThunk(formData))
      .unwrap()
      .then(() => {
        toast.success("The shop has been created!");
      })
      .catch((err) => toast.error(err));
  }

  return (
    <>
      <Shop
        inputs={inputs}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        buttonName={"Create account"}
      />
    </>
  );
};

export default CreateShopPage;
