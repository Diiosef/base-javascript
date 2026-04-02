const http = require('http');

const server = http.createServer((req, res) => {

if (req.url === '/') {
    res.write('Pagina inicial');

} else if (req.url === '/Sobre') {
    res.write('Pagina Sobre');

} else if (req.url === '/Contato') {
    res.write('Pagina Contato');

} else {
    res.write('Pagina não encontrada');
}

res.end()
});    

server.listen(3000);