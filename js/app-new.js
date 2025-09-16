// Officer data - Update this with your actual officers
const officers = [
    {
        name: "Dr. Marlon M. Sumait",
        position: "Dean & Program Director",
        photo: "images/marlon-sumait.jpg", // Path to actual image
        bio: "Leading our college with a vision for innovation and excellence in computer science education. Passionate about bridging academia with industry needs.",
        email: "dean@wupccs.edu",
        linkedin: "#"
    },
    {
        name: "Lance William A. Santos",
        position: "Student Council President",
        photo: "LWS", // Initials as fallback
        bio: "Computer Science senior passionate about building community and fostering innovation. Leading the organization toward new heights this year with fresh ideas and collaborative spirit.",
        email: "president@wupccs.edu",
        linkedin: "https://linkedin.com/in/lance-santos"
    },
    {
        name: "Sarah Chen",
        position: "Vice President",
        photo: "SC",
        bio: "Software Engineering major with extensive experience in project management and event coordination. Committed to supporting our members' academic and professional growth.",
        email: "vp@wupccs.edu",
        linkedin: "#"
    },
    {
        name: "Michael Rodriguez",
        position: "Secretary",
        photo: "MR",
        bio: "Information Systems student dedicated to maintaining organizational excellence and ensuring clear communication across all departments and student bodies.",
        email: "secretary@wupccs.edu",
        linkedin: "#"
    },
    {
        name: "Emily Davis",
        position: "Treasurer",
        photo: "ED",
        bio: "Finance and Computer Science double major ensuring our organization's financial health, transparency, and strategic resource allocation for maximum student benefit.",
        email: "treasurer@wupccs.edu",
        linkedin: "#"
    },
    {
        name: "David Kim",
        position: "Events Coordinator",
        photo: "DK",
        bio: "Event planning enthusiast and CS major focused on creating memorable, educational experiences that bridge classroom learning with real-world applications.",
        email: "events@wupccs.edu",
        linkedin: "#"
    },
    {
        name: "Jessica Wang",
        position: "Public Relations Officer",
        photo: "JW",
        bio: "Communications major with CS minor, managing our digital presence and fostering strong relationships with industry partners and alumni networks.",
        email: "pr@wupccs.edu",
        linkedin: "#"
    },
    {
        name: "Alex Thompson",
        position: "Technology Director",
        photo: "AT",
        bio: "Full-stack developer and cybersecurity enthusiast responsible for our digital infrastructure and innovative technology initiatives within the college.",
        email: "tech@wupccs.edu",
        linkedin: "#"
    }
];

// Events data - Update with your actual events
const events = [
    {
        title: "Welcome Back Orientation",
        date: "2025-09-15",
        time: "9:00 AM",
        location: "Main Auditorium",
        description: "Join us for our comprehensive orientation program. Meet faculty, connect with peers, and learn about exciting opportunities ahead.",
        type: "orientation"
    },
    {
        title: "Advanced Python Workshop",
        date: "2025-09-22",
        time: "2:00 PM",
        location: "Computer Lab A",
        description: "Deep dive into advanced Python concepts including data structures, algorithms, and machine learning fundamentals.",
        type: "workshop"
    },
    {
        title: "Industry Leaders Panel",
        date: "2025-09-29",
        time: "4:00 PM",
        location: "Conference Hall",
        description: "Hear from leading technology professionals about industry trends, career pathways, and emerging opportunities in tech.",
        type: "panel"
    },
    {
        title: "Hackathon 2025",
        date: "2025-10-06",
        time: "9:00 AM",
        location: "Innovation Center",
        description: "48-hour coding challenge focused on solving real-world problems. Teams compete for prizes and recognition.",
        type: "competition"
    },
    {
        title: "Career Development Workshop",
        date: "2025-10-13",
        time: "3:00 PM",
        location: "Career Services Center",
        description: "Professional development session covering resume optimization, interview skills, and networking strategies for tech careers.",
        type: "workshop"
    },
    {
        title: "AI & Machine Learning Symposium",
        date: "2025-10-20",
        time: "1:00 PM",
        location: "Research Auditorium",
        description: "Explore cutting-edge developments in artificial intelligence and machine learning with guest researchers and practitioners.",
        type: "symposium"
    }
];

