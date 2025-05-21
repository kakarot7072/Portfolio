import { renderProjects } from './components/projects.js';
import { renderSkills } from './components/skills.js';
import { renderCertificates } from './components/certificates.js';

const initializeAnimations = () => {
    const scrollObserver = createScrollObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                scrollObserver.unobserve(entry.target);
            }
        });
    });

    observeElements('.animate-on-scroll', scrollObserver);
    addStaggeredAnimations('.skills-grid', '.skill-card');
    addStaggeredAnimations('.projects-grid', '.project-card');
    addStaggeredAnimations('.certificates-grid', '.certificate-card');
};

const initializeApp = () => {
    // Render components
    renderProjects(projects);
    renderSkills(skills);
    renderCertificates(certificates);

    // Initialize features
    initializeAnimations();
    setupSmoothScroll();
};

document.addEventListener('DOMContentLoaded', initializeApp);