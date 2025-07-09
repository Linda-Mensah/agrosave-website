import { useEffect } from "react";

const AppEffects = () => {
  useEffect(() => {
    // const hamburger = document.querySelector(".hamburger");
    // const nav = document.querySelector("nav ul");
    // const navLinks = document.querySelectorAll("nav ul li a");

    // const toggleNav = () => {
    //   nav?.classList.toggle("active");
    //   hamburger?.classList.toggle("active");
    // };

    // hamburger?.addEventListener("click", toggleNav);
    // navLinks.forEach((link) =>
    //   link.addEventListener("click", () => {
    //     nav?.classList.remove("active");
    //     hamburger?.classList.remove("active");
    //   })
    // );

    // Intersection Observer
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

    // Hero content
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

    // Page header
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

    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      const toggleIcon = item.querySelector(".toggle-icon i");

      question?.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach((faqItem) => {
          faqItem.classList.remove("active");
          faqItem
            .querySelector(".faq-answer")
            ?.style.setProperty("maxHeight", "0");
          const icon = faqItem.querySelector(".toggle-icon i");
          if (icon) icon.className = "fas fa-plus";
        });

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

        categoryBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

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

    // Contact form
    const contactForm = document.getElementById("contactForm");
    contactForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;

      const successMessage = document.createElement("div");
      successMessage.className = "success-message";
      successMessage.innerHTML = `
        <div style="background: #4caf50; color: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; text-align: center;">
          <i class="fas fa-check-circle"></i> Thank you for your message, ${name}! We will get back to you soon.
        </div>
      `;

      contactForm.parentNode.insertBefore(
        successMessage,
        contactForm.nextSibling
      );
      contactForm.reset();

      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    });

    // Smooth scrolling
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

    // Header scroll effect
    const header = document.querySelector("header");
    const scrollHandler = () => {
      if (!header) return;
      if (window.scrollY > 50) {
        header.style.background = "rgba(255, 255, 255, 0.98)";
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
      } else {
        header.style.background = "rgba(255, 255, 255, 0.95)";
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
      }
    };
    window.addEventListener("scroll", scrollHandler);

    // Parallax
    const parallaxScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector(".hero");
      const pageHeader = document.querySelector(".page-header");
      if (hero) hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      if (pageHeader)
        pageHeader.style.transform = `translateY(${scrolled * 0.3}px)`;
    };
    window.addEventListener("scroll", parallaxScroll);

    // Body load animation
    window.addEventListener("load", () => {
      document.body.style.opacity = "0";
      document.body.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        document.body.style.opacity = "1";
      }, 100);
    });

    // Hover effects
    document.querySelectorAll(".cta-button").forEach((btn) => {
      btn.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-3px) scale(1.02)";
      });
      btn.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)";
      });
    });

    document
      .querySelectorAll(
        ".card, .feature-card, .partner-group, .stat, .value-card"
      )
      .forEach((card) => {
        card.addEventListener("mouseenter", function () {
          this.style.transform = "translateY(-8px) scale(1.02)";
        });
        card.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0) scale(1)";
        });
      });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("scroll", parallaxScroll);
    };
  }, []);

  return null; // Just side-effects
};

export default AppEffects;
