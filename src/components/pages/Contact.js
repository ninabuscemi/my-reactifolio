import React, { useState } from 'react';

// Imports the bootstrap for Modal and button components
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// Function component for the Contact section
function Contact() {

// State for the modal
    const [alert, showAlert] = useState(false);
    const handleClose = () => showAlert(false);
    const handleShow = () => showAlert(true);

// State for the form
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setSubmitted(true);
        handleShow()
    };

    if (submitted) {
        return (
            <>
            {/* Modal for the form submission */}
                <Modal className='text-center' show={alert} onHide={handleClose}>

                {/* Modal header */}
                    <Modal.Header closeButton>
                    <Modal.Title className='w-100'>Success!🚀</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thanks for reaching out!</Modal.Body>
                    <Modal.Body>We will be in touch soon.</Modal.Body>
                    <Modal.Footer>

                    {/* Button to close the modal and return to the homepage*/}
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

            return (
                <div>
                {/* Contact me section title*/}
                    <form className='text-center' onSubmit={handleSubmit}>
                        <h1 className='text-center mb-3'>Contact Me!</h1>
                        <div className=" mb-3 pt-0">

                        {/* Name input field*/}
                            <input
                                className='feedback-input'
                                type="text"
                                placeholder="Your name"
                                name="name"
                                required
                            />
                        </div>

                        {/* Email input field*/}
                        <div className="mb-3 pt-0">
                            <input
                                className='feedback-input'
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                            />
                        </div>

                        {/* Message input field*/}
                        <div className="mb-3 pt-0">
                            <textarea
                                className='feedback-input'
                                placeholder="Your message"
                                name="message"
                                required
                                rows='5'
                            />
                        </div>

                        {/* Submit button*/}
                        <div className="mb-3 pt-0">
                            <button type="submit">
                                Send a message
                            </button>
                        </div>
                    </form>
                </div>
    );
}

export default Contact;