### projeto R  
  
> A proposta desse projeto é simplificar e abranger todas as formas de jogar [RPG](https://pt.wikipedia.org/wiki/Role-playing_game) além de facilitar a criação de sistemas, campanhas, fichas e quaisquer conteúdo imersivo nesse universo de interpretação de papéis e narrações históricas  
  
---  
  
### Norma de identação e organização de linhas  
  
- Identação  
  
| Resultado | Escrita |
| --- | --- |
| ❌ | ![identacaoErrada](https://i.imgur.com/1aU9IC5.png) |
| ✔️ | ![identacaoCerta](https://i.imgur.com/nR0Ql7L.png) |
  
Observe os espaçamentos, depois do cabeçalho, entre a propriedade e o valor, também antes da propriedade 
  
---  
  
- Quebra de linhas  
  
| Resultado | Forma |
| --- | --- |
| ❌ | ![quebraLinhaErrada](https://i.imgur.com/UTfOCn0.png) |
| ✔️ | ![quebraLinhaCerta](https://i.imgur.com/RXUmgTl.png) |
  
É recomendado não fazer quebras de linhas para não poluir a tela e diminuir o uso de linhas  
  
---  
  
### Padrão de nomenclaturas   
  
**Todas as definições de nomes** devem seguir as regras abaixo:  
- Possuir nome simples  
- Não deve conter preposições e artigos  
- Escritos na língua portuguesa (pt-BR)  
- Ser único  
  
**Classes**, **Enum**, **Interface**, **funções** possuem essas regras adicionais abaixo:
- Estar no formato [UpperCamelCase](https://pt.wikipedia.org/wiki/CamelCase)  
  
**Arquivos**, **parâmetros** e **variáveis** possuem essas regras adicionais abaixo:  
- Estar no formato [lowerCamelCase](https://pt.wikipedia.org/wiki/CamelCase)  
  
---  
  
### Formalização de comentários    
  
Devem ser escritos no idioma portguês (pt-BR)
  
---  
  
### Semântica de mensagens do controle de versão _(commit)_  

Formato: `<tipo> (<escopo>): <assunto>`

`<escopo>` é opcional

Exemplo

```
 feat: adicionando função de botões
^ -- ^  ^ ---------------------- ^
|       |
|       + -> Resumo no tempo presente, normalmente no gerúndio.
|
+ -------> Tipo: chore, docs, feat, fix, refactor, style ou test.
```

Mais exemplos:

- `feat`: (novo recurso para o usuário, não um novo recurso para script de construção)
- `fix`: (correção de bug para o usuário, não uma correção para um script de construção)
- `docs`: (mudanças na documentação)
- `style`: (formatação, ponto e vírgula ausente, etc; sem alteração do código de produção)
- `refactor`: (refatorando o código de produção, por exemplo, renomeando uma variável)
- `test`: (adicionando testes ausentes, testes de refatoração; sem alteração do código de produção)
- `chore`: (atualizando tarefas grunt etc; sem alteração do código de produção)

Referências:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html

Fonte: https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
