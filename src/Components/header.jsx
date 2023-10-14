import React, { useEffect,useRef, useState } from 'react';
// import Avi from "../img/IMG_03867.jpg"




function toggleClasses(element1, element2) {
    element1.classList.toggle('mobile-nav-active');
    element2.classList.toggle('bi-list');
    element2.classList.toggle('bi-x');
}

export default function Header() {
    const myElementRef = useRef(null);
    const [activeLink, setActiveLink] = useState(null);
    

    useEffect(() => {
        myElementRef.current.addEventListener('click', (e) => {
            if (e.target.classList.contains('mobile-nav-toggle')) {
                toggleClasses(document.querySelector('body'), e.target);
            }
        });
        const handleScroll = () => {
            let position = window.scrollY + 200;
            let activeSection = null;
            
            setActiveLink(activeSection);

            const navbarlinksArray = Array.from(navbarlinks.current);
            navbarlinksArray.forEach(navbarlink => {
                if (!navbarlink.hash) return;
                let section = document.querySelector(navbarlink.hash);
                if (!section) return;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    activeSection = navbarlink.hash;
                }
            });
            setActiveLink(activeSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
    const navbarlinks = useRef([]);



    return <div ref={myElementRef}>
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

        <header id="header">
            <div className="d-flex flex-column">

                <div className="profile">
                    <img src="https://i.ibb.co/gTkpR3h/favicon.jpg" alt="Ridwan Alabi" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Ridwan Alabi</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="https://github.com/Ridalord" title='Github' className="github"><i className="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/ridwanoalabi/" title='Linkedin' className="linkedin"><i className="bi bi-linkedin"></i></a>
                        <a href="https://wa.link/cl0b01" title='Whatsapp' className="whatsapp"><i className="bi bi-whatsapp"></i></a>
                        <a href="mailto:ridhwan.alabi@gmail.com" title='Email' className="mail"><i className="bi bi-envelope"></i></a>
                    </div>
                </div>
                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><a
                            href="#hero"
                            ref={el => (navbarlinks.current[0] = el)}
                            className={activeLink === "#hero" ? "active" : ""}
                            onClick={() => {
                                setActiveLink("#hero");
                                toggleClasses(document.querySelector('body'), document.querySelector('.mobile-nav-toggle'));
                            }}
                        >
                            <i className="bx bi-house"></i> <span>Home</span></a></li>
                        <li><a
                            href="#about"
                            ref={el => (navbarlinks.current[1] = el)}
                            className={activeLink === "#about" ? "active" : ""}
                            onClick={() => {
                                setActiveLink("#about");
                                toggleClasses(document.querySelector('body'), document.querySelector('.mobile-nav-toggle'));
                            }}
                        ><i className="bx bi-person"></i> <span>About</span></a></li>
                        <li><a
                            href="#resume"
                            ref={el => (navbarlinks.current[2] = el)}
                            className={activeLink === "#resume" ? "active" : ""}
                            onClick={() => {
                                setActiveLink("#resume");
                                toggleClasses(document.querySelector('body'), document.querySelector('.mobile-nav-toggle'));
                            }}
                        ><i className="bx bi-file-earmark"></i> <span>Resume</span></a></li>
                        <li><a
                            href="#portfolio"
                            ref={el => (navbarlinks.current[3] = el)}
                            className={activeLink === "#portfolio" ? "active" : ""}
                            onClick={() => {
                                setActiveLink("#portfolio");
                                toggleClasses(document.querySelector('body'), document.querySelector('.mobile-nav-toggle'));
                            }}
                        ><i className="bx bi-journal-text"></i> <span>Portfolio</span></a></li>
                        <li><a
                            href="#certificates"
                            ref={el => (navbarlinks.current[4] = el)}
                            className={activeLink === "#certificates" ? "active" : ""}
                            onClick={() => {
                                setActiveLink("#certificates");
                                toggleClasses(document.querySelector('body'), document.querySelector('.mobile-nav-toggle'));
                            }}
                        ><i className="bx bi-journal-text"></i> <span>Certifications</span></a></li>
                        <li><a
                            href="#contact"
                            ref={el => (navbarlinks.current[5] = el)}
                            className={activeLink === "#contact" ? "active" : ""}
                            onClick={() => {
                                setActiveLink("#contact");
                                toggleClasses(document.querySelector('body'), document.querySelector('.mobile-nav-toggle'));
                            }}
                        ><i className="bx bi-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>

            </div>
        </header></div>;

}
