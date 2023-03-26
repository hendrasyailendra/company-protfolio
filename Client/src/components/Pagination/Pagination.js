import React from "react";
import "./pagination.css";
import ReactPaginate from "react-paginate";
const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        pageClassName="pagination-design"
        breakClassName="break-class"
        containerClassName="pagination"
        previousLinkClassName="pagination__link"
        nextLinkClassName="pagination__link"
        activeClassName="pagination__link--active"
        activeLinkClassName="active-link-text"
        disabledClassName="pagination__link--disabled"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        previousClassName="navigation-button"
        pageLinkClassName="selected-page"
        nextClassName="navigation-button"
      />
    </div>
  );
};
export default Pagination;
