import DateFnsUtils from '@date-io/date-fns';
import { FormControl, FormLabel, Grid, TextField, Typography } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { ICadastroPessoasProps, ICadastroPessoasState } from './types';

const Page = styled.div`
    display: flex;
    justify-content: center;
`;

const PageForm = styled.div`
    border: solid 1px gray;
    width: 80%;
    min-height: 500px;
    margin: 8px;
    border-radius: 5px;
`;

const StyledTitle = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ebb831;
    border-radius: 5px 5px 0px 0;
    height: 40px;
 `;

class CadastroPessoas extends PureComponent<ICadastroPessoasProps, ICadastroPessoasState> {

    constructor(props: ICadastroPessoasProps) {
        super(props);
        this.state = {
            nomeFuncionario: "",
            dataNascimento: null,
        }
    }



    render() {
        return (
            <Page>
                <PageForm>
                    <StyledTitle>
                        <Typography> Cadastro de Funcionários </Typography>
                    </StyledTitle>

                    <FormControl>
                        <FormLabel>
                            <Grid container style={{ margin: "8px" }}>
                                <Grid item xs={8} spacing={5}>

                                    <TextField
                                        fullWidth
                                        label="Nome"
                                        value={this.state.nomeFuncionario}
                                        onChange={(e) => { this.setState({ nomeFuncionario: e.target.value }) }}
                                    />
                                </Grid>
                                <Grid item xs={4} spacing={5}>
                                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Date picker dialog"
                                            format="MM/dd/yyyy"
                                            value="" // {this.state.dataNascimento}
                                            onChange={ () => {} } // (date ) => this.setState({ dataNascimento: date })}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider> */}
                                </Grid>

                            </Grid>
                        </FormLabel>
                    </FormControl>
                </PageForm>
            </Page>
        );
    }

}

export default CadastroPessoas;