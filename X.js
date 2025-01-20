document.addEventListener('DOMContentLoaded', () => {
    // Handle search form submission
    const searchForm = document.querySelector('#search-doctor form');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const location = document.querySelector('#location').value;
        const doctorName = document.querySelector('#doctor-name').value;
        alert(`Searching for doctors in ${location} with the name ${doctorName}`);
    });

    // Handle newsletter subscription form submission
    const newsletterForm = document.querySelector('#newsletter form');
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.querySelector('#newsletter input[type="email"]').value;
        alert(`Thank you for subscribing with the email: ${email}`);
    });

    // Example of adding dynamic content
    const specialistsSection = document.querySelector('#consulting-specialists');
    const newSpecialist = document.createElement('div');
    newSpecialist.className = 'specialist';
    newSpecialist.innerHTML = `
        <h3>New Specialist</h3>
        <p>We have added a new specialist to our team, providing excellent services.</p>
    `;
    specialistsSection.appendChild(newSpecialist);
});
