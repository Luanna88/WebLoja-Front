import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function FormProduto({onCadastrar}) {
  const formVazio = () => {
    return {
      nome: '',
      valor: 0.0,
      foto: ''
    };
  };

  const navigate = useNavigate();
  const [form, setForm] = useState(formVazio());

  const setValor = (evento) => {
    setForm({...form, [evento.target.name]: evento.target.value});
  };

  const cadastrarProduto = (e) => {
    e.preventDefault();
    onCadastrar(form).then(() => {
      navigate('/');
    });
  };

  return (
    <form onSubmit={cadastrarProduto}>
      <div className="mb-3">
        <label className="form-label">Nome:</label>
        <input name="nome" type="text" value={form.nome} onChange={setValor} className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Valor:</label>
        <input name="valor" type="number" value={form.valor} onChange={setValor} className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Foto:</label>
        <input name="foto" type="text" value={form.foto} onChange={setValor} className="form-control"/>
      </div>
      <button className='btn btn-primary'>Cadastrar</button>
    </form>
  )
}



