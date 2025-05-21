const projects = [
    {
        title: 'Azure Gen2 Data Pipeline with Databricks Integration',
        description: 'Managed the ingestion of mixedformat files (CSV, Parquet, Excel) from multiple folders in Azure Gen2 Storage into designated destinations using ADF pipelines.',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Ba4HN9SNIv0z4-XeFCvYxA.jpeg',
        technologies: ['Python', 'Databricks', 'Gen2', 'Azure', 'ADF', 'pySpark'],
        github: 'https://github.com/kakarot7072/AzureGen2Integration',
        link: 'https://github.com/kakarot7072/AzureGen2Integration'
    },
    {
        title: 'Real-Time Data Analytics and Visualization Platform',
        description: 'Develop a comprehensive web application that collects, analyzes and visualizes real time data using a combination of the provided technologies.',
        image: 'https://cdn.boldbi.com/wp/blogs/real-time-analytics/financial.webp',
        technologies: ['Node.JS', 'React.JS', 'MongoDB', 'Power BI'],
        github: 'https://github.com/shreya792/REAL_TIME_DATA_ANALYSIS',
        link: 'https://github.com/shreya792/REAL_TIME_DATA_ANALYSIS'
    },
    {
        title: 'Live Cricket Analysis',
        description: 'Developed a analysis of LIVE Cricket match data into a insight dashboard, which can present the match in completed status as-well-as on-going match also.',
        image: '/staticfiles/images/live.png',
        technologies: ['Python', 'Power BI', 'REST API', 'DAX', 'ETL'],
        github: 'https://github.com/kakarot7072/LiveCricketAnalysis',
        link: 'https://app.powerbi.com/view?r=eyJrIjoiNDk3NWVlOTktOWE0OS00YjhkLTg0MTMtZGQ4NDQzN2Y5YzQxIiwidCI6ImQ0OGQ0NjhjLTI1MzktNGU4YS1iNmM0LTkwNTYxNDY5ZmU3ZCJ9&pageName=9c8ac4dfd78b06116b25'
    },
    {
        title: 'Olympic Data Flow',
        description: 'Developed a data pipeline using Databricks, Azure and Synapse to process and analyze Olympic data',
        image: 'data:image/png;base64,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',
        technologies: ['Python', 'Power BI', 'Azure', 'Synapse', 'DAX', 'ETL'],
        github: 'https://github.com/kakarot7072/Olympic-Azure-DE-Project',
        link: 'https://github.com/kakarot7072/Olympic-Azure-DE-Project'
    },
    {
        title: 'Portfolio',
        description: 'Developed a full-responsive website containing my Portfolio using Python.',
        image: '/staticfiles/images/port.png',
        technologies: ['Python', 'Django', 'HTML', 'CSS', 'JS', 'Pillow'],
        github: 'https://github.com/kakarot7072/Portfolio',
        link: ''
    },
];

function createProjectCard(project, index) {
    return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden fade-in" style="animation-delay: ${index * 0.1}s">
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">${project.title}</h3>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => `
                        <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
                <div class="flex space-x-4">
                    <a href="${project.github}" class="text-gray-600 hover:text-indigo-600">Code</a>
                    <a href="${project.link}" class="text-gray-600 hover:text-indigo-600">Link</a>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('projects-container');
    projects.forEach((project, index) => {
        container.innerHTML += createProjectCard(project, index);
    });
});
