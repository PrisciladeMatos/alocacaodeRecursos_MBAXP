import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectTipoUsuario() {
  const [getTipoUsuario, setTipoUsuario] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTipoUsuario(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 140 }}>
        <InputLabel id="idTipoUsuario">Tipo Usuário</InputLabel>
        <Select
          labelId="idTipoUsuario"
          id="idTipoUsuario"
          value={getTipoUsuario}
          label="Tipo Usuário"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Selecione</em>
          </MenuItem>
          <MenuItem value={1}>Cadastrante</MenuItem>
          <MenuItem value={2}>Responsável Local</MenuItem>
          <MenuItem value={3}>Vigilantes</MenuItem>
          <MenuItem value={4}>VTR Vigilantes</MenuItem>
        </Select>
        
      </FormControl>

    </div>
  );
}
