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
  ProductImg,
  TextWrap,
} from "./ProductItem.Styled";
import { addCatalogProductThunk } from "../../store/products/operations";
import { toast } from "react-toastify";
import { getShopProductsThunk } from "../../store/shops/operations";
import { createPortal } from "react-dom";
import { EditMedicineModal } from "../EditMedicineModal/EditMedicineModal";
import { useEffect, useState } from "react";
import { DeleteMedicineModal } from "../DeleteMedicineModal/DeleteMedicineModal";
import { setProduct } from "../../store/products/productsSlise";

export const ProductItem = ({
  photo,
  name,
  price,
  suppliers,
  active,
  productId,
  shopId,
  description,
  reviews,
}) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const prodactData = {
    photo,
    name,
    price,
    suppliers,
    active,
    productId,
    shopId,
    description,
    reviews,
  };

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
      .catch((err) =>
        toast.error(shopId ? err : "You need to create your own shop!")
      );
  }

  useEffect(() => {
    if (modal || deleteModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal, deleteModal]);

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
        {active === "Drug store" ? (
          <ControlWrap>
            <EditButton onClick={() => setModal(true)}>Edit</EditButton>
            <DeleteButton onClick={() => setDeleteModal(true)}>
              Delete
            </DeleteButton>
          </ControlWrap>
        ) : (
          <ControlAllMedicineWrap>
            <AddToShopButton
              onClick={() => addCatalogProduct({ shopId, productId })}
            >
              Add to shop
            </AddToShopButton>
            <DetailsLink
              to="/medicine"
              onClick={() => dispatch(setProduct(prodactData))}
            >
              Details
            </DetailsLink>
          </ControlAllMedicineWrap>
        )}
      </InfoWrap>
      {modal &&
        createPortal(
          <EditMedicineModal
            setModal={setModal}
            productId={productId}
            photo={photo}
            name={name}
            price={price}
            description={description}
            suppliers={suppliers}
          />,
          document.body
        )}
      {deleteModal &&
        createPortal(
          <DeleteMedicineModal
            setModal={setDeleteModal}
            shopId={shopId}
            productId={productId}
            photo={photo}
            name={name}
            price={price}
            description={description}
            suppliers={suppliers}
          />,
          document.body
        )}
    </ItemWrap>
  );
};
