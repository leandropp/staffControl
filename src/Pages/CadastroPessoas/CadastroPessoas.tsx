import React, { PureComponent } from 'react';
import { Typography } from '@material-ui/core';


import { ICadastroPessoasProps, ICadastroPessoasState } from './types';


class CadastroPessoas extends PureComponent <ICadastroPessoasProps, ICadastroPessoasState> {



render () {
    return (
        <>
            <Typography>Teste de Cadastro de Funcionários </Typography>
        </>
    );
}

}

export default CadastroPessoas;