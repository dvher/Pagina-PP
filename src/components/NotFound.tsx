import React from 'react';
import Conejito from '../img/conejito_triste.png';

export default class NotFound extends React.Component<any, any> {

    componentDidMount() {
        document.title = 'Error 404';
    }

    render() {
        return (
        <div className='full-screen center-screen common-background-color'>
            <h1 style={{fontSize: '5em', fontWeight: 'bold'}}>Error 404</h1>
            <img src={Conejito} alt='conejito' className='conejito-img'/>
            <p>La página que buscabas no existe</p>
            <a href="/" style={{color: '#ecf1ee'}}>Volver al inicio</a>
        </div>
        );
    }
}