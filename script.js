// Project data
const projects = [
    {
        title: "Data Extraction Google Maps API",
        description: "Extract data from Google Maps API and store it in a CSV file. Search and filter results by location, category, and radius. Future: extend to other APIs and add more advanced filtering options.",
        image: "images/map.png" // Add your image path here
    },
    {
        title: "Web Scraper",
        description: "Scraping data from website by using scrapy framework, and bypassing anti-bot detection. Future: add more advanced filtering options.",
        image: "images/web scraper.png" // Add your image path here
    },
    {
        title: "Data Analysis by using Python",
        description: "Data Analysis by using Python and Pandas. Future: extend to other libraries and add more advanced analysis techniques.",
        image: "images/dataAnalysis.png" // Add your image path here
    }
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
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        projectGrid.appendChild(projectCard);
    });
}

// Call the render function when the page loads
document.addEventListener('DOMContentLoaded', renderProjects);
