import {useState,useEffect} from 'react'
import CarouselCard from './CarouselCard'
import { BiArrowBack as Back,BiRightArrowAlt as Front } from "react-icons/bi";

function TramitesCarousel({arrCarousel}) {

    const [startArr,setStartArr]=useState(0)
    const [endArr,setEndArr]=useState(4)
    const [activeArr,setActiveArr]=useState([])
    const [disabledPlus,setDisabledPlus]=useState(false)
    const [disabledLess,setDisabledLess]=useState(true)

    const itArr=arrCarousel.slice(0,4)

    useEffect(()=>{
        if(!activeArr.length){
            setActiveArr(itArr)
        }
    },[arrCarousel])

    useEffect(()=>{
        const itArr=arrCarousel.slice(startArr,endArr)
        setActiveArr(itArr)
    },[endArr,startArr])
    
    function handleRecorrer(event,value){
      if(startArr==1){
        setDisabledLess(true)
      }else if(endArr ==arrCarousel.length-1){
        setDisabledPlus(true)
      }

        if(value=="plus"){
            if(endArr>=arrCarousel.length){
                setDisabledPlus(true)
                return
            }
            setDisabledLess(false)
            setStartArr(startArr+1)
            setEndArr(endArr+1)
        }else if(value=="less"){
            if(startArr<=0){
                setDisabledLess(true)
                return
            }
            setDisabledPlus(false)
            setStartArr(startArr-1)
            setEndArr(endArr-1)
        }
    }
   

  return (
    <div className='carrouselContainer'>
        <div className='carouselTitle'>
            <h4>Conoce los diferenes servicios del DIF</h4>
            
            <section className='carouselButtons'>
                <button type="submit"
                onClick={e=>handleRecorrer(e,"less")}
                disabled={disabledLess}
                ><Back/></button>
                <button type="submit"
                disabled={disabledPlus}
                onClick={e=>handleRecorrer(e,"plus")}
                ><Front/></button>
            </section>
            
        </div>
        <div className='carouselMove'>
            {activeArr.map(item=>(
              <CarouselCard
                key={item.id}
                card={item}
              />
            ))}
        </div>
        
    </div>
  )
}

export default TramitesCarousel