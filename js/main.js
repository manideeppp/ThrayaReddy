/* ============================================================
   ENGAGEMENT INVITATION — MAIN JAVASCRIPT
   Handles: Curtain animation, Countdown, Particles,
            Scroll animations, Music toggle, RSVP form
   ============================================================ */

(function () {
  'use strict';

  // ─── CONFIG ───────────────────────────────────────────────
  const CONFIG = {
    eventDate: new Date('2026-07-18T17:00:00+05:30'),
    particleCount: 60,
    particleColors: [
      'rgba(201, 168, 76, 0.6)',
      'rgba(232, 212, 139, 0.5)',
      'rgba(255, 215, 0, 0.4)',
      'rgba(201, 168, 76, 0.3)',
      'rgba(245, 214, 208, 0.4)',
    ],
  };

  // ─── DOM ELEMENTS ─────────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const curtainOverlay = $('#curtain-overlay');
  const openBtn = $('#open-invitation-btn');
  const invitation = $('#invitation');
  const musicToggle = $('#music-toggle');
  const bgMusic = $('#bg-music');
  const sparkleCanvas = $('#sparkle-canvas');
  const rsvpForm = $('#rsvp-form');
  const rsvpSuccess = $('#rsvp-success');

  // ─── CURTAIN ANIMATION ────────────────────────────────────
  function openCurtains() {
    // Step 1: Fade out ALL text/button content on curtain (0.6s)
    curtainOverlay.classList.add('text-hidden');

    // Step 2: After text is fully gone, completely remove it, THEN open curtains
    setTimeout(() => {
      // Remove the content element entirely so nothing shows in the gap
      var content = curtainOverlay.querySelector('.curtain-content');
      if (content) content.style.display = 'none';

      // Now open the curtains — gap will only show ivory background
      curtainOverlay.classList.add('curtains-open');
    }, 800);

    // Step 3: After curtains are fully open (~2s anim + 0.8s delay = 2.8s),
    //         remove curtain overlay, show website
    setTimeout(() => {
      // Remove invitation-hidden so it enters the DOM
      invitation.classList.remove('invitation-hidden');

      // Force reflow so transition works
      void invitation.offsetHeight;

      // Fade in the website
      invitation.classList.add('visible');
      musicToggle.classList.add('visible');
      sparkleCanvas.classList.add('active');
      initParticles();
      initScrollAnimations();
      startCountdown();

      // Remove curtain overlay entirely
      curtainOverlay.classList.add('gone');
    }, 3000);

    // Try to play music
    tryPlayMusic();
  }

  if (openBtn) {
    openBtn.addEventListener('click', openCurtains);
  }

  // ─── BACKGROUND MUSIC ────────────────────────────────────
  let musicPlaying = false;

  function tryPlayMusic() {
    if (bgMusic) {
      bgMusic.volume = 0.35;
      const playPromise = bgMusic.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            musicPlaying = true;
            musicToggle.classList.remove('paused');
          })
          .catch(() => {
            musicPlaying = false;
            musicToggle.classList.add('paused');
          });
      }
    }
  }

  if (musicToggle) {
    musicToggle.addEventListener('click', () => {
      if (!bgMusic) return;
      if (musicPlaying) {
        bgMusic.pause();
        musicPlaying = false;
        musicToggle.classList.add('paused');
      } else {
        bgMusic.play().then(() => {
          musicPlaying = true;
          musicToggle.classList.remove('paused');
        }).catch(() => {});
      }
    });
  }

  // ─── COUNTDOWN TIMER ─────────────────────────────────────
  function startCountdown() {
    const daysEl = $('#timer-days');
    const hoursEl = $('#timer-hours');
    const minutesEl = $('#timer-minutes');
    const secondsEl = $('#timer-seconds');

    if (!daysEl) return;

    function update() {
      const now = new Date();
      const diff = CONFIG.eventDate - now;

      if (diff <= 0) {
        daysEl.textContent = '0';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      daysEl.textContent = String(days);
      hoursEl.textContent = String(hours).padStart(2, '0');
      minutesEl.textContent = String(minutes).padStart(2, '0');
      secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  // ─── SPARKLE / PARTICLE SYSTEM ────────────────────────────
  let particles = [];
  let animFrameId = null;

  function initParticles() {
    if (!sparkleCanvas) return;

    const ctx = sparkleCanvas.getContext('2d');
    let width = (sparkleCanvas.width = window.innerWidth);
    let height = (sparkleCanvas.height = window.innerHeight);

    // Create particles
    particles = [];
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push(createParticle(width, height));
    }

    // Handle resize
    window.addEventListener('resize', () => {
      width = sparkleCanvas.width = window.innerWidth;
      height = sparkleCanvas.height = window.innerHeight;
    });

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Twinkle effect
        p.opacity += p.opacityDirection * p.twinkleSpeed;
        if (p.opacity >= p.maxOpacity) {
          p.opacity = p.maxOpacity;
          p.opacityDirection = -1;
        }
        if (p.opacity <= 0.05) {
          p.opacity = 0.05;
          p.opacityDirection = 1;
        }

        // Reset if off screen
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10 || p.x > width + 10) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
        }

        // Draw
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.glow;
        ctx.shadowColor = p.color;

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Star / diamond shape
          drawStar(ctx, p.x, p.y, p.size);
        }

        ctx.restore();
      });

      animFrameId = requestAnimationFrame(animate);
    }

    animate();
  }

  function createParticle(w, h) {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.4 + 0.1),
      color: CONFIG.particleColors[Math.floor(Math.random() * CONFIG.particleColors.length)],
      opacity: Math.random() * 0.6 + 0.1,
      maxOpacity: Math.random() * 0.6 + 0.3,
      opacityDirection: Math.random() > 0.5 ? 1 : -1,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      glow: Math.random() * 8 + 2,
      shape: Math.random() > 0.6 ? 'star' : 'circle',
    };
  }

  function drawStar(ctx, x, y, r) {
    const spikes = 4;
    const outerRadius = r;
    const innerRadius = r * 0.4;
    let rot = (Math.PI / 2) * 3;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(x, y - outerRadius);

    for (let i = 0; i < spikes; i++) {
      ctx.lineTo(
        x + Math.cos(rot) * outerRadius,
        y + Math.sin(rot) * outerRadius
      );
      rot += step;
      ctx.lineTo(
        x + Math.cos(rot) * innerRadius,
        y + Math.sin(rot) * innerRadius
      );
      rot += step;
    }
    ctx.lineTo(x, y - outerRadius);
    ctx.closePath();
    ctx.fill();
  }

  // ─── SCROLL ANIMATIONS ───────────────────────────────────
  function initScrollAnimations() {
    const elements = $$('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));
  }

  // ─── RSVP FORM ───────────────────────────────────────────
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Animate button
      const btn = rsvpForm.querySelector('.rsvp-submit-btn');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      // Simulate sending
      setTimeout(() => {
        rsvpForm.style.display = 'none';
        rsvpSuccess.classList.remove('hidden');

        // Animate success
        rsvpSuccess.style.opacity = '0';
        rsvpSuccess.style.transform = 'translateY(20px)';
        rsvpSuccess.style.transition = 'all 0.6s ease';

        requestAnimationFrame(() => {
          rsvpSuccess.style.opacity = '1';
          rsvpSuccess.style.transform = 'translateY(0)';
        });
      }, 1200);
    });
  }

  // ─── SMOOTH SCROLL FOR INTERNAL LINKS ─────────────────────
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ─── PRELOAD — SLIGHT ENTRANCE ANIMATION FOR CURTAIN ─────
  window.addEventListener('load', () => {
    // Ensure the curtain content fades in nicely
    const curtainContent = $('.curtain-content');
    if (curtainContent) {
      curtainContent.style.opacity = '0';
      curtainContent.style.transform = 'translate(-50%, -50%) translateY(15px)';
      curtainContent.style.transition = 'opacity 1.2s ease 0.3s, transform 1.2s ease 0.3s';

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          curtainContent.style.opacity = '1';
          curtainContent.style.transform = 'translate(-50%, -50%) translateY(0)';
        });
      });
    }
  });

})();