// Announcements data - Update with your actual announcements
const announcements = [
    {
        title: "Academic Year 2025-2026 Begins!",
        content: "Welcome to an exciting new academic year! We're thrilled to announce enhanced programs, new partnerships, and innovative learning opportunities. Join us for orientation week starting September 15th.",
        date: "2025-09-01",
        type: "important",
        badge: "Important"
    },
    {
        title: "New Industry Partnership Program",
        content: "We're excited to announce partnerships with leading tech companies including Microsoft, Google, and local startups. These partnerships will provide internship opportunities, mentorship programs, and real-world project experiences.",
        date: "2025-08-28",
        type: "announcement",
        badge: "Partnership"
    },
    {
        title: "Student Research Grants Available",
        content: "Applications are now open for our annual student research grants. Up to $5,000 available for innovative projects in computer science, data science, and emerging technologies. Deadline: October 15th.",
        date: "2025-08-25",
        type: "opportunity",
        badge: "Opportunity"
    },
    {
        title: "Leadership Elections Results",
        content: "Congratulations to all newly elected student leaders! We're grateful for the democratic participation and look forward to another year of exceptional student leadership and representation.",
        date: "2025-08-20",
        type: "announcement",
        badge: "Elections"
    },
    {
        title: "New Learning Management System",
        content: "We've upgraded to a state-of-the-art learning management system with enhanced features for online learning, assignment submissions, and interactive coursework. Training sessions begin next week.",
        date: "2025-08-15",
        type: "update",
        badge: "Technology"
    }
];

// FAQ data
const faqs = [
    {
        question: "How can I apply to the Computer Studies program?",
        answer: "Applications are accepted through our online portal during admission periods. Requirements include high school completion, entrance exam scores, and program-specific prerequisites. Visit our admissions office for detailed guidance."
    },
    {
        question: "What career opportunities are available after graduation?",
        answer: "Our graduates pursue diverse careers including software development, data science, cybersecurity, systems analysis, project management, and entrepreneurship. We maintain a 95% graduate employment rate."
    },
    {
        question: "Are there internship and co-op programs available?",
        answer: "Yes! We have partnerships with 50+ companies offering internships, co-ops, and project-based learning opportunities. Our career services team helps match students with suitable positions."
    },
    {
        question: "What programming languages and technologies do you teach?",
        answer: "Our curriculum covers Python, Java, C++, JavaScript, SQL, and emerging technologies like AI/ML frameworks, cloud computing, mobile development, and cybersecurity tools."
    },
    {
        question: "How can I get involved in research projects?",
        answer: "Students can participate in faculty research, apply for research grants, join research groups, and present at conferences. We encourage undergraduate research participation from the second year onwards."
    },
    {
        question: "What support services are available for students?",
        answer: "We provide academic tutoring, career counseling, mental health support, financial aid guidance, and peer mentoring programs to ensure student success and well-being."
    },
    {
        question: "Are there opportunities for entrepreneurship and startups?",
        answer: "Absolutely! Our innovation center supports student startups with mentorship, funding opportunities, incubation programs, and connections to the local entrepreneurship ecosystem."
    }
];

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const contactForm = document.getElementById('contact-form');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderOfficers();
    renderEvents();
    renderAnnouncements();
    renderFAQ();
    initializeContactForm();
    initializeScrollEffects();
    initializeSmoothScrolling();
    initializeParallaxEffects();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const bars = navToggle.querySelectorAll('.bar');
        navToggle.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Render officers section with enhanced styling
