import React from 'react'
import { Link } from 'react-router-dom';

export default function ListaDeProdutos({produtos}) {
  const renderProduto = (produto) => {
    return (
      <div className='produto' key={'produto_' + produto.id}>
        <Link to={'/detalhe/' + produto.id}>
          <img src={produto.foto} alt={'Foto do produto: ' + produto.nome}/>
        </Link>
        <p className='nome'>{produto.nome}</p>
        <p className='valor'>R$ {produto.valor ? produto.valor.toFixed(2) : '-'}</p>
        <button className='btn btn-primary'>Comprar</button>
      </div>
    );
  };

  return (
    <div className='listaDeProdutos'>
      { produtos.map(renderProduto) }
    </div>
  )
}



