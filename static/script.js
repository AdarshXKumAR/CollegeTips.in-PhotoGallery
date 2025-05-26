    const galleryData = [
      {
        id: '1',
        url: 'https://collegetips.in/images/about-header-image2.jpg',
        title: 'Team Celebration',
        description: 'Our amazing team celebrating after the successful launch of the new platform.',
        category: 'team-vibes',
        categoryName: 'Team Vibes'
      },
      {
        id: '2',
        url: 'https://collegetips.in/images/bs2424.jpeg',
        title: 'Creative Freedom',
        description: 'We are a content creation company, with No Limits! and We are Perfect at it! You can do anything you want! because we think, everyone is creative in their own way.',
        category: 'creative-campaigns',
        categoryName: 'Creative Events'
      },
      {
        id: '3',
        url: 'https://collegetips.in/images/chooseus-image-2.jpg',
        title: 'We Love Parties.',
        description: 'CollegeTips.in is a place where we not just work, but create beautiful memories with a splash of fun. Celebrations are a usual part of our life at CollegeTips.in. Every celebration brings an opportunity to create indelible memories and a beautiful album.',
        category: 'creative-campaigns',
        categoryName: 'Creative Events'
      },
      {
        id: '4',
        url: 'https://collegetips.in/images/chooseus-image-4.jpg',
        title: 'Super Cool Workplace',
        description: "Our offices are designed for increasing productivity and a fun vibe to go along. An elegant yet bubbling environment is enough to keep you working joyfully. Our team consists of young, energetic people who aim to deliver the best. We strive to have fun in everything we do with a flexible work culture - which makes us India's Coolest Startup.",
        category: 'behind-the-scenes',
        categoryName: 'WorkPlace'
      },
      {
        id: '5',
        url: 'https://collegetips.in/images/chooseus-image-1.jpg',
        title: 'Like Minded People',
        description: "Our community comprises members from a wide talent pool from all across the country. We have work for everyone here, and we respect everyone's passion. We believe that choosing your passion as profession is the best thing you could do!",
        category: 'team-vibes',
        categoryName: 'Team Vibes'
      },
      {
        id: '6',
        url: 'https://collegetips.in/images/birthday.jpg',
        title: 'CT Career',
        description: 'We help students find their career interests, the right college, abilities to survive the college life and get their dream job through life hack, video content based on survey.',
        category: 'work-hard-play-hard',
        categoryName: 'How We Do it?'
      },
      {
        id: '7',
        url: 'https://collegetips.in/images/wedding.jpg',
        title: 'CT Care',
        description: "CollegeTips has decided to upgrade every city into safest place for 'your constant fellow amigo'. In this campaign we are creating awareness among people to make their city a Pet friendly one.",
        category: 'work-hard-play-hard',
        categoryName: 'How We Do it?'
      },
      {
        id: '8',
        url: 'https://collegetips.in/images/office-party.jpg',
        title: 'CT Classes',
        description: "An Innovation Center for students to enhance their Creative and Tech skills, where they will learn intensively and implement their knowledge independently, in a productive way.",
        category: 'work-hard-play-hard',
        categoryName: 'How We Do it?'
      },
      {
        id: '9',
        url: 'https://collegetips.in/images/night-party.jpg',
        title: 'CT Connect',
        description: "The program offers people to connect, share their experiences, create contacts and get exposure which eventually helps them build their careers.",
        category: 'work-hard-play-hard',
        categoryName: 'How We Do it?'
      }
    ];

    // Theme Switcher
    const themeSwitch = document.getElementById('theme-switch');
    const themeIcon = document.getElementById('theme-icon');

    function toggleTheme() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      
      // Update icon
      if (newTheme === 'dark') {
        themeIcon.innerHTML = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>';
      } else {
        themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
      }
      
      localStorage.setItem('theme', newTheme);
    }

    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'light') {
      themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    }

    themeSwitch.addEventListener('click', toggleTheme);

    function renderGallery(category = 'all') {
      const gallery = document.getElementById('gallery');
      const filteredImages = category === 'all' 
        ? galleryData 
        : galleryData.filter(img => img.category === category);
      
      gallery.innerHTML = filteredImages.map(image => `
        <div class="gallery-item" onclick="openModal('${image.url}')">
          <img src="${image.url}" alt="${image.title}">
          <div class="item-category">${image.categoryName}</div>
          <div class="item-info">
            <h3>${image.title}</h3>
            <p>${image.description}</p>
          </div>
        </div>
      `).join('');
    }

    function openModal(imageUrl) {
      const modal = document.getElementById('modal');
      const modalImg = document.getElementById('modal-img');
      modal.classList.add('active');
      modalImg.src = imageUrl;
    }

    function closeModal() {
      const modal = document.getElementById('modal');
      modal.classList.remove('active');
    }

    // Event Listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        renderGallery(btn.dataset.category);
      });
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Initial render
    renderGallery();