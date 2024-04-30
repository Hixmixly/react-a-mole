
import {useEffect} from 'react'
import moleImg from '../images/mole (1).png'

const Mole = (props) => {
    useEffect (() => {
        let randSeconds = Math.ceil (Math.random () * 40000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src = {moleImg}
            onClick={props.handleClick}
            />


        </div>
    )
}

export default Mole