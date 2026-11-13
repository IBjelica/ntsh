import '../assets/Socials.scss';

const Socials = (props) => {
    // `decorative` marks the copy inside the hidden reveal layer: it must not be
    // reachable with Tab, since screen readers and keyboards skip that layer.
    const { setIsHovered, decorative } = props
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
                                tabIndex={decorative ? -1 : undefined}
                                onMouseEnter={() => setIsHovered?.(true)}
                                onMouseLeave={() => setIsHovered?.(false)}
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