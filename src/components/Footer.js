import { useState } from 'react'
import '../styles/Footer.css'

function Footer(){
    const [inputValue, setInputValue] = useState('')

    function handleBlur(){
        if (!inputValue.includes('@')){
            alert("Adresse mail non valide ! Elle doit contenir un @")
        }
    }

    return(
        <footer className = 'lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input 
                placeholder='Entrez votre email' 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer