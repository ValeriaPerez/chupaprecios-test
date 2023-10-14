import { Stack, Container, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import MailIcon from '@mui/icons-material/Mail';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import pdf from '../../Valeria_CV.pdf';


const Footer = () => {
  return (
    <Stack mt={2} className='Footer'>
      <Container>
        <Typography gutterBottom sx={{ fontSize: 16, color: 'white' }} variant='p' component='p' color='text.secondary'>
          <strong>Valeria Pérez Jaimes</strong>
        </Typography>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="flex-start"
          mb={2}
          mt={2}
          spacing={1}
        >
          <LinkedInIcon></LinkedInIcon> <span>LinkedIn: <a target='_blank' href='https://www.linkedin.com/in/vpjaimes/' rel="noreferrer">https://www.linkedin.com/in/vpjaimes/</a></span>
        </Stack>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="flex-start"
          mb={2}
          mt={2}
          spacing={1}
        >
           <SimCardDownloadIcon></SimCardDownloadIcon> <span> Descargar CV: <a target='_blank' href={pdf} download rel="noreferrer">Valeria CV</a></span>
        </Stack>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="flex-start"
          mb={2}
          mt={2}
          spacing={1}
        >
           <MailIcon></MailIcon> <span> Contacto: <a target='_blank' href="mailto:valeria.pjaimes@gmail.com" rel="noreferrer">valeria.pjaimes@gmail.com</a></span>
        </Stack>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="flex-start"
          mb={2}
          mt={2}
          spacing={1}
        >
           <PhonelinkRingIcon></PhonelinkRingIcon> <span> Teléfono: 55 85761173</span>
        </Stack>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="flex-start"
          mb={2}
          mt={2}
          spacing={1}
        >
          <WhatsAppIcon></WhatsAppIcon> <span> WhatsApp: <a target='_blank' href="https://wa.me/525585761173" rel="noreferrer">Escribir un mensaje en WhatsApp</a></span>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
