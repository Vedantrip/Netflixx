document.getElementById('manage-profiles-button').addEventListener('click', function() {
    alert('Manage Profiles button clicked!');
});

const profiles = document.querySelectorAll('.profile');
profiles.forEach(profile => {
    profile.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        window.location.href = url;
    });
});
