import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Paragraph from '../Paragraph';
import '../../assets/About.scss';
import Socials from '../Socials';
import { round } from 'lodash';

const paragraph1 = "NTSH is a web design and development studio specializing in the digital world's nuances. We deeply explore the technical and creative elements that shape exceptional web experiences. Our meticulous attention to detail, context, and innovation ensures every client project is crafted with precision and care, delivering visually stunning and highly functional results."
// const paragraph2 = "Our approach revolves around a commitment to understanding and constructing value by immersing ourselves in our customers' unique needs. For us, design transcends mere aesthetics; it's a profound connection rooted in empathy, compassion, and an authentic concern for the individual we work with."

const About = (props) => {
    const ref = useRef(null)
    const [ sectionTop, setSectionTop ] = useState(0)
    const { mousePosition, setMousePosition } = props
    const { isHovered, setIsHovered } = props
    const [ isHoveredSocials, setIsHoveredSocials ] = useState(false)
    const size = isHovered ? 300 : isHoveredSocials ? 230 : 130
    const gradient = 'linear-gradient(360deg, hsla(127, 100%, 50%, 0.7) 0%, hsla(226, 100%, 50%, 0.7) 100%)'
    const hoverGradient = 'linear-gradient(360deg, hsla(17, 100%, 50%, 0.6) 0%, hsla(26, 100%, 50%, 0.6) 100%)'
    const bgColor = isHoveredSocials ? hoverGradient : gradient

    const isTouch = window.matchMedia("(pointer: coarse)").matches
    // With "reduce motion" on, the reveal circle jumps to the cursor instead of easing after it.
    const reduceMotion = useReducedMotion()
    
    const titleRef = useRef(null)
    const title = "we embrace the art of the unseen"
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

    const handleScroll = (e) => {
        setSectionTop( ref.current.getBoundingClientRect().top )
    }
    
    useEffect(() => {
        if (!isTouch) {
            ref.current?.addEventListener('mousemove', handleMouseMove)
            return () => { ref.current?.removeEventListener('mousemove', handleMouseMove) }
        }
    })

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => { window.addEventListener('scroll', handleScroll) }
    })

    return (
        <div
            ref={ref}
            className="about-section"
        >
            <motion.div
                className="about mask"
                aria-hidden="true"
                animate={{
                    WebkitMaskSize: `${isTouch ? 230 : size}px`,
                    WebkitMaskPosition: `${isTouch ? 80 : mousePosition.x - size/2}px ${isTouch ? 280 - sectionTop : mousePosition.y - size/2 - sectionTop }px`,
                }}
                transition={reduceMotion ? {duration: 0} : {type: "tween", ease: "backOut"}}
            >
                <h2 ref={titleRef} className="title rabbit">
                    {splitTitle.map((w, i) => {
                        return(
                            <span key={i}>{w.text}</span>
                        )
                    })}
                </h2>
                
                <div className="paragraphs">
                    <Paragraph text={paragraph1} />
                </div>

                <Socials decorative />

                <motion.div
                    className="gradient"
                    animate={{
                        background: bgColor
                    }}
                ></motion.div>
            </motion.div>
            
            <div className="about body">
                <h2
                    className="title"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {setTitleWidths()}

                    {splitTitle.map((word, i) => {
                        const width = Math.round(word.width)

                        return(
                            <span key={i} style={{width: `${width ? width + 'px' : 'auto' }`}}>{word.text}</span>
                        )
                    })}
                </h2>
                
                <div className="paragraphs">
                    {/* Without start/end the paragraph renders fully, skipping the word-by-word scroll fade. */}
                    <Paragraph text={paragraph1} start={reduceMotion ? undefined : "0.9"} end={reduceMotion ? undefined : "0.6"} />
                </div>

                <Socials setIsHovered={setIsHoveredSocials} />
            </div>
        </div>
    )
}

export default About;