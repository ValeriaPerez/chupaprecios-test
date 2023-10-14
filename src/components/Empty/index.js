const Empty = ({
  img = 'https://media.tenor.com/_BiwWBWhYucAAAAd/what-huh.gif',
  text = 'No se encontraron resultados',
}) => {
  return (
    <div>
      <p>{text}</p>
      <img src={img} className='App-empty' alt='empty' />
    </div>
  );
};

export default Empty;