import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchInput = (props) => {
  return (
    <TextField
      margin="normal"
      variant="outlined"
      label="Search by Name"
      fullWidth
      onChange={(event) => props.inputValue(event.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
