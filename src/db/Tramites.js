
const getTramites =async()=>{
    const consulta=await fetch('http://localhost:3000/difServices')
    const texto =await consulta.json()
    return texto
}

export default getTramites