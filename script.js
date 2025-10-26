// Advanced Theme Toggle with Persistence
(function() {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  
  // Apply saved theme
  if (stored === 'light') {
    root.setAttribute('data-theme', 'light');
    if (toggle) {
      toggle.setAttribute('aria-pressed', 'true');
      toggle.textContent = '🌞';
    }
  }
  
  // Theme toggle functionality
  if (toggle) {
    toggle.addEventListener('click', function() {
      const isLight = root.getAttribute('data-theme') === 'light';
      
      if (isLight) {
        root.removeAttribute('data-theme');
        localStorage.removeItem('theme');
        toggle.setAttribute('aria-pressed', 'false');
        toggle.textContent = '🌙';
      } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggle.setAttribute('aria-pressed', 'true');
        toggle.textContent = '🌞';
      }
      
      // Add animation to toggle button
      toggle.style.transform = 'scale(1.2) rotate(180deg)';
      setTimeout(() => {
        toggle.style.transform = 'scale(1) rotate(0deg)';
      }, 200);
    });
  }
})();

// Advanced Particle System
(function() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;
  
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 3 + 1;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = startX + 'px';
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = delay + 's';
    
    // Random color from theme
    const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#f59e0b', '#ef4444'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = color;
    
    particlesContainer.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, (duration + delay) * 1000);
  }
  
  // Create initial particles
  for (let i = 0; i < particleCount; i++) {
    setTimeout(createParticle, i * 200);
  }
  
  // Continuously create new particles
  setInterval(createParticle, 1000);
})();

// Advanced Scroll Effects
(function() {
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;
  
  function updateHeader() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
  }
  
  // Throttled scroll handler
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', () => {
    ticking = false;
    onScroll();
  });
})();

// Advanced Micro-interactions and Animations
(function() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe all sections for scroll animations
  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });
  });
  
  // Advanced hover effects for cards
  const cards = document.querySelectorAll('.project-card, .certificate-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15), 0 0 30px rgba(99, 102, 241, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    });
  });
  
  // Advanced button interactions
  const buttons = document.querySelectorAll('button, .btn');
  buttons.forEach(button => {
    button.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', function() {
      this.style.transform = 'scale(1)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Advanced navigation link interactions
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.color = 'var(--accent-primary)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.color = 'var(--text-secondary)';
    });
  });
  
  // Advanced image hover effects
  const images = document.querySelectorAll('#profile-photo, .certificate-image');
  images.forEach(img => {
    img.addEventListener('mouseenter', function() {
      this.style.filter = 'brightness(1.1) contrast(1.1)';
    });
    
    img.addEventListener('mouseleave', function() {
      this.style.filter = 'brightness(1) contrast(1)';
    });
  });
})();

// Advanced Loading Animation
(function() {
  window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  });
})();

// Advanced Cursor Effects
(function() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: var(--gradient-primary);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    cursor.style.opacity = '1';
  });
  
  document.addEventListener('mouseleave', function() {
    cursor.style.opacity = '0';
  });
  
  // Hide cursor on interactive elements
  const interactiveElements = document.querySelectorAll('button, a, input, textarea, .certificate-card, .project-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
    });
  });
})();

// Advanced Smooth Scrolling with Offset
function scrollToSection(id) {
  const element = document.getElementById(id);
  const headerHeight = document.querySelector('header').offsetHeight;
  const elementPosition = element.offsetTop - headerHeight - 20;
  
  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth'
  });
}

// Image upload functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing image upload...');
  
  const photoUpload = document.getElementById('photo-upload');
  const profilePhoto = document.getElementById('profile-photo');
  
  console.log('Photo upload element:', photoUpload);
  console.log('Profile photo element:', profilePhoto);
  
  if (photoUpload && profilePhoto) {
    console.log('Both elements found, setting up event listener...');
    
    photoUpload.addEventListener('change', function(event) {
      console.log('File input changed');
      const file = event.target.files[0];
      
      if (file) {
        console.log('File selected:', file.name, file.type, file.size);
        
        // Validate file type
        if (!file.type.startsWith('image/')) {
          alert('Please select a valid image file.');
          return;
        }
        
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          alert('Image size should be less than 5MB.');
          return;
        }
        
        // Create a FileReader to read the file
        const reader = new FileReader();
        
        reader.onload = function(e) {
          console.log('File read successfully');
          // Update the profile photo source
          profilePhoto.src = e.target.result;
          
          // Store the image in localStorage for persistence
          localStorage.setItem('profilePhoto', e.target.result);
          
          // Show success message
          alert('Photo uploaded successfully!');
        };
        
        reader.onerror = function() {
          console.error('Error reading file');
          alert('Error reading the file. Please try again.');
        };
        
        // Read the file as data URL
        reader.readAsDataURL(file);
      } else {
        console.log('No file selected');
      }
    });
    
    // Load saved photo on page load
    const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto) {
      console.log('Loading saved photo from localStorage');
      profilePhoto.src = savedPhoto;
    } else {
      console.log('No saved photo found');
    }
  } else {
    console.error('Required elements not found!');
    console.log('photoUpload:', photoUpload);
    console.log('profilePhoto:', profilePhoto);
  }
});

