import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Container = styled.div`
    grid-area: h;
    display: flex;
    flex-direction: column;
    justify-self: center;
    text-align: center;
    width: 50vw;

`;

const Body = styled.p`
    margin-bottom: 2.5vw;
`;

const Primary = styled.button`
    background: black;
    border-radius: 3rem;
    color:white;
    font-family:Rubik;
    font-weight:600;
    width: 20vw;
    height: 2.5rem;
    border :none;
    margin-right: 4vw;
`;

const Secondary = styled.button`
    background: transparent;
    border-radius: 3rem;
    font-family:Rubik;
    font-weight:600;
    width: 20vw;
    height: 2.5rem;
    border :none;
    border:.13rem solid black;
    color:black;
`;

const SocialMedia = styled.div`
    display:inline;
    margin:3vw;
    >*{
        padding:.7vw;
    }
`;

export interface BlobProps {
    width: string;
    top: string;
    right: string;
  }

const Blob = styled.svg<BlobProps>`
    position: absolute;
    top: ${ (p:BlobProps) => p.top };
    right: ${ (p:BlobProps) => p.right }; 
    z-index:-1;
    width: ${(p:BlobProps) => p.width};
`;

function Hero() {
    return (
        <Container>
            <h1>Pequeñas Patitas</h1>
            <Body>Descripcion de la fundacion text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Body>

            <div>
                <Primary>Dona</Primary>
                <Secondary >Adopta</Secondary>
            </div>
            {/*<Blob top={'-15%'} right={'-15%'} width={'50vw'} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/Blob">
                <path fill="#FF0066" d="M56.2,-36.9C66.8,-14.2,65,11.2,53.6,31.9C42.2,52.6,21.1,68.7,-3.8,70.8C-28.6,73,-57.2,61.3,-64.8,42.8C-72.4,24.3,-59,-1,-44.7,-25.9C-30.4,-50.8,-15.2,-75.3,3.8,-77.5C22.8,-79.7,45.7,-59.6,56.2,-36.9Z" transform="translate(100 100)" />
        </Blob>*/}

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

