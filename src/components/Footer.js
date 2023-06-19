import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="container footer-background mx-auto py-4">
            <div className="container mx-auto flex flex-wrap justify-center">
                {/* Desktop/Tablet View */}
                <div className="w-full md:w-1/4 lg:w-1/4 px-4 mb-8 md:mb-0">
                    <div className="flex flex-wrap flex-col mb-4 items-center">
                        <img src="https://i.imgur.com/KxfWH9J.png" alt="Logo" className="logo-size mb-2" />

                        {/* <img src="twitter-icon.png" alt="Twitter" className="h-6 w-6" /> */}
                        <p className="text-pink font-bold text-base mb-2">FLOWERBOX / EST.2019</p>
                        <div className="flex flex-wrap space-x-2">
                            <FontAwesomeIcon icon={faTwitter} size="md" />
                            <FontAwesomeIcon icon={faFacebook} size="md" />
                            <FontAwesomeIcon icon={faInstagram} size="md" />
                            {/* <img src="facebook-icon.png" alt="Facebook" className="h-6 w-6" />
              <img src="instagram-icon.png" alt="Instagram" className="h-6 w-6" /> */}
                        </div>
                    </div>
                </div>
                <div className="mobile-hidden md:w-1/4 lg:w-1/4 px-4 mb-8 md:mb-0">
                    <ul className="text-black">
                        <li className="mb-2 text-blue font-bold">Customer Service</li>
                        <li className="mb-2">Satisfaction Commitment</li>
                        <li className="mb-2">Delivery Policies</li>
                        <li className="mb-2">Cancellations</li>
                        <li className="mb-2">Return Policy</li>
                    </ul>
                </div>
                <div className="mobile-hidden md:w-1/4 lg:w-1/4 px-4 mb-8 md:mb-0">
                    <ul className="text-black">
                        <li className="mb-2 text-blue font-bold">Flowerbox</li>
                        <li className="mb-2">Terms of Service</li>
                        <li className="mb-2">Privacy Policy</li>
                        <li className="mb-2">Career Opportunities</li>
                        <li className="mb-2">More Information</li>
                    </ul>
                </div>
                {/* Mobile View */}
                <div className="w-full md:hidden lg:hidden px-4 text-center">
                    <ul className="text-black">
                        <li className="mb-2 text-blue font-bold">Customer Service</li>
                        <li className="mb-2">Satisfaction Commitment</li>
                        <li className="mb-2">Delivery Policies</li>
                        <li className="mb-2">Cancellations</li>
                        <li className="mb-2">Return Policy</li>
                        <li className="mb-2 text-blue font-bold">Flowerbox</li>
                        <li className="mb-2">Terms of Service</li>
                        <li className="mb-2">Privacy Policy</li>
                        <li className="mb-2">Career Opportunities</li>
                        <li className="mb-2">More Information</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