// Certificates functionality
document.addEventListener('DOMContentLoaded', function() {
  const certificateUpload = document.getElementById('certificate-upload');
  const uploadArea = document.getElementById('upload-area');
  const certificatesGallery = document.getElementById('certificates-gallery');
  const modal = document.getElementById('certificate-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const closeModal = document.querySelector('.close');
  const downloadBtn = document.getElementById('download-btn');
  const deleteBtn = document.getElementById('delete-btn');

  let certificates = JSON.parse(localStorage.getItem('certificates')) || [];
  let currentCertificateId = null;

  // Load saved certificates
  loadCertificates();

  // File upload functionality
  if (certificateUpload) {
    certificateUpload.addEventListener('change', handleFileUpload);
  }

  // Drag and drop functionality
  if (uploadArea) {
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);
  }

  // Modal functionality
  if (closeModal) {
    closeModal.addEventListener('click', closeModalFunction);
  }

  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModalFunction();
      }
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadCertificate);
  }

  if (deleteBtn) {
    deleteBtn.addEventListener('click', deleteCertificate);
  }

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModalFunction();
    }
  });

  function handleFileUpload(event) {
    const files = Array.from(event.target.files);
    processFiles(files);
  }

  function handleDragOver(e) {
    e.preventDefault();
    uploadArea.classList.add('dragover');
  }

  function handleDragLeave(e) {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
  }

  function handleDrop(e) {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  }

  function processFiles(files) {
    files.forEach(file => {
      if (!file.type.startsWith('image/')) {
        alert(`File ${file.name} is not a valid image.`);
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is 10MB.`);
        return;
      }

      const reader = new FileReader();
      reader.onload = function(e) {
        const certificate = {
          id: Date.now() + Math.random(),
          name: file.name.replace(/\.[^/.]+$/, ""),
          description: `Certificate uploaded on ${new Date().toLocaleDateString()}`,
          image: e.target.result,
          uploadDate: new Date().toISOString()
        };

        certificates.push(certificate);
        saveCertificates();
        renderCertificates();
        showSuccessMessage(`Certificate "${certificate.name}" uploaded successfully!`);
      };

      reader.readAsDataURL(file);
    });
  }

  function loadCertificates() {
    renderCertificates();
  }

  function renderCertificates() {
    if (!certificatesGallery) return;

    if (certificates.length === 0) {
      certificatesGallery.innerHTML = `
        <div class="no-certificates">
          <div class="no-certificates-icon">📜</div>
          <h3>No certificates uploaded yet</h3>
          <p>Upload your first certificate to get started!</p>
        </div>
      `;
      return;
    }

    certificatesGallery.innerHTML = certificates.map(cert => `
      <div class="certificate-card" data-id="${cert.id}">
        <img src="${cert.image}" alt="${cert.name}" class="certificate-image">
        <div class="certificate-info">
          <h3 class="certificate-title">${cert.name}</h3>
          <p class="certificate-description">${cert.description}</p>
          <div class="certificate-actions">
            <button class="certificate-btn view" onclick="viewCertificate('${cert.id}')">View</button>
            <button class="certificate-btn download" onclick="downloadCertificateById('${cert.id}')">Download</button>
            <button class="certificate-btn delete" onclick="deleteCertificateById('${cert.id}')">Delete</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function viewCertificate(id) {
    const certificate = certificates.find(cert => cert.id == id);
    if (!certificate) return;

    currentCertificateId = id;
    modalImage.src = certificate.image;
    modalTitle.textContent = certificate.name;
    modalDescription.textContent = certificate.description;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function downloadCertificate() {
    if (!currentCertificateId) return;
    downloadCertificateById(currentCertificateId);
  }

  function downloadCertificateById(id) {
    const certificate = certificates.find(cert => cert.id == id);
    if (!certificate) return;

    const link = document.createElement('a');
    link.href = certificate.image;
    link.download = `${certificate.name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function deleteCertificate() {
    if (!currentCertificateId) return;
    deleteCertificateById(currentCertificateId);
    closeModalFunction();
  }

  function deleteCertificateById(id) {
    if (confirm('Are you sure you want to delete this certificate?')) {
      certificates = certificates.filter(cert => cert.id != id);
      saveCertificates();
      renderCertificates();
      showSuccessMessage('Certificate deleted successfully!');
    }
  }

  function closeModalFunction() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentCertificateId = null;
  }

  function saveCertificates() {
    localStorage.setItem('certificates', JSON.stringify(certificates));
  }

  function showSuccessMessage(message) {
    // Create a temporary success message
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(45deg, #4CAF50, #45a049);
      color: white;
      padding: 15px 25px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      z-index: 10000;
      animation: slideInRight 0.3s ease;
    `;
    successDiv.textContent = message;
    document.body.appendChild(successDiv);

    setTimeout(() => {
      successDiv.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => {
        document.body.removeChild(successDiv);
      }, 300);
    }, 3000);
  }

  // Make functions globally available
  window.viewCertificate = viewCertificate;
  window.downloadCertificateById = downloadCertificateById;
  window.deleteCertificateById = deleteCertificateById;
});

// GitHub functionality
document.addEventListener('DOMContentLoaded', function() {
  const avatarUpload = document.getElementById('avatar-upload');
  const githubAvatar = document.getElementById('github-avatar');
  const editModal = document.getElementById('github-edit-modal');
  const addRepoModal = document.getElementById('add-repo-modal');
  const reposGrid = document.getElementById('repos-grid');

  let githubProfile = JSON.parse(localStorage.getItem('githubProfile')) || {
    username: 'Your GitHub Username',
    bio: 'Add your GitHub bio here',
    reposCount: 0,
    followersCount: 0,
    followingCount: 0,
    profileUrl: '#'
  };

  let repositories = JSON.parse(localStorage.getItem('repositories')) || [];

  // Load saved data
  loadGitHubProfile();
  loadRepositories();

  // Avatar upload functionality
  if (avatarUpload && githubAvatar) {
    avatarUpload.addEventListener('change', function(event) {
      const file = event.target.files[0];
      
      if (file) {
        if (!file.type.startsWith('image/')) {
          alert('Please select a valid image file.');
          return;
        }
        
        if (file.size > 5 * 1024 * 1024) {
          alert('Image size should be less than 5MB.');
          return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
          githubAvatar.src = e.target.result;
          githubProfile.avatar = e.target.result;
          saveGitHubProfile();
          showSuccessMessage('Avatar updated successfully!');
        };
        
        reader.readAsDataURL(file);
      }
    });
  }

  // Load saved avatar
  if (githubProfile.avatar) {
    githubAvatar.src = githubProfile.avatar;
  }

  function loadGitHubProfile() {
    document.getElementById('github-username').textContent = githubProfile.username;
    document.getElementById('github-bio').textContent = githubProfile.bio;
    document.getElementById('repos-count').textContent = githubProfile.reposCount;
    document.getElementById('followers-count').textContent = githubProfile.followersCount;
    document.getElementById('following-count').textContent = githubProfile.followingCount;
    document.getElementById('github-profile-link').href = githubProfile.profileUrl;
  }

  function loadRepositories() {
    if (repositories.length === 0) {
      reposGrid.innerHTML = `
        <div class="no-repos">
          <div class="no-repos-icon">📁</div>
          <h3>No repositories added yet</h3>
          <p>Add your first repository to showcase your work!</p>
        </div>
      `;
      return;
    }

    reposGrid.innerHTML = repositories.map(repo => `
      <div class="repo-card" data-id="${repo.id}">
        <div class="repo-header">
          <h4 class="repo-name">${repo.name}</h4>
          <span class="repo-language">${repo.language}</span>
        </div>
        <p class="repo-description">${repo.description}</p>
        <div class="repo-stats">
          <div class="repo-stars">
            <span>⭐</span> ${repo.stars} stars
          </div>
        </div>
        <div class="repo-actions">
          <a href="${repo.url}" target="_blank" class="repo-btn">
            <span>🔗</span> View
          </a>
          <button class="repo-btn delete" onclick="deleteRepository('${repo.id}')">
            <span>🗑️</span> Delete
          </button>
        </div>
      </div>
    `).join('');
  }

  function saveGitHubProfile() {
    localStorage.setItem('githubProfile', JSON.stringify(githubProfile));
  }

  function saveRepositories() {
    localStorage.setItem('repositories', JSON.stringify(repositories));
  }

  function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(45deg, #4CAF50, #45a049);
      color: white;
      padding: 15px 25px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      z-index: 10000;
      animation: slideInRight 0.3s ease;
    `;
    successDiv.textContent = message;
    document.body.appendChild(successDiv);

    setTimeout(() => {
      successDiv.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => {
        document.body.removeChild(successDiv);
      }, 300);
    }, 3000);
  }

  // Make functions globally available
  window.openEditModal = function() {
    document.getElementById('github-username-input').value = githubProfile.username;
    document.getElementById('github-bio-input').value = githubProfile.bio;
    document.getElementById('repos-count-input').value = githubProfile.reposCount;
    document.getElementById('followers-count-input').value = githubProfile.followersCount;
    document.getElementById('following-count-input').value = githubProfile.followingCount;
    editModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };

  window.closeEditModal = function() {
    editModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  window.saveGitHubProfile = function() {
    const username = document.getElementById('github-username-input').value;
    const bio = document.getElementById('github-bio-input').value;
    const reposCount = parseInt(document.getElementById('repos-count-input').value) || 0;
    const followersCount = parseInt(document.getElementById('followers-count-input').value) || 0;
    const followingCount = parseInt(document.getElementById('following-count-input').value) || 0;

    githubProfile.username = username;
    githubProfile.bio = bio;
    githubProfile.reposCount = reposCount;
    githubProfile.followersCount = followersCount;
    githubProfile.followingCount = followingCount;
    githubProfile.profileUrl = `https://github.com/${username}`;

    saveGitHubProfile();
    loadGitHubProfile();
    closeEditModal();
    showSuccessMessage('GitHub profile updated successfully!');
  };

  window.openAddRepoModal = function() {
    // Clear form
    document.getElementById('repo-name-input').value = '';
    document.getElementById('repo-description-input').value = '';
    document.getElementById('repo-url-input').value = '';
    document.getElementById('repo-language-input').value = '';
    document.getElementById('repo-stars-input').value = '';
    addRepoModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };

  window.closeAddRepoModal = function() {
    addRepoModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  window.addRepository = function() {
    const name = document.getElementById('repo-name-input').value;
    const description = document.getElementById('repo-description-input').value;
    const url = document.getElementById('repo-url-input').value;
    const language = document.getElementById('repo-language-input').value;
    const stars = parseInt(document.getElementById('repo-stars-input').value) || 0;

    if (!name || !url) {
      alert('Please fill in at least the repository name and URL.');
      return;
    }

    const repository = {
      id: Date.now() + Math.random(),
      name: name,
      description: description,
      url: url,
      language: language,
      stars: stars,
      addedDate: new Date().toISOString()
    };

    repositories.push(repository);
    saveRepositories();
    loadRepositories();
    closeAddRepoModal();
    showSuccessMessage(`Repository "${name}" added successfully!`);
  };

  window.deleteRepository = function(id) {
    if (confirm('Are you sure you want to delete this repository?')) {
      repositories = repositories.filter(repo => repo.id != id);
      saveRepositories();
      loadRepositories();
      showSuccessMessage('Repository deleted successfully!');
    }
  };

  // Close modals when clicking outside
  editModal.addEventListener('click', function(e) {
    if (e.target === editModal) {
      closeEditModal();
    }
  });

  addRepoModal.addEventListener('click', function(e) {
    if (e.target === addRepoModal) {
      closeAddRepoModal();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (editModal.style.display === 'block') {
        closeEditModal();
      }
      if (addRepoModal.style.display === 'block') {
        closeAddRepoModal();
      }
    }
  });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  
  .no-certificates {
    grid-column: 1 / -1;
    text-align: center;
    padding: 60px 20px;
    color: rgba(255, 255, 255, 0.7);
  }
  
  .no-certificates-icon {
    font-size: 4rem;
    margin-bottom: 20px;
    opacity: 0.5;
  }
  
  .no-certificates h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .no-certificates p {
    font-size: 1rem;
    opacity: 0.8;
  }

  .no-repos {
    grid-column: 1 / -1;
    text-align: center;
    padding: 60px 20px;
    color: var(--text-secondary);
  }
  
  .no-repos-icon {
    font-size: 4rem;
    margin-bottom: 20px;
    opacity: 0.5;
  }
  
  .no-repos h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--text-primary);
  }
  
  .no-repos p {
    font-size: 1rem;
    opacity: 0.8;
  }
`;
document.head.appendChild(style);