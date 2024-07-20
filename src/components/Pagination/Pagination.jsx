import ReactPaginate from "react-paginate";
import { Edge, PaginationWrap } from "./Pagination.Styled";

export const Pagination = ({
  currentPage,
  pageCount,
  setCurrentPage,
  handlePageClick,
}) => {
  return (
    <nav>
      <PaginationWrap>
        {/* <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}> */}
        <Edge>
          <button
            className="page-link"
            onClick={() => setCurrentPage(0)}
            disabled={currentPage === 0}
          >
            «
          </button>
        </Edge>
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
          //   breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          //   containerClassName={"pagination"}
          className="pagination"
          //   activeClassName={"active"}
          activeClassName="activePage"
          //   pageClassName={"page-item"}
          pageClassName="page"
          //   pageLinkClassName={"page-link"}
          //   previousClassName={"page-item"}
          previousClassName="previous"
          //   previousLinkClassName={"page-link"}
          previousLinkClassName="previousLink"
          //   nextClassName={"page-item"}
          nextClassName="next"
          //   nextLinkClassName={"page-link"}
          nextLinkClassName="nextLink"
          //   breakLinkClassName={"page-link"}
          disabledClassName={"disabled"}
        />
        <li
          className={`page-item ${
            currentPage === pageCount - 1 ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1))
            }
            disabled={currentPage === pageCount - 1}
          >
            &gt;
          </button>
        </li>
        <li
          className={`page-item ${
            currentPage === pageCount - 1 ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage(pageCount - 1)}
            disabled={currentPage === pageCount - 1}
          >
            »
          </button>
        </li>
      </PaginationWrap>
    </nav>
  );
};
