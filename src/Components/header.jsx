import React, { Component } from 'react';
import Avi from "../img/profile-img.jpeg"
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
// import 'bootstrap-icons'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';




class Header extends Component {
    
    // document.addEventListener('click', function (e) {
    //     if (e.target.classList.contains('mobile-nav-toggle')) {
    //         toggleClasses(document.querySelector('body'), e.target);
    //     }
    // });
   
    // const select = (el, all = false) => {
    //     el = el.trim()
    //     if (all) {
    //         return [...document.querySelectorAll(el)]
    //     } else {
    //         return document.querySelector(el)
    //     }
    // }
    // const on = (type, el, listener, all = false) => {
    //     let selectEl = select(el, all)
    //     if (selectEl) {
    //         if (all) {
    //             selectEl.forEach(e => e.addEventListener(type, listener))
    //         } else {
    //             selectEl.addEventListener(type, listener)
    //         }
    //     }
    // }
    // on('click', '.mobile-nav-toggle', function (e) {
    //     select('body').classList.toggle('mobile-nav-active')
    //     this.classList.toggle('bi-list')
    //     this.classList.toggle('bi-x')
    // })
    
    
    componentDidMount() {
       
        function toggleClasses(element1, element2) {
            element1.classList.toggle('mobile-nav-active');
            element2.classList.toggle('bi-list');
            element2.classList.toggle('bi-x');
        }
        toggleClasses = (element1, element2) => {
            toggleClasses(element1, element2);
        }
        this.refs.myElement.addEventListener('click', (e) => {
            if (e.target.classList.contains('mobile-nav-toggle')) {
                this.toggleClasses(document.querySelector('body'), e.target);
            }
        });
    }
    render() {
        return <div><i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src={Avi} alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Ridwan Alabi</a></h1>
                        <div class="social-links mt-3 text-center">
                            <a href="#git" class="github"><i class="bi bi-github"></i></a>
                            <a href="#linked" class="linkedin"><i class="bi bi-linkedin"></i></a>
                            <a href="#whatsapp" class="whatsapp"><i class="bi bi-whatsapp"></i></a>
                            <a href="#mail" class="mail"><i class="bi bi-envelope"></i></a>
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="#hero" className="nav-link scrollto active"><i class="fa-light bi-house"></i> <span>Home</span></a></li>
                            <li><a href="#about" className="nav-link scrollto"><i class="bx bi-person-square"></i> <span>About</span></a></li>
                            <li><a href="#resume" className="nav-link scrollto"><i className="bx bi-file"></i> <span>Resume</span></a></li>
                            <li><a href="#portfolio" className="nav-link scrollto"><i class="bx bi-file-earmark-text"></i> <span>Portfolio</span></a></li>
                            {/* <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li> */}
                            <li><a href="#contact" className="nav-link scrollto"><i className="bx bi-envelope"></i> <span>Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header></div>;
    }

}

