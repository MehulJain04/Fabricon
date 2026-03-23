
// Mock Product Data (36 Items for 3 Full Pages of 12)
const productsData = [
    // Page 1: Mixed High Demand
    { id: 1, title: 'Premium Organic Cotton Socks', titleHi: 'प्रीमियम ऑर्गेनिक कॉटन मोज़े', desc: '100% GOTS certified, ankle-length socks.', descHi: '100% GOTS प्रमाणित, टखने की लंबाई वाले मोज़े।', material: 'cotton', region: 'india', moq: 500, cert: 'gots', rating: 4.8, price: 120, unit: 'pairs', img: 'https://placehold.co/400x300/e0f2f1/004d40?text=Cotton+Socks' },
    { id: 2, title: 'Sheer Silk Pantyhose', titleHi: 'शीर सिल्क पैंटीहोज़', desc: 'High grade 6A silk blend, ultra-sheer.', descHi: 'उच्च ग्रेड 6A सिल्क ब्लेंड, अल्ट्रा-शीर।', material: 'silk', region: 'china', moq: 100, cert: 'oeko-tex', rating: 4.5, price: 650, unit: 'pairs', img: 'https://placehold.co/400x300/fff3e0/e65100?text=Silk+Pantyhose' },
    { id: 3, title: 'Recycled Poly Tights', titleHi: 'रीसाइकल्ड पॉली टाइट्स', desc: 'Durable, eco-friendly, various colors.', descHi: 'टिकाऊ, पर्यावरण के अनुकूल, विभिन्न रंग।', material: 'synthetic', region: 'vietnam', moq: 3000, cert: 'iso', rating: 4.2, price: 195, unit: 'pairs', img: 'https://placehold.co/400x300/eceff1/37474f?text=Recycled+Tights' },
    { id: 4, title: 'Comfy Woolen Socks Set', titleHi: 'आरामदायक ऊनी मोज़े सेट', desc: '3-pack, super soft winter wear.', descHi: '3-पैक, सुपर सॉफ्ट विंटर वियर।', material: 'wool', region: 'india', moq: 100, cert: 'woolmark', rating: 4.9, price: 450, unit: 'set', img: 'https://placehold.co/400x300/f3e5f5/4a148c?text=Woolen+Socks' },
    { id: 5, title: 'Bamboo Fiber Anklets', titleHi: 'बांस फाइबर पायल मोज़े', desc: 'Antibacterial, highly absorbent socks.', descHi: 'एंटीबैक्टीरियल, अत्यधिक शोषक मोज़े।', material: 'bamboo', region: 'china', moq: 500, cert: 'iso', rating: 4.4, price: 150, unit: 'pairs', img: 'https://placehold.co/400x300/f1f8e9/33691e?text=Bamboo+Anklets' },
    { id: 6, title: 'Athletic Crew Socks', titleHi: 'एथलेटिक क्रू मोज़े', desc: 'Heavyweight sport socks, cushioned.', descHi: 'हेवीवेट स्पोर्ट्स मोज़े, कुशन वाले।', material: 'cotton', region: 'india', moq: 2000, cert: 'gots', rating: 4.6, price: 180, unit: 'pairs', img: 'https://placehold.co/400x300/e3f2fd/0d47a1?text=Athletic+Socks' },
    { id: 7, title: 'French Microfiber Tights', titleHi: 'फ्रेंच माइक्रोफाइबर टाइट्स', desc: 'Premium opaque tights, high denier.', descHi: 'प्रीमियम अपारदर्शी टाइट्स, उच्च डेनियर।', material: 'synthetic', region: 'india', moq: 800, cert: 'oeko-tex', rating: 4.7, price: 350, unit: 'pairs', img: 'https://placehold.co/400x300/fff8e1/ff6f00?text=Microfiber+Tights' },
    { id: 8, title: 'Patterned Nylon Stockings', titleHi: 'पैटर्न वाले नायलॉन स्टॉकिंग्स', desc: 'Soft drape, vibrant fishnet & prints.', descHi: 'मुलायम आवरण, जीवंत फिशनेट और प्रिंट।', material: 'synthetic', region: 'china', moq: 1500, cert: 'iso', rating: 4.1, price: 220, unit: 'pairs', img: 'https://placehold.co/400x300/fce4ec/880e4f?text=Nylon+Stockings' },
    { id: 9, title: 'Merino Wool Kneehighs', titleHi: 'मेरिनो ऊन नी-हाईज़', desc: 'Super soft Merino wool knee socks.', descHi: 'सुपर सॉफ्ट मेरिनो ऊन घुटने के मोज़े।', material: 'wool', region: 'turkey', moq: 200, cert: 'woolmark', rating: 4.8, price: 500, unit: 'pairs', img: 'https://placehold.co/400x300/efebe9/3e2723?text=Merino+Socks' },
    { id: 10, title: 'Lycra Sport Leggings', titleHi: 'लाइक्रा स्पोर्ट लेगिंग', desc: '4-way stretch, moisture wicking.', descHi: '4-वे खिंचाव, पसीना सोखने वाला।', material: 'synthetic', region: 'vietnam', moq: 1000, cert: 'oeko-tex', rating: 4.3, price: 450, unit: 'piece', img: 'https://placehold.co/400x300/f5f5f5/212121?text=Sport+Leggings' },
    { id: 11, title: 'Everyday Jute-blend Socks', titleHi: 'रोज़मर्रा के जूट-ब्लेंड मोज़े', desc: 'Eco-friendly breathable daily wear.', descHi: 'पर्यावरण के अनुकूल सांस लेने योग्य दैनिक पहनावा।', material: 'jute', region: 'india', moq: 5000, cert: 'iso', rating: 4.0, price: 85, unit: 'pairs', img: 'https://placehold.co/400x300/fffde7/f57f17?text=Jute+Blend+Socks' },
    { id: 12, title: 'Embroidered Lace Thigh-Highs', titleHi: 'कढ़ाई वाले लेस थाई-हाईज़', desc: 'Intricate bridal quality lace stockings.', descHi: 'जटिल ब्राइडल क्वालिटी लेस स्टॉकिंग्स।', material: 'synthetic', region: 'china', moq: 300, cert: 'oeko-tex', rating: 4.6, price: 300, unit: 'pairs', img: 'https://placehold.co/400x300/f8bbd0/c2185b?text=Lace+Stockings' },

    // Page 2: More Variety
    { id: 13, title: 'Heavy Duty Thermal Socks', titleHi: 'भारी शुल्क थर्मल मोज़े', desc: 'Extreme cold weather insulation.', descHi: 'भीषण ठंड के मौसम में इंसुलेशन।', material: 'cotton', region: 'india', moq: 1000, cert: 'iso', rating: 4.2, price: 280, unit: 'pairs', img: 'https://placehold.co/400x300/e8f5e9/1b5e20?text=Thermal+Socks' },
    { id: 14, title: 'Chiffon-feel Sheer Socks', titleHi: 'शिफॉन-फील शीर मोज़े', desc: 'Lightweight, sheer elegance for summer.', descHi: 'हल्का, गर्मियों के लिए सरासर लालित्य।', material: 'synthetic', region: 'india', moq: 500, cert: 'oeko-tex', rating: 4.5, price: 180, unit: 'pairs', img: 'https://placehold.co/400x300/f3e5f5/7b1fa2?text=Sheer+Socks' },
    { id: 15, title: 'Velvet Lined Winter Tights', titleHi: 'मखमली लाइन वाले विंटर टाइट्स', desc: 'Plush, durable inner fleece.', descHi: 'आलीशान, टिकाऊ भीतरी ऊन।', material: 'synthetic', region: 'turkey', moq: 400, cert: 'iso', rating: 4.7, price: 600, unit: 'piece', img: 'https://placehold.co/400x300/ffebee/b71c1c?text=Fleece+Tights' },
    { id: 16, title: 'Natural Hemp Footcovers', titleHi: 'प्राकृतिक गांजा फुट-कवर', desc: 'Sustainable, antibacterial fiber liners.', descHi: 'टिकाऊ, जीवाणुरोधी फाइबर लाइनर।', material: 'bamboo', region: 'china', moq: 200, cert: 'gots', rating: 4.4, price: 120, unit: 'pairs', img: 'https://placehold.co/400x300/e0f7fa/006064?text=Hemp+Liners' },
    { id: 17, title: 'Nylon Mesh Anklets', titleHi: 'नायलॉन मेश एंकलेट', desc: 'Breathable fishnet design.', descHi: 'हवादार फिशनेट डिज़ाइन।', material: 'synthetic', region: 'vietnam', moq: 2000, cert: 'iso', rating: 4.0, price: 90, unit: 'pairs', img: 'https://placehold.co/400x300/eeeeee/212121?text=Mesh+Anklets' },
    { id: 18, title: 'Cashmere Blend Socks', titleHi: 'कश्मीरी ब्लेंड मोज़े', desc: 'Finest cashmere luxury everyday socks.', descHi: 'बेहतरीन कश्मीरी लक्जरी रोज़मर्रा के मोज़े।', material: 'wool', region: 'india', moq: 50, cert: 'woolmark', rating: 4.9, price: 800, unit: 'pairs', img: 'https://placehold.co/400x300/fff3e0/e65100?text=Cashmere+Socks' },
    { id: 19, title: 'Tencel Lyocell Socks', titleHi: 'टेनसेल लियोसेल मोज़े', desc: 'Eco-soft sustainable hosiery.', descHi: 'इको-सॉफ्ट टिकाऊ होज़री।', material: 'bamboo', region: 'china', moq: 1000, cert: 'oeko-tex', rating: 4.6, price: 170, unit: 'pairs', img: 'https://placehold.co/400x300/e1f5fe/01579b?text=Tencel+Socks' },
    { id: 20, title: 'Khadi Handloom Ribbed Socks', titleHi: 'खादी हथकरघा रिब्ड मोज़े', desc: 'Handspun aesthetic, ribbed texture.', descHi: 'हाथ से काता सौंदर्यबोध, रिब्ड बनावट।', material: 'cotton', region: 'india', moq: 200, cert: 'gots', rating: 4.8, price: 210, unit: 'pairs', img: 'https://placehold.co/400x300/fffde7/f9a825?text=Ribbed+Socks' },
    { id: 21, title: 'Terry Cushioned Socks', titleHi: 'टेरी कुशन वाले मोज़े', desc: 'Thick sole, retro sporty style.', descHi: 'मोटा सोल, रेट्रो स्पोर्टी स्टाइल।', material: 'cotton', region: 'china', moq: 800, cert: 'iso', rating: 4.3, price: 160, unit: 'pairs', img: 'https://placehold.co/400x300/d7ccc8/5d4037?text=Terry+Socks' },
    { id: 22, title: 'Faux Leather Leggings', titleHi: 'गलत चमड़े की लेगिंग', desc: 'Vegan leather fashion tights.', descHi: 'शाकाहारी चमड़े के फैशन टाइट्स।', material: 'synthetic', region: 'china', moq: 500, cert: 'iso', rating: 4.2, price: 750, unit: 'piece', img: 'https://placehold.co/400x300/212121/ffffff?text=Faux+Leggings' },
    { id: 23, title: 'Silky Georgette Tights', titleHi: 'सिल्की जॉर्जेट टाइट्स', desc: 'Crinkly sheer finish party wear.', descHi: 'खस्ता शीर फिनिश पार्टी वियर।', material: 'silk', region: 'india', moq: 300, cert: 'silk-mark', rating: 4.5, price: 420, unit: 'pairs', img: 'https://placehold.co/400x300/f8bbd0/880e4f?text=Silky+Tights' },
    { id: 24, title: 'Satin Ribbon Trims Stockings', titleHi: 'साटन रिबन ट्रिम्स स्टॉकिंग्स', desc: 'Glossy finish bow stockings.', descHi: 'चमकदार फिनिश बो स्टॉकिंग्स।', material: 'synthetic', region: 'vietnam', moq: 1000, cert: 'iso', rating: 4.1, price: 290, unit: 'pairs', img: 'https://placehold.co/400x300/ffcdd2/b71c1c?text=Bow+Stockings' },

    // Page 3: Industrial & Others
    { id: 25, title: 'Anti-slip Yoga Socks', titleHi: 'एंटी-स्लिप योग मोज़े', desc: 'Grip base safety compliant.', descHi: 'ग्रिप बेस सुरक्षा अनुपालन।', material: 'synthetic', region: 'china', moq: 1000, cert: 'iso', rating: 4.7, price: 190, unit: 'pairs', img: 'https://placehold.co/400x300/ffccbc/bf360c?text=Yoga+Socks' },
    { id: 26, title: 'Muslin Breathable Socks', titleHi: 'मलमल के सांस लेने योग्य मोज़े', desc: 'Pure cotton, highly ventilated.', descHi: 'शुद्ध कपास, अत्यधिक हवादार।', material: 'cotton', region: 'india', moq: 2000, cert: 'gots', rating: 4.4, price: 110, unit: 'pairs', img: 'https://placehold.co/400x300/fff9c4/fbc02d?text=Muslin+Socks' },
    { id: 27, title: 'Angora Wool Fluffy Socks', titleHi: 'अंगोरा ऊन शराबी मोज़े', desc: 'Extremely soft rabbit wool sleep socks.', descHi: 'बेहद नरम खरगोश ऊन स्लीप मोज़े।', material: 'wool', region: 'turkey', moq: 50, cert: 'woolmark', rating: 4.8, price: 650, unit: 'pairs', img: 'https://placehold.co/400x300/f5f5f5/9e9e9e?text=Angora+Socks' },
    { id: 28, title: 'Block Print Cotton Socks', titleHi: 'ब्लॉक प्रिंट कॉटन मोज़े', desc: 'Traditional artisan printed socks.', descHi: 'पारंपरिक कारीगर मुद्रित मोज़े।', material: 'cotton', region: 'india', moq: 500, cert: 'gots', rating: 4.9, price: 190, unit: 'pairs', img: 'https://placehold.co/400x300/ffecb3/ff6f00?text=Printed+Socks' },
    { id: 29, title: 'Crepe De Chine Stockings', titleHi: 'क्रेप डी चाइन स्टॉकिंग्स', desc: 'Matte texture elegant pantyhose.', descHi: 'मैट टेक्सचर एलीगेंट पैंटीहोज़।', material: 'silk', region: 'china', moq: 200, cert: 'oeko-tex', rating: 4.6, price: 510, unit: 'pairs', img: 'https://placehold.co/400x300/d1c4e9/311b92?text=Crepe+Stocking' },
    { id: 30, title: 'Flannel Winter Sleep Socks', titleHi: 'फलालैन शीतकालीन स्लीप मोज़े', desc: 'Brushed warmth for indoor comfort.', descHi: 'इनडोर आराम के लिए ब्रश गर्मी।', material: 'cotton', region: 'turkey', moq: 1200, cert: 'oeko-tex', rating: 4.3, price: 180, unit: 'pairs', img: 'https://placehold.co/400x300/cfd8dc/263238?text=Sleep+Socks' },
    { id: 31, title: 'Organza Sheer Anklets', titleHi: 'ऑर्गेन्ज़ा शीर एंकलेटेस', desc: 'Stiff, transparent party socks.', descHi: 'कड़े, पारदर्शी पार्टी मोज़े।', material: 'synthetic', region: 'india', moq: 600, cert: 'iso', rating: 4.2, price: 130, unit: 'pairs', img: 'https://placehold.co/400x300/f8bbd0/880e4f?text=Organza+Socks' },
    { id: 32, title: 'Soybean Fiber Ankle Socks', titleHi: 'सोयाबीन फाइबर टखने के मोज़े', desc: 'Botanic protein fiber knit.', descHi: 'वानस्पतिक प्रोटीन फाइबर बुनाई।', material: 'bamboo', region: 'china', moq: 1000, cert: 'gots', rating: 4.1, price: 140, unit: 'pairs', img: 'https://placehold.co/400x300/dcedc8/33691e?text=Soybean+Socks' },
    { id: 33, title: 'Banana Fiber Odorless Socks', titleHi: 'केले का फाइबर गंधहीन मोज़े', desc: 'Strong sustainable bast knit.', descHi: 'मजबूत टिकाऊ बास्ट बुनाई।', material: 'bamboo', region: 'india', moq: 300, cert: 'gots', rating: 4.5, price: 160, unit: 'pairs', img: 'https://placehold.co/400x300/fff9c4/f57f17?text=Banana+Socks' },
    { id: 34, title: 'Modal Seamless Tights', titleHi: 'मोडल सीमलेस टाइट्स', desc: 'Beech tree pulp silky tights.', descHi: 'बीच ट्री पल्प सिल्की टाइट्स।', material: 'synthetic', region: 'china', moq: 2000, cert: 'iso', rating: 4.3, price: 340, unit: 'piece', img: 'https://placehold.co/400x300/e0f2f1/004d40?text=Modal+Tights' },
    { id: 35, title: 'Tweed Pattern Boot Socks', titleHi: 'ट्वीड पैटर्न बूट मोज़े', desc: 'Rough surfaced wool-blend.', descHi: 'खुरदरी सतह वाला वूल-ब्लेंड।', material: 'wool', region: 'india', moq: 150, cert: 'woolmark', rating: 4.7, price: 250, unit: 'pairs', img: 'https://placehold.co/400x300/efebe9/4e342e?text=Tweed+Socks' },
    { id: 36, title: 'Pique Polo Ankle Socks', titleHi: 'पिक पोलो एंकल मोज़े', desc: 'Waffle weave cotton sports socks.', descHi: 'वफ़ल बुनाई कॉटन स्पोर्ट्स मोज़े।', material: 'cotton', region: 'vietnam', moq: 1000, cert: 'iso', rating: 4.4, price: 120, unit: 'pairs', img: 'https://placehold.co/400x300/e3f2fd/1565c0?text=Pique+Socks' },
];

