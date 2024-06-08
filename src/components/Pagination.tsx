/** @format */

interface IPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
function Pagination({currentPage, totalPages, onPageChange}: IPagination) {
  const pages = Array.from({length: totalPages}, (_, i) => i + 1);
  return (
    <>
      {pages.length !== 0 && (
        <ul className="pagination">
          <li>
            <a
              href="#"
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            >
              &lt;
            </a>
          </li>
          {pages.map((page) => (
            <li key={page} className={page === currentPage ? "active" : ""}>
              <a href="#" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={() =>
                onPageChange(Math.min(totalPages, currentPage + 1))
              }
            >
              &gt;
            </a>
          </li>
        </ul>
      )}
    </>
  );
}

export default Pagination;
