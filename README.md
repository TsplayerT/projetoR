### projeto R  
  
> nenhuma descrição inserida no momento  
  
---  
  
### Padrão de nomenclaturas   
  
Arquivos devem seguintes as regras abaixo:  
- Possuir nome simples
- Não deve conter preposições
- Estar no formato [lowerCamelCase](https://pt.wikipedia.org/wiki/CamelCase)
- Escritos na língua inglesa (en-US)
- Ser único
  
---  
  
### Formalização de comentários    
  
> devem ser escritos no idioma portguês (pt-BR)
  
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
