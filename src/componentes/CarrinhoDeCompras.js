import React from 'react'

export default function CarrinhoDeCompras({itens, onRemover}) {
    const renderItem = (i, indice) => {
        return (
            <li>{i.nome} - R$ {i.valor} - <button onClick={() => onRemover(indice)}>Remover</button></li>
        )
    };

    const  calculaTotal = () => {
        let total = 0;
        itens.forEach(i => total += i.valor);
        return total;
    };

    return (
    <>
        <h3>Carrinho de Compras:</h3>
        <ol>{itens.map(renderItem)}</ol>
        <h4>Total: R$ {calculaTotal()}</h4>
    </>
  )
}
