import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
// import { Items } from "./Items";
import { selectShops, selectTotal } from "../../store/shops/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  setPage,
  setPageCount,
  //   setpageCount,
} from "../../store/shops/shopSlise";

export const PaginatedItems = ({ itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useDispatch();
  const { startPage, endPage } = useSelector(selectShops);

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
  useEffect(() => {
    dispatch(setPageCount(pageCount));
  }, [dispatch, pageCount]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = startPage
      ? 0
      : endPage
      ? pageCount
      : (event.selected * itemsPerPage) % total;
    dispatch(setPage(event.selected + 1));
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    console.log(newOffset);
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
// import { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
// import { useDispatch, useSelector } from "react-redux";
// import { setPage, setPageCount } from "../../store/shops/shopSlise";
// import { selectShops, selectTotal } from "../../store/shops/selectors";

// export const PaginatedItems = ({ itemsPerPage }) => {
//   const [itemOffset, setItemOffset] = useState(0);
//   const dispatch = useDispatch();
//   const { startPage, endPage } = useSelector(selectShops);
//   const total = useSelector(selectTotal);
//   const pageCount = Math.ceil(total / itemsPerPage);

//   useEffect(() => {
//     dispatch(setPageCount(pageCount));
//   }, [dispatch, pageCount]);

//   useEffect(() => {
//     // Удаляем класс activePage у текущего активного элемента
//     const activeElement = document.querySelector(".pagination .activePage");
//     if (activeElement) {
//       activeElement.classList.remove("activePage");
//     }

//     // Добавляем класс activePage первому или последнему элементу списка li
//     if (startPage) {
//       const firstElement = document.querySelector(
//         ".pagination .page:first-child"
//       );
//       if (firstElement) {
//         firstElement.classList.add("activePage");
//       }
//     } else if (endPage) {
//       const lastElement = document.querySelector(
//         ".pagination .page:last-child"
//       );
//       if (lastElement) {
//         lastElement.classList.add("activePage");
//       }
//     } else {
//       const selectedElement = document.querySelector(
//         `.pagination .page:nth-child(${itemOffset / itemsPerPage + 1})`
//       );
//       if (selectedElement) {
//         selectedElement.classList.add("activePage");
//       }
//     }
//   }, [startPage, endPage, itemOffset, itemsPerPage]);

//   const handlePageClick = (event) => {
//     const newOffset = startPage
//       ? 0
//       : endPage
//       ? (pageCount - 1) * itemsPerPage
//       : (event.selected * itemsPerPage) % total;
//     dispatch(setPage(event.selected + 1));
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel=">"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={1}
//         marginPagesDisplayed={1}
//         pageCount={pageCount}
//         previousLabel="<"
//         renderOnZeroPageCount={null}
//         className="pagination"
//         pageClassName="page"
//         activeClassName="activePage"
//         previousClassName="previous"
//         nextClassName="next"
//         previousLinkClassName="previousLink"
//         nextLinkClassName="nextLink"
//       />
//     </>
//   );
// };
