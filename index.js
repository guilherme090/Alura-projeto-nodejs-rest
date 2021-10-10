const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/database/conexao');
const Tabelas = require('./infraestrutura/database/tabelas');

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