import React from "react";

const Pagination = ({ pagination, onPageChange }) => {
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= pagination.totalPages; i++) {
      pages.push(
        <span
          key={i}
          onClick={() => onPageChange(i)}
          className={pagination.page === i ? "active" : ""}
        >
          {i}
        </span>
      );
    }
    return pages;
  };

  return <div className="pagination">{renderPagination()}</div>;
};

export default Pagination;
