export default function ListaDeProdutos({produtos, titulo, onComprar}) {
    const renderProduto = (p) => {
      return (
        <div className="produto">
          <img src={p.foto}/>
          <h3>{p.nome}</h3>
          <h5>R$ {p.valor.toFixed(2)}</h5>
          <button onClick={() => onComprar(p)}>Comprar</button>
        </div>
      );
    };
  
    return (
      <>
        <h2>{titulo}</h2>
        <div className="listaDeProdutos">
          {produtos.map(renderProduto)}
        </div>
      </>
    )
  }