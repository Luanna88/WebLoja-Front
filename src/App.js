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
/*
  let produtos = [
    {id: 0, nome: 'Maçã Kg', valor: 10.0, foto: 'https://static1.squarespace.com/static/5b8edfa12714e508f756f481/5b901c270e2e720f73c99a8c/5bb650ee15fcc0b381896bad/1544795114405/?format=1500w'},
    {id: 1, nome: 'Caqui Kg', valor: 20.0, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/caqui-450x299[1]-1000x1000.jpg'},
    {id: 2, nome: 'Carambola Kg', valor: 5.0, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/carambola[1]-1000x1000.jpg'},
    {id: 3, nome: 'Uva Kg', valor: 8.0, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/uva[1]-1000x1000.jpg'},
    {id: 4, nome: 'Banana Kg', valor: 12.0, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/beneficio-fruta-banana-720x380[1]-1000x1000.jpg'},
    {id: 5, nome: 'Abacaxi Unid', valor: 7.0, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/captura_de_tela_2018-01-22_a_s_11.31.25[1]-500x500.png' },
    {id: 6, nome: 'Kiwi Kg', valor: 12.50, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/kiwi[1]-1000x1000.jpg'},
    {id: 7, nome: 'Mexirica Unid', valor: 2.0, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/extrafruti_produtos_mexerica-importada[1]-1000x1000.jpg'},
    {id: 8, nome: 'Abacate Unid', valor: 5.0, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/abacate-57279[1]-1000x1000.jpg'},
    {id: 9, nome: 'Morango Kg', valor: 20.50, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/oleo-essencia-morango-100ml-fruta-puro-essencia-massagem-D_NQ_NP_960102-MLB31202671230_062019-F[1]-1000x1000.jpg'},
    {id: 10, nome: 'Pera Kg', valor: 14.50, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/Pera[1]-1000x1000.jpg'},
    {id: 10, nome: 'Ameixa Kg', valor: 6.50, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/ameixa-fruta_645293734-1[1]-1000x1000.jpg'},
    {id: 10, nome: 'Figo Kg', valor: 10.50, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/figo-roxo-de-valinhos-muda-p-vasos-e-jardins-D_NQ_NP_968574-MLB29047506057_122018-F[1]-1000x1000.jpg'},
    {id: 10, nome: 'Graviola Unid', valor: 3.0, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/graviola[1]-1000x1000.jpg'},
    {id: 10, nome: 'Manga Unid', valor: 4.0, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/manga[1]-1000x1000.jpg'},
    {id: 10, nome: 'Mamão Unid', valor: 5.50, foto: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/19410[1]-1000x1000.jpg'}
  ];

  const [total, setTotal] = useState(0);
  const [carrinho, setCarrinho] = useState([]);

  const comprar = (p) => {
    setCarrinho([...carrinho, p]);
  };

  const remover = (indice) => {
    setCarrinho([...carrinho.slice(0, indice), ...carrinho.slice(indice+1)]);
  };

  return (
    <>
      <Cabecalho titulo='KiFruta'/>
      <ListaDeProdutos onComprar={comprar} produtos= {produtos} titulo='Produtos'/>
      <CarrinhoDeCompras itens={carrinho} onRemover={remover}/>
    </>
  );
}

*/