import './Stylle.scss';
import ReactJs from '../../Assets/React-icon.png';
import { Projeto } from '../../Components/project/Index';
import { useEffect, useState } from 'react';
import Isaac from '../../Assets/Isaac.png'
import logo from '../../Assets/logo.png'
import { CaretCircleLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Player, Audio, Controls, PlaybackControl } from '@vime/react';

type Repository = {
  name: string;
  description: string;
  clone_url: string;
}

export function Project() {

    const [repositories, setRepositories] = useState<Repository[]>([])
  
    useEffect(() => {
      fetch('https://api.github.com/users/IsaacMoretao/repos')
      .then(response => response.json())
      .then(data => {
        setRepositories(data)
      })
    }, [])
  return(
  <body>
    <div className="Project">

      <header className='headerProjects'>
        <Link to='/deploying-vite-project-example/Home' >
         <CaretCircleLeft className='Button' color="#ffffff" style={{marginLeft: '20px'}} />
        </Link>
        
        <Link to='/deploying-vite-project-example/Home/contato'>
          <img src={Isaac} alt="Logo-Isaac" />
        </Link>
        
        <Link to='/deploying-vite-project-example/'>
          <img src={logo} alt="" />
        </Link>
        
        </header>


        <div className='backGround-react'>
          <img src={ReactJs}/>
        </div>
          <div className='Repositorios'>
            {repositories.map (repo => {
            return (
              
              <Projeto key={repo.name} Title={repo.name} Paragrafo={repo.description} url={repo.clone_url}/>
              
            )
          })}
        </div>
        
    </div>
  </body>
  )

}