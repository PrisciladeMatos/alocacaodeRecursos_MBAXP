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
function createData(id: number, Status: string, Descricao: string, Endereco: string, Cep: string, Cidade: string, UF: string) {
  return { id, Status, Descricao, Endereco , Cep, Cidade, UF };
}

const rows = [
  createData(
    1,
    'Ativo',
    'Centro Esportivo Municipal',
    'Rua tal, 123',
    '01234560',
    'Jaú',
    'SP'
  ),
  createData(
    2,
    'Ativo',
    'Hospital Municipal',
    'Rua tal, 567',
    '01234560',
    'Jaú',
    'SP'
  ),
    createData(
        3,
        'Inativo',
        'Teatro Municipal',
        'Rua tal, 890',
        '01234560',
        'Jaú',
        'SP'
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function ListPlaces() {
  return (
    <>
    
      <Box m={3} pt={1}>
        <Link to="/Places">
            <Box m={5} px={1}>
              <Button variant="contained">Novo Local do Evento</Button>
            </Box>
        </Link>
        
        
        <Title>Locais</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>STATUS</TableCell>
              <TableCell>DESCRIÇÃO</TableCell>
              <TableCell>ENDEREÇO</TableCell>
              <TableCell>CEP</TableCell>
              <TableCell>UF</TableCell>
              <TableCell align="right">Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.Status}</TableCell>
                <TableCell>{row.Descricao}</TableCell>
                <TableCell>{row.Endereco}</TableCell>
                <TableCell>{row.Cep}</TableCell>
                <TableCell>{row.UF}</TableCell>
                <TableCell align="right">editar</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
}