let filteredProducts = [...productsData];
let currentPage = 1;
const ITEMS_PER_PAGE = 12;
let currentLanguage = 'en';

// --- Toast Notifications & API Logic ---
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    // Using inline styles for quick dynamic layout, combined with CSS
    toast.innerHTML = `
        <i class="fa-solid ${type === 'success' ? 'fa-check-circle' : 'fa-circle-exclamation'}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    init();

    // Auth Forms Setup
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = registerForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirm = document.getElementById('confirm-password').value;

            if (password !== confirm) {
                showToast(currentLanguage === 'en' ? 'Passwords do not match.' : 'पासवर्ड मेल नहीं खाते।', 'error');
                return;
            }

            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';

            try {
                const res = await fetch('http://localhost:3000/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password })
                });
                const data = await res.json();

                if (res.ok) {
                    showToast(currentLanguage === 'en' ? 'Account created successfully!' : 'खाता सफलतापूर्वक बनाया गया!', 'success');
                    setTimeout(() => window.location.href = 'login.html', 1500);
                } else {
                    showToast(data.error || 'Registration failed.', 'error');
                }
            } catch (err) {
                showToast('Server error. Please try again.', 'error');
            } finally {
                btn.disabled = false;
                btn.innerHTML = originalText;
            }
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = loginForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';

            try {
                const res = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                const data = await res.json();

                if (res.ok) {
                    showToast(currentLanguage === 'en' ? 'Login successful!' : 'लॉगिन सफल रहा!', 'success');
                    localStorage.setItem('user', JSON.stringify(data.user));
                    setTimeout(() => window.location.href = 'index.html', 1500);
                } else {
                    showToast(data.error || 'Login failed.', 'error');
                }
            } catch (err) {
                showToast('Server error. Please try again.', 'error');
            } finally {
                btn.disabled = false;
                btn.innerHTML = originalText;
            }
        });
    }
});

function init() {
    setupPagination(); // Ensures listener is attached
    renderProducts();  // Renders products and controls
}

// Render Products
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = '';

    // Pagination Logic
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const pageItems = filteredProducts.slice(start, end);

    if (pageItems.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px;">No products found.</p>';
        updatePaginationControls();
        return;
    }

    pageItems.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        // Add animation with delay
        card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.05}s`;

        // Titles and Text based on Lang
        const title = currentLanguage === 'en' ? product.title : product.titleHi;
        const desc = currentLanguage === 'en' ? product.desc : product.descHi;
        const inqBtn = currentLanguage === 'en' ? 'Inquire Now' : 'अभी पूछताछ करें';

        const priceFormatted = `₹${product.price.toLocaleString('en-IN')}`;

        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${product.img}" alt="${title}" class="product-img">
                <div class="badge-cert">${product.cert.toUpperCase()}</div>
            </div>
            <div class="card-content">
                <a href="product-details.html" class="product-title">${title}</a>
                <p class="product-desc">${desc}</p>
                <div class="supplier-info">
                    <i class="fa-solid fa-building"></i>
                    <span>${getSupplierName(product.id)}</span>
                    <span class="rating"><i class="fa-solid fa-star"></i> ${product.rating}</span>
                </div>
                <div class="product-meta">
                    <span class="price">${priceFormatted} / ${product.unit}</span>
                    <span class="moq">MOQ: ${product.moq} ${product.unit}</span>
                </div>
                <div style="margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
                    <label for="qty-${product.id}" style="font-size: 13px; font-weight: 600; color: #555;">Qty:</label>
                    <input type="number" id="qty-${product.id}" value="${product.moq}" min="${product.moq}" step="${product.moq}" style="flex: 1; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; font-family: var(--font-body);">
                </div>
                <div style="display: flex; gap: 10px;">
                    <button class="cta-btn add-to-cart-btn" style="flex:1;" data-id="${product.id}">Add</button>
                    <button class="cta-btn buy-now-btn" style="flex:1; background-color: var(--primary-color); color: white;" data-id="${product.id}">Buy</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    if (typeof attachDynamicInteractions === 'function') {
        attachDynamicInteractions();
    }

    updatePaginationControls();
    updateResultsSummary();
}

