# Consumo-de-dados-por-APIs

## Proposta

**A Câmara disponibiliza dados abertos sobre a atual legislatura. Você pode acessá-los através do link:** **https://dadosabertos.camara.leg.br/swagger/api.html**

**Crie uma interface que permita selecionar um partido político em uma caixa de seleção e, ao selecioná-lo, exiba os dados de todos os seus parlamentares da atual legislatura, em uma SPA (single page application).**

- **Os partidos devem ser obtidos através da API, consumida em json.**
- **Os parlamentares devem ser obtidos através da API, consumida em json.**

## Linguagem

Fiz tudo em javascript puro pois, tirando Python, foi a única linguagem que tive contato nos últimos meses e é a que mais tenho domínio, estou enferrujado com Vue e React então decidi não usar nenhum deles devido ao limite de tempo.

## Desafios
Fazia muito tempo desde a última vez que trabalhei com API então perdi alguns minutos reaprendendo. O link não foi claro em relação ao url da requisição ou simplesmente não estava funcionando. Encontrei outro URL (https://dadosabertos.camara.leg.br/api/v2) ao fazer algumas requisições falhas pelo Insomnia que me retornava a informação de que o CORS poderia estar bloqueando minha requisição.