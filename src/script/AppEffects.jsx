import { useEffect } from "react";

const AppEffects = () => {
  useEffect(() => {
    // Throttle function for scroll events
    const throttle = (func, limit) => {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      }
    };

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe all cards and sections for fade-in
    const animatedElements = document.querySelectorAll(
      ".card, .feature-card, .partner-group, .stat, .value-card, .faq-item"
    );

    animatedElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      el.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    // Hero content animation - simplified
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
      heroContent.style.opacity = "0";
      heroContent.style.transform = "translateY(30px)";
      setTimeout(() => {
        heroContent.style.transition = "opacity 1s ease, transform 1s ease";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
      }, 300);
    }

    // Page header animation
    const pageHeader = document.querySelector(".page-header h1");
    if (pageHeader) {
      pageHeader.style.opacity = "0";
      pageHeader.style.transform = "translateY(30px)";
      setTimeout(() => {
        pageHeader.style.transition = "opacity 1s ease, transform 1s ease";
        pageHeader.style.opacity = "1";
        pageHeader.style.transform = "translateY(0)";
      }, 300);
    }

    // FAQ Accordion with smooth animations
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      const toggleIcon = item.querySelector(".toggle-icon i");

      question?.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // Close all FAQ items
        faqItems.forEach((faqItem) => {
          faqItem.classList.remove("active");
          faqItem
            .querySelector(".faq-answer")
            ?.style.setProperty("maxHeight", "0");
          const icon = faqItem.querySelector(".toggle-icon i");
          if (icon) icon.className = "fas fa-plus";
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add("active");
          if (answer) answer.style.maxHeight = `${answer.scrollHeight}px`;
          if (toggleIcon) toggleIcon.className = "fas fa-minus";
        }
      });
    });

    // FAQ Category Filter
    const categoryBtns = document.querySelectorAll(".category-btn");
    const faqCategories = document.querySelectorAll(".faq-category");

    categoryBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");

        // Update active button
        categoryBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Show/hide categories with fade effect
        faqCategories.forEach((cat) => {
          if (cat.id === category) {
            cat.style.display = "block";
            cat.style.opacity = "0";
            cat.style.transform = "translateY(20px)";
            setTimeout(() => {
              cat.style.transition = "opacity 0.5s ease, transform 0.5s ease";
              cat.style.opacity = "1";
              cat.style.transform = "translateY(0)";
            }, 50);
          } else {
            cat.style.display = "none";
          }
        });
      });
    });

    // Form Submission with enhanced feedback
    const contactForm = document.getElementById("contactForm");
    contactForm?.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;

      // Create success message
      const successMessage = document.createElement("div");
      successMessage.className = "success-message";
      successMessage.innerHTML = `
        <div style="background: #4caf50; color: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; text-align: center;">
          <i class="fas fa-check-circle"></i> Thank you for your message, ${name}! We will get back to you soon.
        </div>
      `;

      // Insert success message
      contactForm.parentNode.insertBefore(
        successMessage,
        contactForm.nextSibling
      );

      // Reset the form
      contactForm.reset();

      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight =
            document.querySelector("header")?.offsetHeight || 0;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      });
    });

    // Header scroll effect - throttled
    const header = document.querySelector("header");
    const scrollHandler = throttle(() => {
      if (!header) return;
      if (window.scrollY > 50) {
        header.style.background = "rgba(255, 255, 255, 0.98)";
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
      } else {
        header.style.background = "rgba(255, 255, 255, 0.95)";
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
      }
    }, 16); // ~60fps

    window.addEventListener("scroll", scrollHandler);

    // Add loading animation
    window.addEventListener("load", () => {
      document.body.style.opacity = "0";
      document.body.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        document.body.style.opacity = "1";
      }, 100);
    });



    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return null; // Just side-effects
};

export default AppEffects;
