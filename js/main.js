document.addEventListener('DOMContentLoaded', () => {
    const platformGrid = document.getElementById('platform-grid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');

    const categoryMap = {
        'all': 'All',
        'freelance': '프리랜스',
        'teaching': '강의/클래스',
        'service': '생활서비스',
        'dev': 'IT/개발',
        'selling': '판매',
        'affiliate': '제휴마케팅'
    };

    function displayPlatforms(platformsToDisplay) {
        platformGrid.innerHTML = '';
        if (platformsToDisplay.length === 0) {
            platformGrid.innerHTML = '<p class="no-results">검색 결과가 없습니다.</p>';
            return;
        }
        
        platformsToDisplay.forEach(platform => {
            const platformCardContainer = document.createElement('div');
            platformCardContainer.className = 'masonry-item';

            const platformNameForURL = encodeURIComponent(platform.name);

            platformCardContainer.innerHTML = `
                <a href="review.html?platform=${platformNameForURL}" class="tool-card-link">
                    <div class="tool-card">
                        <div class="card-header">
                            <h3 class="tool-name">${platform.name}</h3>
                            <span class="card-category">${categoryMap[platform.category]}</span>
                        </div>
                        <div class="card-content">
                            <p class="tool-description">${platform.description}</p>
                            <p class="platform-earning">💰 ${platform.earning}</p>
                            <p class="platform-difficulty">난이도: ${platform.difficulty}</p>
                            <span class="review-link">시작하기 &rarr;</span>
                        </div>
                    </div>
                </a>
            `;
            platformGrid.appendChild(platformCardContainer);
        });
    }

    function filterPlatforms() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;

        const filteredPlatforms = platforms.filter(platform => {
            const matchesCategory = activeCategory === 'all' || platform.category === activeCategory;
            const matchesSearch = platform.name.toLowerCase().includes(searchTerm) || platform.description.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        displayPlatforms(filteredPlatforms);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterPlatforms();
        });
    });

    searchInput.addEventListener('input', filterPlatforms);

    displayPlatforms(platforms);
});
