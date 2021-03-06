const selectAllElements = document.querySelectorAll('[data-select]');

selectAllElements.forEach(item => {
    item.addEventListener('click', function (event) {
        const realSelect = this.nextElementSibling;

        if (event.target.hasAttribute('data-select-item')) {
            let itemTitle = event.target.getAttribute('data-select-item');
            this.querySelector('[data-select-title]').textContent = itemTitle;
            this.querySelector('.header-select__dropdown').classList.toggle('hidden');
            if(realSelect) {
                realSelect.value = itemTitle
            }
            

        } else {
            this.querySelector('.header-select__dropdown').classList.toggle('hidden');
        }
    })
})
