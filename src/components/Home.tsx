import React, {useState} from 'react'
import {motion} from 'framer-motion'

interface HomeProps{
    num:number
}



export const Home :React.FC<HomeProps> = ({num}) => {

    const [isMoved, setIsMoved] = useState<boolean>(false)

    const homeVariant = {
        hidden:{
            opacity:0,
            x:-300
        },
    
        visible:{
            opacity:1,
            x:0,
            transition:{
                delay:num,
                type:'spring',
                stiffness:320,
                damping:15,
                mass:1,
                when:"beforeChildren"
            }
        },

        hover:{
            scale: 1.3,
            backgroundColor:'#0088ff',

        }
    }
    
    const childVariant = {
        hidden:{
            opacity:0
        },
    
        visible:{
            opacity:1,
            transition:{
                duration: .5
            }
        }
    }

    const moveVariant = {
        positionA:{
            x: 0,
            transition:{
                type: "spring",
                stiffness: 400,
            }
        },
        positionB:{
            x: 200,
            transition:{
                type: "spring",
                stiffness: 400
            }
        }
    }


    console.log(isMoved);
    
    return(
        <motion.div>
            <motion.div
                style={{backgroundColor:'#ff0000', cursor:'pointer', height:'60px', width:'100px'}}
                className='rounded-4 text-light fw-bold d-flex justify-content-center align-center m-3'
                variants={homeVariant}
                initial='hidden'
                animate='visible'
                whileHover='hover'
            >
                <motion.div
                    variants={childVariant}
                >Jovica</motion.div>
            </motion.div>


            <motion.button
                whileHover={{
                    scale:1.3,
                    originX:0
                }}
                className='btn btn-info m-2 d-block'

            >Release 0.1.0</motion.button>

<motion.button
                whileHover={{
                    scale:1.3,
                    originX:0
                }}
                className='btn btn-info m-2 d-block'

            >New Button 02</motion.button>

            <button className="btn btn-info" onClick={()=>setIsMoved(!isMoved)}>Move sphere</button>
            <motion.div
                style={{width:'100px', height:'100px'}}
                className="bg-primary m-3 rounded-pill"
                variants={moveVariant}
                animate={isMoved ? 'positionB' : 'positionA'}
                >
            </motion.div>

            <motion.div
                style={{width:'100px', height:'100px'}}
                className="bg-primary m-3 rounded-pill"
                drag
                dragTransition={{
                  power: 0,
                  min: 0,
                  max: 100,
                  bounceStiffness: 500,
                  bounceDamping: 30
                  // Snap calculated target to nearest 50 pixels
                //   modifyTarget: target => Math.round(target / 50) * 50
                }}
                >
            </motion.div>

        </motion.div>
    )
}