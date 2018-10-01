import React from 'react';

const Page = ({ pageNumber, isActive, onChange }) => {
  return (
    <li className="page-item mr-1">
      <button
        className={`page-link ${isActive && 'button-outline'}`}
        onClick={onChange}
      >
        {pageNumber}
      </button>
    </li>
  );
};

export default Page;