// Helper Names
function getRegionName(code, lang) {
    const map = {
        'india': { en: 'India', hi: 'भारत' },
        'china': { en: 'China', hi: 'चीन' },
        'vietnam': { en: 'Vietnam', hi: 'वियतनाम' },
        'turkey': { en: 'Turkey', hi: 'तुर्की' }
    };
    return map[code] ? map[code][lang] : code;
}

function getSupplierName(id) {
    const suppliers = ['Kochi Hosierys', 'Hangzhou Silk Co', 'VietTex Solutions', 'Bombay Linens', 'GreenLeaf Eco', 'Anatolia Homes'];
    return suppliers[id % suppliers.length];
}

// Filter Logic
function applyFilters() {
    const materials = Array.from(document.querySelectorAll('input[name="material"]:checked')).map(cb => cb.value);
    const regionFilter = document.getElementById('region-filter');
    const region = regionFilter ? regionFilter.value : '';
    const moqSlider = document.getElementById('moq-slider');
    const moqVal = moqSlider ? moqSlider.value : 5000;
    const ratingInput = document.querySelector('input[name="rating"]:checked');
    const ratingVal = ratingInput ? ratingInput.value : 'all';

    filteredProducts = productsData.filter(p => {
        const mMatch = materials.length === 0 || materials.includes(p.material);
        const rMatch = region === '' || p.region === region;
        const moqMatch = p.moq <= moqVal;

        let ratMatch = true;
        if (ratingVal !== 'all') {
            ratMatch = p.rating >= parseInt(ratingVal);
        }

        return mMatch && rMatch && moqMatch && ratMatch;
    });

    currentPage = 1;
    renderProducts();
}

