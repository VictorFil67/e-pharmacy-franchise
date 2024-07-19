import { Author, ItemWrap, Rating, Testimonial } from "./Reviews.Styled";

export const Reviews = () => {
  return (
    <ItemWrap>
      <Author>{"Maria Tkachuk"}</Author>
      <Rating>Rating:{"4.8"}</Rating>
      <Testimonial>
        {
          "I recently used this medical platform to book an appointment with a specialist, and I was impressed by how easy and user-friendly the process was. Highly recommended!"
        }
      </Testimonial>
    </ItemWrap>
  );
};
