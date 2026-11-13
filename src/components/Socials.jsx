import '../assets/Socials.scss';

const Socials = (props) => {
    const { setIsHovered } = props
    const links = [
        { text: 'Shoot an email our way', href: 'mailto:contact@ntsh.online' }
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