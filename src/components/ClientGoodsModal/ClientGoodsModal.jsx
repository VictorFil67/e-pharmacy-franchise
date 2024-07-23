import CloseSVG from "../../images/modal/CloseSVG";
import {
  ClientDataText,
  ClientDataTitle,
  ClientInfo,
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
import {
  selectClientInfo,
  selectGoods,
} from "../../store/statistics/selectors";
import { setProduct } from "../../store/products/productsSlise";
import { useEffect, useState } from "react";

export const ClientGoodsModal = ({ setModal }) => {
  const dispatch = useDispatch();
  const goods = useSelector(selectGoods);
  const { name, email, spent } = useSelector(selectClientInfo);
  const [laptop, setLaptop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    function handleSize() {
      setLaptop(window.innerWidth >= 768);
    }
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const newEmail = !laptop ? email.slice(0, 12) + "..." : email;

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
        <ClientInfo>
          <div>
            <ClientDataTitle>Name</ClientDataTitle>
            <ClientDataText>{name}</ClientDataText>
          </div>
          <div>
            <ClientDataTitle>Email</ClientDataTitle>
            <ClientDataText>{newEmail}</ClientDataText>
            {console.log(newEmail)}
          </div>
          <div>
            <ClientDataTitle>Spent</ClientDataTitle>
            <ClientDataText>{spent}</ClientDataText>
          </div>
        </ClientInfo>
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
      </Modal>
    </Overlay>
  );
};
