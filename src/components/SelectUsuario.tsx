import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectUsuario() {
  const [getUsuario, setUsuario] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setUsuario(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 420 }}>
        <InputLabel id="idUsuario">Usuário</InputLabel>
        <Select
          labelId="idUsuario"
          id="idUsuario"
          value={getUsuario}
          label="Usuário"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Selecione</em>
          </MenuItem>
          <MenuItem value={1}>João de Souza</MenuItem>
          <MenuItem value={2}>Mario de Andrade Santos</MenuItem>
          <MenuItem value={3}>Maria das Dores</MenuItem>
          <MenuItem value={4}>Aparecida dos Santos</MenuItem>
        </Select>
        
      </FormControl>

    </div>
  );
}
