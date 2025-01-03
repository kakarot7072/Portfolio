const certificates = [
    {
        title: 'AWSome Day',
        issuer: 'Amazon Web Services',
        date: 'July 2024',
        image: "https://media.licdn.com/dms/image/v2/D5622AQGnXt98bCpI3Q/feedshare-shrink_800/feedshare-shrink_800/0/1722500367662?e=1738195200&v=beta&t=P3XxrLZhQ3I-eyNRjtOOvCRtT3_-qnh_vyemF8fHzzs",
        link: 'https://www.linkedin.com/posts/kakarot7072_aws-cloudcomputing-awsomeday-activity-7224690187388211201-RCFR?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'Center of Excellence',
        issuer: 'Celebal Technologies Private Limited',
        date: 'November 2024',
        image: '/static/images/COE.png',
        link: 'https://www.linkedin.com/posts/kakarot7072_certificateofexcellence-activity-7264274133398495232-EqXS?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'Celebal Summer Internship',
        issuer: 'Celebal Technologies Private Limited',
        date: 'November 2024',
        image: '/static/images/CSI.png',
        link: 'https://www.linkedin.com/posts/kakarot7072_celebal-summer-internship-activity-7264272886503219200-kJaj?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'Data Engineering',
        issuer: 'Databricks',
        date: 'August 2024',
        image: 'https://media.licdn.com/dms/image/v2/D5622AQEWbK0nlCRD0Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723049594243?e=1738195200&v=beta&t=-sBd4Vobsqpf-XdODwr61epO3Vl014AKVOJpM_dzeDM',
        link: 'https://www.linkedin.com/posts/kakarot7072_dataengineering-databricks-datascience-activity-7226993811510476802-APmm?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'Student Ambassador',
        issuer: 'Microsoft',
        date: 'July 2024',
        image: 'https://media.licdn.com/dms/image/v2/D5622AQEY_AcHv5tkJg/feedshare-shrink_800/feedshare-shrink_800/0/1721559351528?e=1738195200&v=beta&t=_nbm74dnegVgpiaHIDlOpk98xGh0u6mDZrhZLN2B_po',
        link: 'https://www.linkedin.com/posts/kakarot7072_microsoftlearn-azure-cloudskills-activity-7220743278768316416-7I-M?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'Data Analysis',
        issuer: 'Microsoft | LinkedIn',
        date: 'June 2024',
        image: 'https://media.licdn.com/dms/image/sync/v2/D5622AQG71QMThdiOxg/feedshare-shrink_800/feedshare-shrink_800/0/1718171093684?e=1738195200&v=beta&t=RwOPdw-_QGeqROEFh_M-9MRnYWDQv2epiojnXtokHzM',
        link: 'https://www.linkedin.com/posts/kakarot7072_certificate-of-completion-activity-7206532276954828800-sH_t?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'Learnathon 2023',
        issuer: 'ICT Academy',
        date: 'August 2023',
        image: 'https://media.licdn.com/dms/image/v2/D5622AQHe8PgDG8s97g/feedshare-shrink_800/feedshare-shrink_800/0/1719096290306?e=1738195200&v=beta&t=Pp_BTmMNo2el7Zy0S1ztqMce29ABfEKpeHy21JoKJ3s',
        link: 'https://www.linkedin.com/posts/kakarot7072_ictacademy-learnathon2023-continuouslearning-activity-7205135787590352896-hNN5?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'Red Hat Certified System Administrator (RHCSA)',
        issuer: 'RedHat',
        date: 'May 2023',
        image: 'https://images.credly.com/size/680x680/images/572de0ba-2c59-4816-a59d-b0e1687e45ee/image.png',
        link: 'https://www.linkedin.com/posts/kakarot7072_rhcsa-activity-7278689364832931840-4zLn?utm_source=share&utm_medium=member_desktop'
    },
];

function createCertificateCard(certificate, index) {
    return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden fade-in" style="animation-delay: ${index * 0.1}s">
            <img src="${certificate.image}" alt="${certificate.title}" class="w-full h-50 object-cover">
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <h3 class="text-xl font-bold text-gray-900">${certificate.title}</h3>
                </div>
                <div class="text-gray-600 mb-4">
                    <p class="font-medium">${certificate.issuer}</p>
                    <p class="text-sm">${certificate.date}</p>
                </div>
                <a href="${certificate.link}" class="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                    <span class="mr-1">View Certificate</span>
                </a>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('certificates-container');
    certificates.forEach((certificate, index) => {
        container.innerHTML += createCertificateCard(certificate, index);
    });
});