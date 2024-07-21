import ReactPaginate from "react-paginate";
import { Edge, PaginationWrap, Transit } from "./Pagination.Styled";

export const Pagination = ({
  currentPage,
  pageCount,
  setCurrentPage,
  handlePageClick,
}) => {
  return (
    <nav>
      <PaginationWrap>
        <Edge onClick={() => setCurrentPage(0)} disabled={currentPage === 0}>
          <span>&#171;</span>
        </Edge>
        <Transit
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          <span> &lt;</span>
        </Transit>
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          className="pagination"
          activeClassName="activePage"
          pageClassName="page"
          disabledClassName={"disabled"}
          forcePage={currentPage} //force sets current page
        />
        <Transit
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1))
          }
          disabled={currentPage === pageCount - 1}
        >
          <span>&gt;</span>
        </Transit>
        <Edge
          onClick={() => setCurrentPage(pageCount - 1)}
          disabled={currentPage === pageCount - 1}
        >
          <span>»</span>
        </Edge>
      </PaginationWrap>
    </nav>
  );
};
