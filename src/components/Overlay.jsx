import { forwardRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import '../assets/Overlay.scss';

// TODO: Scroll text with animation below circle
// TODO: Pullsing animation?

const Overlay = (props, ref) => {
    const { scrollYProgress } = useScroll()
    const size = useTransform(scrollYProgress, [0, .15, .2], ['20vw', '150vw', '200vw'])
    const circleAlpha = useTransform(scrollYProgress, [0, .2, .25], [1, 1, .3])
    const backgroundAlpha = useTransform(scrollYProgress, [0, .15, .2], [1, 1, 0])
    const circleBlurAlpha = useTransform(scrollYProgress, [0, .25], [1, 0])

    return (
        <div className="overlay">
            <motion.div
                className="background"
                style={{
                    opacity: backgroundAlpha
                }}
            ></motion.div>

            <motion.div
                ref={ref}
                className="circle"
                style={{
                    opacity: circleAlpha,
                    width: size
                }}
            >
                <motion.div
                    className="circleBlur"
                    style={{
                        opacity: circleBlurAlpha
                    }}
                ></motion.div>
            </motion.div>
        </div>
    )
}

export default forwardRef(Overlay);