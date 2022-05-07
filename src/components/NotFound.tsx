import Conejito from '../img/conejito_triste.png';
import { useAppDispatch } from '../app/hooks';

export default function NotFound(props: any) {
    document.title = 'Error 404';
    const dispatch = useAppDispatch();
    dispatch({ type: 'UNSET_ADMIN' });
    return (
        <div className='full-screen center-screen common-background-color'>
            <h1 style={{fontSize: '2em', fontWeight: 'bold'}}>Error 404</h1>
            <img src={Conejito} alt='conejito' className='conejito-img'/>
            <p>La página que buscabas no existe</p>
            <a href="/" style={{color: '#ecf1ee'}}>Volver al inicio</a>
        </div>
    );
}