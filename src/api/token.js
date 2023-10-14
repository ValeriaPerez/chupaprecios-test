fetch('https://chupaprecios.com.mx/rest/V1/integration/admin/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'candidatoFront',
      password: 'Ch8t45t!f'
    })
  })
   .then(response => response.json())
   .then( json => console.log(JSON.stringify(json)))
   .catch( error => console.error(error))