import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';
import { create } from 'domain';


// Generate Order Data
function createData(idUsuario: number, status: string, NumeroMatricula: string, Nome: string , Telefone: string, TipoUsuario: string , Departamento: string , Email: string) {
  return { idUsuario, status, NumeroMatricula, Nome, Telefone, TipoUsuario, Departamento, Email };
}

const rows = [
  createData(
    1,
    'Ativo',
    '123',
    'João da Silva',
    '14998765432',
    'ADM Prefeitura',
    'Prefeitura',
    'joao@gmail.com'
  ),
  createData(
    2,
    'Ativo',
    '456',
    'Maria da Silva',
    '14998765432',
    'Responsavel pelo Local',
    'Centro Esportivo',
    'maria@gmail.com'
  ),
    createData(
        3,
        'Inativo',
        '789',
        'José da Silva',
        '14998765432',
        'Segurança',
        'Prefeitura',
        'jose@gmail.com'
    ),
    createData(
        4,
        'Ativo',
        '159',
        'Carlos da Silva',
        '14998765432',
        'Segurança Viatura',
        'Prefeitura',
        'carlos@gmail.com'
    ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function ListSituation() {
  return (
    <React.Fragment>
      <Title>Lista de Recursos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>Numero Matricula</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Tipo Usuario</TableCell>
            <TableCell>Departamento</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.idUsuario}>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.NumeroMatricula}</TableCell>
              <TableCell>{row.Nome}</TableCell>
              <TableCell>{row.Telefone}</TableCell>
              <TableCell>{row.TipoUsuario}</TableCell>
              <TableCell>{row.Departamento}</TableCell>
              <TableCell>{row.Email}</TableCell>
              <TableCell align="right">editar</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}