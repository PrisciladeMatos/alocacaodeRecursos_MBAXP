import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSituacaoAgendaUsuario() {
  const [getTipoUsuario, setTipoUsuario] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTipoUsuario(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 170 }}>
        <InputLabel id="idSituacao">Situação Usuário</InputLabel>
        <Select
          labelId="idSituacao"
          id="idSituacao"
          value={getTipoUsuario}
          label="Situação Usuário"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Selecione</em>
          </MenuItem>
          <MenuItem value={1}>Alocado</MenuItem>
          <MenuItem value={2}>Afastado</MenuItem>
          <MenuItem value={3}>Inativo</MenuItem>
        </Select>
        
      </FormControl>

    </div>
  );
}
