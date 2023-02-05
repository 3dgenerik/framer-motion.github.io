import React, {useState} from "react";
import {motion, LayoutGroup } from 'framer-motion'
import './FramerFlexStyle.css'

const mainVarinat = {
    a:{
        height:100
    },

    b:{
        height:200,
        trtansition:{
            duration: .3,
        }
    }
}

const childVarinat = {
    a:{
        height:80,
        width:80
    },

    b:{
        height:180,
        width:180,
        trtansition:{
            duration: .3,
        }
    }
}



export const FramerFlex: React.FC = () => {
    const [isOn, setIsOn] = useState<boolean>(false)
    return(
        <LayoutGroup>
            <motion.div
                onClick={() => setIsOn(!isOn)}
                className="container bg-primary rounded-pill my-3"
                // variants={mainVarinat}
                // animate = {isOn ? "a" : "b"}
                whileHover={{
                    scale: 1.2
                }}
                
                transition={{
                    type:"spring",
                    stiffness:300
                }}
                data-ison={isOn}
                >
                <motion.div
                    className="handler bg-warning"
                    // variants={childVarinat}
                    // animate = {isOn ? "a" : "b"}
                    layout
                    style={{borderRadius:'40px',  width: isOn ? "80px" : "70%" }}
                    // style={{margin:'100px'}}
                    // transition={{
                    //     type:"spring",
                    //     stiffness:700,
                    //     damping:30,
                    // }}
                >

                </motion.div>
            </motion.div>

        </LayoutGroup>
    )
}