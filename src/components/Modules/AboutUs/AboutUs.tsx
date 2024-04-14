import React, { useEffect, useState } from 'react';


function AboutUs(){
    const [addClass, setAddClass] = useState<boolean>(false);
    const [missionSectionVisible, setMissionSectionVisible] = useState<boolean>(false);
    const [employeesSectionVisible, setEmployeesSectionVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const textSection = document.querySelector('.about-header-section') as HTMLElement;
    
            if (textSection) {
                const sectionTop = textSection.offsetTop;
                const sectionHeight = textSection.offsetHeight;
    
                // Check if the viewport is within the height of the textSection
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setAddClass(true);
                } 
            }
        };
    
        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const textSection = document.querySelector('.textSection') as HTMLElement;
    
            if (textSection) {
                const sectionTop = textSection.offsetTop;
                const sectionHeight = textSection.offsetHeight;
    
                // Check if the viewport is within the height of the textSection
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setMissionSectionVisible(true);
                } 
            }
        };
    
        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const textSection = document.querySelector('.missionSection') as HTMLElement;
    
            if (textSection) {
                const sectionTop = textSection.offsetTop;
                const sectionHeight = textSection.offsetHeight;
    
                // Check if the viewport is within the height of the textSection
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setEmployeesSectionVisible(true);
                } 
            }
        };
    
        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <>
            <section className="about-header-section" id='AboutUs'>

                <div className='headerContainer animate__animated animate__fadeInDown'><h1 className='mobileTitle'>About Us</h1></div>
                
                <div className='valuesContainer'>
                    <div className='value animate__animated animate__zoomInUp'>
                        <span className="material-icons">favorite</span>
                        <div>
                            <h2>Passion & Purpose</h2>
                            <p>Passion & Purpose fuel our dedication to the art of mixology. With every recipe we share, we aim to ignite a passion for craft cocktails and inspire others to explore the world of flavors.</p>
                        </div>
                    </div>
                    <div className='value animate__animated animate__zoomInUp delayAnims'>
                        <span className="material-icons">palette</span>
                        <div>
                            <h2>Craftsmanship & Creativity</h2>
                            <p>Craftsmanship & Creativity define our commitment to excellence in cocktail crafting. We blend traditional techniques with innovative flavors to create unforgettable libations.</p>
                        </div>
                    </div>
                    <div className='value animate__animated animate__zoomInUp delayAnims2'>
                        <span className="material-icons">groups</span>
                        <div>
                            <h2>Community & Connection</h2>
                            <p>Community & Connection are at the heart of what we do. We believe in the power of shared experiences and the joy of bringing people together over exceptional drinks.</p>
                        </div>
                    </div>
                    <div className='value animate__animated animate__zoomInUp delayAnims3'>
                        <span className="material-icons">construction</span>
                        <div>
                            <h2>Quality & Innovation</h2>
                            <p>Quality & Innovation drive our pursuit of perfection. We strive to push boundaries, explore new flavors, and set the standard for excellence in mixology.</p>
                        </div>
                    </div>
                </div>
                <div className={`textSection`}>
                    <div className={`textContainer`}>
                        <div className={`left animate__animated animate__fadeInUp` }>
                            <h2 className={`animate__animated ${addClass ? 'animate__fadeInUpBig' : ''}`}>Why you'll love us</h2>
                            <div className={`reasons animate__animated animate__delay-1s ${addClass ? 'animate__lightSpeedInRight' : ''}`}>
                                <span className="material-icons">task_alt</span>
                                <p>Sip and savor flavors from around the globe with our diverse selection of cocktail recipes.</p>
                            </div>
                            <div className={`reasons animate__animated delayAnims3 ${addClass ? 'animate__lightSpeedInRight' : ''}`}>
                                <span className="material-icons">task_alt</span>
                                <p>Join our global network of mixologists and enthusiasts to share stories, tips, and inspiration.</p>
                            </div>
                            <div className={`reasons animate__animated animate__delay-2s ${addClass ? 'animate__lightSpeedInRight' : ''}`}>
                                <span className="material-icons">task_alt</span>
                                <p>Every recipe is meticulously crafted to perfection, ensuring a delightful experience with every sip.</p>
                            </div>
                            <div className={`reasons animate__animated delayAnims4 ${addClass ? 'animate__lightSpeedInRight' : ''}`}>
                                <span className="material-icons">task_alt</span>
                                <p>Explore new tastes and sensations as we push the boundaries of mixology together.</p>
                            </div>
                        </div>
                        <div className='right animate__animated animate__rotateInDownRight'>
                            <img src="/Img/aboutusimg1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className={`missionSection animate__animated ${missionSectionVisible ? 'animate__slideInLeft' : 'hidden'}`}>
                   <h1 className={` animate__animated animate__delay-1s ${missionSectionVisible ? 'animate__fadeIn' : 'hidden'}`}>Our Mission and Impact</h1>
                   <p className={` animate__animated animate__delay-1s ${missionSectionVisible ? 'animate__fadeInLeft' : 'hidden'}`}>At Mixology Mastery, our mission is to inspire and empower cocktail enthusiasts worldwide to explore the art of mixology with creativity, confidence, and curiosity. We strive to curate an exceptional collection of cocktail recipes, blending tradition with innovation to delight the senses and elevate the drinking experience. Through our dedication to craftsmanship, community, and collaboration, we aim to foster a culture of appreciation for the craft of cocktails, celebrating the joy of discovery, the thrill of experimentation, and the camaraderie of shared experiences. With every recipe we share and every glass we raise, we invite you to join us on a journey of exploration, innovation, and celebration, where every sip tells a story and every cocktail is an adventure.</p>
                </div>
                <div className='employeesSection'>
                    <h1 className={`animate__animated ${employeesSectionVisible ? 'animate__fadeIn' : 'hidden'}`}>Our staff</h1>
                    <div className='employeeContainer'>
                        <div className='employee'>
                            <img className={`animate__animated ${employeesSectionVisible ? 'animate__fadeInLeftBig' : 'hidden'}`} src='/Img/Samantha Reed.png' alt="" />
                            <div className='employeeTextSection'>
                                <h2 className={`animate__animated animate__delay-1s ${employeesSectionVisible ? 'animate__fadeInDown' : 'hidden'}`}>Samantha Reed - Chief Mixologist</h2>
                                <p className={`animate__animated animate__delay-1s ${employeesSectionVisible ? 'animate__fadeInDown' : 'hidden'}`}>Samantha oversees recipe development and quality control.</p>
                            </div>
                        </div>
                        <div className='employee'>
                            <img className={`animate__animated ${employeesSectionVisible ? 'animate__fadeInDownBig' : 'hidden'}`} src='/Img/Michael Nguyen.png' alt="" />
                            <div className='employeeTextSection'>
                                <h2 className={`animate__animated animate__delay-1s ${employeesSectionVisible ? 'animate__fadeInRight' : 'hidden'}`}>Michael Nguyen - Community Manager</h2>
                                <p className={`animate__animated animate__delay-1s ${employeesSectionVisible ? 'animate__fadeInRight' : 'hidden'}`}>Michael fosters engagement and organizes events for the online community.</p>
                            </div>
                        </div>
                        <div className='employee'>
                            <div className='employeeTextSection'>
                                <h2 className={`animate__animated animate__delay-1s ${employeesSectionVisible ? 'animate__fadeInLeft' : 'hidden'}`}>Emily Carter - Content Creator</h2>
                                <p className={`animate__animated animate__delay-1s ${employeesSectionVisible ? 'animate__fadeInLeft' : 'hidden'}`} >Emily creates captivating content for various platforms.</p>
                            </div>
                            <img className={`animate__animated  ${employeesSectionVisible ? 'animate__fadeInUpBig' : 'hidden'}`} src='/Img/Emily Carter.png' alt="" />
                        </div>
                        <div className='employee'>
                            <div className='employeeTextSection'>
                                <h2 className={`animate__animated animate__delay-1s ${employeesSectionVisible ? 'animate__fadeInUp' : 'hidden'}`}>Daniel Martinez - Operations Coordinator</h2>
                                <p className={`animate__animated animate__delay-1s ${employeesSectionVisible ? 'animate__fadeInUp' : 'hidden'}`}>Daniel handles logistics and ensures smooth operations.</p>
                            </div>
                            <img className={`animate__animated  ${employeesSectionVisible ? 'animate__fadeInRightBig' : 'hidden'}`} src='/Img/Daniel Martinez.png' alt="" />
                        </div>
                    </div>
                </div>

             
            </section>
        </>

    )
};
export default AboutUs;