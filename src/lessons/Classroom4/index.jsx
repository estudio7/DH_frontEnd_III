import './style.scss'
import youtubeImage from './../../assets/images/youtube-home.png'

export function classroom4(){
    return (
        <div className='quarta-aula-component'>

            <h1 className='main-title'>Componentes identificados</h1>

            <ul className='components-finded'>

                <li>
                    <img src={youtubeImage} alt="" />
                    <h1>Vídeo</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, adipisci.</p>
                </li>

            </ul>

        </div>
    )
            
}