import React from 'react'
import { Link } from 'react-router-dom'

export default function Cabecalho() {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
          <span className="fs-4">Minha Loja</span>
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to="/novo">Novo Produto</Link>
        </nav>
      </div>
    </header>
  )
}