// Sorting Logic
function sortProducts() {
    const sortSelect = document.getElementById('sort-select');
    if (!sortSelect) return;
    const sortBy = sortSelect.value;

    if (sortBy === 'relevance') {
        filteredProducts.sort((a, b) => a.id - b.id);
    } else if (sortBy === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'moq-low') {
        filteredProducts.sort((a, b) => a.moq - b.moq);
    }
    renderProducts();
}

// Search Logic
function handleSearch(query) {
    if (!query) {
        filteredProducts = [...productsData];
    } else {
        const q = query.toLowerCase();
        filteredProducts = productsData.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.desc.toLowerCase().includes(q)
        );
    }
    currentPage = 1;
    renderProducts();
}

// Pagination Logic (Event Delegation)
function setupPagination() {
    const container = document.getElementById('pagination-controls');
    if (!container) return;

    // Remove old listener if any (not strictly needed as we replace innerHTML, but container persists)
    // We attach listener to container once
    container.removeEventListener('click', handlePaginationClick);
    container.addEventListener('click', handlePaginationClick);
}

function handlePaginationClick(e) {
    if (e.target.classList.contains('page-link')) {
        e.preventDefault();
        const page = parseInt(e.target.dataset.page);
        if (!isNaN(page)) {
            changePage(page);
        }
    }
}

