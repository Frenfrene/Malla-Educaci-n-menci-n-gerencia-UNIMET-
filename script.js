
document.addEventListener('DOMContentLoaded', () => {
    const materias = document.querySelectorAll('.materia');
    const resetButton = document.querySelector('.reset');

    const aprobar = (button) => {
        button.classList.add('aprobada');
        button.disabled = true;
        materias.forEach(m => {
            if (m.dataset.requires === button.dataset.id) {
                m.disabled = false;
                m.style.opacity = '1';
                m.style.boxShadow = '0 0 10px #d63384';
            }
        });
    };

    materias.forEach(materia => {
        const requires = materia.dataset.requires;
        if (requires) {
            materia.disabled = true;
            materia.style.opacity = '0.5';
        }

        materia.addEventListener('click', () => {
            aprobar(materia);
        });
    });

    resetButton.addEventListener('click', () => {
        materias.forEach(m => {
            m.classList.remove('aprobada');
            m.disabled = !!m.dataset.requires;
            m.style.opacity = m.disabled ? '0.5' : '1';
            m.style.boxShadow = '0 4px 8px rgba(214, 51, 132, 0.15)';
        });
    });
});
