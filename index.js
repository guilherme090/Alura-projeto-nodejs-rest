const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect(erro => {
    if(erro) {
        console.log(erro);
    } else{
        console.log('Banco de dados conectado com sucesso.');

        Tabelas.init(conexao);
        app.listen(3000, () => console.log('Servidor rodando na porta 3000.'));
    }
});
const app = customExpress();

app.get('/', (req, res) => res.send('Servidor rodando, tudo ok!'));