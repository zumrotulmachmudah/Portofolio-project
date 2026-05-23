async function loadDashboard() {
    try {
        const response = await fetch('data/influencers.json');
        const influencers = await response.json();
        
        const avgEngagement = (influencers.reduce((sum, inf) => sum + inf.engagement_rate, 0) / influencers.length).toFixed(1);
        const totalReach = influencers.reduce((sum, inf) => sum + inf.reach_last_month, 0);
        const avgROI = (influencers.reduce((sum, inf) => sum + inf.roi, 0) / influencers.length).toFixed(1);
        
        document.getElementById('total-influencers').textContent = influencers.length;
        document.getElementById('avg-engagement').textContent = avgEngagement + '%';
        document.getElementById('total-reach').textContent = totalReach.toLocaleString();
        document.getElementById('avg-roi').textContent = avgROI + 'x';
        
        displayTable(influencers);
        setupFilter(influencers);
        
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

function displayTable(influencers) {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
    
    influencers.forEach(influencer => {
        const row = document.createElement('tr');
        const statusClass = `status-${influencer.status.toLowerCase()}`;
        
        row.innerHTML = `
            <td><strong>${influencer.name}</strong></td>
            <td>${influencer.handle}</td>
            <td>${influencer.niche}</td>
            <td>${influencer.followers.toLocaleString()}</td>
            <td>${influencer.engagement_rate}%</td>
            <td><span class="${statusClass}">${influencer.status}</span></td>
            <td>${influencer.reach_last_month.toLocaleString()}</td>
            <td><strong>${influencer.roi}x</strong></td>
        `;
        
        tbody.appendChild(row);
    });
}

function setupFilter(influencers) {
    const filterSelect = document.getElementById('status-filter');
    
    filterSelect.addEventListener('change', (e) => {
        const selectedStatus = e.target.value;
        
        if (selectedStatus === 'all') {
            displayTable(influencers);
        } else {
            const filtered = influencers.filter(inf => inf.status === selectedStatus);
            displayTable(filtered);
        }
    });
}

document.addEventListener('DOMContentLoaded', loadDashboard);