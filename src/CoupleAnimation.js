import { useState } from "react";
import { useNavigate } from "react-router";

const CoupleAnimation = () => {
    const navigate = useNavigate();
    const [userInitial, setUserInitial] = useState('');
    const [partnerInitial, setPartnerInitial] = useState('');
    const [animationStyle, setAnimationStyle] = useState('');

    const handleSubmit = () => {
        if (animationStyle === "romantic") {
            navigate("/romanticAnimation", {
                state: {
                    userInitial,
                    partnerInitial,
                    animationStyle
                }
            });
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
                        type="text"
                        maxLength={1}
                        value={userInitial}
                        onChange={(e) => setUserInitial(e.target.value)}
                        required
                    />
                    <label>Partner's Initial:</label>
                    <input
                        type="text"
                        maxLength={1}
                        value={partnerInitial}
                        onChange={(e) => setPartnerInitial(e.target.value)}
                        required
                    />
                </div>
            </div>

            <div className="choose-animation-style">
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