function updatePaginationControls() {
    const container = document.getElementById('pagination-controls');
    if (!container) return;

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    let html = '';

    // Prev
    const prevDisabled = currentPage === 1 ? 'disabled style="opacity:0.5;pointer-events:none;"' : '';
    // Use data-page for numeric, or handle logic in click
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    html += `<a href="#" class="page-link" ${prevDisabled} data-page="${prevPage}">&laquo; Prev</a>`;

    // Numbers
    for (let i = 1; i <= totalPages; i++) {
        const active = i === currentPage ? 'active' : '';
        html += `<a href="#" class="page-link ${active}" data-page="${i}">${i}</a>`;
    }

    // Next
    const nextDisabled = currentPage === totalPages ? 'disabled style="opacity:0.5;pointer-events:none;"' : '';
    const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;
    html += `<a href="#" class="page-link" ${nextDisabled} data-page="${nextPage}">Next &raquo;</a>`;

    container.innerHTML = html;
}

function changePage(pageNum) {
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    if (pageNum < 1 || pageNum > totalPages) return;

    currentPage = pageNum;
    renderProducts();
    window.scrollTo({ top: 400, behavior: 'smooth' });
}

// Clear Filters
function clearFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    const rFilter = document.getElementById('region-filter');
    if (rFilter) rFilter.value = '';
    const mSlider = document.getElementById('moq-slider');
    if (mSlider) {
        mSlider.value = 5000;
        updateMoqLabel(5000);
    }
    const rRadio = document.querySelector('input[name="rating"][value="all"]');
    if (rRadio) rRadio.checked = true;

    applyFilters();
}

