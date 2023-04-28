import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import ListarCategoria from './components/categoria/listarCategoria/ListarCategoria';
import ListarProdutos from './components/produtos/listarProdutos/ListarProdutos';
import CadastroCategoria from './components/categoria/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import Loading from './components/statics/loading/Loading';
import CadastroProduto from './components/produtos/cadastroProdutos/CadastroProdutos';
import DeletarProduto from './components/produtos/deletarProdutos/DeletarProdutos';
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/categoria" element={<ListarCategoria />} />
          <Route path="/produtos" element={<ListarProdutos />} />
          <Route path="/formularioCategoria" element={<CadastroCategoria />} />
          <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/cadastrarProduto" element={<CadastroProduto />} />
          <Route path="/atualizarProduto/:id" element={<CadastroProduto />} />
          <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}
export default App
