import { useSelector } from "react-redux";
import {
  Author,
  ItemWrap,
  Rating,
  ReviewsList,
  Testimonial,
} from "./Reviews.Styled";
import { selectProduct } from "../../store/products/selectors";
import ReactPaginate from "react-paginate";
import { useState } from "react";

export const Reviews = () => {
  const { reviews } = useSelector(selectProduct);

  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 4;

  const indexOfLastItem = (currentPage + 1) * reviewsPerPage;
  const indexOfFirstItem = indexOfLastItem - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstItem, indexOfLastItem);

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
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(0)}
              disabled={currentPage === 0}
            >
              «
            </button>
          </li>
          <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
            >
              &lt;
            </button>
          </li>
          <ReactPaginate
            previousLabel={""}
            nextLabel={""}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(reviews.length / reviewsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakLinkClassName={"page-link"}
            disabledClassName={"disabled"}
            // renderFirstButton={() => (
            //   <li className="page-item">
            //     <a
            //       onClick={() => setCurrentPage(0)}
            //       href="!#"
            //       className="page-link"
            //     >
            //       «
            //     </a>
            //   </li>
            // )}
            // renderLastButton={() => (
            //   <li className="page-item">
            //     <a
            //       onClick={() =>
            //         setCurrentPage(Math.ceil(reviews.length / reviewsPerPage) - 1)
            //       }
            //       href="!#"
            //       className="page-link"
            //     >
            //       »
            //     </a>
            //   </li>
            // )}
          />
          <li
            className={`page-item ${
              currentPage === Math.ceil(reviews.length / reviewsPerPage) - 1
                ? "disabled"
                : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(
                    prev + 1,
                    Math.ceil(reviews.length / reviewsPerPage) - 1
                  )
                )
              }
              disabled={
                currentPage === Math.ceil(reviews.length / reviewsPerPage) - 1
              }
            >
              &gt;
            </button>
          </li>
          <li
            className={`page-item ${
              currentPage === Math.ceil(reviews.length / reviewsPerPage) - 1
                ? "disabled"
                : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() =>
                setCurrentPage(Math.ceil(reviews.length / reviewsPerPage) - 1)
              }
              disabled={
                currentPage === Math.ceil(reviews.length / reviewsPerPage) - 1
              }
            >
              »
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
