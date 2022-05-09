import AboutUs from './AboutUs';
import Noticias from './Noticias';
import Care from './Care';
import Colaborators from './Colaborators';
import Contact from './Contact';
import HappyEndings from './HappyEndings';
import DonateNow from './DonateNow';
import { useEffect, useState } from 'react';

const changeTitle = async () => {
    let vh = window.innerHeight;
        if(window.scrollY > 6*vh - vh/5) document.title = "Contacto";
        else if(window.scrollY > 5*vh - vh/5) document.title = "Colaboradores";
        else if(window.scrollY > 4*vh - vh/5) document.title = "Finales felices";
        else if(window.scrollY > 3*vh - vh/5) document.title = "Cuidados";
        else if(window.scrollY > 2*vh - vh/5) document.title = "Donar";
        else if(window.scrollY > 1*vh - vh/5) document.title = "Sobre nosotros";
        else if(window.scrollY > 0*vh - vh/5) document.title = "Noticias";
}

export default function Home(props: any) {
    const [y] = useState(window.scrollY);
    useEffect(() => {
        window.addEventListener('scroll', () => changeTitle());
        return () => window.removeEventListener('scroll', () => changeTitle());
    }, [y]);
    return (
        <>
            <Noticias effect={props.useEffect} />
            <AboutUs effect={props.useEffect} />
            <DonateNow effect={props.useEffect} />
            <Care effect={props.useEffect} />
            <HappyEndings effect={props.useEffect} />
            <Colaborators effect={props.useEffect} />
            <Contact effect={props.useEffect} />
        </>
    );
}