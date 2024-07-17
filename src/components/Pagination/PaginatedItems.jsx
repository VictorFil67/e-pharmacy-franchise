import { useState } from "react";
import ReactPaginate from "react-paginate";
// import { Items } from "./Items";
import { selectTotal } from "../../store/shops/selectors";
import { useSelector } from "react-redux";

export const PaginatedItems = ({ itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const total = useSelector(selectTotal);
  console.log(total);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(total / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % total;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      {/* <Items currentItems={currentItems} active={active} shopId={shopId} /> */}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="pagination"
        pageClassName="page"
        activeClassName="activePage"
        previousClassName="previous"
        nextClassName="next"
        previousLinkClassName="previousLink"
        nextLinkClassName="nextLink"
      />
    </>
  );
};
