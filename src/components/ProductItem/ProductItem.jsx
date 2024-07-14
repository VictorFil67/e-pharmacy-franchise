import {
  ControlWrap,
  DataWrap,
  DeleteButton,
  EditButton,
  ImgWrap,
  InfoWrap,
  ItemWrap,
  MedicineBrand,
  MedicineName,
  TextWrap,
} from "./ProductItem.Styled";

export const ProductItem = ({ photo, name, price }) => {
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
            <MedicineBrand>Framing (Wood)</MedicineBrand>
          </TextWrap>
          <p>{price}</p>
        </DataWrap>
        <ControlWrap>
          <EditButton>Edit</EditButton>
          <DeleteButton>Delete</DeleteButton>
        </ControlWrap>
      </InfoWrap>
    </ItemWrap>
  );
};
