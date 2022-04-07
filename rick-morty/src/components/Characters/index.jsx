import CharCard from '../CharCard'
import './style.css'

export default function Characters({characterList}){
    return <div className='Lista'>
        <h1>Meus personagens</h1>
        <ul>
            {characterList.map(char => <li key={char.id}><CharCard char={char}/></li>)}
        </ul>
    </div>
}