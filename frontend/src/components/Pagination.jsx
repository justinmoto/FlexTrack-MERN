import { MdOutlineKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevPage = () => {
      onPageChange(currentPage - 1);
    };
  
    const handleNextPage = () => {
      onPageChange(currentPage + 1);
    };
  
    return (
      <div className="absolute inset-0 top-[60%] text-xl font-bold flex justify-center items-center sm:top-[126%] md:top-[130%]">
        <MdOutlineKeyboardDoubleArrowLeft onClick={handlePrevPage} disabled={currentPage === 1} className="mx-2 text-white"/>
        <span className="mx-2 text-white">
          Page {currentPage} of {totalPages}
        </span>
        <MdKeyboardDoubleArrowRight onClick={handleNextPage} disabled={currentPage === totalPages} className="mx-2 text-white"/>

      </div>
    );
  };

export default Pagination