// --- TRANSLATIONS ---
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navProjects: "Projects",
        navTestimonials: "Testimonials",
        navContact: "Contact",
        navServices: "Services",
        heroTitle: "Welcome to My Portfolio",
        heroSubtitle: "Hey there! I'm Ahmad Rizani, a Professional Developer specializing in Web Scraping.",
        aboutTitle: "About Me",
        aboutDesc1: "I'm a highly skilled and adaptable web scraper, passionate about transforming raw online data into actionable insights. My expertise lies in efficiently extracting, organizing, and automating data collection from diverse web sources, empowering you with the information you need to succeed.",
        aboutOfferTitle: "What I Offer:",
        aboutOffer1Title: "Laser-Focused Web Scraping 🎯",
        aboutOffer1Desc: "I leverage the power of Python, JavaScript, CSS, and HTML, combined with cutting-edge techniques like TLS/JA3 fingerprinting and sophisticated throttling systems, to extract data from both dynamic and static websites, even those with heavy JavaScript rendering.",
        aboutOffer2Title: "Data Mastery 🗂️",
        aboutOffer2Desc: "I meticulously structure, clean, and prepare your data for analysis and business applications. I deliver ready-to-use information, tailored to your specific needs.",
        aboutOffer3Title: "Seamless Automation ⚙️",
        aboutOffer3Desc: "From design to deployment, I build automated scripts for effortless data retrieval and analysis, saving you time and resources.",
        aboutOffer4Title: "API Integration 🔗",
        aboutOffer4Desc: "I'm proficient in utilizing APIs like the Google Places API to enrich your data and unlock further insights.",
        aboutStackTitle: "My Tech Stack:",
        aboutStack1Title: "Frameworks & Libraries 🛠️",
        aboutStack1Desc: "Scrapy, Beautiful Soup, Selenium",
        aboutStack2Title: "Automation 🤖",
        aboutStack2Desc: "UiPath Studio",
        aboutStack3Title: "Advanced Techniques 🔒",
        aboutStack3Desc: "TLS/JA3 Fingerprinting, Throttling Systems, Heavy JavaScript Handling",
        aboutStack4Title: "Data Formats 📄",
        aboutStack4Desc: "CSV, JSON, XML (and others as needed)",
        aboutStack5Title: "API Integration 📍",
        aboutStack5Desc: "Google Places API, Gemini API, Youtube API and Zyte API",
        aboutClosing: "Let's turn data into your competitive advantage. Contact me to discuss your project and discover how I can help you achieve your data goals.",
        projectsTitle: "My Projects",
        testimonialsTitle: "Testimonials",
        testimonial1Quote: "\"A very nice teacher and he never gets mad :)\"",
        testimonial2Quote: "\"Can overcome a virus on a laptop and teach us lessons that have not been learned, in short, very good.\"",
        testimonial3Quote: "\"Good one.\"",
        testimonial3Cite: "- Anonymous Student",
        contactTitle: "Contact Me",
        contactDesc: "Interested in working together? Get in touch!",
        contactButton: "Email Me",
        footerText: "© 2025 Ahmad Rizani. All rights reserved.",
        projDescGmaps: "Extract data from Google Maps API and store it in a CSV file. Search and filter results by location, category, and radius.",
        projDescScraper: "Scraping data from websites using the Scrapy framework and bypassing anti-bot detection.",
        projDescPython: "Performing data analysis using Python and popular libraries like Pandas for data manipulation and visualization.",
        projDescYoutube: "Utilizing the YouTube API for data extraction, conducting sentiment analysis, and visualizing insights. Integrated with Gemini AI.",
        projDescFlask: "Built a web application using the Flask framework and deployed it on PythonAnywhere.",
        projDescML: "Developed a machine learning model to predict the price of a house based on its features.",
        projDescLead: "Automating lead generation using web scraping techniques to gather potential customer information from various online sources.",
        serviceBio: "Full Stack Developer | Coding Teacher | Python Developer",
        serviceHireMe: "Hire Me On",
        serviceDemoTitle: "Free Demo Classes",
        serviceDemoDesc: "Get a free demo class in the field of:",
        serviceDemoButton: "Contact Me on WhatsApp"
    },
    id: {
        navHome: "Beranda",
        navAbout: "Tentang Saya",
        navProjects: "Projek",
        navTestimonials: "Testimoni",
        navContact: "Kontak",
        navServices: "Layanan",
        heroTitle: "Selamat Datang di Portofolio Saya",
        heroSubtitle: "Halo! Saya Ahmad Rizani, seorang Pengembang Profesional yang berspesialisasi dalam Web Scraping.",
        aboutTitle: "Tentang Saya",
        aboutDesc1: "Saya adalah seorang web scraper yang sangat terampil dan mudah beradaptasi, bersemangat mengubah data online mentah menjadi wawasan yang dapat ditindaklanjuti. Keahlian saya terletak pada efisiensi ekstraksi, pengorganisasian, dan otomatisasi pengumpulan data dari berbagai sumber web, memberdayakan Anda dengan informasi yang Anda butuhkan untuk sukses.",
        aboutOfferTitle: "Apa yang Saya Tawarkan:",
        aboutOffer1Title: "Web Scraping Fokus Laser 🎯",
        aboutOffer1Desc: "Saya memanfaatkan kekuatan Python, JavaScript, CSS, and HTML, dikombinasikan dengan teknik canggih seperti TLS/JA3 fingerprinting dan sistem throttling yang canggih, untuk mengekstrak data dari situs web dinamis dan statis, bahkan yang memiliki rendering JavaScript yang berat.",
        aboutOffer2Title: "Penguasaan Data 🗂️",
        aboutOffer2Desc: "Saya menyusun, membersihkan, dan menyiapkan data Anda dengan cermat untuk analisis dan aplikasi bisnis. Saya memberikan informasi siap pakai, yang disesuaikan dengan kebutuhan spesifik Anda.",
        aboutOffer3Title: "Otomatisasi Mulus ⚙️",
        aboutOffer3Desc: "Dari desain hingga penerapan, saya membangun skrip otomatis untuk pengambilan dan analisis data yang mudah, menghemat waktu dan sumber daya Anda.",
        aboutOffer4Title: "Integrasi API 🔗",
        aboutOffer4Desc: "Saya mahir dalam memanfaatkan API seperti Google Places API untuk memperkaya data Anda dan membuka wawasan lebih lanjut.",
        aboutStackTitle: "Tumpukan Teknologi Saya:",
        aboutStack1Title: "Framework & Library 🛠️",
        aboutStack1Desc: "Scrapy, Beautiful Soup, Selenium",
        aboutStack2Title: "Otomatisasi 🤖",
        aboutStack2Desc: "UiPath Studio",
        aboutStack3Title: "Teknik Lanjutan 🔒",
        aboutStack3Desc: "TLS/JA3 Fingerprinting, Sistem Throttling, Penanganan JavaScript Berat",
        aboutStack4Title: "Format Data 📄",
        aboutStack4Desc: "CSV, JSON, XML (dan lainnya sesuai kebutuhan)",
        aboutStack5Title: "Integrasi API 📍",
        aboutStack5Desc: "Google Places API, Gemini API, Youtube API dan Zyte API",
        aboutClosing: "Mari ubah data menjadi keunggulan kompetitif Anda. Hubungi saya untuk membahas proyek Anda dan temukan bagaimana saya dapat membantu Anda mencapai tujuan data Anda.",
        projectsTitle: "Projek Saya",
        testimonialsTitle: "Testimoni",
        testimonial1Quote: "\"Guru yang sangat baik dan dia tidak pernah marah :)\"",
        testimonial2Quote: "\"Bisa mengatasi sebuah virus di laptop dan mengajari kita pelajaran yang belum dipelajari, singkatnya sangat bagus.\"",
        testimonial3Quote: "\"Bagus.\"",
        testimonial3Cite: "- Siswa Anonim",
        contactTitle: "Hubungi Saya",
        contactDesc: "Tertarik untuk bekerja sama? Hubungi saya!",
        contactButton: "Email Saya",
        footerText: "© 2025 Ahmad Rizani. Hak cipta dilindungi undang-undang.",
        projDescGmaps: "Mengekstrak data dari Google Maps API dan menyimpannya dalam file CSV. Mencari dan memfilter hasil berdasarkan lokasi, kategori, dan radius.",
        projDescScraper: "Mengambil data dari situs web menggunakan kerangka kerja Scrapy dan melewati deteksi anti-bot.",
        projDescPython: "Melakukan analisis data menggunakan Python dan library populer seperti Pandas untuk manipulasi dan visualisasi data.",
        projDescYoutube: "Memanfaatkan API YouTube untuk ekstraksi data, melakukan analisis sentimen, dan memvisualisasikan wawasan. Terintegrasi dengan Gemini AI.",
        projDescFlask: "Membangun aplikasi web menggunakan kerangka kerja Flask dan menerapkannya di PythonAnywhere.",
        projDescML: "Mengembangkan model machine learning untuk memprediksi harga rumah berdasarkan fitur-fiturnya.",
        projDescLead: "Mengotomatisasi generasi prospek menggunakan teknik web scraping untuk mengumpulkan informasi pelanggan potensial dari berbagai sumber online.",
        serviceBio: "Full Stack Developer | Guru Coding | Python Developer",
        serviceHireMe: "Rekrut Saya Di",
        serviceDemoTitle: "Kelas Demo Gratis",
        serviceDemoDesc: "Dapatkan kelas demo gratis di bidang:",
        serviceDemoButton: "Hubungi Saya di WhatsApp"
    }
};

