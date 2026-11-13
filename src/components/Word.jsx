import { useTransform, motion, useSpring } from "framer-motion";

const Word = ({children, range, progress}) => {
    if (range && progress) {
        const opacity = useTransform(progress, range, [0, 1])
        const springOpacity = useSpring(opacity, {damping: 20, stiffness: 300, mass: 0.5})
    
        return (
            <span className="word" >
                <span className="shadow" aria-hidden="true">{children}</span>
                <motion.span style={{opacity: opacity}} >
                    {children}
                </motion.span>
            </span>
        );
    } else {
        
        return (
            <span className="word" >
                <span >
                    {children}
                </span>
            </span>
        );
    }
};

export default Word;