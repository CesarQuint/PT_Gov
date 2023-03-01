
const getCabildo =async()=>{
    const request=await fetch(`${import.meta.env.VITE_DB_JSON}/cabildo`)
    const response =await request.json()
    return response
}

export default getCabildo