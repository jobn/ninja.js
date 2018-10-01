import React from 'react';

const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  return (
    <li className="page-item mr-1">
      <button
        className={`page-link ${currentPageNumber === pageNumber && 'button-outline'}`}
        onClick={(event) => {
          event.preventDefault();
          onChange(pageNumber);
        }}
      >
        {pageNumber + 1}
      </button>
    </li>
  );
};

export default Page;
