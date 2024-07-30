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
      
      <Box m={3} pt={1}>
        <Link to="/Situation">
            <Box m={5} px={1}>
              <Button variant="contained">Nova Situação de Recurso</Button>
            </Box>
        </Link>
        

      
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
    </Box>
    </React.Fragment>
  );
}