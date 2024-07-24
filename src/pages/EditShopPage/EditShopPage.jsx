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
  shopEmail: yup.string(),
  shopPhone: yup.string(),
  shopStreet: yup.string(),
  shopCity: yup.string(),
  shopZip: yup.string(),
  password: yup.string(),
});

const EditShopPage = () => {
  const dispatch = useDispatch();
  const { shopId } = useSelector(selectShop);

  const inputs = [
    {
      label: "Shop Name",
      name: "shopName",
      type: "text",
    },
    {
      label: "Shop Owner Name",
      name: "shopOwnerName",
      type: "text",
    },
    {
      label: "Email address",
      name: "shopEmail",
      type: "text",
    },
    {
      label: "Phone number",
      name: "shopPhone",
      type: "text",
    },
    {
      label: "Street Address",
      name: "shopStreet",
      type: "text",
    },
    {
      label: "City",
      name: "shopCity",
      type: "text",
    },
    {
      label: "Zip / Postal",
      name: "shopZip",
      type: "number",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
    {
      label: "Upload Logo",
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

    dispatch(editShopThunk({ id: shopId, formData }))
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
