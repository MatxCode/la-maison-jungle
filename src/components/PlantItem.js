import CareScale from "./CareScale";
import '../styles/PlantItem.css'

function PlantItem({name, cover, id, light, water, price}){
    return(
        <div> 
            <li key={id} className = 'lmj-plant-item' onClick = {() => handleClick(name)}>
                <span className='lmj-plant-item-price'>{price}€</span>
                <img className = 'lmj-plant-item-cover' src = {cover} alt = {`${name} cover`}/>
                {name}
                <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
            </li>
        </div>
    )
}

function handleClick(plantName){
    console.log(`Vous avez choisi : ${plantName}`)
}

export default PlantItem