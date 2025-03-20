const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

db['bd3-nosql-atv1'].insertMany(
    [
        {
          cod_aluno: 1,
          cod_turma: 10,
          nome: "Bruna",
          cpf: "989.557.020-19",
          rg: "47.622.337-4",
          telefone_aluno: "98808-6876",
          telefone_responsavel: "98469-1835",
          email: "bruna@email.com",
          data_nascimento: ("2005-02-5")
        },
        {
          cod_aluno: 2,
          cod_turma: 11,
          nome: "Matilda",
          cpf: "019.707.540-10",
          rg: "10.327.579-4",
          telefone_aluno: "96799-4482",
          telefone_responsavel: "98271-3667",
          email: "matilda@email.com",
          data_nascimento: ("2004-07-1")
        },
        {
          cod_aluno: 3,
          cod_turma: 12,
          nome: "Petter",
          cpf: "047.847.830-59",
          rg: "34.165.931-9",
          telefone_aluno: "98456-8215",
          telefone_responsavel: "97357-5757",
          email: "petter@email.com",
          data_nascimento: ("2005-11-2")
        },
        {
          cod_aluno: 4,
          cod_turma: 13,
          nome: "igotterson",
          cpf: "364.478.190-76",
          rg: "35.316.640-6",
          telefone_aluno: "99175-5560",
          telefone_responsavel: "97152-8772",
          email: "igotterson@email.com",
          data_nascimento: ("2003-05-3")
        },
        {
          cod_aluno: 5,
          cod_turma: 14,
          nome: "Karinny",
          cpf: "896.330.560-04",
          rg: "14.430.656-6",
          telefone_aluno: "97455-8695",
          telefone_responsavel: "98268-1142",
          email: "karinny@email.com",
          data_nascimento: ("2006-01-2")
        },
        {
          cod_aluno: 6,
          cod_turma: 15,
          nome: "Giovana",
          cpf: "252.253.090-97",
          rg: "28.425.282-7",
          telefone_aluno: "98150-7611",
          telefone_responsavel: "99256-6576",
          email: "giovana@email.com",
          data_nascimento: ("2003-09-22")
        },
        {
          cod_aluno: 7,
          cod_turma: 16,
          nome: "Xi",
          cpf: "620.905.820-57",
          rg: "21.741.595-7",
          telefone_aluno: "98881-8376",
          telefone_responsavel: "97525-5778",
          email: "xixi@email.com",
          data_nascimento: ("2004-12-25")
        },
        {
          cod_aluno: 8,
          cod_turma: 17,
          nome: "Fabiana",
          cpf: "863.710.630-73",
          rg: "20.815.734-7",
          telefone_aluno: "97363-0449",
          telefone_responsavel: "99738-2026",
          email: "fabiana@email.com",
          data_nascimento: ("2002-07-28")
        },
        {
          cod_aluno: 9,
          cod_turma: 18,
          nome: "Laura",
          cpf: "543.336.420-86",
          rg: "35.125.371-3",
          telefone_aluno: "99431-1166",
          telefone_responsavel: "98146-4202",
          email: "laura@email.com",
          data_nascimento: ("2005-06-30")
        },
        {
          cod_aluno: 10,
          cod_turma: 19,
          nome: "MatheusSiqueira",
          cpf: "777.421.770-30",
          rg: "21.355.491-4",
          telefone_aluno: "99361-6730",
          telefone_responsavel: "99583-1680",
          email: "siqueira@email.com",
          data_nascimento: ("2003-04-11")
        }
      ]
    )
      