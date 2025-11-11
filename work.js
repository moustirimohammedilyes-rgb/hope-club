
const projects = [
    {
        title: "يوم تحسيسي لمرض السكري",
        date: "11 نوفمبر 2025",
        type: "بطاقات",
        image: "img/cart1.jpg",
        description: "بطاقة صممت بهدف المشاركة في يوم تحسيسي لمرض السكري"
    },
    {
        title: "التعريف بالنادي",
        date: "5 سبتمبر 2023",
        type: "تصميم",
        image: "img/Brochure 1 (1).jpg",
        description: "بطاقة صممت بهدف المشاركة في يوم تحسيسي لمرض السكري."
    },
   


  
 
];

const projectsGrid = document.getElementById('projectsGrid');
function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = ''; // تفريغ الشبكة
    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.type === filter);

    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        // إذا المشروع فيديو، عرض الفيديو فقط بدون وصف
        if (project.mediaType === "video") {
    card.classList.add('video-card'); // لإضافة تصميم أفقي للبطاقة
    card.innerHTML = `
        <div class="project-image">
            <video src="${project.media}" controls class="video-project"></video>
            <div class="project-type">${project.type}</div>
        </div>
    `;
}
 else {
            // مشاريع الصور / التصميمات
            card.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-type">${project.type}</div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-date">
                        <i class="material-icons">event</i>
                        ${project.date}
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="view-more-btn" onclick="openModal(${index})">
                        عرض التفاصيل
                        <i class="material-icons">arrow_back</i>
                    </div>
                </div>
            `;
        }

        projectsGrid.appendChild(card);
    });
}

// فتح النموذج المنبثق
function openModal(index) {
    const project = projects[index];
    const modal = document.getElementById('projectModal');
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDate').textContent = project.date;
    document.getElementById('modalType').textContent = project.type;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalDescription').textContent = project.description;
    modal.style.display = 'flex';
}

// غلق النموذج
function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// الفلترة
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// العرض الأولي لكل المشاريع
renderProjects();
   