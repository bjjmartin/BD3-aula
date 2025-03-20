const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

db['bd3-nosql-atv1'].find(
    function listarAlunoPorCpf(cpf) {
        const aluna = 
db.escola.findOne({cpf}, {cod_aluno: 0, _id: 0});
if (aluna) {
    print ('Colega encontrado pelo cpf ${cpf}:');
    printjson(aluna);
} else {
    print('Nenhum colega encontrado com o cpf ${cpf}.');
}
    }
);
listarAlunoPorCpf("00000000000");

