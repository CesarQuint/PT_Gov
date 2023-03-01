
const getTramites =async()=>{
    const consulta=await fetch(`${import.meta.env.VITE_DB_JSON}/cabildo`)
    const texto =await consulta.json()
    return texto
}

export default getTramites