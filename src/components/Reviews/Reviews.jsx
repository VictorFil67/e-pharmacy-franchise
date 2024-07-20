import { useSelector } from "react-redux";
import {
  Author,
  ItemWrap,
  Rating,
  ReviewsList,
  Testimonial,
} from "./Reviews.Styled";
import { selectProduct } from "../../store/products/selectors";

export const Reviews = () => {
  const { reviews } = useSelector(selectProduct);
  return (
    <ReviewsList>
      {reviews.map((review) => (
        <ItemWrap key={review._id}>
          <Author>{review.name}</Author>
          <Rating>Rating:{review.rating}</Rating>
          <Testimonial>{review.testimonial}</Testimonial>
        </ItemWrap>
      ))}
    </ReviewsList>
  );
};
