import { useState } from "react";
import { useNavigate } from "react-router";
import { useRef } from "react";

const CoupleAnimation = () => {
    const navigate = useNavigate();
    const [userInitial, setUserInitial] = useState('');
    const [partnerInitial, setPartnerInitial] = useState('');
    const [animationStyle, setAnimationStyle] = useState('');
    const firstInitial = useRef();
    const secondInitial = useRef();

    const screenRatioRef = useRef(null)
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const handleSubmit = () => {
        if (firstInitial.current.value && secondInitial.current.value) {
            if (animationStyle === "romantic") {
                if (screenWidth < 1200 || screenWidth > 2000 || screenHeight < 400 || screenHeight > 1000) {
                    screenRatioRef.current.innerText = "Device is not compatible with animation!!"
                }
                else {
                    navigate("/romanticAnimation", {
                        state: {
                            userInitial,
                            partnerInitial
                        }
                    });
                }
            }

            else if (animationStyle === "flower") {
                navigate("/flowerAnimation", {
                    state: {
                        userInitial,
                        partnerInitial
                    }
                });
            }

            else {
                navigate("/kissAnimation", {
                    state: {
                        userInitial,
                        partnerInitial
                    }
                })
            }
        }   
    };

    return (
        <>
            <div className="couple-animation">
                <div className="animation-back-arrow-div">
                    <button className="animation-back-arrow" onClick={() => navigate(-1)}>↩</button>
                </div>
                <div className="get-couple-animation">
                    <label>Your Initial:</label>
                    <input
                        ref={firstInitial}
                        type="text"
                        maxLength={1}
                        value={userInitial}
                        onChange={(e) => setUserInitial(e.target.value)}
                        required
                    />
                    <label>Partner's Initial:</label>
                    <input
                        ref={secondInitial}
                        type="text"
                        maxLength={1}
                        value={partnerInitial}
                        onChange={(e) => setPartnerInitial(e.target.value)}
                        required
                    />
                </div>
            </div>

            <div className="choose-animation-style">
                <h2 ref={screenRatioRef} className="no-animation-text"></h2>
                <button className="animation-button" onClick={handleSubmit}>
                    Start Animation
                </button>
                <br />
                <label>Choose Style of Animation:</label>
                <input
                    type="radio"
                    name="animation-style"
                    value="romantic"
                    onChange={() => setAnimationStyle('romantic')}
                    className="animation-style romantic"
                    required
                />
                <label> Romantic</label>

                <input
                    type="radio"
                    name="animation-style"
                    value="flower"
                    onChange={() => setAnimationStyle('flower')}
                    className="animation-style flower"
                    required
                />
                <label> Flowers</label>

                <input
                    type="radio"
                    name="animation-style"
                    value="kiss"
                    onChange={() => setAnimationStyle('kiss')}
                    className="animation-style kiss"
                    required
                />
                <label> Kiss</label>
            </div>
        </>
    );
}

export default CoupleAnimation;