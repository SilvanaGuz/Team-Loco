    document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('check');
    const navList = document.querySelector('.nav_list');

    checkbox.addEventListener('change', function () {
        navList.classList.toggle('active', checkbox.checked);
    });

    // Agrega un evento de clic a cada elemento del menú para cerrar el menú
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', cerrarMenu);
    });

    function cerrarMenu() {
        // Obtén el checkbox por su ID
        const checkbox = document.getElementById('check');
    
        // Desmarca el checkbox para cerrar el menú
        checkbox.checked = false;

        // Cierra el menú quitando la clase 'active'
        navList.classList.remove('active');
    }
});