import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';

const KissAnimation = () => {
    const location = useLocation();
    const { userInitial, partnerInitial} = location.state || {};

    const screenWidth = window.innerWidth;

    const [emojis, setEmojis] = useState([]);

    useEffect(() => {
        // Generate an array of falling emojis
        const generateEmojis = () => {
            const emojiArray = [];
            for (let i = 0; i < 50; i++) { // Adjust number of falling emojis
                emojiArray.push({
                    id: i,
                    left: Math.random() * 90, // Random horizontal position
                    top: Math.random() * 40, // Random falling duration between 3-8 seconds
                    delay: Math.random() * 5, // Random delay before falling
                    opacity: Math.random() * 0.75,
                    fontSize: Math.random() * 50
                });
            }
            setEmojis(emojiArray);
        };
        generateEmojis();
    }, []);

    return (
        <div className="kiss-animation">
            {emojis.map((emoji) => (
                <motion.div
                    key={emoji.id}
                    initial={{ y: '-1500%', opacity: emoji.opacity, fontSize: emoji.fontSize }}
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
                        💋
                </motion.div>
            ))}

            <motion.h2
                className="first-initial-kiss-animation initial-kiss-animation"
                layout
                initial={{fontSize: screenWidth > 800 ? "230px" : "100px"}}
                animate={{
                    fontSize: screenWidth > 800 ? ['230px', '220px', '230px'] : ["100px", "80px", "100px"], // Loop between 50px and 70px
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

            <h2 className="biting-lips">🫦</h2>

            <motion.h2
                className="partner-initial-kiss-animation initial-kiss-animation"
                layout
                initial={{fontSize: screenWidth > 800 ? "230px" : "100px"}}
                animate={{
                    fontSize: screenWidth > 800 ? ['230px', '220px', '230px'] : ["100px", "80px", "100px"], // Loop between 50px and 70px
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
 
export default KissAnimation;