const skills = {

    '<img class="w-30 h-10" src="https://cdn.worldvectorlogo.com/logos/python-6.svg">': [
        {
            name: 'Python',
            level: 90
        },
    ],

    '<img class="w-30 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUURnqcK1SqYw2JLINhuGkHxoDv1FWVe6puQ&s">': [
        {
            name: 'SQL',
            level: 90
        },
    ],

    '<img class="w-30 h-10" src="https://static.wixstatic.com/media/b1de2d_f43482a5e86a42498c13242d380b2447~mv2.png/v1/fill/w_480,h_198,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/powerbi_logo.png">': [
        {
            name: 'Power BI',
            level: 75
        },
    ],

    '<img class="w-30 h-10" src="https://corebts.com/wp-content/uploads/2023/08/databricks-horizontal.png">': [
        {
            name: 'Databricks',
            level: 75
        },
    ],

    '<img class="w-30 h-10" src="https://www.bizstream.com/wp-content/uploads/2022/04/microsoft-azure-logo.png">': [
        {
            name: 'Azure',
            level: 75
        },
    ],

    '<img class="w-30 h-10" src="https://www.gbtec.com/fileadmin/images/main-navigation/software/bpm/bic-process-mining/etl/extract-transform-load.svg">': [
        {
            name: 'ETL',
            level: 75
        },
    ],

    '<img class="w-30 h-10" src="https://www.edureka.co/blog/wp-content/uploads/2018/07/PySpark-logo-1.jpeg">': [
        {
            name: 'pySpark',
            level: 75
        },
    ],

    '<img class="w-30 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJfCywfNthHcJ3sR3vEPvGpgNyUbTwSXgmA&s">': [
        {
            name: 'Linux',
            level: 33
        },
    ],

    '<img class="w-30 h-10" src="https://t4.ftcdn.net/jpg/03/31/15/41/360_F_331154131_BIlyFgXqV44lbkQXchiEdUQXYwO38SiA.jpg">': [
        {
            name: 'Artificial Intelligence',
            level: 45
        },
    ],

    '<img class="w-30 h-10" src="https://demo3xperience13.raybiztech.com/RBT/media/RBT-Images/machine_learning-logo.png">': [
        {
            name: 'Machine learning',
            level: 45
        },
    ],

    '<img class="w-30 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXT7fWZz2RO5rbVRqMrpdnkhq6ME6djzkdw&s">': [
        {
            name: 'Django',
            level: 75
        },
    ],

    '<img class="w-30 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMHuJX6YNwtdIA0A9K_ACkOXv_pFaKArS0Q&s">': [
        {
            name: 'Flask',
            level: 45
        },
    ],

};

function createSkillCard(category, skillsList, index) {
    return `
        <div class="bg-white rounded-lg shadow-lg p-6 fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="text-2xl font-bold text-gray-900 mb-6">${category}</div>
            <div class="space-y-6">
                ${skillsList.map(skill => `
                    <div>
                        <div class="flex justify-between mb-1">
                            <div class="w-full">
                            <div class="text-2xl font-bold text-gray-900 mb-6">${skill.name}</div>
                                <div class="w-full bg-gray-200 rounded-full h-2">
                                    <div class="bg-indigo-600 h-2 rounded-full skill-bar" style="width: ${skill.level}%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('skills-container');
    Object.entries(skills).forEach(([category, skillsList], index) => {
        container.innerHTML += createSkillCard(category, skillsList, index);
    });
});