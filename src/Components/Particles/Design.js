import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function Design() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    particles: {
                        number: {
                            value: 150, // Adjust the number of dots
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: '#ffffff', // Color of the dots (white)
                        },
                        shape: {
                            type: 'circle', // Shape of the particles (circle for dots)
                        },
                        opacity: {
                            value: 0.5, // Adjust the opacity of the dots
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 2, // Adjust the size of the dots
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 0,
                                sync: false,
                              },
                        },
                        links: {
                            enable: false, // Disable linking between dots
                        },
                        move: {
                            enable: true,
                            out_mode: 'bounce',
                            direction: 'none',
                            random: true,
                            speed: 0.3,
                        },
                    },
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },

                        },
                        modes: {
                            push: {
                                quantity: 2,
                            },
                            repulse: {
                                distance: 150,
                                duration: 0.4,
                            },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}

export default Design;