function updateMoqLabel(val) {
    const label = document.getElementById('moq-val');
    if (label) label.textContent = val;
}

function updateResultsSummary() {
    const summary = document.querySelector('.search-results-summary p');
    if (summary) {
        summary.textContent = `Showing ${filteredProducts.length} Results`;
    }
}

// Safe Listeners
const mainSearchInput = document.getElementById('main-search');
if (mainSearchInput) {
    mainSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));
}

const sortSelectEl = document.getElementById('sort-select');
if (sortSelectEl) {
    sortSelectEl.addEventListener('change', sortProducts);
}

document.querySelectorAll('input[name="material"]').forEach(el => el.addEventListener('change', applyFilters));

const regionFilterEl = document.getElementById('region-filter');
if (regionFilterEl) {
    regionFilterEl.addEventListener('change', applyFilters);
}

const moqSliderEl = document.getElementById('moq-slider');
if (moqSliderEl) {
    moqSliderEl.addEventListener('input', (e) => {
        updateMoqLabel(e.target.value);
        applyFilters();
    });
}

document.querySelectorAll('input[name="rating"]').forEach(el => el.addEventListener('change', applyFilters));

// Modal Logic
const contactModal = document.getElementById('contact-modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');

function openContactModal(title) {
    const pTitle = document.getElementById('modal-product-title');
    if (pTitle) pTitle.textContent = title;
    if (contactModal) {
        contactModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}
function closeContactModal() {
    if (contactModal) {
        contactModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}
if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeContactModal);
}
// Close on outside click
window.onclick = function (event) {
    if (event.target == contactModal) {
        closeContactModal();
    }
}

