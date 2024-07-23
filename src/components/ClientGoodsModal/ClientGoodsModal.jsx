import CloseSVG from "../../images/modal/CloseSVG";
import {
  CloseButton,
  GoodsItem,
  GoodsList,
  Img,
  ImgWrap,
  InfoWrap,
  MedicineBrief,
  MedicineName,
  MedicinePrice,
  Modal,
  MtdicineLink,
  Overlay,
  TextWrap,
  Title,
} from "./ClientGoodsModal.Styled";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../../store/statistics/selectors";
import { Link } from "react-router-dom";
import { setProduct } from "../../store/products/productsSlise";
// import { Title } from "../MedicineForm/MedicineForm.Styled";
// import { Modal } from "../DeleteMedicineModal/DeleteMedicineModal.Styled";

export const ClientGoodsModal = ({ setModal, email, name, spent }) => {
  const dispatch = useDispatch();
  const goods = useSelector(selectGoods);

  function handleClick(e) {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  }
  document.addEventListener("keydown", onWindowEscape);
  function onWindowEscape(e) {
    if (e.code === "Escape") {
      setModal(false);
      document.removeEventListener("keydown", onWindowEscape);
    }
  }

  function setInfo(params) {
    dispatch(setProduct(params));
    setModal(false);
  }

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <CloseButton onClick={() => setModal(false)}>
          <CloseSVG />
        </CloseButton>
        <Title>The client&apos;s goods</Title>
        <div>
          <div>
            <h4>Name</h4>
            <p>{name}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{email}</p>
          </div>
          <div>
            <h4>Spent</h4>
            <p>{spent}</p>
          </div>
        </div>
        <GoodsList>
          {goods.map((item) => (
            <GoodsItem key={item._id}>
              <MtdicineLink
                to="/medicine"
                onClick={() =>
                  setInfo({
                    photo: item.photo,
                    name: item.name,
                    price: item.price,
                    suppliers: item.suppliers,
                    _id: item._id,
                    description: item.description,
                    reviews: item.reviews,
                  })
                }
              >
                <ImgWrap>
                  <Img src={item.photo} alt="Medicine" />
                </ImgWrap>

                <InfoWrap>
                  <TextWrap>
                    <MedicineName>{item.name}</MedicineName>
                    <MedicineBrief>
                      {item.suppliers} {item.category}
                    </MedicineBrief>
                  </TextWrap>
                  <MedicinePrice>&#8372;{item.price}</MedicinePrice>
                </InfoWrap>
              </MtdicineLink>
            </GoodsItem>
          ))}
        </GoodsList>
        {/* <DeleteMedicineForm
          title={"Confirm deletion"}
          titleButton={"Confirm"}
          shopId={shopId}
          productId={productId}
          setModal={setModal}
          photo={photo}
          name={name}
          suppliers={suppliers}
        /> */}
      </Modal>
    </Overlay>
  );
};
