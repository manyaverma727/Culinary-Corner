import React from "react";

export default function Pagination({ currentPage, totalPages }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      
      <span className="text-sm text-gray-300">
        Page {currentPage} of {totalPages}
      </span>

    </div>
  );
}