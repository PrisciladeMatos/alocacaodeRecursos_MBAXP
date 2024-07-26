import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';


// Generate Order Data
function createData(idSituacao: number, Descricao: string) {
  return { idSituacao, Descricao};
}

const rows = [
  createData(
    1,
    'Ativo'
  ),
  createData(
    2,
    'Inativo'
  ),
  createData(
    3,
    'Afastado'
  ),
  createData(
    4,
    'Em ferias'
  ),
  createData(
    5,
    'Em licença'
  ),
  
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function ListSituation() {
  return (
    <React.Fragment>
      <Title>Situação de Recursos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>DESCRIÇÃO</TableCell>
            <TableCell align="right">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.idSituacao}>
              <TableCell>{row.Descricao}</TableCell>
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