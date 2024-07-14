import { useDispatch } from "react-redux";
import {
  AddToShopButton,
  ControlAllMedicineWrap,
  ControlWrap,
  DataWrap,
  DeleteButton,
  DetailsLink,
  EditButton,
  ImgWrap,
  InfoWrap,
  ItemWrap,
  Medicine,
  MedicineBrand,
  // MedicineName,
  TextWrap,
} from "./ProductItem.Styled";
import { addCatalogProductThunk } from "../../store/products/operations";
import { toast } from "react-toastify";
import { getShopProductsThunk } from "../../store/shops/operations";

export const ProductItem = ({
  photo,
  name,
  price,
  suppliers,
  active,
  productId,
  shopId,
}) => {
  const dispatch = useDispatch();

  console.log(shopId, productId, name, price);

  function addCatalogProduct({ shopId, productId }) {
    dispatch(addCatalogProductThunk({ shopId, productId }))
      .unwrap()
      .then(() => {
        toast.success(`The product has been added to your shop successfully!`);
        dispatch(getShopProductsThunk(shopId))
          .unwrap()
          .then(() => {
            toast.success(`The products of your shop are received`);
          })
          .catch((err) => toast.error(err));
      })
      .catch((err) => toast.error(err));
  }

  return (
    <ItemWrap>
      {photo && (
        <ImgWrap>
          <img src={photo} alt={name} />
        </ImgWrap>
      )}
      <InfoWrap>
        <DataWrap>
          <TextWrap>
            <Medicine>{name}</Medicine>
            <MedicineBrand>{suppliers}</MedicineBrand>
          </TextWrap>
          <Medicine>&#8372;{price}</Medicine>
        </DataWrap>
        {active === "Drug store" ? (
          <ControlWrap>
            <EditButton>Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
          </ControlWrap>
        ) : (
          <ControlAllMedicineWrap>
            <AddToShopButton
              onClick={() => addCatalogProduct({ shopId, productId })}
            >
              {console.log(shopId, productId)}
              Add to shop
            </AddToShopButton>
            <DetailsLink to="/medicine">Details</DetailsLink>
          </ControlAllMedicineWrap>
        )}
      </InfoWrap>
    </ItemWrap>
  );
};
