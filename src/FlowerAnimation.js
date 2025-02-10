import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';

const FlowerAnimation = () => {
    const location = useLocation();
    const { userInitial, partnerInitial} = location.state || {};

    const [emojis, setEmojis] = useState([]);

    useEffect(() => {
        // Generate an array of falling emojis
        const generateEmojis = () => {
            const emojiArray = [];
            for (let i = 0; i < 50; i++) { // Adjust number of falling emojis
                emojiArray.push({
                    id: i,
                    left: Math.random() * 95, // Random horizontal position
                    top: Math.random() * 40, // Random falling duration between 3-8 seconds
                    delay: Math.random() * 5, // Random delay before falling
                    opacity: Math.random() * 0.6,
                    fontSize: Math.random() * 35
                });
            }
            setEmojis(emojiArray);
        };
        generateEmojis();
    }, []);

    return (
        <div className="flower-animation">
            {emojis.map((emoji) => (
                <motion.div
                    key={emoji.id}
                    initial={{ y: '-2000%', opacity: emoji.opacity, fontSize: emoji.fontSize }}
                    animate={{ y: '500%', opacity: emoji.opacity, fontSize: emoji.fontSize }}
                    transition={{
                        duration: 6,
                        repeat: Infinity, // Repeat animation infinitely
                        delay: emoji.delay
                    }}
                    style={{
                        position: 'absolute',
                        left: `${emoji.left}%`,
                        top: `${emoji.top}%`,
                        pointerEvents: 'none',
                    }}
                >
                        🌹love🌸
                </motion.div>
            ))}
            

            <motion.h2
                className="first-initial-flower-animation initial-flower-animation"
                layout
                initial={{ fontSize: '300px' }}
                animate={{
                    fontSize: ['300px', '280px', '300px'], // Loop between 50px and 70px
                }}
                transition={{
                    duration: 3,  // Duration for the size change
                    repeat: Infinity,  // Infinite loop
                    repeatType: 'loop',  // Ensures continuous looping
                }}
            >
                {userInitial && partnerInitial
                    ? userInitial.toUpperCase()
                    : 'No initials available'}
            </motion.h2>

            <h2 className="give-heart-present">💝</h2>

            <motion.h2
                className="partner-initial-flower-animation initial-flower-animation"
                layout
                initial={{ fontSize: '300px' }}
                animate={{
                    fontSize: ['300px', '280px', '300px'], // Loop between 50px and 70px
                }}
                transition={{
                    duration: 3,  // Duration for the size change
                    repeat: Infinity,  // Infinite loop
                    repeatType: 'loop',  // Ensures continuous looping
                }}
            >
                {userInitial && partnerInitial
                    ? partnerInitial.toUpperCase()
                    : 'No initials available'}
            </motion.h2>
        </div>
    );
}
 
export default FlowerAnimation;