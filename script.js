/* ============================================
   ALI AHMAD — PORTFOLIO SCRIPTS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===== DOWNLOAD CV =====
  const downloadCv = document.getElementById('downloadCv')
  if (downloadCv) {
    downloadCv.addEventListener('click', e => {
      e.preventDefault()
      fetch('cv1234.pdf')
        .then(res => res.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = 'Ali-Ahmad-CV.pdf'
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
          URL.revokeObjectURL(url)
        })
        .catch(() => {
          window.open('cv1234.pdf', '_blank')
        })
    })
  }

  // ===== DATA =====
  const skillsData = [
    { name: 'Flutter', percent: 90, icon: 'fa-solid fa-mobile-screen', color: '#02569B' },
    { name: 'Dart', percent: 85, icon: 'fa-brands fa-dart', color: '#0175C2' },
    { name: 'Firebase', percent: 80, icon: 'fa-solid fa-fire', color: '#FFCA28' },
    { name: 'Node.js', percent: 70, icon: 'fa-brands fa-node', color: '#339933' },
    { name: 'MongoDB', percent: 65, icon: 'fa-solid fa-database', color: '#47A248' },
    { name: 'React', percent: 75, icon: 'fa-brands fa-react', color: '#61DAFB' },
    { name: 'HTML5', percent: 95, icon: 'fa-brands fa-html5', color: '#E34F26' },
    { name: 'CSS3', percent: 90, icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
    { name: 'JavaScript', percent: 80, icon: 'fa-brands fa-js', color: '#F7DF1E' },
    { name: 'Git & GitHub', percent: 75, icon: 'fa-brands fa-git-alt', color: '#F05032' },
  ]

  const softSkillsData = [
    'Problem Solving', 'Communication', 'Quick Learning', 'Teamwork',
    'Time Management', 'Leadership', 'Creative Thinking', 'Project Management',
  ]

  const projectsData = [
    {
      title: 'Hospital Management App',
      desc: 'A comprehensive hospital management system featuring patient records, appointment scheduling, doctor management, and billing with real-time updates.',
      img: 'images/hospital-app.svg',
      tags: ['Flutter', 'Firebase', 'Dart'],
      category: 'mobile',
      github: '#', demo: '#',
    },
    {
      title: 'Portfolio Website',
      desc: 'A modern responsive portfolio website showcasing skills, education, experience, and projects using advanced animations.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      category: 'web',
      github: '#', demo: '#',
    },
    {
      title: 'Online Shopping Website',
      desc: 'A complete e-commerce platform featuring authentication, shopping cart, product management, admin dashboard, and backend integration.',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'web',
      github: '#', demo: '#',
    },
    {
      title: 'T20 Cricket App',
      desc: 'Flutter application that fetches cricket data from a local JSON file and displays teams, players, scores, and statistics with a modern UI.',
      img: 'images/t20-cricket-app.svg',
      tags: ['Flutter', 'Dart', 'JSON'],
      category: 'mobile',
      github: '#', demo: '#',
    },
    {
      title: 'Shoba Bazar',
      desc: 'A complete online marketplace developed in Flutter with Buyer App, Seller App, Mechanic Module, Firebase Integration, and Shopping Cart.',
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop',
      tags: ['Flutter', 'Firebase', 'Dart'],
      category: 'mobile',
      github: '#', demo: '#',
    },
  ]

  const servicesData = [
    { icon: 'fa-mobile-screen', title: 'Mobile App Development', desc: 'Cross-platform mobile applications for iOS & Android with beautiful UI, smooth animations, and native performance using Flutter & Dart.' },
    { icon: 'fa-code', title: 'Web Development', desc: 'Modern, responsive websites and web applications using React, Node.js, and the latest web technologies. From landing pages to full platforms.' },
    { icon: 'fa-desktop', title: 'Desktop App Development', desc: 'Cross-platform desktop applications for Windows, macOS, and Linux using modern frameworks with native-like performance and sleek UI.' },
    { icon: 'fa-palette', title: 'UI/UX Design', desc: 'Professional user interfaces and experiences designed in Figma with a focus on usability, aesthetics, and user-centered design principles.' },
    { icon: 'fa-database', title: 'Firebase Integration', desc: 'Complete backend solutions with Firebase including authentication, real-time database, cloud functions, storage, and hosting.' },
    { icon: 'fa-server', title: 'Full Stack Development', desc: 'End-to-end development of scalable applications with frontend, backend, database, API integration, and deployment.' },
  ]

  const timelineData = [
    { year: '2023 - 2027', title: 'Bachelor of Software Engineering', inst: 'Sarhad University of Science and IT', desc: 'Pursuing a degree in Software Engineering with focus on modern software development practices.' },
    { year: '2025', title: 'Mobile App Development (Flutter)', inst: 'PTCP Software House', desc: 'Completed professional training in Flutter, Dart, Firebase, REST APIs, State Management, and App Deployment.' },
    { year: '2026', title: 'Web Development', inst: 'Arfa Kareem Technology Incubator', desc: 'Learned HTML, CSS, JavaScript, Responsive Design, Frontend Development, and Backend Basics.' },
    { year: '2022 - 2023', title: 'Diploma in Information Technology', inst: 'Government College of Technology', desc: 'Completed a comprehensive diploma covering various aspects of information technology.' },
  ]

  const contactLinksData = [
    { icon: 'fa-envelope', label: 'Email', value: 'ali.ahmad9564a@gmail.com', href: 'mailto:ali.ahmad9564a@gmail.com' },
    { icon: 'fa-phone', label: 'Phone', value: '+92 332 1695952', href: 'tel:+923321695952' },
    { icon: 'fa-whatsapp', label: 'WhatsApp', value: '+92 332 1695952', href: 'https://wa.me/923321695952', brand: true },
    { icon: 'fa-location-dot', label: 'Location', value: 'Peshawar, Pakistan', href: 'javascript:void(0)' },
  ]

   const socialLinksData = [
     { icon: 'fa-github', href: 'https://github.com/AliAhmad0a' },
     { icon: 'fa-linkedin-in', href: 'https://www.linkedin.com/in/ali-ahmad-3baa6a385' },
   ]

  // ===== LOADING SCREEN =====
  let progress = 0
  const loaderCircle = document.getElementById('loader-circle')
  const loaderPercent = document.getElementById('loader-percent')
  const loaderBar = document.getElementById('loader-bar')
  const loadingScreen = document.getElementById('loading-screen')

  const loadInterval = setInterval(() => {
    progress += Math.random() * 15 + 5
    if (progress >= 100) {
      progress = 100
      clearInterval(loadInterval)
      setTimeout(() => {
        loadingScreen.classList.add('hidden')
        setTimeout(() => loadingScreen.style.display = 'none', 800)
        // Staggered hero entrance
        const heroEls = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-desc, .hero-btns, .hero-image-wrapper')
        heroEls.forEach((el, i) => {
          el.style.opacity = '0'
          el.style.transform = 'translateY(30px)'
          el.style.transition = `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            })
          })
        })
        initReveal()
      }, 500)
    }
    const dash = 220 - (progress / 100) * 220
    if (loaderCircle) loaderCircle.style.strokeDashoffset = dash
    if (loaderPercent) loaderPercent.textContent = Math.min(Math.round(progress), 100)
    if (loaderBar) loaderBar.style.width = Math.min(progress, 100) + '%'
  }, 200)

  // ===== CUSTOM CURSOR =====
  const dot = document.getElementById('cursor-dot')
  const ring = document.getElementById('cursor-ring')
  if (dot && ring) {
    let mx = 0, my = 0, rx = 0, ry = 0
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px' })
    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0' })
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1' })
    document.querySelectorAll('a, button, .btn, .filter-btn, .project-card').forEach(el => {
      el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover') })
      el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover') })
    })
    function followRing() { rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(followRing) }
    followRing()
  }

  // ===== PARTICLES =====
  const canvas = document.getElementById('particle-canvas')
  if (canvas) {
    const ctx = canvas.getContext('2d')
    let particles = []
    function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    function createParticles() {
      const count = Math.floor((canvas.width * canvas.height) / 15000)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5, alpha: Math.random() * 0.5 + 0.1,
      }))
    }
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`; ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath(); ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5; ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke()
          }
        }
      }
      requestAnimationFrame(animateParticles)
    }
    resizeCanvas(); createParticles(); animateParticles()
    window.addEventListener('resize', () => { resizeCanvas(); createParticles() })
  }

  // ===== SCROLL PROGRESS =====
  const progressBar = document.getElementById('scroll-progress')
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY, docHeight = document.documentElement.scrollHeight - window.innerHeight
    const pct = (scrollTop / docHeight) * 100
    progressBar.style.width = pct + '%'
  })

  // ===== NAVBAR =====
  const navbar = document.getElementById('navbar')
  const menuToggle = document.getElementById('menuToggle')
  const mobileMenu = document.getElementById('mobileMenu')
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link')

  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50))

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open')
    menuToggle.querySelector('i').classList.toggle('fa-bars')
    menuToggle.querySelector('i').classList.toggle('fa-xmark')
  })

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href'))
      if (target) target.scrollIntoView({ behavior: 'smooth' })
      mobileMenu.classList.remove('open')
      if (menuToggle.querySelector('i').classList.contains('fa-xmark')) {
        menuToggle.querySelector('i').classList.remove('fa-xmark')
        menuToggle.querySelector('i').classList.add('fa-bars')
      }
    })
  })

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]')
  window.addEventListener('scroll', () => {
    let current = ''
    sections.forEach(s => {
      const top = s.getBoundingClientRect().top
      if (top <= 150 && top > -s.offsetHeight) current = s.id
    })
    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current)
    })
  })

  // ===== THEME TOGGLE =====
  const themeToggle = document.getElementById('themeToggle')
  const themeKnob = themeToggle.querySelector('.theme-knob i')
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light')
    const isLight = document.documentElement.classList.contains('light')
    themeKnob.className = isLight ? 'fas fa-sun' : 'fas fa-moon'
  })

  // ===== TYPEWRITER =====
  const typeEl = document.getElementById('typewriter')
  if (typeEl) {
    const words = ['Modern Mobile Apps', 'Full Stack Web Apps', 'Desktop Applications', 'Professional UI/UX', 'Scalable Solutions']
    let wordIndex = 0, charIndex = 0, isDeleting = false
    function typeEffect() {
      const word = words[wordIndex]
      if (!isDeleting) {
        charIndex++
        typeEl.textContent = word.slice(0, charIndex)
        if (charIndex === word.length) { setTimeout(() => isDeleting = true, 2000); return }
      } else {
        charIndex--
        typeEl.textContent = word.slice(0, charIndex)
        if (charIndex === 0) { isDeleting = false; wordIndex = (wordIndex + 1) % words.length }
      }
      setTimeout(typeEffect, isDeleting ? 50 : 100)
    }
    typeEffect()
  }

  // ===== RENDER SKILL BARS =====
  const skillBarsEl = document.getElementById('skillBars')
  skillsData.forEach(s => {
    const bar = document.createElement('div'); bar.className = 'skill-bar'
    bar.innerHTML = `
      <div class="skill-bar-header">
        <span class="skill-bar-name"><i class="${s.icon} skill-icon" style="color:${s.color}"></i>${s.name}</span>
        <span class="skill-bar-percent gradient-text">${s.percent}%</span>
      </div>
      <div class="skill-track"><div class="skill-fill" data-width="${s.percent}"></div></div>
    `
    skillBarsEl.appendChild(bar)
  })

  // ===== RENDER SOFT SKILLS =====
  const softSkillsEl = document.getElementById('softSkills')
  softSkillsData.forEach(s => {
    const tag = document.createElement('span'); tag.className = 'soft-skill'; tag.textContent = s
    softSkillsEl.appendChild(tag)
  })

  // ===== RENDER SERVICES =====
  const servicesGrid = document.getElementById('servicesGrid')
  const gradPairs = [
    ['rgba(59,130,246,0.08)', 'rgba(96,165,250,0.08)'],
    ['rgba(96,165,250,0.08)', 'rgba(147,197,253,0.08)'],
    ['rgba(147,197,253,0.08)', 'rgba(59,130,246,0.08)'],
    ['rgba(59,130,246,0.08)', 'rgba(191,219,254,0.08)'],
    ['rgba(191,219,254,0.08)', 'rgba(59,130,246,0.08)'],
    ['rgba(96,165,250,0.08)', 'rgba(147,197,253,0.08)'],
  ]
  servicesData.forEach((s, i) => {
    const card = document.createElement('div'); card.className = 'service-card'
    card.style.setProperty('--grad-from', gradPairs[i][0])
    card.style.setProperty('--grad-to', gradPairs[i][1])
    card.innerHTML = `
      <div class="service-icon"><i class="fa-solid ${s.icon}"></i></div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
    `
    servicesGrid.appendChild(card)
  })

  // ===== RENDER TIMELINE =====
  const timelineContainer = document.getElementById('timelineContainer')
  timelineData.forEach((t, i) => {
    const item = document.createElement('div'); item.className = 'timeline-item'
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-year">${t.year}</span>
        <div class="timeline-body">
          <h4>${t.title}</h4>
          <p class="timeline-inst">${t.inst}</p>
          <p>${t.desc}</p>
        </div>
      </div>
    `
    timelineContainer.appendChild(item)
    setTimeout(() => item.classList.add('reveal'), 100)
  })

  // ===== RENDER CONTACT LINKS =====
  const contactLinksEl = document.getElementById('contactLinks')
  contactLinksData.forEach(c => {
    const a = document.createElement('a'); a.href = c.href; a.className = 'contact-link'
    if (c.href.startsWith('http')) a.target = '_blank'
    a.innerHTML = `
      <div class="contact-link-icon"><i class="${c.brand ? 'fa-brands' : 'fa-solid'} ${c.icon}"></i></div>
      <div><span class="contact-link-label">${c.label}</span><span class="contact-link-value">${c.value}</span></div>
    `
    contactLinksEl.appendChild(a)
  })

  // ===== RENDER SOCIAL LINKS =====
  const socialLinksEl = document.getElementById('socialLinks')
  socialLinksData.forEach(s => {
    const a = document.createElement('a'); a.href = s.href; a.target = '_blank'; a.className = 'social-link'
    a.innerHTML = `<i class="fa-brands ${s.icon}"></i>`
    socialLinksEl.appendChild(a)
  })

  // ===== RENDER PROJECTS =====
  const projectGrid = document.getElementById('projectGrid')
  const projectFilters = document.getElementById('projectFilters')
  let activeFilter = 'all'

  function renderProjects(category) {
    const filtered = category === 'all' ? projectsData : projectsData.filter(p => p.category === category)
    projectGrid.innerHTML = ''
    filtered.forEach((p, i) => {
      const card = document.createElement('div'); card.className = 'project-card'
      card.style.animationDelay = (i * 0.1) + 's'
      card.innerHTML = `
        <div class="project-img-wrap">
          <img src="${p.img}" alt="${p.title}" class="project-img" loading="lazy" />
          <div class="project-img-overlay"></div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
          <div class="project-links">
            <a href="${p.github}" target="_blank" ${p.github === '#' ? 'data-placeholder="true"' : ''}><i class="fab fa-github"></i> GitHub</a>
            <a href="${p.demo}" target="_blank" ${p.demo === '#' ? 'data-placeholder="true"' : ''}><i class="fas fa-external-link-alt"></i> Live Demo</a>
          </div>
        </div>
      `
      card.style.cursor = 'pointer'
      if (window.matchMedia('(pointer: fine)').matches) {
        card.addEventListener('mousemove', e => {
          const rect = card.getBoundingClientRect()
          const px = (e.clientX - rect.left) / rect.width - 0.5
          const py = (e.clientY - rect.top) / rect.height - 0.5
          card.style.transform = `perspective(1000px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateY(-6px)`
          card.style.boxShadow = `0 20px 40px rgba(59,130,246,0.15)`
        })
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
          card.style.boxShadow = 'none'
        })
      }
      card.addEventListener('click', e => {
        if (!e.target.closest('.project-links a')) {
          window.open('https://github.com/AliAhmad0a', '_blank')
        }
      })
      projectGrid.appendChild(card)
      card.querySelectorAll('a[data-placeholder="true"]').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault()
          e.stopPropagation()
          const toast = document.createElement('div')
          toast.textContent = 'Link coming soon!'
          toast.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#3B82F6,#60A5FA);color:#fff;padding:0.75rem 1.5rem;border-radius:0.75rem;font-size:0.875rem;z-index:9999;animation:fadeInUp 0.3s ease'
          document.body.appendChild(toast)
          setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300) }, 2000)
        })
      })
    })
  }

  function renderFilters() {
    const cats = [
      { id: 'all', label: 'All Projects' },
      { id: 'web', label: 'Web' },
      { id: 'mobile', label: 'Mobile' },
    ]
    projectFilters.innerHTML = ''
    cats.forEach(c => {
      const btn = document.createElement('button'); btn.className = 'filter-btn' + (c.id === activeFilter ? ' active' : '')
      btn.textContent = c.label
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
        btn.classList.add('active'); activeFilter = c.id; renderProjects(activeFilter)
      })
      projectFilters.appendChild(btn)
    })
  }

  renderFilters(); renderProjects('all')

  // ===== BACK TO TOP =====
  const backToTop = document.getElementById('backToTop')
  window.addEventListener('scroll', () => backToTop.classList.toggle('visible', window.scrollY > 500))
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

  // ===== SCROLL REVEAL =====
  function initReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .timeline-item')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          // Animate circular progress when visible
          if (entry.target.closest('.circular-skills')) {
            document.querySelectorAll('.circular-fill').forEach(el => {
              const parent = el.closest('.circular-progress')
              if (parent) {
                const percent = parseInt(parent.dataset.percent)
                const radius = 50, circ = 2 * Math.PI * radius
                el.style.setProperty('--offset', circ - (percent / 100) * circ + 'px')
                el.classList.add('animated')
              }
            })
          }
          // Animate skill bars when visible
          if (entry.target.closest('#skillBars') || entry.target === document.getElementById('skillBars')) {
            document.querySelectorAll('.skill-fill').forEach(el => {
              el.style.width = el.dataset.width + '%'
            })
          }
        }
      })
    }, { threshold: 0.15 })

    reveals.forEach(el => observer.observe(el))
  }

   // ===== EMAILJS FORM =====
   emailjs.init('zksaSyJ7NFuO7MZPR')

   document.getElementById('contactForm').addEventListener('submit', e => {
     e.preventDefault()
     const btn = e.target.querySelector('button[type="submit"]')
     const statusEl = document.getElementById('formStatus')
     btn.disabled = true
     btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
     statusEl.textContent = ''

     emailjs.sendForm('service_portfolio', 'template_cxx5p9l', e.target) // TODO: Replace 'service_portfolio' with your actual EmailJS service ID from https://dashboard.emailjs.com
       .then(() => {
         statusEl.textContent = 'Message sent successfully! I will get back to you soon.'
         statusEl.className = 'form-status success'
         e.target.reset()
         btn.disabled = false
         btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message'
       })
       .catch(err => {
         statusEl.textContent = 'Failed to send message. Please try again later.'
         statusEl.className = 'form-status error'
         btn.disabled = false
         btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message'
       })
   })

  // ===== SMOOTH SCROLL FOR INTERNAL LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })

  // ===== MAGNETIC BUTTONS =====
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.btn, .nav-logo, .back-to-top').forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) * 0.2
        const y = (e.clientY - rect.top - rect.height / 2) * 0.2
        el.style.transform = `translate(${x}px, ${y}px)`
      })
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)'
      })
    })
  }



  // ===== MOUSE PARALLAX ON HERO IMAGE =====
  const heroWrapper = document.querySelector('.hero-image-wrapper')
  if (heroWrapper && window.matchMedia('(pointer: fine)').matches) {
    const heroSection = document.getElementById('hero')
    heroSection.addEventListener('mousemove', e => {
      const rect = heroSection.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      heroWrapper.querySelector('.hero-image-border').style.transform = `translate(${x * 20}px, ${y * 20}px)`
      const floatCard = heroWrapper.querySelector('.hero-float-card')
      if (floatCard) floatCard.style.transform = `translate(${-x * 25}px, ${-y * 25}px)`
    })
    heroSection.addEventListener('mouseleave', () => {
      heroWrapper.querySelector('.hero-image-border').style.transform = 'translate(0,0)'
      const floatCard = heroWrapper.querySelector('.hero-float-card')
      if (floatCard) floatCard.style.transform = 'translate(0,0)'
    })
  }

  // ===== ANIMATED COUNTERS =====
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const target = parseInt(el.dataset.count)
        const suffix = el.dataset.suffix || ''
        let current = 0
        const step = Math.max(Math.ceil(target / 40), 1)
        const timer = setInterval(() => {
          current += step
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          el.textContent = current + suffix
        }, 40)
        counterObserver.unobserve(el)
      }
    })
  }, { threshold: 0.5 })

  document.querySelectorAll('.stat-value[data-count]').forEach(el => counterObserver.observe(el))

  // ===== SPLIT-TEXT HEADING REVEAL =====
  const splitObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const letters = entry.target.querySelectorAll('.letter')
        letters.forEach((l, i) => {
          l.style.transition = `opacity 0.5s ease ${i * 0.03}s, transform 0.5s ease ${i * 0.03}s`
          l.style.opacity = '1'
          l.style.transform = 'translateY(0)'
        })
        splitObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })

  document.querySelectorAll('.section-title').forEach(title => {
    // Collect child nodes (text nodes + elements like gradient-text spans)
    const childNodes = Array.from(title.childNodes)
    title.innerHTML = ''
    childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        // Split plain text into words and letters
        const words = node.textContent.split(/( )/)
        words.forEach(segment => {
          if (segment === ' ') {
            title.appendChild(document.createTextNode(' '))
            return
          }
          if (!segment) return
          const w = document.createElement('span')
          w.style.display = 'inline-block'
          w.style.whiteSpace = 'nowrap'
          segment.split('').forEach(char => {
            const s = document.createElement('span')
            s.className = 'letter'
            s.textContent = char
            s.style.display = 'inline-block'
            s.style.opacity = '0'
            s.style.transform = 'translateY(20px)'
            w.appendChild(s)
          })
          title.appendChild(w)
        })
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Preserve elements (like gradient-text spans) and split their text into letters
        const clone = node.cloneNode(false)
        clone.style.display = 'inline-block'
        clone.style.whiteSpace = 'nowrap'
        const text = node.textContent
        text.split('').forEach(char => {
          const s = document.createElement('span')
          s.className = 'letter'
          s.textContent = char
          s.style.display = 'inline-block'
          s.style.opacity = '0'
          s.style.transform = 'translateY(20px)'
          clone.appendChild(s)
        })
        title.appendChild(clone)
      }
    })
    splitObserver.observe(title)
  })

  // ===== SKILL ICON FLOATING =====
  const iconContainer = document.querySelector('.skill-bars')
  if (iconContainer) {
    const icons = ['📱', '🎯', '🔥', '💚', '🍃', '⚛️', '🌐', '🎨', '⚡', '🔀']
    icons.forEach((icon, i) => {
      const span = document.createElement('span')
      span.className = 'floating-skill-icon'
      span.textContent = icon
      span.style.left = `${3 + i * 9}%`
      span.style.top = `${15 + (i % 3) * 30}%`
      span.style.animationDelay = `${i * 0.7}s`
      document.getElementById('skills').appendChild(span)
    })
  }
})
