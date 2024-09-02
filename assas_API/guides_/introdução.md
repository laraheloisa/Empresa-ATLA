- _Introdução_
    -

- **Instituição de Pagamento e SCD autorizada e regulada pelo Banco Central do Brasil.**

- **Automatização dos processos de cobrança**

- **Integração de API**

* *mecanismo adicinal "Whitelist de IPs"*

* _Receitas na conta_ 

_Sempre que sua conta recebe um pagamento, uma cobrança é atrelada a ele e a receita é adicionada ao seu extrato. A mesma coisa acontece para qualquer outra receita que entre na sua conta, onde o Asaas cria cobranças automaticamente._


- _Integração White label_
    -

**Esse processo permite que você crie contas Asaas para seus próprios clientes, de forma que cada um deles tenha sua própria conta, emita cobranças em seu próprio nome e tenha uma gestão individualizada sobre todos os pagamentos. Com White Label você pode usufruir de vários recursos do Asaas**

***O cliente não sai da sua plataforma em nenhum momento e nem enxerga a marca do Asaas, apenas a sua.***

- Criação de cobranças para recebimentos em Pix, cartão e boleto;
- Criação da carnês;
- Pagamentos recorrentes (assinaturas);
- Sistema antifraude em todas as transações;
- Automação de notas fiscais;
- Taxas aplicadas apenas em liquidação de faturas;
- Antecipação de recebíveis;
- Links de pagamentos;
- Pagamento de contas;


_COMO TESTAR MINHA INTEGRAÇÃO_

- Sandbox --> receber cobranças fictícias e testar suas interações e (tipo de Endpoints) --> Webhooks ( é uma técnica usada para permitir que um aplicativo forneça informações em tempo real para outro aplicativo. )

- Cobranças_/Introdução
    -

 - PASSO 1 -- crie um cliente. ID do customer
 - PASSO 2 -- criar a cobrança (pode ser via boleto, pix, cartão de crédito, etc) o cliente também pode escolher a forma de pagamento. .......

 **NOTIFICAÇÃES DE COBRANÇAS** - Notificações que o cliente irá receber sobre o determinado pagamento. 

CRIAÇÃO DE UM CLIENTE E A GERAÇÃO DE UMA COBRANÇA
- 

''''''
HTTP

    POST /clientes
    Host: api.exemplo.com
    Content-Type: application/json
    Authorization: Bearer seu_token_aqui

    {
    "nome": "João da Silva",
    "email": "joao.silva@example.com",
    "telefone": "123456789",
    "endereco": "Rua Exemplo, 123"
    }

''''''
resposta 

json


    {
        "id": "cus_000005219613",
        "nome": "João da Silva",
        "email": "joao.silva@example.com"
    }


CRIAR COBRANÇA

Com o identificador do cliente
(cus_000005219613), você fará uma requisição POST para o endpoint de criação de cobrança.
* Dados Necessários: Inclua o identificador do cliente, valor da cobrança, descrição, e outras informações pertinentes.




        {
        "id": "inv_000012345678",
        "cliente_id": "cus_000005219613",
        "valor": 10000,
        "descricao": "Serviço de Consultoria",
        "vencimento": "2024-09-15",
        "status": "pendente"
        }


    resposta


        {
        "id": "inv_000012345678",
        "cliente_id": "cus_000005219613",
        "valor": 10000,
        "descricao": "Serviço de Consultoria",
        "vencimento": "2024-09-15",
        "status": "pendente"
        }






