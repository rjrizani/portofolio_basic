// Function for responsive navigation
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body'); // Get the body element

    hamburger.addEventListener('click', () => {
        // Toggle Nav and body scrolling
        nav.classList.toggle('active');
        body.classList.toggle('no-scroll');
        
        // Toggle Hamburger Icon
        hamburger.classList.toggle('toggle');
    });

    // Close nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                hamburger.classList.remove('toggle');
                body.classList.remove('no-scroll'); // Also remove the class here
            }
        });
    });
}

// Project data
const projects = [
    {
        title: "Data Extraction Google Maps API",
        description: "Extract data from Google Maps API and store it in a CSV file. Search and filter results by location, category, and radius.",
        image: "images/map.png",
        url: "https://www.youtube.com/watch?v=F6yvupw-atg"
    },
    {
        title: "Web Scraper",
        description: "Scraping data from websites using the Scrapy framework and bypassing anti-bot detection.",
        image: "images/web scraper.png",
        url: "https://github.com/rjrizani/wikiart_scrapy"
    },
    {
        title: "Data Analysis with Python",
        description: "Performing data analysis using Python and popular libraries like Pandas for data manipulation and visualization.",
        image: "images/dataAnalysis.png",
        url: "https://github.com/rjrizani"
    },
    {
        title: "YouTube Data Dashboard",
        description: "Utilizing the YouTube API for data extraction, conducting sentiment analysis, and visualizing insights. Integrated with Gemini AI.",
        image: "images/YouTube.png",
        url: "https://rjscrapy-youtube-dashboard.streamlit.app/"
    },
    {
        title: "Web Application with Flask",
        description: "Built a web application using the Flask framework and deployed it on PythonAnywhere.",
        image: "images/web_app_flask.png",
        url: "https://rjscrapy.pythonanywhere.com/"
    },
    {
        title: "Machine Learning Price Prediction",
        description: "Developed a machine learning model to predict the price of a house based on its features.",
        image: "images/ml.png",
        url: "https://house-price-predic.streamlit.app/"
    },
];

// Function to render project cards
function renderProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return; // Exit if the element is not on the page
    
    projectGrid.innerHTML = ''; // Clear existing content

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-card-content">
                <h3>
                    <a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.title}</a>
                </h3>
                <p>${project.description}</p>
            </div>
        `;

        projectGrid.appendChild(projectCard);
    });
}

// Call the functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    renderProjects();
});