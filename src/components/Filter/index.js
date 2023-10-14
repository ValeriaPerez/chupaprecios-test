import {
  Stack,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';

const FilterStore = ({
  store,
  setStore,
}) => {
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
    >
      <FormControl variant='filled'  sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='demo-simple-select-standard-label'>Estatus</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={store}
          onChange={(e) => setStore(e.target.value)}
          label='Status'
        >
          <MenuItem value={'amazon'}>Amazon</MenuItem>
          <MenuItem value={'ebay'} disabled>eBay</MenuItem>
          <MenuItem value={'waltmart'}>Waltmart</MenuItem>
          <MenuItem value={'homedepot'}>Home Depot</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default FilterStore;
