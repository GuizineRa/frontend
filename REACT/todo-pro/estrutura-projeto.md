# Estrutura do Projeto To-Do Pro

1. **Qual arquivo contém os scripts do npm?**
   O arquivo `package.json`.

2. **Por que `node_modules` não deve ser enviado ao Git?**
   Porque é uma pasta muito pesada e com milhares de arquivos que podem ser facilmente reconstruídos a qualquer momento executando o comando `npm install`.

3. **Onde ficará o código principal?**
   Na pasta `src/`.

4. **Qual é o papel do `main.jsx`?**
   Servir como ponto de entrada da aplicação React, onde o componente raiz (App) é renderizado dentro do DOM real (`index.html`).

5. **Qual comando cria uma versão de produção?**
   O comando `npm run build`.