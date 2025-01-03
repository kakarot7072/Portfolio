const internships = [
    {
        company: 'Celebal Technologies',
        position: 'Data Engineer Intern | Center of Excellence',
        period: 'Jun 2024 - Oct 2024',
        location: 'Jaipur, INDIA',
        description: 'Developed and optimized ETL pipelines processing using Azure Data Factory, pySpark, Databricks and Python.',
        achievements: [
            'Worked on the design and optimization of data pipelines, focusing on ETL processes, utilizing PySpark, Databricks, Azure Data Factory, SQL and Python for improved data flow and efficiency.',
            'Worked with the Center of Excellence team to explore innovative data engineering ractices and implement solutions in a real-world context.',
            'Acquired substantial experience in database management, data warehousing, and leveraging the Azure cloud platform for sophisticated data handling and analytics.'
        ],
        technologies: ['Python', 'SQL', 'Azure', 'ADF', 'Databricks', 'ETL', 'pySpark'],
        logo: '<img class="w-15 h-12" src="https://celebaltech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcelebal-logo.4c6b3a75.png&w=3840&q=75">'
    },
    {
        company: 'Project',
        position: 'Real-Time Data Analytics and Visualization Platform',
        period: '',
        location: 'Jaipur, INDIA',
        description: 'Develop a comprehensive web application that collects, analyzes and visualizes real time data using a combination of the provided technologies.',
        achievements: [
            'Integrated Azure Data Factory to automate the data ingestion and preparation process, enabling real-time data analysis using Power BI.',
            'Developed custom Power BI dashboards and reports for analyzing key metrics such as student performance, teacher evaluations and institutional efficiency.',
            'Implemented robust data monitoring tools that identified critical insights and enabled a 20% increase in operational effectiveness.',
            'Reduced manual reporting time for educational institutions by 50% by automating real-time analytics using Power BI.'
        ],
        technologies: ['ADF', 'Python', 'Power BI', 'SQL', 'Azure', 'ADF', 'Databricks', 'React.JS', 'Node.JS'],
        logo: '<img class="w-15 h-12" src="https://static.wixstatic.com/media/b1de2d_f43482a5e86a42498c13242d380b2447~mv2.png/v1/fill/w_480,h_198,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/powerbi_logo.png">'
    },
    {
        company: 'Project',
        position: 'Azure Gen2 Data Pipeline with Databricks Integration',
        period: '',
        location: 'Jaipur, INDIA',
        description: 'Developed a Dashboard of the LIVE data of Cricket match, which can also be in completed status as well.',
        achievements: [
            'Managed the ingestion of mixed-format files (CSV, Parquet, Excel) from multiple folders in Azure Gen2 Storage into designated destinations using ADF pipelines.',
            'Developed Databricks notebooks to read the files from Azure Gen2, perform data cleaning and transformations, and load the cleansed data into Bronze and Silver Delta tables.',
            'Reduced data processing time by 25% through efficient pipeline configuration and data partitioning in Databricks'
        ],
        technologies: ['Python', 'Azure', 'Databricks', 'Gen2', 'ADF', 'ETL', 'pySpark', 'Pipeline'],
        logo: '<img class="w-15 h-12" src="https://www.bizstream.com/wp-content/uploads/2022/04/microsoft-azure-logo.png">'
    },
    {
        company: 'Infosys limited',
        position: 'Web-Designing with Python Training Program',
        period: '',
        location: 'Jaipur, INDIA',
        description: 'Learned to devepol a responsive website using Python Framework DJANGO & FLASK.',
        achievements: [
            'Developed a practice website to understand the working and explanation of the Django and Flask frameworks.',
            'Developed a Portfolio using the same technology learned during this program.',
            'Managed to self learn the ferther advanced parts of the Django and Flask frameworks.',
        ],
        technologies: ['Python', 'Django', 'Flask', 'HTML', 'CSS', 'JS', 'TailwindCSS', 'Pillow'],
        logo: '<img class="w-15 h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/600px-Infosys_logo.svg.png">'
    },
];

function createInternshipCard(internship, index) {
    return `
        <div class="bg-white rounded-lg shadow-lg p-6 fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="flex items-start justify-between mb-6">
                <div class="flex items-center space-x-4">
                    ${internship.logo}
                    <div>
                        <h3 class="text-xl font-bold text-gray-900">${internship.company}</h3>
                        <p class="text-lg text-indigo-600">${internship.position}</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-gray-600">${internship.period}</p>
                    <p class="text-gray-500">${internship.location}</p>
                </div>
            </div>
            
            <p class="text-gray-700 mb-4">${internship.description}</p>
            
            <div class="mb-4">
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Key Achievements</h4>
                <ul class="list-disc list-inside space-y-1 text-gray-700">
                    ${internship.achievements.map(achievement => `
                        <li>${achievement}</li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="flex flex-wrap gap-2">
                ${internship.technologies.map(tech => `
                    <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                        ${tech}
                    </span>
                `).join('')}
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('internships-container');
    internships.forEach((internship, index) => {
        container.innerHTML += createInternshipCard(internship, index);
    });
});
