import Button from "@mui/material/Button";
import { Navigation } from "./style";
import PropTypes from 'prop-types'


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

Pagination.propTypes = {
  currentPage:PropTypes.node.isRequired,
  prevPage:PropTypes.func.isRequired,
  nextPage:PropTypes.func.isRequired,
  
}


export default Pagination;
