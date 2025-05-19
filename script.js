// Project data
const projects = [
    {
        title: "Data Extraction Google Maps API",
        description: "Extract data from Google Maps API and store it in a CSV file. Search and filter results by location, category, and radius. Future: extend to other APIs and add more advanced filtering options.",
        image: "images/map.png",
        url: "https://www.youtube.com/watch?v=F6yvupw-atg"
    },
    {
        title: "Web Scraper",
        description: "Scraping data from website by using scrapy framework, and bypassing anti-bot detection. Future: add more advanced filtering options.",
        image: "images/web scraper.png",
        url: "https://github.com/rjrizani/wikiart_scrapy"
    },
    {
        title: "Data Analysis by using Python",
        description: "Data Analysis by using Python and Pandas. Future: extend to other libraries and add more advanced analysis techniques.",
        image: "images/dataAnalysis.png",
        url: "https://github.com/rjrizani"
    },
    {
        title: "Youtube Data Extraction and Analysis",
        description: "Data extraction with youtube API, sentiment analysis and data visualization.",
        image: "images/YouTube.png",
        url: "https://rjscrapy-youtube-dashboard.streamlit.app/"
    },
    {
        title: "Web Application",
        description: "Web application using Flask framework, and deploy it on pythonanywhere. Future: add more advanced features.",
        image: "images/web_app_flask.png",
        url: "https://rjscrapy.pythonanywhere.com/"
    },
    {
        title: "Machine Learning",
        description: "Machine learning model to predict the price of a house based on its features.",
        image: "images/ml.png",
        url: "https://house-price-predic.streamlit.app/"
    },
];

// Function to render project cards
function renderProjects() {
    const projectGrid = document.querySelector('.project-grid');
    projectGrid.innerHTML = ''; // Clear existing content

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <h3>
                <a href="${project.url}" target="_blank" rel="noopener noreferrer" 
                style="text-decoration: none;
                color: #EFEEEA;">${project.title}
                </a>
            </h3>
            <p>${project.description}</p>
        `;

        projectGrid.appendChild(projectCard);
    });
}

// Call the render function when the page loads
document.addEventListener('DOMContentLoaded', renderProjects);