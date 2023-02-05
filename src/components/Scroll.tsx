import React, {useState} from "react";
import {motion, useScroll } from 'framer-motion'
import './ScrollStyle.css'

const svgVariants = {
    initial: {
        rotate: 180
    },

    animate: {
        rotate: 0,
        transition: {
            duration: .4
        }
    }
}




export const Scroll: React.FC = () => {
    const {scrollX, scrollXProgress, scrollY, scrollYProgress} = useScroll()
    const [isOn, setIsOn] = useState<boolean>(false)


    const pathVariants = {
    initial:{
        pathLength: 0,
        transition: {
            duration: 2
        }
    },
    animate:{
        pathLength: 1,
        transition: {
            duration: 2
        }
    }
}

    // console.log('----', scrollYProgress)
    return(
        <>
            <motion.svg 
                width="120" 
                height="120" 
                viewBox="0 0 120 120" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="initial"
                animate="animate"
                >
                <motion.rect
                    variants={pathVariants}
                    animate= {isOn ? "animate" : "initial"}
                    x="10" y="10" width="100" height="100" rx="30" stroke="#FF0000" strokeWidth="10" />
            </motion.svg>



            <button onClick={() => setIsOn(!isOn)} className="btn btn-primary">SVG</button>

            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
                
                transition={{
                    type:'spring'
                }}
            ></motion.div>
            <article>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
                rhoncus quam.
                </p>
                <p>
                Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
                imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
                Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
                blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
                ipsum tellus, eu tincidunt neque tincidunt a.
                </p>
                <h2>Sub-header</h2>
                <p>
                In eget sodales arcu, consectetur efficitur metus. Duis efficitur
                tincidunt odio, sit amet laoreet massa fringilla eu.
                </p>
                <p>
                Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
                Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
                Proin sit amet lacus mollis, semper massa ut, rutrum mi.
                </p>
                <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
                <p>
                Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
                leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
                </p>
                <h2>Sub-header</h2>
                <p>
                Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
                aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
                sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
                metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
                enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
                pretium.
                </p>
                <p>
                Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
                elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
                ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
                <p>
                Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
                Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
                Proin sit amet lacus mollis, semper massa ut, rutrum mi.
                </p>
                <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
                <p>
                Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
                leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
                </p>
                <h2>Sub-header</h2>
                <p>
                Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
                aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
                sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
                metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
                enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
                pretium.
                </p>
                <p>
                Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
                elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
                ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
            </article>
        </>
    )
}