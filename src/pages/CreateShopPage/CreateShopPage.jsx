import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import { AuthComponent } from "../../components/AuthComponent/AuthComponent";
import { toast } from "react-toastify";
// import { signUpThunk } from "../../store/auth/operations";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Shop } from "../../components/Shop/Shop";
import { createShopThunk } from "../../store/shops/operations";
import { useDispatch } from "react-redux";
// import { useState } from "react";

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
  // const [fileData, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

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

  // const [fileData, setFileData] = useState({
  //   file: "",
  // });

  // const handleFileChange = (e) => {
  //   setFileData(
  //     // ...fileData,
  //     e.target.files[0]
  //   );
  // };

  async function onSubmit({
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
    // const handleFileChange = (event) => {
    //   const file = event.target.files[0];
    //   const reader = new FileReader();

    //   reader.onload = (e) => {
    //     setImageSrc(e.target.result);
    //   };

    //   if (file) {
    //     reader.readAsDataURL(file);
    //   }
    const formData = new FormData();
    formData.append("shopName", shopName);
    formData.append("shopOwnerName", shopOwnerName);
    formData.append("shopEmail", shopEmail);
    formData.append("shopPhone", shopPhone);
    formData.append("shopStreet", shopStreet);
    formData.append("shopCity", shopCity);
    formData.append("shopZip", shopZip);
    formData.append("password", password);
    formData.append("shopLogoURL", shopLogoURL);
    formData.append("shopOwnDelivery", shopOwnDelivery);
    // console.log(formData.get("shopLogoURL"));

    if (shopLogoURL[0]) {
      formData.append("shopLogoURL", shopLogoURL[0]);
    } else {
      console.error("No file selected");
      return;
    }

    // Log formData contents for debugging
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    await dispatch(
      createShopThunk(
        // {
        //   shopName,
        //   shopOwnerName,
        //   shopEmail,
        //   shopPhone,
        //   shopStreet,
        //   shopCity,
        //   shopZip,
        //   password,
        //   shopOwnDelivery,
        // },
        formData
      )
    )
      .unwrap()
      .then(() => {
        toast.success("The shop has been created!");
        // navigate("/login");
        // dispatch(signInThunk({ email, password }))
        //   .unwrap()
        //   .then(() => {
        //     toast.success(`Welcome`);
        //     navigate("/recommended");
        //   })
        //   .catch((err) => toast.error(err));
      })
      // .catch(() => toast.error("Ooops... Something went wrong!"));
      .catch((err) => toast.error(err));
    // notify();
    // console.log(name, email, phone, password);
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
        // handleFileChange={handleFileChange}
        // account={"Don't have an account?"}
        // rout={"/register"}
        // marg={true}
      />
    </>
  );
};

export default CreateShopPage;
