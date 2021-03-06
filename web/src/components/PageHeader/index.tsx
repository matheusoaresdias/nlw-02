import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import backIcon from '../../images/icons/back.svg';

import './style.css'

interface Props {
    title: string;
}

const PageHeader: React.FC<Props> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logo} alt="Proffy" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;