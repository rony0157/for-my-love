// ৩৬৫ দিনের ডেটাবেজ (মাস-দিন ফরম্যাটে)
const dailySurprises = {
    "01-01": {
        message: "নতুন বছরের প্রথম দিন, আর আমার সারা বছরের ভালোবাসা শুধু তোমার জন্য, পাপড়ি! বছরের প্রতিটি দিন তোমাকে এভাবেই ভালোবাসবো।",
        gift: "🌹 একটি ডিজিটাল লাল গোলাপ এবং নতুন বছরের উষ্ণ আলিঙ্গন।"
    },
    "02-14": {
        message: "হ্যাপি ভ্যালেন্টাইনস ডে, আমার রানি! আজকের দিনটা শুধু আমাদের ভালোবাসার।",
        gift: "💐 ৯৯৯টি ভার্চুয়াল লাল গোলাপের এক বিশাল তোড়া!"
    },
    "03-08": {
        message: "আজ নারী দিবস। আমার জীবনের সবচেয়ে শক্তিশালী, সুন্দর এবং প্রিয় নারীটির জন্য রইল অনেক অনেক ভালোবাসা।",
        gift: "🌸 একটি ক্রিস্টাল বক্সে রাখা কখনো না শুকিয়ে যাওয়া প্রিজার্ভড রোজ।"
    }
};

// সাধারণ দিনগুলোর জন্য ডিফল্ট মেসেজ (যা লুপ হতে থাকবে)
const defaultMessages = [
    { message: "আজকের দিনটা তোমার মিষ্টি হাসির মতোই সুন্দর হোক, পাপড়ি!", gift: "🌹 একটি তাজা শিশির ভেজা গোলাপ।" },
    { message: "পাপড়ি, তোমার ওই বাচ্চাদের মতো সরল মনটাকে সারাজীবন আগলে রাখাই আমার একমাত্র মিশন।", gift: "💖 একটি ভার্চুয়াল কেয়ার হাগ।" },
    { message: "ব্যস্ততার মাঝেও আমার মনটা সবসময় তোমার কাছেই ছুটে যায়, পলি।", gift: "💌 একটি ছোট্ট চিরকুট: 'আই লাভ ইউ টু মাচ!'" },
    { message: "পৃথিবীর সব গোলাপ একদিকে, আর আমার পাপড়ির হাসি একদিকে। তুমিই আমার সেরা উপহার।", gift: "🌹 একটি সুন্দর গোলাপি গোলাপ।" }
];

let currentGift = "";

function initSurprise() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const dateKey = `${month}-${day}`;

    let todayContent;

    // যদি বিশেষ কোনো দিন হয়
    if (dailySurprises[dateKey]) {
        todayContent = dailySurprises[dateKey];
    } else {
        // সাধারণ দিনে প্রতি ডেট অনুযায়ী ঘুরেফিরে ডিফল্ট মেসেজ দেখাবে (Lifetime লুপ)
        const index = today.getDate() % defaultMessages.length;
        todayContent = defaultMessages[index];
    }

    document.getElementById("loveMessage").innerText = todayContent.message;
    currentGift = todayContent.gift;

    // গোলাপের পাপড়ি পড়ার অ্যানিমেশন চালু করা
    createPetals();
}

// গিফট বাটন ক্লিক করলে দেখাবে
function openGift() {
    const giftDiv = document.getElementById("giftDisplay");
    document.getElementById("giftContent").innerText = currentGift;
    giftDiv.classList.remove("id-hidden");
}

// স্ক্রিনে গোলাপের পাপড়ি তৈরি করার ফাংশন
function createPetals() {
    const container = document.getElementById("roseContainer");
    const petals = ["🌹", "🌸", "💖", "🍃"]; // ঝরে পড়ার উপাদান
    
    setInterval(() => {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.innerText = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = Math.random() * 3 + 2 + "s"; // ২ থেকে ৫ সেকেন্ডের মধ্যে পড়বে
        
        container.appendChild(petal);
        
        // স্ক্রিন থেকে চলে গেলে রিমুভ করে দেওয়া
        setTimeout(() => {
            petal.remove();
        }, 5000);
    }, 300);
}

window.onload = initSurprise;
