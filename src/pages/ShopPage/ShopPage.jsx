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
  ButtonFilter,
  ContactsWrap,
  DataWrap,
  EditLink,
  EditWrap,
  FilterWrap,
  InfoWrap,
  InputFilter,
  InputWrap,
  ProductList,
  ProductsBtn,
  ProductsBtnWrap,
  SearchSvgStyled,
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
import { createPortal } from "react-dom";
import { MedicineModal } from "../../components/MedicineModal/MedicineModal";
import { PaginatedItems } from "../../components/Pagination/PaginatedItems";
import CategoriesFilter from "../../components/CategoriesFilter/CategoriesFilter";
import FilterSvg from "../../images/shopImg/FilterSvg";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { shopId } = useSelector(selectShop);
  const shop = useSelector(selectShop);
  const shopProducts = useSelector(selectShopProducts);
  const allProducts = useSelector(selectAllProducts);
  const [active, setactive] = useState("Drug store");
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState("");
  const [modal, setModal] = useState(false);
  const query = { category: selectedOption?.value, q: value };
  console.log(query);

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
    dispatch(getAllProductsThunk(query))
      .unwrap()
      .then(() => {
        toast.success(`All the products are received`);
      })
      .catch(() => toast.error(`Ooops... Something went wrong!`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
            <AddMedicine onClick={() => setModal(true)}>
              Add medicine
            </AddMedicine>
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
      {active === "All medicine" && (
        <FilterWrap>
          <CategoriesFilter
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <InputWrap>
            <InputFilter
              type="text"
              placeholder="Search medicine"
              onChange={handleChange}
            />
            <SearchSvgStyled />
          </InputWrap>
          <ButtonFilter
            type="submit"
            onClick={() => dispatch(getAllProductsThunk(query))}
          >
            <FilterSvg />
            <span>Filter</span>
          </ButtonFilter>
        </FilterWrap>
      )}
      <ProductList>
        {active === "Drug store"
          ? shopProducts.map((product) => (
              <ProductItem
                key={product._id}
                photo={product.photo}
                name={product.name}
                price={product.price}
                suppliers={product.suppliers}
                active={active}
                shopId={shopId}
                productId={product._id}
              />
            ))
          : allProducts.map((product) => (
              <ProductItem
                key={product._id}
                photo={product.photo}
                name={product.name}
                price={product.price}
                suppliers={product.suppliers}
                active={active}
                shopId={shopId}
                productId={product._id}
              />
            ))}
      </ProductList>
      <PaginatedItems
        itemsPerPage={5}
        //  active={active} shopId={shopId}
      />
      {modal &&
        createPortal(<MedicineModal setModal={setModal} />, document.body)}
    </ShopPageWrap>
  );
};

export default ShopPage;
