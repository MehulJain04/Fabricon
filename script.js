
// Mock Product Data (36 Items for 3 Full Pages of 12)
const productsData = [
    // Page 1: Mixed High Demand
    { id: 1, title: 'Premium Organic Cotton', titleHi: 'प्रीमियम ऑर्गेनिक कॉटन', desc: '100% GOTS certified, suitable for apparel.', descHi: '100% GOTS प्रमाणित, परिधान के लिए उपयुक्त।', material: 'cotton', region: 'india', moq: 500, cert: 'gots', rating: 4.8, price: 210, unit: 'meter', img: 'https://placehold.co/400x300/e0f2f1/004d40?text=Organic+Cotton' },
    { id: 2, title: 'Pure Mulberry Silk', titleHi: 'शुद्ध शहतूत रेशम', desc: 'High grade 6A silk, smooth texture.', descHi: 'उच्च ग्रेड 6A रेशम, चिकनी बनावट।', material: 'silk', region: 'china', moq: 100, cert: 'oeko-tex', rating: 4.5, price: 1250, unit: 'meter', img: 'https://placehold.co/400x300/fff3e0/e65100?text=Mulberry+Silk' },
    { id: 3, title: 'Recycled Polyester Blend', titleHi: 'पुनर्नवीनीकरण पॉलिएस्टर मिश्रण', desc: 'Durable, eco-friendly, various colors.', descHi: 'टिकाऊ, पर्यावरण के अनुकूल, विभिन्न रंग।', material: 'synthetic', region: 'vietnam', moq: 3000, cert: 'iso', rating: 4.2, price: 95, unit: 'meter', img: 'https://placehold.co/400x300/eceff1/37474f?text=Recycled+Poly' },
    { id: 4, title: 'Luxury Bed Linen Set', titleHi: 'लक्जरी बेड लिनन सेट', desc: '300 TC, satinet finish, super soft.', descHi: '300 टीसी, साटन फिनिश, सुपर सॉफ्ट।', material: 'cotton', region: 'india', moq: 100, cert: 'oeko-tex', rating: 4.9, price: 650, unit: 'set', img: 'https://placehold.co/400x300/f3e5f5/4a148c?text=Bed+Linen' },
    { id: 5, title: 'Bamboo Fiber Towels', titleHi: 'बांस फाइबर तौलिए', desc: 'Antibacterial, highly absorbent.', descHi: 'एंटीबैक्टीरियल, अत्यधिक शोषक।', material: 'bamboo', region: 'china', moq: 500, cert: 'iso', rating: 4.4, price: 180, unit: 'piece', img: 'https://placehold.co/400x300/f1f8e9/33691e?text=Bamboo+Towel' },
    { id: 6, title: 'Raw Denim Fabric', titleHi: 'कच्चा डेनिम कपड़ा', desc: 'Heavyweight 14oz, indigo dyed.', descHi: 'भारी वजन 14oz, इंडिगो रंगे।', material: 'cotton', region: 'india', moq: 2000, cert: 'gots', rating: 4.6, price: 250, unit: 'meter', img: 'https://placehold.co/400x300/e3f2fd/0d47a1?text=Raw+Denim' },
    { id: 7, title: 'French Linen Fabric', titleHi: 'फ्रेंच लिनेन कपड़ा', desc: 'Premium flax, stone washed finish.', descHi: 'प्रीमियम सन, पत्थर धोया खत्म।', material: 'linen', region: 'india', moq: 800, cert: 'oeko-tex', rating: 4.7, price: 550, unit: 'meter', img: 'https://placehold.co/400x300/fff8e1/ff6f00?text=French+Linen' },
    { id: 8, title: 'Rayon Viscose Print', titleHi: 'रेयान विस्कोस प्रिंट', desc: 'Soft drape, vibrant floral prints.', descHi: 'मुलायम आवरण, जीवंत पुष्प प्रिंट।', material: 'synthetic', region: 'china', moq: 1500, cert: 'iso', rating: 4.1, price: 120, unit: 'meter', img: 'https://placehold.co/400x300/fce4ec/880e4f?text=Rayon+Print' },
    { id: 9, title: 'Woolen Suit Fabric', titleHi: 'ऊनी सूट का कपड़ा', desc: 'Super 120s Merino wool.', descHi: 'सुपर 120s मेरिनो ऊन।', material: 'wool', region: 'turkey', moq: 200, cert: 'woolmark', rating: 4.8, price: 1800, unit: 'meter', img: 'https://placehold.co/400x300/efebe9/3e2723?text=Merino+Wool' },
    { id: 10, title: 'Lycra Sportswear Fabric', titleHi: 'लाइक्रा स्पोर्ट्सवियर कपड़ा', desc: '4-way stretch, moisture wicking.', descHi: '4-way खिंचाव, नमी wicking।', material: 'synthetic', region: 'vietnam', moq: 1000, cert: 'oeko-tex', rating: 4.3, price: 350, unit: 'kg', img: 'https://placehold.co/400x300/f5f5f5/212121?text=Sport+Lycra' },
    { id: 11, title: 'Jute Sacking Bags', titleHi: 'जूट की बोरियां', desc: 'Eco-friendly packaging grade.', descHi: 'पर्यावरण के अनुकूल पैकेजिंग ग्रेड।', material: 'jute', region: 'india', moq: 5000, cert: 'iso', rating: 4.0, price: 45, unit: 'piece', img: 'https://placehold.co/400x300/fffde7/f57f17?text=Jute+Bags' },
    { id: 12, title: 'Embroidered Lace', titleHi: 'कढ़ाई वाली फीता', desc: 'Intricate bridal quality lace.', descHi: 'जटिल दुल्हन गुणवत्ता फीता।', material: 'synthetic', region: 'china', moq: 300, cert: 'oeko-tex', rating: 4.6, price: 450, unit: 'meter', img: 'https://placehold.co/400x300/f8bbd0/c2185b?text=Bridal+Lace' },

    // Page 2: More Variety
    { id: 13, title: 'Canvas Tent Fabric', titleHi: 'कैनवास टेंट कपड़ा', desc: 'Waterproof, heavy duty cotton.', descHi: 'निविड़ अंधकार, भारी शुल्क कपास।', material: 'cotton', region: 'india', moq: 1000, cert: 'iso', rating: 4.2, price: 280, unit: 'meter', img: 'https://placehold.co/400x300/e8f5e9/1b5e20?text=Canvas' },
    { id: 14, title: 'Chiffon Saree Material', titleHi: 'शिफॉन साड़ी सामग्री', desc: 'Lightweight, sheer elegance.', descHi: 'हल्का, सरासर लालित्य।', material: 'synthetic', region: 'india', moq: 500, cert: 'oeko-tex', rating: 4.5, price: 180, unit: 'meter', img: 'https://placehold.co/400x300/f3e5f5/7b1fa2?text=Chiffon' },
    { id: 15, title: 'Velvet Upholstery', titleHi: 'मखमली असबाब', desc: 'Plush, durable for furniture.', descHi: 'आलीशान, फर्नीचर के लिए टिकाऊ।', material: 'synthetic', region: 'turkey', moq: 400, cert: 'iso', rating: 4.7, price: 600, unit: 'meter', img: 'https://placehold.co/400x300/ffebee/b71c1c?text=Velvet' },
    { id: 16, title: 'Hemp Fabric Natural', titleHi: 'गांजा कपड़ा प्राकृतिक', desc: 'Sustainable, antibacterial fiber.', descHi: 'सतत, जीवाणुरोधी फाइबर।', material: 'bamboo', region: 'china', moq: 200, cert: 'gots', rating: 4.4, price: 550, unit: 'meter', img: 'https://placehold.co/400x300/e0f7fa/006064?text=Hemp' },
    { id: 17, title: 'Nylon Mesh', titleHi: 'नाायलॉन जाली', desc: 'Breathable lining material.', descHi: 'सांस लेने योग्य अस्तर सामग्री।', material: 'synthetic', region: 'vietnam', moq: 2000, cert: 'iso', rating: 4.0, price: 80, unit: 'meter', img: 'https://placehold.co/400x300/eeeeee/212121?text=Mesh' },
    { id: 18, title: 'Pashmina Shawl Wool', titleHi: 'पश्मीना शॉल ऊन', desc: 'Finest cashmere wool fiber.', descHi: 'बेहतरीन कश्मीरी ऊन फाइबर।', material: 'wool', region: 'india', moq: 50, cert: 'woolmark', rating: 4.9, price: 5000, unit: 'kg', img: 'https://placehold.co/400x300/fff3e0/e65100?text=Pashmina' },
    { id: 19, title: 'Tencel Lyocell', titleHi: 'टेनसेल लियोसेल', desc: 'Eco-soft sustainable fabric.', descHi: 'इको-सॉफ्ट टिकाऊ कपड़ा।', material: 'bamboo', region: 'china', moq: 1000, cert: 'oeko-tex', rating: 4.6, price: 320, unit: 'meter', img: 'https://placehold.co/400x300/e1f5fe/01579b?text=Tencel' },
    { id: 20, title: 'Khadi Handloom', titleHi: 'खादी हथकरघा', desc: 'Handspun, varied textures.', descHi: 'हाथ से काता, विभिन्न बनावट।', material: 'cotton', region: 'india', moq: 200, cert: 'gots', rating: 4.8, price: 290, unit: 'meter', img: 'https://placehold.co/400x300/fffde7/f9a825?text=Khadi' },
    { id: 21, title: 'Corduroy Fabric', titleHi: 'कॉर्डरॉय कपड़ा', desc: 'Ridged velvet, retro style.', descHi: 'रिलायड मखमल, रेट्रो शैली।', material: 'cotton', region: 'china', moq: 800, cert: 'iso', rating: 4.3, price: 380, unit: 'meter', img: 'https://placehold.co/400x300/d7ccc8/5d4037?text=Corduroy' },
    { id: 22, title: 'Faux Leather', titleHi: 'गलत चमड़ा', desc: 'Vegan leather for accessories.', descHi: 'सामान के लिए शाकाहारी चमड़ा।', material: 'synthetic', region: 'china', moq: 500, cert: 'iso', rating: 4.2, price: 450, unit: 'meter', img: 'https://placehold.co/400x300/212121/ffffff?text=Faux+Leather' },
    { id: 23, title: 'Georgette Silk', titleHi: 'जॉर्जेट रेशम', desc: 'Crinkly sheer fabric.', descHi: 'खस्ता सरासर कपड़ा।', material: 'silk', region: 'india', moq: 300, cert: 'silk-mark', rating: 4.5, price: 850, unit: 'meter', img: 'https://placehold.co/400x300/f8bbd0/880e4f?text=Georgette' },
    { id: 24, title: 'Satin Ribbon', titleHi: 'साटन रिबन', desc: 'Glossy finish for packaging.', descHi: 'पैकेजिंग के लिए चमकदार खत्म।', material: 'synthetic', region: 'vietnam', moq: 10000, cert: 'iso', rating: 4.1, price: 5, unit: 'meter', img: 'https://placehold.co/400x300/ffcdd2/b71c1c?text=Ribbon' },

    // Page 3: Industrial & Others
    { id: 25, title: 'Fire Retardant Fabric', titleHi: 'अग्नि इस तरह के कपड़े', desc: 'Safety standard compliant.', descHi: 'सुरक्षा मानक अनुपालन।', material: 'synthetic', region: 'china', moq: 1000, cert: 'iso', rating: 4.7, price: 900, unit: 'meter', img: 'https://placehold.co/400x300/ffccbc/bf360c?text=Safety+Fab' },
    { id: 26, title: 'Muslin Cloth', titleHi: 'मलमल का कपड़ा', desc: 'Pure cotton, loosely woven.', descHi: 'शुद्ध कपास, ढीले बुना हुआ।', material: 'cotton', region: 'india', moq: 2000, cert: 'gots', rating: 4.4, price: 150, unit: 'meter', img: 'https://placehold.co/400x300/fff9c4/fbc02d?text=Muslin' },
    { id: 27, title: 'Angora Wool Yarn', titleHi: 'अंगोरा ऊन धागा', desc: 'Extremely soft rabbit wool.', descHi: 'बेहद नरम खरगोश ऊन।', material: 'wool', region: 'turkey', moq: 50, cert: 'woolmark', rating: 4.8, price: 3500, unit: 'kg', img: 'https://placehold.co/400x300/f5f5f5/9e9e9e?text=Angora' },
    { id: 28, title: 'Block Print Cotton', titleHi: 'ब्लॉक प्रिंट कॉटन', desc: 'Traditional hand printed.', descHi: 'पारंपरिक हाथ मुद्रित।', material: 'cotton', region: 'india', moq: 500, cert: 'gots', rating: 4.9, price: 320, unit: 'meter', img: 'https://placehold.co/400x300/ffecb3/ff6f00?text=Block+Print' },
    { id: 29, title: 'Crepe De Chine', titleHi: 'क्रेप डी चाइन', desc: 'Matte texture silk.', descHi: 'मैट बनावट रेशम।', material: 'silk', region: 'china', moq: 200, cert: 'oeko-tex', rating: 4.6, price: 1100, unit: 'meter', img: 'https://placehold.co/400x300/d1c4e9/311b92?text=Crepe' },
    { id: 30, title: 'Flannel Fabric', titleHi: 'फलालैन कपड़ा', desc: 'Brushed warmth for winter.', descHi: 'सर्दियों के लिए ब्रश गर्मी।', material: 'cotton', region: 'turkey', moq: 1200, cert: 'oeko-tex', rating: 4.3, price: 420, unit: 'meter', img: 'https://placehold.co/400x300/cfd8dc/263238?text=Flannel' },
    { id: 31, title: 'Organza Tissue', titleHi: 'ऑर्गेन्ज़ा ऊतक', desc: 'Stiff, transparent dress material.', descHi: 'कठोर, पारदर्शी पोशाक सामग्री।', material: 'synthetic', region: 'india', moq: 600, cert: 'iso', rating: 4.2, price: 180, unit: 'meter', img: 'https://placehold.co/400x300/f8bbd0/880e4f?text=Organza' },
    { id: 32, title: 'Soybean Product Fiber', titleHi: 'सोयाबीन उत्पाद फाइबर', desc: 'Botanic protein fiber.', descHi: 'वानस्पतिक प्रोटीन फाइबर।', material: 'bamboo', region: 'china', moq: 1000, cert: 'gots', rating: 4.1, price: 220, unit: 'kg', img: 'https://placehold.co/400x300/dcedc8/33691e?text=Soybean' },
    { id: 33, title: 'Banana Fiber Fabric', titleHi: 'केले का फाइबर कपड़ा', desc: 'Strong sustainable bast fiber.', descHi: 'मजबूत टिकाऊ बास्ट फाइबर।', material: 'bamboo', region: 'india', moq: 300, cert: 'gots', rating: 4.5, price: 260, unit: 'meter', img: 'https://placehold.co/400x300/fff9c4/f57f17?text=Banana' },
    { id: 34, title: 'Modal Fabric', titleHi: 'मोडल कपड़ा', desc: 'Beech tree pulp rayon.', descHi: 'बीच ट्री पल्प रेयान।', material: 'synthetic', region: 'china', moq: 2000, cert: 'iso', rating: 4.3, price: 240, unit: 'meter', img: 'https://placehold.co/400x300/e0f2f1/004d40?text=Modal' },
    { id: 35, title: 'Tweed Wool', titleHi: 'ट्वीड ऊन', desc: 'Rough surfaced woolen cloth.', descHi: 'खुरदरी सतह वाला ऊनी कपड़ा।', material: 'wool', region: 'india', moq: 150, cert: 'woolmark', rating: 4.7, price: 950, unit: 'meter', img: 'https://placehold.co/400x300/efebe9/4e342e?text=Tweed' },
    { id: 36, title: 'Pique Polo Fabric', titleHi: 'पिक पोलो कपड़ा', desc: 'Waffle weave cotton.', descHi: 'वफ़ल बुनाई कपास।', material: 'cotton', region: 'vietnam', moq: 1000, cert: 'iso', rating: 4.4, price: 300, unit: 'kg', img: 'https://placehold.co/400x300/e3f2fd/1565c0?text=Pique' },
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
    const suppliers = ['Kochi Textiles', 'Hangzhou Silk Co', 'VietTex Solutions', 'Bombay Linens', 'GreenLeaf Eco', 'Anatolia Homes'];
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
