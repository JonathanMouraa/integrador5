import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [lista, setLista] = useState([]);

  // adicionar nome
  const adicionarNome = () => {
    if (nome.trim() === "") return;

    setLista([...lista, nome]);
    setNome(""); // limpa input
  };

  // remover nome
  const removerNome = (index) => {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Nomes</h2>

      <input
        type="text"
        placeholder="Digite um nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      // botão adicionar 
      <button onClick={adicionarNome}>
        Adicionar
      </button>

      //lista e remover
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removerNome(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;