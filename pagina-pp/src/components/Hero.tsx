import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Container = styled.div`
    grid-column: content-start / content-end;
    display: flex;
    flex-direction: column;
    justify-self: center;
    text-align: center;
    width: 50vw;
`;

const Title = styled.h1`
    font-family:Rubik;
    font-weight:600;
    font-size:3rem;
    margn:0;
`;

const Body = styled.p`

    font-family:Lato;
    margin-bottom: calc(.5rem + 2vmin);
`;

const Primary = styled.button`
    background: black;
    border-radius: 3rem;
    color:white;
    font-family:Rubik;
    font-weight:600;
    width: calc(10rem + 2vmin);
    height: 2.5rem;
    border :none;
    margin-right: calc(3.5rem + 2vmin);
`;

const Secondary = styled.button`
    background: transparent;
    border-radius: 3rem;
    font-family:Rubik;
    font-weight:600;
    width: calc(10rem + 2vmin);
    height: 2.5rem;
    border :none;
    border:.13rem solid black;
    color:black;
`;

const SocialMedia = styled.div`
    display:inline;
    margin-top:2rem;
    >*{
        padding:.5rem;
    }
`;


function Hero() {
    return (
        <Container>
            <Title>Pequeñas Patitas</Title>
            <Body>Descripcion de la fundacion text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Body>

            <div>
                <Primary>Dona</Primary>
                <Secondary >Adopta</Secondary>                
            </div>

            
            <SocialMedia>
                <InstagramIcon fontSize="large"></InstagramIcon>
                <FacebookIcon fontSize="large"></FacebookIcon>
                <TwitterIcon fontSize="large"></TwitterIcon>
                <YouTubeIcon fontSize="large"></YouTubeIcon>
            </SocialMedia>

        </Container>
    );
}

export default Hero;

