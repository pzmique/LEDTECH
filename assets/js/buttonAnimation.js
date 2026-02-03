const buttons = document.querySelectorAll('.pressEffect')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("hola pa")
        button.animate(
            [
                { transform: 'scale(1)'},
                { transform: 'scale(0.9)'},
                { transform: 'scale(1)'}
            ],
            {
                duration: 400,
                easing: 'ease-out'
            }
        )
    })
});