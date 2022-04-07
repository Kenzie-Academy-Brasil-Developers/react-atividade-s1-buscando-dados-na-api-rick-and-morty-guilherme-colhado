import './style.css'

export default function CharCard({char}){
    function diminui(nome){
        nome = nome.substring(0,12)
        if(nome[11] === ' ') nome = nome.substring(0,11)
        nome+= '...'
        return nome
    }
    return <div className={`${char.status} char`}>
        <h4>{char.name.length > 15 ? diminui(char.name): char.name}</h4>
        <img src={char.image} alt={char.name}/>
    </div>
}