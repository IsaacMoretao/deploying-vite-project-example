import { BotaoLink } from '../../Components/Link/Index';
import Logo from '../../Assets/logo.png';
import './Stylles.scss';
import { Link } from 'react-router-dom';
import { DiscordLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'
import { Player, Audio, Controls, PlaybackControl } from '@vime/react';


export function Music() {
  return(
    <div>

    </div>
  )
}
export function Home() {

  return(
    <body>
      <div className="Home-Body">
        
        <header className="H-red">
          <Link to='/deploying-vite-project-example/' className='div-Logo'>
            <img src={Logo} alt="" />
          </Link>
          <Link to='/deploying-vite-project-example/Home/Contato'>
            <BotaoLink text={'CONTATO'} posição={'horizontal-tb'} height={'48px'} width={'150px'} />
          </Link>
          

        </header>

        <main >
          <nav className="LaftNav">
            <div className='Contato'>

              <a href="https://discord.com/users/IsaacMoret%C3%A3o#7320">
                <DiscordLogo size={32} className='Discord'/>
              </a>

              <a href="https://www.linkedin.com/in/isaac-hana-moret%C3%A3o-1a32031a2/">
                <LinkedinLogo size={32} className='Linkedin'/>
              </a>

              <a href="https://www.instagram.com/isaac_moretao/">
                <InstagramLogo size={32} className='Instagram'/>
              </a>

              <a href="https://github.com/IsaacMoretao">
                <GithubLogo size={32} className='Github'/>
              </a>
              
              <div/>
            </div>
          </nav>
          <figure></figure>
          <nav className="RightNav">
            <Link to='/deploying-vite-project-example/Home/Tecnologias'>
              <BotaoLink text={'TECNOLOGIAS'} posição={'vertical-lr'} height={'150px'} width={'48px'} />
            </Link> 
          </nav>
        </main>

        <footer className="Footer">
          <Link to='/deploying-vite-project-example/Home/Sobre'>
            <BotaoLink text={'SOBRE'} posição={'horizontal-tb'} height={'48px'} width={'150px'} />
          </Link>
          
          <Link to='/deploying-vite-project-example/Home/Project'>
            <BotaoLink text={'PROJETOS'} posição={'horizontal-tb'} height={'48px'} width={'150px'} />
          </Link>
          
        </footer>
      </div>
    </body>
  )
}