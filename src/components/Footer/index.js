import {
  Stack,
} from '@mui/material';

const Footer = ({
  img = "https://media.tenor.com/_BiwWBWhYucAAAAd/what-huh.gif",
  text = "No se encontraron resultados",
}) => {
  return (
    <Stack mt={2}>
      <p>{text}</p>
      <img src={img} className="App-empty" alt="empty" />
    </Stack>
  );
};

export default Footer;
