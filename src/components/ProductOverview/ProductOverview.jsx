import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../../store/products/selectors";
import {
  AddToShopButton,
  DataWrap,
  ImgWrap,
  InfoWrap,
  ItemWrap,
  Medicine,
  MedicineBrand,
  ProductImg,
  TextWrap,
} from "./ProductOverview.Styled";
import { addCatalogProductThunk } from "../../store/products/operations";
import { toast } from "react-toastify";
import { getShopProductsThunk } from "../../store/shops/operations";

export const ProductOverview = () => {
  const {
    photo,
    name,
    price,
    suppliers,

    productId,
    shopId,
  } = useSelector(selectProduct);
  const dispatch = useDispatch();

  function addCatalogProduct({ shopId, productId }) {
    dispatch(addCatalogProductThunk({ shopId, productId }))
      .unwrap()
      .then(() => {
        toast.success(`The product has been added to your shop successfully!`);
        dispatch(getShopProductsThunk({ id: shopId }))
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
          <ProductImg src={photo} alt={name} />
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
        <AddToShopButton
          onClick={() => addCatalogProduct({ shopId, productId })}
        >
          Add to shop
        </AddToShopButton>
      </InfoWrap>
    </ItemWrap>
  );
};
