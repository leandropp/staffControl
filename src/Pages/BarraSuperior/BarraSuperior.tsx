import { AppBar, Button, Toolbar } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
import React, { PureComponent } from 'react';

import { StyledTitle, StyledIconButton } from './styles';


export default class BarraSuperior extends PureComponent {

    render() {

        return (
            <AppBar position="static">
                <Toolbar>
                    <StyledIconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </StyledIconButton>
                    <StyledTitle variant="h6" >
                        Controle de Funcionários - Ponto Eletrônico
                    </StyledTitle>
                </Toolbar>
            </AppBar>
        );
    }
}





