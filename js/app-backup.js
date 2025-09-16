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
    {
        name: "Michael Rodriguez",
        position: "Secretary",
        photo: "MR",
        bio: "Information Systems student dedicated to keeping our organization organized and our communications clear.",
        email: "secretary@ccsorg.edu",
        linkedin: "#"
    },
    {
        name: "Emily Davis",
        position: "Treasurer",
        photo: "ED",
        bio: "Finance and Computer Science double major ensuring our organization's financial health and transparency.",
        email: "treasurer@ccsorg.edu",
        linkedin: "#"
    },
    {
        name: "David Kim",
        position: "Events Coordinator",
        photo: "DK",
        bio: "Event planning enthusiast and CS major focused on creating memorable experiences for our community.",
        email: "events@ccsorg.edu",
        linkedin: "#"
    },
    {
        name: "Jessica Wang",
        position: "Public Relations Officer",
        photo: "JW",
        bio: "Communications major with CS minor, handling our social media presence and external partnerships.",
        email: "pr@ccsorg.edu",
        linkedin: "#"
    }
];

// Events data - Update with your actual events
const events = [
    {
        title: "Welcome Back Meeting",
        date: "2025-09-15",
        time: "3:00 PM",
        location: "CS Building Room 201",
        description: "Join us for our first meeting of the year! Meet the officers, learn about upcoming events, and get involved.",
        type: "meeting"
    },
    {
        title: "Python Workshop",
        date: "2025-09-22",
        time: "2:00 PM",
        location: "Computer Lab A",
        description: "Beginner-friendly Python workshop covering fundamentals and practical applications.",
        type: "workshop"
    },
    {
        title: "Industry Panel Discussion",
        date: "2025-09-29",
        time: "4:00 PM",
        location: "Auditorium B",
        description: "Hear from local tech professionals about career paths and industry trends.",
        type: "panel"
    },
    {
        title: "Coding Competition",
        date: "2025-10-06",
        time: "1:00 PM",
        location: "CS Building",
        description: "Test your programming skills in our monthly coding challenge with prizes!",
        type: "competition"
    },
    {
        title: "Career Fair Prep",
        date: "2025-10-13",
        time: "3:00 PM",
        location: "CS Building Room 201",
        description: "Resume review, interview tips, and networking strategies for the upcoming career fair.",
        type: "workshop"
    }
];

// Announcements data - Update with your actual announcements
const announcements = [
    {
        title: "New Academic Year Begins!",
        content: "Welcome to the 2025-2026 academic year! We're excited to work with you all and make this our best year yet. Join us for our welcome meeting on September 15th.",
        date: "2025-09-01",
        type: "important",
        badge: "Important"
    },
    {
        title: "Officer Elections Results",
        content: "Congratulations to all newly elected officers! We're grateful for everyone who participated in the democratic process and look forward to serving you.",
        date: "2025-08-25",
        type: "announcement",
        badge: "News"
    },
    {
        title: "Fall Semester Event Schedule",
        content: "Our fall events calendar is now live! From workshops to competitions, we have exciting activities planned throughout the semester.",
        date: "2025-08-20",
        type: "info",
        badge: "Info"
    },
    {
        title: "Membership Drive",
        content: "Interested in joining our organization? We're always welcoming new members! Contact any officer or attend our weekly meetings.",
        date: "2025-08-15",
        type: "announcement",
        badge: "Membership"
    }
];

// FAQ data
const faqs = [
    {
        question: "How can I become a member?",
        answer: "Membership is open to all students! Simply attend one of our weekly meetings or contact any officer. There are no fees or prerequisites."
    },
    {
        question: "When are your meetings?",
        answer: "We meet every Friday at 3:00 PM in the Computer Science Building, Room 201. All students are welcome to attend."
    },
    {
        question: "Do I need to be a Computer Science major?",
        answer: "Not at all! We welcome students from all majors who are interested in technology, programming, or just want to be part of our community."
    },
    {
        question: "What kind of events do you organize?",
        answer: "We organize workshops, coding competitions, industry panels, career fairs, social events, and study groups throughout the year."
    },
    {
        question: "How can I get involved in leadership?",
        answer: "We hold officer elections at the end of each academic year. You can also volunteer to help with events and committees to gain experience."
    },
    {
        question: "Do you provide career support?",
        answer: "Yes! We offer resume reviews, mock interviews, networking opportunities, and connections with industry professionals and alumni."
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

// Render officers section
function renderOfficers() {
    const officersGrid = document.getElementById('officers-grid');
    if (!officersGrid) return;

    officersGrid.innerHTML = officers.map(officer => {
        // Check if photo is an image path or initials
        const isImagePath = officer.photo.includes('.') || officer.photo.includes('/');
        const photoContent = isImagePath 
            ? `<img src="${officer.photo}" alt="${officer.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">` 
            : officer.photo;

        return `
            <div class="officer-card fade-in">
                <div class="officer-photo">${photoContent}</div>
                <h3 class="officer-name">${officer.name}</h3>
                <p class="officer-position">${officer.position}</p>
                <p class="officer-bio">${officer.bio}</p>
                <div class="officer-contact">
                    <a href="mailto:${officer.email}" class="contact-link">Email</a>
                    <a href="${officer.linkedin}" target="_blank" class="contact-link">LinkedIn</a>
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
        eventsList.innerHTML = events.slice(0, 5).map(event => {
            const eventDate = new Date(event.date);
            const formattedDate = eventDate.toLocaleDateString('en-US', { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });

            return `
                <div class="event-card fade-in">
                    <div class="event-date">${formattedDate} • ${event.time}</div>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-description">${event.description}</p>
                    <small style="color: #6b7280;">📍 ${event.location}</small>
                </div>
            `;
        }).join('');
    }

    if (calendarView) {
        renderMiniCalendar(calendarView);
    }
}

// Render mini calendar
function renderMiniCalendar(container) {
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
        calendarHTML += `<div style="font-weight: 600; color: #6b7280; padding: 5px 0;">${day}</div>`;
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
        
        calendarHTML += `<div class="${classes}">${day}</div>`;
    }
    
    calendarHTML += `
            </div>
        </div>
    `;
    
    container.innerHTML = calendarHTML;
}

// Render announcements section
function renderAnnouncements() {
    const announcementsGrid = document.getElementById('announcements-grid');
    if (!announcementsGrid) return;

    announcementsGrid.innerHTML = announcements.map(announcement => {
        const announcementDate = new Date(announcement.date);
        const formattedDate = announcementDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        return `
            <div class="announcement-card fade-in">
                <div class="announcement-badge">${announcement.badge}</div>
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
        <div class="faq-item fade-in">
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

// Initialize contact form
function initializeContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.classList.add('loading');
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Show success message
            showFormMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.classList.remove('loading');
        }, 2000);
    });
}

// Show form message
function showFormMessage(message, type) {
    // Remove existing messages
    const existingMessage = contactForm.querySelector('.form-success, .form-error');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'form-success' : 'form-error';
    messageDiv.textContent = message;
    
    // Insert message at the top of the form
    contactForm.insertBefore(messageDiv, contactForm.firstChild);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Initialize scroll effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
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

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
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
window.CCSApp = {
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
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Add this to initialization if you add actual images later
// initializeLazyLoading();

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
});

// Console welcome message
console.log('%c🎓 College Organization Officers Webapp 2025-2026', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%cWelcome to our organization website! Built with modern web technologies.', 'color: #6b7280; font-size: 12px;');
console.log('%cIf you find any bugs or have suggestions, please contact us!', 'color: #059669; font-size: 12px;');