function renderOfficers() {
    const officersGrid = document.getElementById('officers-grid');
    if (!officersGrid) return;

    officersGrid.innerHTML = officers.map((officer, index) => {
        // Check if photo is an image path or initials
        const isImagePath = officer.photo.includes('.') || officer.photo.includes('/');
        const photoContent = isImagePath 
            ? `<img src="${officer.photo}" alt="${officer.name}" loading="lazy">` 
            : officer.photo;

        return `
            <div class="officer-card fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="officer-photo">${photoContent}</div>
                <h3 class="officer-name">${officer.name}</h3>
                <p class="officer-position">${officer.position}</p>
                <p class="officer-bio">${officer.bio}</p>
                <div class="officer-contact">
                    <a href="mailto:${officer.email}" class="contact-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        Email
                    </a>
                    <a href="${officer.linkedin}" target="_blank" class="contact-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect x="2" y="9" width="4" height="12"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

// Render events section
function renderEvents() {
    const eventsList = document.getElementById('events-list');
    const calendarView = document.getElementById('calendar-view');
    
    if (eventsList) {
        eventsList.innerHTML = events.slice(0, 6).map((event, index) => {
            const eventDate = new Date(event.date);
            const formattedDate = eventDate.toLocaleDateString('en-US', { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });

            const typeColors = {
                orientation: '#3b82f6',
                workshop: '#10b981',
                panel: '#8b5cf6',
                competition: '#f59e0b',
                symposium: '#ef4444'
            };

            return `
                <div class="event-card fade-in" style="animation-delay: ${index * 0.1}s; border-left-color: ${typeColors[event.type] || '#60a5fa'}">
                    <div class="event-date">${formattedDate} • ${event.time}</div>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-description">${event.description}</p>
                    <small style="color: #94a3b8; display: flex; align-items: center; gap: 8px; margin-top: 8px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        ${event.location}
                    </small>
                </div>
            `;
        }).join('');
    }

    if (calendarView) {
        renderEnhancedCalendar(calendarView);
    }
}

// Enhanced calendar with better styling
function renderEnhancedCalendar(container) {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const today = now.getDate();
    
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    let calendarHTML = `
        <div class="calendar-mini">
            <div class="calendar-month">${monthNames[month]} ${year}</div>
            <div class="calendar-grid">
    `;
    
    // Add day headers
    dayNames.forEach(day => {
        calendarHTML += `<div style="font-weight: 700; color: #60a5fa; padding: 8px 0; font-size: 0.85rem;">${day}</div>`;
    });
    
    // Add empty cells for days before the first day of the month
    const startDayOfWeek = firstDay.getDay();
    for (let i = 0; i < startDayOfWeek; i++) {
        calendarHTML += `<div class="calendar-day"></div>`;
    }
    
    // Add days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const isToday = day === today;
        const hasEvent = events.some(event => {
            const eventDate = new Date(event.date);
            return eventDate.getDate() === day && 
                   eventDate.getMonth() === month && 
                   eventDate.getFullYear() === year;
        });
        
        let classes = 'calendar-day';
        if (isToday) classes += ' today';
        if (hasEvent) classes += ' has-event';
        
        calendarHTML += `<div class="${classes}" title="${hasEvent ? 'Event scheduled' : ''}">${day}</div>`;
    }
    
    calendarHTML += `
            </div>
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(96, 165, 250, 0.2); text-align: center;">
                <small style="color: #94a3b8;">
                    <span style="color: #60a5fa;">●</span> Event Day
                    <span style="margin-left: 1rem; color: #f59e0b;">●</span> Today
                </small>
            </div>
        </div>
    `;
    
    container.innerHTML = calendarHTML;
}

// Render announcements section
function renderAnnouncements() {
    const announcementsGrid = document.getElementById('announcements-grid');
    if (!announcementsGrid) return;

    announcementsGrid.innerHTML = announcements.map((announcement, index) => {
        const announcementDate = new Date(announcement.date);
        const formattedDate = announcementDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        const badgeColors = {
            Important: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            Partnership: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            Opportunity: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            Elections: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            Technology: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
        };

        return `
            <div class="announcement-card fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="announcement-badge" style="background: ${badgeColors[announcement.badge] || badgeColors.Important}">${announcement.badge}</div>
                <h3 class="announcement-title">${announcement.title}</h3>
                <p class="announcement-content">${announcement.content}</p>
                <div class="announcement-date">${formattedDate}</div>
            </div>
        `;
    }).join('');
}

// Render FAQ section
function renderFAQ() {
    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer) return;

    faqContainer.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item fade-in" style="animation-delay: ${index * 0.1}s">
            <button class="faq-question" onclick="toggleFAQ(${index})">
                ${faq.question}
                <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer" id="faq-answer-${index}">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

// Toggle FAQ item
function toggleFAQ(index) {
    const faqItem = document.querySelector(`.faq-item:nth-child(${index + 1})`);
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't already active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Initialize contact form with enhanced validation
function initializeContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.classList.add('loading');
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Show success message
            showFormMessage('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
            
            // Reset form
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.classList.remove('loading');
        }, 2000);
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form message with enhanced styling
function showFormMessage(message, type) {
    // Remove existing messages
    const existingMessage = contactForm.querySelector('.form-success, .form-error');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'form-success' : 'form-error';
    messageDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            ${type === 'success' ? '✓' : '⚠'} 
            <span>${message}</span>
        </div>
    `;
    
    // Insert message at the top of the form
    contactForm.insertBefore(messageDiv, contactForm.firstChild);
    
    // Remove message after 6 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 6000);
}

// Initialize scroll effects with Intersection Observer
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Initialize parallax effects for modern feel
function initializeParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before');
        
        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Initialize smooth scrolling with offset for fixed navbar
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// Export functions for external use (if needed)
window.WUPCCSApp = {
    officers,
    events,
    announcements,
    faqs,
    renderOfficers,
    renderEvents,
    renderAnnouncements,
    renderFAQ,
    toggleFAQ,
    showFormMessage
};

// Performance optimization: Lazy load images when they become available
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize lazy loading after DOM is ready
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
});

// Console welcome message with college branding
console.log('%c🎓 WUP College of Computer Studies - Student Portal 2025-2026', 'color: #60a5fa; font-size: 18px; font-weight: bold;');
console.log('%cBuilding Tomorrow\'s Technology Leaders Today', 'color: #94a3b8; font-size: 14px; font-style: italic;');
console.log('%cFor technical support or suggestions, please contact our IT department.', 'color: #10b981; font-size: 12px;');
