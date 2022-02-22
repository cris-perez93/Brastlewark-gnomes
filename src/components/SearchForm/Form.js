import TextField from "@mui/material/TextField";
import { FormSearch } from "./style";
import PropTypes from 'prop-types'

const Form = ({ gnomeName, handleChange }) => {
  return (
    <FormSearch>
      <label>Search by Name</label>
      <TextField
        variant="standard"
        type="text"
        name="name"
        value={gnomeName}
        onChange={handleChange}
      />
    </FormSearch>
  );
};

Form.propTypes = {
  gnomeName:PropTypes.string.isRequired,
  handleChange:PropTypes.func.isRequired
}

export default Form;
