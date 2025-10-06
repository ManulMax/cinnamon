// Products page specific JavaScript

// Add to cart functionality for products page
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product-card .btn-primary');
    
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productCard = btn.closest('.product-card');
            const productName = productCard.querySelector('h4').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            // Simulate add to cart
            const originalText = btn.textContent;
            btn.textContent = 'Added!';
            btn.style.background = '#4CAF50';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 2000);
            
            // Show notification with product details
            showProductNotification(productName, productPrice);
        });
    });
});

// Enhanced notification for products
function showProductNotification(productName, price) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%);
        color: #000;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-weight: 500;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <div style="font-size: 1.5rem;">✓</div>
            <div>
                <div style="font-weight: 600; margin-bottom: 5px;">${productName}</div>
                <div style="font-size: 0.9rem; opacity: 0.8;">${price} added to cart</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Category section animations
const categoryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe category sections
document.addEventListener('DOMContentLoaded', () => {
    const categorySections = document.querySelectorAll('.category-section');
    
    categorySections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        categoryObserver.observe(section);
    });
});

// Product card hover effects with enhanced animations
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
        card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    });
});

// Smooth scroll to category sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for product images
document.addEventListener('DOMContentLoaded', () => {
    const productImages = document.querySelectorAll('.product-image > div');
    
    productImages.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, index * 100);
    });
});

// Add pulse animation to cinnamon bundle in hero
document.addEventListener('DOMContentLoaded', () => {
    const cinnamonBundle = document.querySelector('.cinnamon-bundle');
    if (cinnamonBundle) {
        setInterval(() => {
            cinnamonBundle.style.transform = 'scale(1.05)';
            setTimeout(() => {
                cinnamonBundle.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }
});

// Enhanced product card interactions
document.querySelectorAll('.product-card').forEach(card => {
    const productImage = card.querySelector('.product-image > div');
    
    card.addEventListener('mouseenter', () => {
        if (productImage) {
            productImage.style.transform = 'scale(1.1) rotate(5deg)';
            productImage.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (productImage) {
            productImage.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Add click tracking for analytics (placeholder)
function trackProductClick(productName, category) {
    // This would integrate with your analytics system
    console.log(`Product clicked: ${productName} in category: ${category}`);
}

// Add click listeners to product cards for tracking
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn-primary')) {
            const productName = card.querySelector('h4').textContent;
            const category = card.closest('.category-section').querySelector('.category-title').textContent;
            trackProductClick(productName, category);
        }
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('product-card')) {
        e.target.click();
    }
});

// Add focus styles for accessibility
document.querySelectorAll('.product-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.style.outline = 'none';
    
    card.addEventListener('focus', () => {
        card.style.outline = '2px solid #d4af37';
        card.style.outlineOffset = '2px';
    });
    
    card.addEventListener('blur', () => {
        card.style.outline = 'none';
    });
});
