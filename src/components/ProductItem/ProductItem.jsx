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
  MedicineBrand,
  MedicineName,
  TextWrap,
} from "./ProductItem.Styled";

export const ProductItem = ({ photo, name, price, suppliers, active }) => {
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
            <MedicineName>{name}</MedicineName>
            <MedicineBrand>{suppliers}</MedicineBrand>
          </TextWrap>
          <p>{price}</p>
        </DataWrap>
        {active === "Drug store" ? (
          <ControlWrap>
            <EditButton>Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
          </ControlWrap>
        ) : (
          <ControlAllMedicineWrap>
            <AddToShopButton>Add to shop</AddToShopButton>
            <DetailsLink to="/medicine">Details</DetailsLink>
          </ControlAllMedicineWrap>
        )}
      </InfoWrap>
    </ItemWrap>
  );
};
