import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function Design2() {
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
                            value: 100, 
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: '#7752FE', // Color of the dots (purple)
                        },
                        shape: {
                            type: 'circle', // Shape of the particles (circle for dots)
                        },
                        opacity: {
                            value: 1, // Adjust the opacity of the dots
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 3, // Increase the size of the dots
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 0,
                                sync: false,
                            },
                        },
                        links: {
                            enable: true, // Enable linking between dots
                            distance:60, // Adjust the distance for linking (increased)
                            color: '#808080', // Color of the links (grey)
                            opacity: 0.6, // Opacity of the links
                            width: 1, // Width of the links
                        },
                        move: {
                            enable: true,
                            out_mode: 'bounce',
                            direction: 'none',
                            random: true,
                            speed: 1 // Increased speed
                        },
                    },
                    interactivity: {

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

export default Design2;
