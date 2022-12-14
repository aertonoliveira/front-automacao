import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import ResetPassword from '../pages/ResetPassword';
import ConfirmMailPage from '../pages/ConfirmMailPage';
import NewPassword from '../pages/NewPassword';

import Dashboard from '../pages/Dashboard';
import Clientes from '../pages/Clientes';
import CadastroClientes from '../pages/Clientes/cadastro';
import Produtos from '../pages/Produtos';
import ProdutosVisualizar from '../pages/Produtos/ProdutosVisualizar';
import ContaBancaria from '../pages/ContaBancaria/index';
import RelatorioContratos from '../pages/Relatorio/RelatorioContratos';
import RelatorioAnalistasPlenosSenior from '../pages/Relatorio/RelatorioAnalistasPlenosSenior';
import Extrato from '../pages/Extrato';
import CadastroColaborador from '../pages/Clientes/cadastroColaborador';

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/resetar-senha" component={ResetPassword} />
      <Route path="/confirmar-solicitacao" component={ConfirmMailPage} />
      <Route path="/criar-nova-senha/:token" component={NewPassword} />
      <Route path="/cadastro-colaborador" component={CadastroColaborador} />

      

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/clientes" component={Clientes} isPrivate />
      <Route path="/cadastro-clientes" component={CadastroClientes} isPrivate />

      <Route path="/produtos" component={Produtos} isPrivate />
      <Route path="/produtos/visualizar/:id" component={ProdutosVisualizar} isPrivate />
      <Route path="/relatorio/contratos" component={RelatorioContratos} isPrivate />
      <Route path="/relatorio/analistas" component={RelatorioAnalistasPlenosSenior} isPrivate />

      <Route path="/conta-bancaria" component={ContaBancaria} isPrivate />
      <Route path="/extrato" component={Extrato} isPrivate />

    </Switch>
  );
}
