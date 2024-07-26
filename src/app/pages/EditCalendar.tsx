import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SelectTipoUsuario from '../components/SelectTipoUsuario';
import NavBar from '../components/NavBar';
import SelectSituacaoAgendaUsuario from '../components/SelectSituacaoAgendaUsuario';
import SelectUsuario from '../components/SelectUsuario';
import SelectLocal from '../components/SelectLocal';
function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function EditCalendar() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <NavBar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
                        <AccountBoxIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Alocação de Segurança patrimonial
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox defaultChecked value="1" color="primary" />}
                                label="Ativa"
                            />
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <SelectLocal />
                            </Grid>
                            <Grid item xs={6}>
                                <SelectTipoUsuario />
                            </Grid>
                            <Grid item xs={6}>
                                <SelectSituacaoAgendaUsuario />
                            </Grid>
                            <Grid item xs={12}>
                                <SelectUsuario />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="DataInicio"
                                    required
                                    id="DataInicio"
                                    label="DD/MM/YYYY"

                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="HoraInicio"
                                    required
                                    id="HoraInicio"
                                    label="HH:MM"

                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="DataFim"
                                    required
                                    id="DataFim"
                                    label="DD/MM/YYYY"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="HoraFim"
                                    required
                                    id="HoraFim"
                                    label="HH:MM"
                                />
                            </Grid>






                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Salvar
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}