// Explicit Language Toggle Fix
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';

    // Update Visual Toggle State
    document.querySelectorAll('.lang-option').forEach(opt => {
        if (opt.dataset.lang === currentLanguage) {
            opt.classList.add('active');
            opt.style.fontWeight = '700';
            opt.style.color = 'var(--text-color)';
        } else {
            opt.classList.remove('active');
            opt.style.fontWeight = '400';
            opt.style.color = '#999';
        }
    });

    // Update static elements
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = currentLanguage === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-hi');
        if (text) el.textContent = text;
    });

    // Update inputs
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
        const ph = currentLanguage === 'en' ? el.getAttribute('data-en-placeholder') : el.getAttribute('data-hi-placeholder');
        if (ph) el.placeholder = ph;
    });

    // Re-render only if product grid exists
    if (typeof renderProducts === 'function' && document.getElementById('product-grid')) {
        renderProducts();
    }
}

// --- Advanced Interactive UI ---
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

function initInteractiveUI() {
    // 1. Custom Cursor (Dot Only)
    const dot = document.createElement('div');
    dot.id = 'custom-cursor-dot';
    document.body.appendChild(dot);

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    // Initial hover state bindings for static elements
    const interactiveElements = document.querySelectorAll('a, button, input[type="submit"]');
    interactiveElements.forEach(el => bindHoverState(el));

    // 2. Threading Canvas Config
    const canvas = document.createElement('canvas');
    canvas.id = 'interactive-canvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');
    let width, height;

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8
        });
    }

    function drawThreads() {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.12)'; // Delicate gold accent
        ctx.lineWidth = 1;

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            const distToMouse = Math.hypot(mouseX - p.x, mouseY - p.y);
            if (distToMouse < 250) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouseX, mouseY);
                ctx.stroke();
            }

            particles.forEach(p2 => {
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });
        requestAnimationFrame(drawThreads);
    }
    drawThreads();

    // 3. Static Magnetic Buttons & Ripples
    document.querySelectorAll('.hero-btn, .submit-btn, .nav-item').forEach(btn => {
        bindMagneticAndRipple(btn);
    });
}

