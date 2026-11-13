import '../assets/Socials.scss';

const Socials = (props) => {
    const { setIsHovered } = props
    const links = [
        { text: 'Email', href: 'mailto:contact@ntsh.online' }
    ]

    return (
        <div className='socials'>

            <div className="socials-section">
                {
                    links.map((link, i) => {
                        return (
                            <a
                                key={i}
                                className="socials__link"
                                href={link.href}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {link.text}
                            </a>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Socials;