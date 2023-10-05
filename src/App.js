import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Cabecalho from "./componentes/Cabecalho";
import ListaDeProdutos from "./componentes/ListaDeProdutos";
import CarrinhoDeCompras from "./componentes/CarrinhoDeCompras";
import DetalheProduto from "./componentes/DetalheProduto";
import FormProduto from "./componentes/FormProduto";
import PaginaNaoEncontrada from "./componentes/PaginaNaoEncontrada";
import { useEffect,useState } from "react";
import axios from "axios";
import { getProdutos,salvarProduto,excluirProduto } from "./backend";

function App() {
  const [produtos, setProdutos] = useState([]);

  const cadastrarProduto = async (form) => {
    await salvarProduto(form);
    setProdutos(await getProdutos());
  };

  const removerProduto = async (id) => {
    await excluirProduto(id);
    setProdutos(await getProdutos());
  };

  const [carrinho, setCarrinho] = useState([]); 
  function onComprar() {
    // Lógica da função
    console.log('Função onComprar foi chamada.');
  }

  // função chamada quando o componente for carregado
  useEffect(() => {
    getProdutos().then(prods => setProdutos(prods));
  }, []);

  return (
    <div className="container py-3">
    <Router>
      <Cabecalho/>
      <Routes>
        <Route path="/" exact={true} element={<ListaDeProdutos produtos={produtos}/>}/>
        <Route path="/novo" exact={true} element={<FormProduto onCadastrar={cadastrarProduto}/>}/>
        <Route path="/detalhe/:id" exact={true} element={<DetalheProduto onExcluir={removerProduto}/>}/>
        <Route path="*" element={<PaginaNaoEncontrada/>}/>
      </Routes>      
    </Router>
    </div>
  );
}

export default App;
