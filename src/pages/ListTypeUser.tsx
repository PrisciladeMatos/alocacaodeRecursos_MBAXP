import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';


// Generate Order Data
function createData(idTipoUsuario: number, Descricao: string) {
  return { idTipoUsuario, Descricao};
}

const rows = [
  createData(
    1,
    'ADM Prefeitura'
  ),
  createData(
    2,
    'Responsavel pelo Local'
  ),
  createData(
    3,
    'Segurança'
  ),
  createData(
    4,
    'Segurança Viatura'
  )
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function ListSituation() {
  return (
    <React.Fragment>
      <Box m={3} pt={1}>
      <Link to="/TypeUser">
          <Box m={5} px={1}>
            <Button variant="contained">Novo Tipo de Recurso</Button>
          </Box>
      </Link>
      <Title>Tipos de Recursos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>DESCRIÇÃO</TableCell>
            <TableCell align="right">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.idTipoUsuario}>
              <TableCell>{row.Descricao}</TableCell>
              <TableCell align="right">editar</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
      </Box>
    </React.Fragment>
  );
}