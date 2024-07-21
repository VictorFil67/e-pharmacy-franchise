import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // selectAllProducts,
  selectShop,
  // selectShopProducts,
  selectShops,
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
  // Edge,
  EditLink,
  EditWrap,
  FilterWrap,
  InfoWrap,
  InputFilter,
  InputWrap,
  // Pagination,
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
// import { PaginatedItems } from "../../components/Pagination/PaginatedItems";
import CategoriesFilter from "../../components/CategoriesFilter/CategoriesFilter";
import FilterSvg from "../../images/shopImg/FilterSvg";
import { setPage, setShopPage } from "../../store/shops/shopSlise";
import { Pagination } from "../../components/Pagination/Pagination";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { shopId } = useSelector(selectShop);
  const shop = useSelector(selectShop);
  const {
    shopProducts,
    allProducts,
    total,
    shopTotal,
    page,
    shopPage,
    // pageCount,
    // shopPageCount,
    // startPage,
    // endPage,
    // shopStartPage,
    // shopEndPage,
  } = useSelector(selectShops);
  const [active, setactive] = useState("Drug store");
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState("");
  const [limit, setlimit] = useState(12);
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    window.innerWidth <= 767 ? setlimit(8) : setlimit(12);
  }, []);

  const queryFilter = {
    category: selectedOption?.value,
    q: value,
    limit,
    page: 1,
  };

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
    dispatch(getShopProductsThunk({ id: shopId, limit, page: shopPage }))
      .unwrap()
      .then(() => {
        toast.success(`The products of your shop are received`);
      })
      .catch(() => toast.error(`Ooops... Something went wrong!`));
  }, [dispatch, shopId, limit, shopPage]);

  useEffect(() => {
    const query = { ...queryFilter, limit, page };
    dispatch(getAllProductsThunk(query))
      .unwrap()
      .then(() => {
        toast.success(`All the products are received`);
      })
      .catch(() => toast.error(`Ooops... Something went wrong!`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, limit, page]);

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

  const pageCount =
    active === "All medicine"
      ? Math.ceil(total / limit)
      : Math.ceil(shopTotal / limit);
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  useEffect(() => {
    active === "All medicine"
      ? dispatch(setPage(currentPage + 1))
      : dispatch(setShopPage(currentPage + 1));
  }, [dispatch, currentPage, active]);

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
            onClick={() => dispatch(getAllProductsThunk(queryFilter))}
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
                description={product.description}
                reviews={product.reviews}
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
                description={product.description}
                reviews={product.reviews}
              />
            ))}
      </ProductList>
      {/* {(active === "Drug store" && shopTotal > limit) ||
        (active === "All medicine" && total > limit && ( */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
      {/* ))} */}
      {modal &&
        createPortal(<MedicineModal setModal={setModal} />, document.body)}
    </ShopPageWrap>
  );
};

export default ShopPage;