// --- PROJECT DATA ---
const projects = [
    { title: "Data Extraction Google Maps API", descriptionKey: "projDescGmaps", image: "images/map.png", url: "https://www.youtube.com/watch?v=F6yvupw-atg" },
    { title: "Web Scraper", descriptionKey: "projDescScraper", image: "images/web scraper.png", url: "https://github.com/rjrizani/wikiart_scrapy" },
    { title: "Data Analysis with Python", descriptionKey: "projDescPython", image: "images/dataAnalysis.png", url: "https://github.com/rjrizani" },
    { title: "YouTube Data Dashboard", descriptionKey: "projDescYoutube", image: "images/YouTube.png", url: "https://rjscrapy-youtube-dashboard.streamlit.app/" },
    { title: "Web Application with Flask", descriptionKey: "projDescFlask", image: "images/web_app_flask.png", url: "https://rjscrapy.pythonanywhere.com/" },
    { title: "Machine Learning Price Prediction", descriptionKey: "projDescML", image: "images/ml.png", url: "https://house-price-predic.streamlit.app/" },
    { title: "Lead Generation", descriptionKey: "projDescLead", image: "images/lead.jpeg", url:"https://www.youtube.com/watch?v=i2MHn43_WQI&t=7s" },
    
];

// --- CORE FUNCTIONS ---

// Function for responsive navigation
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const body = document.querySelector('body');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            body.classList.toggle('no-scroll');
            hamburger.classList.toggle('toggle');
        });
    }
};

// Function to render project cards with correct language
function renderProjects(lang) {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;
    
    projectGrid.innerHTML = '';
    const currentTranslations = translations[lang];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        const description = currentTranslations[project.descriptionKey] || 'Description not found.';

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-card-content">
                <h3>
                    <a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.title}</a>
                </h3>
                <p>${description}</p>
            </div>
        `;
        projectGrid.appendChild(projectCard);
    });
}

// Function to set the language
const setLanguage = (lang) => {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(elem => {
        const key = elem.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            // Handle specific cases like span inside a button
            const target = elem.querySelector('span') || elem;
            target.textContent = translations[lang][key];
        }
    });

    // Update project descriptions
    renderProjects(lang);
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Save preference
    localStorage.setItem('language', lang);
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    navSlide();

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.dataset.lang;
            setLanguage(lang);
        });
    });

    // Get saved language or default to 'id'
    const savedLang = localStorage.getItem('language') || 'id';
    setLanguage(savedLang);
});