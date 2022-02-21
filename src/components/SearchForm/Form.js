import TextField from "@mui/material/TextField";
import { FormSearch } from "./style";

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

export default Form;
