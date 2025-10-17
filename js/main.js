// Load header and footer on all pages
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});

function loadHeader() {
    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header>
                <div class="container">
                    <nav class="navbar">
                        <a href="index.html" class="logo">Northern <span>Standard</span></a>
                        <ul class="nav-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="booking.html">Book Now</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <div class="mobile-menu">
                            <i class="fas fa-bars"></i>
                        </div>
                    </nav>
                </div>
            </header>
        `;
        
        // Add mobile menu functionality
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileMenu && navLinks) {
            mobileMenu.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        }
    }
}

function loadFooter() {
    const footerContainer = document.getElementById('footer');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-column">
                            <h3>Northern Standard</h3>
                            <p>Your reliable partner for dump trailer rentals. Quality service, competitive pricing, and on-time delivery.</p>
                        </div>
                        <div class="footer-column">
                            <h3>Quick Links</h3>
                            <ul class="footer-links">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="booking.html">Book Now</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Contact Info</h3>
                            <ul class="footer-links">
                                <li><i class="fas fa-map-marker-alt"></i> 123 Industrial Way, Metro City</li>
                                <li><i class="fas fa-phone"></i> (555) 123-4567</li>
                                <li><i class="fas fa-envelope"></i> info@northernstandard.com</li>
                            </ul>
                        </div>
                    </div>
                    <div class="copyright">
                        <p>&copy; 2023 Northern Standard Trailer Rentals. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.style.color = 'var(--secondary)';
            link.style.fontWeight = 'bold';
        }
    });
}

// Call this function after loading the header
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(highlightCurrentPage, 100);
});