import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShop } from "../../store/shops/selectors";
import {
  getShopProductsThunk,
  getShopThunk,
} from "../../store/shops/operations";
import { toast } from "react-toastify";
import {
  AddMedicine,
  ContactsWrap,
  DataWrap,
  EditLink,
  EditWrap,
  InfoWrap,
  ProductsBtn,
  ProductsBtnWrap,
  ShopName,
  ShopPageWrap,
  ShopWrap,
  Text,
  TextSpan,
  TextWrap,
} from "./ShopPage.Styled";
import AdressSvg from "../../images/shopImg/AdressSvg";
import PhoneSvg from "../../images/shopImg/PhoneSvg";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { shopId } = useSelector(selectShop);
  const shop = useSelector(selectShop);
  const [active, setactive] = useState("Drug store");

  useEffect(() => {
    dispatch(getShopThunk(shopId))
      .unwrap()
      .then(() => {
        toast.success(`Welcome to your own shop!`);
      })
      .catch(() => toast.error(`Ooops... Something went wrong!`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getShopProductsThunk(shopId))
      .unwrap()
      .then(() => {
        toast.success(`Here are the products of your shop`);
      })
      .catch(() => toast.error(`Ooops... Something went wrong!`));
  }, [dispatch, shopId]);

  return (
    <ShopPageWrap>
      <ShopWrap>
        <ShopName>{shop.shopName}</ShopName>
        <InfoWrap>
          <DataWrap>
            <Text>
              Owner: <TextSpan>{shop?.shopOwnerName}</TextSpan>
            </Text>
            <ContactsWrap>
              <TextWrap>
                <AdressSvg />
                <Text>
                  {shop?.shopCity} {shop?.shopStreet}
                </Text>
              </TextWrap>
              <TextWrap>
                <PhoneSvg />
                <Text>{shop?.shopPhone}</Text>
              </TextWrap>
            </ContactsWrap>
          </DataWrap>
          <EditWrap>
            <EditLink to="/edit-shop" aria-label="Edit shop">
              Edit data
            </EditLink>
            <AddMedicine>Add medicine</AddMedicine>
          </EditWrap>
        </InfoWrap>
        <ProductsBtnWrap>
          <ProductsBtn
            onClick={() => setactive("Drug store")}
            $act={active === "Drug store"}
          >
            Drug store
          </ProductsBtn>
          <ProductsBtn
            onClick={() => setactive("All medicine")}
            $act={active === "All medicine"}
          >
            All medicine
          </ProductsBtn>
        </ProductsBtnWrap>
      </ShopWrap>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </ShopPageWrap>
  );
};

export default ShopPage;
