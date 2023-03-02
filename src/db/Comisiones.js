
const getComisiones =async()=>{
    const request=await fetch(`${import.meta.env.VITE_DB_JSON}/comisiones`)
    const response =await request.json()
    return response
}

export default getComisiones