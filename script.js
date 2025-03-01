// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tab functionality
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .timeline-item').forEach((el) => {
    observer.observe(el);
});

// Tab content switching
const tabContents = document.querySelectorAll('.tech-content');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.getAttribute('data-tab') === target) {
                content.classList.add('active');
            }
        });
    });
});

// Smooth scroll for arrow
document.querySelector('.scroll-arrow').addEventListener('click', () => {
    document.querySelector('#features').scrollIntoView({
        behavior: 'smooth'
    });
});

// Tablet tab functionality
document.addEventListener('DOMContentLoaded', function() {
    // For tablet interface
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            tabPanes[index].classList.add('active');
        });
    });
    
    // For mobile interface
    const mobileTabs = document.querySelectorAll('.mobile-tab');
    const mobileTabPanes = document.querySelectorAll('.mobile-tab-pane');
    
    mobileTabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            mobileTabs.forEach(t => t.classList.remove('active'));
            mobileTabPanes.forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            mobileTabPanes[index].classList.add('active');
        });
    });
});

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}); 