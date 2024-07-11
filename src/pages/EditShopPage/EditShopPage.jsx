import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Shop } from "../../components/Shop/Shop";
import { editShopThunk } from "../../store/shops/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectShop } from "../../store/shops/selectors";

const schema = yup.object({
  shopName: yup.string(),
  shopOwnerName: yup.string(),
  shopEmail: yup
    .string()
    .email("Please write a valid email")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Please write a valid email"),
  shopPhone: yup.string(),
  // .matches(/^[\\+]?[0-9]{12}$/, "Please write a valid phone number")
  // .min(12, "The phone number must contain a minimum of 12 characters"),
  shopStreet: yup.string(),
  shopCity: yup.string(),
  shopZip: yup.string(),
  password: yup.string(),
  // .min(8, "The password must contain a minimum of 8 characters"),
});

const EditShopPage = () => {
  const dispatch = useDispatch();
  const { _id } = useSelector(selectShop);

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

  function onSubmit(data) {
    const formData = new FormData();

    for (const key in data) {
      if (key === "shopLogoURL" && data[key][0]) {
        formData.append(key, data[key][0]); // Append the file object
      } else if (data[key]) {
        formData.append(key, data[key]);
      }
    }

    dispatch(editShopThunk({ id: _id, formData }))
      .unwrap()
      .then(() => {
        toast.success("The shop has been edited!");
      })
      .catch((err) => toast.error(err));
  }

  return (
    <>
      <Shop
        title={"Edit data"}
        inputs={inputs}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        buttonName={"Save"}
      />
    </>
  );
};

export default EditShopPage;
