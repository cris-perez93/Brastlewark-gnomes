import Button from "@mui/material/Button";
import { Navigation } from "./style";

const Pagination = ({ currentPage, prevPage, nextPage }) => {
  return (
    <Navigation>
      {currentPage > 1 ? (
        <Button variant="contained" onClick={prevPage}>
          Prev
        </Button>
      ) : null}
      <Button variant="contained" onClick={nextPage}>
        Next
      </Button>
    </Navigation>
  );
};

export default Pagination;
