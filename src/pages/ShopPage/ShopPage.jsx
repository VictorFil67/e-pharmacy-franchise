import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
  selectShop,
  selectShopProducts,
} from "../../store/shops/selectors";
import {
  getAllProductsThunk,
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
  ProductList,
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
import { ProductItem } from "../../components/ProductItem/ProductItem";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { shopId } = useSelector(selectShop);
  const shop = useSelector(selectShop);
  const shopProducts = useSelector(selectShopProducts);
  const allProducts = useSelector(selectAllProducts);
  const [active, setactive] = useState("Drug store");
  console.log(shopProducts);

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
        toast.success(`The products of your shop are received`);
      })
      .catch(() => toast.error(`Ooops... Something went wrong!`));
  }, [dispatch, shopId]);

  useEffect(() => {
    dispatch(getAllProductsThunk())
      .unwrap()
      .then(() => {
        toast.success(`All the products are received`);
      })
      .catch(() => toast.error(`Ooops... Something went wrong!`));
  }, [dispatch, shopId]);

  // function getAllProducts() {
  //   dispatch(getAllProductsThunk())
  //     .unwrap()
  //     .then(() => {
  //       toast.success(`Here are all the products`);
  //       setactive("All medicine");
  //     })
  //     .catch(() => toast.error(`Ooops... Something went wrong!`));
  // }

  // function getShopProducts() {
  //   dispatch(getShopProductsThunk(shopId))
  //     .unwrap()
  //     .then(() => {
  //       toast.success(`Here are the products of your shop`);
  //       setactive("Drug store");
  //     })
  //     .catch(() => toast.error(`Ooops... Something went wrong!`));
  // }

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
      <ProductList>
        {active
          ? shopProducts.map((product) => (
              <ProductItem
                key={product._id}
                photo={product.photo}
                name={product.name}
                price={product.price}
                // product={product}
              />
            ))
          : allProducts.map((product) => (
              <ProductItem
                key={product._id}
                photo={product.photo}
                name={product.name}
                price={product.price}
                // product={product}
              />
            ))}
      </ProductList>
    </ShopPageWrap>
  );
};

export default ShopPage;