function bindHoverState(el) {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
}

function bindMagneticAndRipple(btn) {
    btn.classList.add('magnetic', 'btn-ripple-container');
    
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0px, 0px)`;
    });
    
    btn.addEventListener('click', function (e) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        const size = Math.max(rect.width, rect.height) * 2;
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.transform = `translate(-50%, -50%) scale(0)`;
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
}

function attachDynamicInteractions() {
    // Dynamic Product Cards: 3D Tilt
    document.querySelectorAll('.product-card').forEach(card => {
        bindHoverState(card);
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -8; // 8 deg max
            const rotateY = ((x - centerX) / centerX) * 8;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    });

    // Dynamic Product Buttons: Magnetic & Ripple
    document.querySelectorAll('.add-to-cart-btn, .buy-now-btn').forEach(btn => {
        bindMagneticAndRipple(btn);
        
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const product = productsData.find(p => p.id === id);
            
            // Read quantity from input
            const qtyInput = document.getElementById(`qty-${id}`);
            const requestedQty = qtyInput ? parseInt(qtyInput.value) : product.moq;
            const finalQty = Math.max(product.moq, requestedQty || product.moq);

            addToCart(product, finalQty);
            
            if (e.target.classList.contains('buy-now-btn')) {
                window.location.href = 'cart.html';
            } else {
                showToast('Added to cart!', 'success');
            }
        });
        
        bindHoverState(btn);
    });
}

// --- Cart Logic ---
function getCart() { return JSON.parse(localStorage.getItem('cart') || '[]'); }
function saveCart(cart) { localStorage.setItem('cart', JSON.stringify(cart)); }

function addToCart(product, qty = null) {
    const defaultQty = qty !== null ? qty : product.moq;
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.qty += defaultQty;
    } else {
        cart.push({ ...product, qty: defaultQty });
    }
    saveCart(cart);
}

function renderCartPage() {
    const tbody = document.getElementById('cart-tbody');
    if (!tbody) return;

    const cart = getCart();
    tbody.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 30px;">Your cart is empty.</td></tr>';
        document.getElementById('cart-subtotal').textContent = '₹0';
        document.getElementById('cart-tax').textContent = '₹0';
        document.getElementById('cart-total').textContent = '₹0';
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <img src="${item.img}" alt="${item.title}" class="cart-item-img">
                    <div>
                        <strong>${item.title}</strong>
                        <p class="text-light" style="font-size: 12px;">MOQ: ${item.moq} ${item.unit}</p>
                    </div>
                </div>
            </td>
            <td>₹${item.price.toLocaleString('en-IN')}</td>
            <td>
                <input type="number" class="qty-input" value="${item.qty}" min="${item.moq}" step="${item.moq}" onchange="updateCartQty(${index}, this.value)">
            </td>
            <td><strong>₹${itemTotal.toLocaleString('en-IN')}</strong></td>
            <td><i class="fa-solid fa-trash remove-btn" onclick="removeFromCart(${index})"></i></td>
        `;
        tbody.appendChild(tr);
    });

    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    document.getElementById('cart-subtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    document.getElementById('cart-tax').textContent = `₹${tax.toLocaleString('en-IN')}`;
    document.getElementById('cart-total').textContent = `₹${total.toLocaleString('en-IN')}`;
}

window.updateCartQty = function(index, newQty) {
    const cart = getCart();
    const minQty = cart[index].moq;
    cart[index].qty = Math.max(minQty, parseInt(newQty));
    saveCart(cart);
    renderCartPage();
};

window.removeFromCart = function(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCartPage();
};

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-tbody')) {
        renderCartPage();
    }
});

// Call on load
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveUI();
});
