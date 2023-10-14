import TextField from '@mui/material/TextField';

const Search = ({ setSearch }) => {
  return (
    <TextField
      onChange={(event) => {
        setSearch(event.target.value);
      }}
      fullWidth
      id='fullWidth'
      label='Escribe lo que estes buscando'
      variant='filled'
    />
  );
};

export default Search;
