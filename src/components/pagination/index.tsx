import React from "react";

import { Button } from "@/src/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div>
      <Button onClick={handlePrevClick} disabled={currentPage === 1}>
        Назад
      </Button>
      <span className={"mx-10"}>
        {currentPage} из {totalPages}
      </span>
      <Button onClick={handleNextClick} disabled={currentPage === totalPages}>
        Далее
      </Button>
    </div>
  );
};

export default Pagination;
