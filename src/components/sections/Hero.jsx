import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import '../../assets/Hero.scss';

const Hero = (props) => {
    const ref = useRef(null)
    const { mousePosition, setMousePosition } = props
    const { isHovered, setIsHovered } = props
    const size = isHovered ? 300 : 130

    const isTouch = window.matchMedia("(pointer: coarse)").matches
    // With "reduce motion" on, the reveal circle jumps to the cursor instead of easing after it.
    const reduceMotion = useReducedMotion()

    const titleRef = useRef(null)
    const title = "Nothing to see here"
    const splitTitle = title.split(' ').map((word, i) => {
        return {
            text: word,
            width: 0
        }
    })

    const setTitleWidths = () => {

        titleRef.current?.querySelectorAll('span').forEach(element => {
            splitTitle.filter(x => {
                if( x.text == element.textContent ) {
                    x.width = element.getBoundingClientRect().width
                }
            })
        });
    }

    const handleMouseMove = (e) => {
        setMousePosition({x: e.clientX, y: e.clientY})
    }
    
    useEffect(() => {
        if (!isTouch) {
            ref.current?.addEventListener('mousemove', handleMouseMove)
            return () => {
                ref.current?.removeEventListener('mousemove', handleMouseMove)
            }
        }
    })

    return (
        <section
            ref={ref}
            className="hero-section-wrapper"
        >
            <motion.div
                className="hero-section mask"
                aria-hidden="true"
                animate={{
                    WebkitMaskSize: `${size}px`,
                    WebkitMaskPosition: `${mousePosition.x - size/2}px ${mousePosition.y - size/2}px`,
                }}
                transition={reduceMotion ? {duration: 0} : {type: "tween", ease: "backOut"}}
            >
                <h1 className="title"
                    ref={titleRef}
                >
                    {splitTitle.map((w, i) => {
                        return(
                            <span key={i}>{w.text}</span>
                        )
                    })}
                </h1>
            </motion.div>
            
            <div
                className="hero-section body"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {setTitleWidths()}

                <h1 className="title">
                    {splitTitle.map((word, i) => {
                        const width = word.width

                        return(
                            <span key={i} style={{width: `${width ? width + 'px' : 'auto' }`}}>{word.text}</span>
                        )
                    })}
                </h1>
            </div>

            {props.children}
        </section>
    )
}

export default Hero;