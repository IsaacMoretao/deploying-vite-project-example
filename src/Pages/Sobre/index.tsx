import './Stilles.scss';
import Pessoa from '../../Assets/pessoa.png';
import { Usados } from '../../Components/MaisUsados/index';
import { Link } from 'react-router-dom';
import { CaretCircleLeft } from 'phosphor-react';
import Isaac from '../../Assets/Isaac.png';
import logo from '../../Assets/logo.png';
import { Player, Audio, Controls, PlaybackControl } from '@vime/react';

export function Sobre() {
return(

<body className='Color'>
  <header className='headerProjects'>
    <Link to='/deploying-vite-project-example/Home'>
    <CaretCircleLeft className='Button' color="#ffffff" style={{marginLeft: '20px'}} />
    </Link>

    <Link to='/deploying-vite-project-example/Home/contato'>
    <img src={Isaac} alt="Logo-Isaac" />
    </Link>

    <Link to='/deploying-vite-project-example/'>
    <img src={logo} alt="" />
    </Link>

  </header>
  <div className='Sobre'>



    <article >
      <p className='P-1'>
        Olá! me chamo <br />
      </p>
      <strong className='P-2'>
        Isaac Moretao
      </strong> <br />
      <p className='P-3'>
        Sou Desenvolvedor Front-End
      </p>
    </article>
    <aside className='Asside'>
      <div>
        <div />
        <img src={Pessoa} alt="" />
      </div>
      <h1>Isaac Moretão</h1>

    </aside>
  </div>
  <div className='MaisSobre'>
    <p className='Paragrafo'>
      &#36;&#123;<strong> mais sobre mim </strong>&#125;
    </p>
    <div>

      <Usados Name={'Programação'} text={'Expecialização: ReactJS '}
        br={<br />}
        textDois={' Objetivo: Engressar no mercado de programadores atraves do front-End'} margin={'150px'} />

      <Usados Name={'Isaac'} text={'idade: 17'} textDois={'Cidade: Arujá-SP'} margin={'0'} />

      <Usados Name={'Work'} text={'Trabalho como freelancer junto com "Caio Cezar" , fazendo o front-END'}
        margin={'150px'} />

    </div>

  </div>
</body>
)
}