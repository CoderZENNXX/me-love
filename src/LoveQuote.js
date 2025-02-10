import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
/* import { toPng } from "html-to-image";
import ReactDOM from "react-dom/client"
import LoveQuoteImage from "./loveQuoteImage";
*/

const LoveQuote = () => {
    const navigate = useNavigate()
    let [quoteLanguage, setQuoteLanguage] = useState("")
    const getQuoteButton = useRef(null)
    const quote = useRef(null)
    const byAuthorMeLove = useRef(null)
    const byAuthorTayzar = useRef(null)
    const screenWidth = window.innerWidth

    // const quoteImage = useRef(null)

    /* const handleDownloadImage = () => {
        if (!quoteImage.current) {
            const div = document.createElement('div');
            quoteImage.current = div;
            document.body.appendChild(div);
        }
    
        const root = ReactDOM.createRoot(quoteImage.current);
        root.render(<LoveQuoteImage/>);
    
        setTimeout(() => {
            toPng(quoteImage.current)
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = 'quote.png';
                    link.click();
                })
                .catch((err) => {
                    console.error('Failed to generate image:', err);
                })
                .finally(() => {
                    root.unmount();
                    document.body.removeChild(quoteImage.current);
                    quoteImage.current = null;
                });
        }, 100);
    }; */
    


    const handleLanguageChange = (e) => {
        e.preventDefault()

        if (quoteLanguage === "english") {
            setQuoteLanguage("english")
            quote.current.innerText = englishLoveQuotes[Math.floor(Math.random() * englishLoveQuotes.length)]
            quote.current.style.fontWeight = "lighter"
            
            if (screenWidth < 1000) {
                quote.current.style.fontSize = "30px"
                quote.current.style.width = "300px"
            }
            else {
                quote.current.style.fontSize = "35px"
                quote.current.style.width = "600px"
            }
        }
        else if (quoteLanguage === "burmese") {
            setQuoteLanguage("burmese")
            quote.current.innerText = burmeseLoveQuotes[Math.floor(Math.random() * burmeseLoveQuotes.length)]
            quote.current.style.fontWeight = "650"

            if (screenWidth < 1000) {
                quote.current.style.fontSize = "20px"
                quote.current.style.width = "300px"
            }
            else {
                quote.current.style.fontSize = "25px"
                quote.current.style.width = "550px"
            }
        }
    }

    const handleRadioChange = (e) => {
        setQuoteLanguage(e.target.value);
    };

    const englishLoveQuotes = [
        "Love is not about how many days you have spent together, it's about how much you love each other.",
        "When I look at you, I see everything I need.",
        "I never want to stop making memories with you.",
        "You are the love of my life.",
        "I love you not only for what you are, but for what I am when I am with you.",
        "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        "I have waited for this moment for a long time.",
        "To love and be loved is to feel the sun from both sides.",
        "You are my sun, my moon, and all my stars.",
        "I want to spent the rest of my life with you.",
        "I love you to the moon and back.",
        "My heart is, and always will be, yours.",
        "In all the world, there is no heart for me like yours.",
        "You make me want to be a better person.",
        "I didn't choose you, my heart did.",
        "I could search my whole life through and through and never find another you.",
        "I love you more than I have ever found a way to say to you.",
        "You are my everything.",
        "If I know what love is, it is because of you.",
        "You are the reason I smile every day.",
        "You complete me.",
        "You are my today and all of my tomorrows.",
        "Every time I see you, I fall in love all over again.",
        "I will love you until the stars go out and the tides no longer turn.",
        "You are my forever and always.",
        "Loving you is like breathing. How can I stop?",
        "Your love shines in my heart as the sun that shines upon the earth.",
        "In your smile I see something more beautiful than the stars.",
        "I fall to my knees everytime I see you.",
        "I fall in love with you more and more every day.",
        "Your love is all I need to feel complete.",
        "My love for you is a journey, starting at forever and ending at never.",
        "I love you because the entire universe conspired to help me find you.",
        "Every love story is beautiful, but ours is my favorite.",
        "You are my today, my tomorrow, and forever.",
        "I love you to infinity and beyond.",
        "When I’m with you, I don’t need anything else.",
        "There’s no one else I’d rather spend my forever with.",
        "You have my heart, forever.",
        "I love you more than there are stars in the sky and fish in the sea.",
        "There is no remedy for love but to love more.",
        "You are my always.",
        "You will forever be my always.",
        "My love for you will never fade, only grow stronger with time.",
        "You are the reason my heart beats.",
        "You are my favorite notification.",
        "I can’t imagine a life without you.",
        "I’ve fallen in love many times... always with you.",
        "Love is composed of a single soul inhabiting two bodies.",
        "Every moment with you is a moment I treasure.",
        "I found my home and my heart in you.",
        "The best thing to hold onto in life is each other.",
        "I am yours, don't doubt it.",
        "You are the one that I will always love.",
        "You make my heart skip a beat."
    ];
    

    const burmeseLoveQuotes = [
        "နင့်မရှိတဲ့ဘဝက စာမျက်နှာမရှိတဲ့ စာအုပ်လိုပါပဲ။",
        "ငါ့ရဲ ဘဝဟာ နင့်ပြုံးတွေကို မြင်တိုင်း ပြည့်စုံလာတယ်။",
        "အချစ်ဆိုတာ အတူတူနေကြမယ့် အနာဂတ်တစ်ခုတည်ဆောက်ခြင်းပါ။",
        "နင့်အချစ်ဟာ ငါ့ဘဝကို အမြဲတမ်းနွေးထွေးစေတယ်။",
        "နင့်မရှိတဲ့နေ့တွေက ဟင်းမရှိတဲ့ ထမင်းဝိုင်းလိုပါပဲ။",
        "ငါ့နှလုံးသားက နင့်ကို ပို၍ ချစ်မိလာတယ်။",
        "အချစ်ဆိုတာ မင်းရွေးတဲ့အရာမဟုတ်ဘူး၊ ဒါဟာ မင်းနှလုံးသား ရွေးတာပါ။",
        "နင့်အနားမှာရှိတဲ့ အချိန်တိုင်းက အမှတ်တရတွေဖြစ်သွားတယ်။",
        "အချစ်ဆိုတာ ချစ်သူတွေကို ခက်ခဲတဲ့ ဘဝကြီးကနေ ဆွဲထုတ်ပေးချင်ဖြစ်တယ်။",
        "ငါ့ဘဝရဲ့ အဆုံးကို မင်းရင်ခွင်မှာပဲဖြတ်သန်းချင်တယ်။",
        "နင့်အချစ်ဟာ နောက်တစ်ချိန်တစ်ခါမှာ ပြန်မရနိုင်တဲ့ အရာတစ်ခုပါ။",
        "နင့်ကိုနောက်ဆုံးဆိုတဲ့အချိန်ထိ ချစ်သွားမယ်။",
        "နင့်အပြုံးဟာ ငါ့အတွက် နေထွက်လာတဲ့အချိန်ပါပဲ။",
        "အချစ်ဆိုတာသည် ကိုယ့်ဘဝကို အလင်းရောင် ပေးနေသည်။",
        "ငါ့အိမ်ကို နင့်ရဲ့အပြုံးတစ်ခုဖြစ်နေချင်တယ်။",
        "အချစ်က ပုံမှန်မဖန်တီးနိုင်တဲ့ အမှတ်တရတွေကို ဖန်တီးနိုင်တယ်။",
        "နင့်အချစ်ဟာ ငါ့ဘဝရဲ့ အရေးကြီးဆုံးအရာပဲ။",
        "ငါ့ဘဝရဲ့ အရေးကြီးဆုံးအရာက နင့်အချစ်ပါ။",
        "ငါ့ဘဝကို နင့်အနားမှာပဲ ကုန်ဆုံးသွားမယ်။",
        "နင့်အနားမှာ စစ်မှန်တဲ့အချစ်ကို အလွယ်တကူ တွေ့ရတယ်။",
        "နင့်ရဲ့ပြုံးတစ်ချက်က ငါ့ရဲ့စိတ်ညစ်မှုတွေ ပျောက်သွားတယ်။",
        "နင့်အချစ်ဟာ ငါ့ဘဝရဲ့ နေရာတိုင်းမှာ ထိရောက်နေတယ်။",
        "စစ်မှန်တဲ့ချစ်ဆိုတာ မင်းကိုငါသိလိုက်တဲ့နေ့ကစပြီး ရှိလာခဲ့တာပဲ။",
        "နင့်ကိုတွေ့မိတဲ့အချိန်ကနေ ငါ့ဘဝဟာ တိုးတက်လာတယ်။",
        "နင့်အနားမှာရှိတိုင်း နေ့တိုင်းက ပျော်ရွှင်စရာဖြစ်နေတယ်။",
        "နင့်အချစ်ဟာ ငါ့အိမ်မက်တွေထက် ပိုပြီးလှတယ်။",
        "ငါ့ဘဝရဲ့ ထာဝရချစ်သူက နင်ပဲဖြစ်တယ်။",
        "နင့်အချစ်ဟာ မင်းမသိတဲ့အထိကို ငါ့ကို ပြောင်းလဲသွားတယ်။",
        "ငါ့နှလုံးသားပေါ်မှာ နင့်နာမည်ကိုရေးထားတယ်။",
        "နင့်အနားမှာ ရှိတဲ့အချိန်တိုင်း ငါ့အပြုံးတွေ မရပ်နိုင်တော့ဘူး။",
        "အချစ်ဆိုတာ နင့်နာမည်နဲ့ရေးထိုးထားတဲ့ ရုပ်ရှင်တစ်ကားပါ။",
        "နင့်အပြုံးတစ်ချက်တည်းက ငါ့ကိုပျော်ရွှင်မှုရစေတယ်။",
        "ငါ့အိမ်မက်တစ်ခုလုံးမှာ နင့်ပဲရှိတယ်။",
        "နင့်အနားမှာရောက်မှ ငါ့ဘဝဟာ ပြည့်စုံသွားတတယ်။",
        "ငါ့ဘဝဟာ နင့်ကိုချစ်ရင်း အမြဲနွေးထွေးနေတယ်။",
        "နင့်အချစ်ဟာ ငါ့နေ့တိုင်းကို စတင်ပေးတယ်။",
        "နင့်အနားမှာဆိုတာ အိပ်မက်တစ်ခုထဲမှာရှိနေသလိုပါပဲ။",
        "နင့်အပြုံးဟာ အိမ်မက်တွေထက်တောင် လှတယ်။",
        "နင့်မရှိရင် ငါ့နေ့တစ်နေ့ဟာ မတွေးရဲစရာပါပဲ။",
        "နင့်အချစ်ဟာ ငါ့ဘဝရဲ့လမ်းပြပါ။",
        "ငါ့နှလုံးသားနဲ့ နင့်ရဲ့အချစ်တွေက အမြဲတမ်းလက်တွဲဖော်တွေပဲ။",
        "အချစ်ဆိုတာ နင့်ရဲ့အပြုံးတွေကို ပိုင်ဆိုင်ထားခြင်းပါ။",
        "နင့်အပြုံးဟာ ငါ့နားမှာ အမြဲတမ်းတည်ရှိနေတယ်။",
        "နင့်နားမှာရှိရင် ဘယ်တော့မှတောင် ပျင်းမှာမဟုတ်ဘူး။",
        "နင့်အချစ်ဟာ ငါ့ဘဝကို အမြဲတမ်းလင်းလက်စေတယ်။",
        "နင့်ကိုငါ့အနားမှာရှိနေတဲ့အချိန်တိုင်းက ဘဝကုန်ဆုံးတဲ့အထိ မမေ့နိုင်တော့ပါ။",
        "ငါ့ဘဝရဲ့ပန်းခြံမှာ နင့်အချစ်ပန်းတစ်ပွင့်သာရှိတယ်။",
        "နင့်အပြုံးတွေက ငါ့ရဲ့အိမ်မက်တွေကို လွှမ်းမိုးလာပြီ။"
    ];

    return (
        <>
            <div className="love-quote">
                <div className="quote-back-arrow-div">
                    <button className="quote-back-arrow" onClick={() => navigate(-1)}>↩</button>
                </div>

                <div className="get-quote">
                        <h2 ref={quote} className="random-quote">Get a Quote to Sent to Your Love Ones 
                            <br/>
                            💕💕
                        </h2>
                        <pre ref={byAuthorMeLove} className="author by-me-love">Written by Me-Love</pre>
                        <pre ref={byAuthorTayzar} className="author by-tayzar">(Tayzar)</pre>
                        <button ref={getQuoteButton} className="random-quote-button" onClick={handleLanguageChange}>
                            {quoteLanguage === "english"
                            ? "Get English Quote"
                            : quoteLanguage === "burmese"
                            ? "Get Burmese Quote"
                            : "Choose a language first!!"}
                        </button>
                </div>
            </div>

            <div className="choose-quote-language">
                <label>Choose Language of Quote:</label>
                <br/>
                <input 
                type="radio" 
                name="quote_language" 
                value="english"
                className="quote-language english"
                checked={quoteLanguage==="english"}
                onChange={handleRadioChange}
                >
                </input>
                <label for="english"> English</label>
                <br/>
                <input 
                type="radio" 
                name="quote_language" 
                value="burmese"
                className="quote-language burmese"
                checked={quoteLanguage==="burmese"}
                onChange={handleRadioChange}
                >
                </input>
                <label for="burmese"> Burmese</label>
            </div>
        </>
    );
}
 
export default LoveQuote;