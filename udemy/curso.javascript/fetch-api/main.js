fetch('index.html')
    .then(resposta => {
        if (resposta, status !== 200) throw new Error('ERRO 404')
    })
    .then(html => console.log(html))
    .catch(e => console.error(e))