// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const accordionTitles = document.querySelectorAll('.accordion-title');
    
    accordionTitles.forEach(title => {
        title.addEventListener('click', () => {
            // Get the content associated with this title
            const content = title.nextElementSibling;
            
            // Close all accordion contents
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle the clicked content
            content.classList.toggle('active');
            
            // Update all dropdown arrows
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.textContent = 'v';
            });
            
            // Update the clicked dropdown arrow
            const dropdown = title.querySelector('.dropdown');
            dropdown.textContent = content.classList.contains('active') ? '^' : 'v';
        });
    });
}); 