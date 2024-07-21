import { useSelector } from "react-redux";
import {
  Author,
  ItemWrap,
  Rating,
  ReviewsList,
  Testimonial,
} from "./Reviews.Styled";
import { selectProduct } from "../../store/products/selectors";
// import ReactPaginate from "react-paginate";
import { useState } from "react";
import { Pagination } from "../Pagination/Pagination";

export const Reviews = () => {
  const { reviews } = useSelector(selectProduct);
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;

  const indexOfLastItem = (currentPage + 1) * reviewsPerPage;
  const indexOfFirstItem = indexOfLastItem - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstItem, indexOfLastItem);
  const pageCount = Math.ceil(reviews.length / reviewsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div>
      <ReviewsList>
        {currentReviews.map((review) => (
          <ItemWrap key={review._id}>
            <Author>{review.name}</Author>
            <Rating>Rating:{review.rating}</Rating>
            <Testimonial>{review.testimonial}</Testimonial>
          </ItemWrap>
        ))}
      </ReviewsList>
      <Pagination
        arrey={reviews}
        itemsPerPage={reviewsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};
