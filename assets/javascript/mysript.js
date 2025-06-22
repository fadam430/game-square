const radios = document.querySelectorAll('input[name="action"]');
const formSections = document.querySelectorAll('.action-form');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedValue = radio.value;

    formSections.forEach(section => {
        section.style.display = section.id === `form-${selectedValue}` ? 'block' : 'none';
    });
    });
});