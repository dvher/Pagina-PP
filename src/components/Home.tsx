import AboutUs from './AboutUs';
import Noticias from './Noticias';
import Care from './Care';
import Colaborators from './Colaborators';
import Contact from './Contact';
import HappyEndings from './HappyEndings';
import DonateNow from './DonateNow';

export default function Home(props: any) {
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