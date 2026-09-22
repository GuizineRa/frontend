import Header from "./components/Header";
import TarefaItem from "./components/TarefaItem";

function App(){
  return(
    <main className="app-container">
      <Header/>
      <section className="app-content">
        <p>Conteúdo principal em desenvolvimento</p>
        <TarefaItem
          titulo="Configurar ambiente"
          descricao="Instalar Node.js e VS Code"/>
          
        <TarefaItem
          titulo="Criar aplicação vite"
          descricao="usar o comando npm create"/>

      </section>
    </main>
  );
}

export default App;