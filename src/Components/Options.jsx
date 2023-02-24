import React from 'react'

function Options() {
  return (
   <>
    <section className='Options'>
                <div className='OptionContain'>
                    <input className='a1'
                    name="ABC" value="a"  type="radio" 
                     />
                     <label disabled >Search</label>
                </div>
                <div className='OptionContain'>
                    
                    <input className='a1'
                    name="ABC" value="b"  type="radio" 
                     />
                     <label disabled >Search</label>
                </div>
                <div className='OptionContain'>
                    <input className='a1' disabled 
                    name="ABC" value="c"type="radio" 
                     />
                     <label disabled >Search</label>
                </div>
                
                <div className='OptionContain'>
                    <input className='a1' 
                    name="ABC" value="c"type="checkbox" 
                     />
                     <label >Search</label>
                </div>
            </section>
   </>
  )
}

export default Options