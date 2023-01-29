import React, { useEffect, useRef } from "react";



export default function Contact() {
    const formsRef = useRef(null);

    useEffect(() => {
        const forms = formsRef.current;
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        function displayError(thisForm, error) {
            thisForm.querySelector('.loading').classList.remove('d-block');
            thisForm.querySelector('.error-message').innerHTML = error;
            thisForm.querySelector('.error-message').classList.add('d-block');
        }
        function php_email_form_submit(thisForm, action, formData) {
            fetch(action, {
                method: 'POST',
                body: formData,
                headers: { 'X-Requested-With': 'XMLHttpRequest' }
            })
                .then(response => {
                    if (response.ok) {
                        return response.text()
                    } else {
                        throw new Error(`${response.status} ${response.statusText} ${response.url}`);
                    }
                })
                .then(data => {
                    thisForm.querySelector('.loading').classList.remove('d-block');
                    if (data.trim() === 'OK') {
                        thisForm.querySelector('.sent-message').classList.add('d-block');
                        thisForm.reset();
                    } else {
                        throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action);
                    }
                })
                .catch((error) => {
                    displayError(thisForm, error);
                });
        }

        if (!forms) {
            return;
        }

        forms.forEach(function (e) {
            e.addEventListener('submit', function (event) {
                event.preventDefault();

                let thisForm = this;

                let action = thisForm.getAttribute('action');

                if (!action) {
                    displayError(thisForm, 'The form action property is not set!');
                    return;
                }
                thisForm.querySelector('.loading').classList.add('d-block');
                thisForm.querySelector('.error-message').classList.remove('d-block');
                thisForm.querySelector('.sent-message').classList.remove('d-block');

                let formData = new FormData(thisForm);

                php_email_form_submit(thisForm, action, formData);
            });
        });

        return () => {
            // Remove the event listener when the component unmounts
            forms.forEach(function (e) {
                e.removeEventListener('submit', function () { });
            });
        };
    }, []);
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>I'm available for web development gigs and similar engagements. If you have any questions, don't hesitate to contact me. Please only use phone contact for urgent inquiries, otherwise Whatsapp, Linkedin or email is the best to reach me.</p>
                    </div>

                    <div className="row" data-aos="fade-in">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>23, Ajayi street, along LASU-Isher road, Ipaye bus-stop, Ojo, Lagos</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>ridhwan.alabi@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+234 813 2246 772</p>
                                </div>

                                <iframe src="https://goo.gl/maps/JTwwkzKP9GNvTFcF8" border="0" style={{ width: '100%', border:'0', height: '290px', borderRadius: '5px' }} allowFullScreen title="location"></iframe>
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="./forms/contact.php" method="post" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" name="name" className="form-control border-radius" placeholder="Your full name" id="name" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Email</label>
                                        <input type="email" className="form-control border-radius" placeholder="you@example.com" name="email" id="email" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Subject</label>
                                    <input type="text" className="form-control border-radius" name="subject" id="subject" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Message</label>
                                    <textarea className="form-control border-radius" name="message" rows="10" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}


