const form = document.getElementById("form")
const formStatus = document.getElementById("formStatus")
const btnEnviar = document.getElementById("btnEnviar")

const btnCierre = document.getElementById("btn-cierre")
const toast = document.getElementById("toast-1")

// animaciones de estado del boton enviar del formulario.. ---
toast.addEventListener("animationend", (e) => {
    if (e.animationName === "auto-cierre") {
        toast.classList.remove("apertura")
        toast.classList.add("cierre-toast")
    }
})

//intercepción del formulario para llevar a cabo una acción

form.addEventListener("submit", async e => {
    e.preventDefault()
    
    btnEnviar.classList.add("loading")

    setTimeout(() => {
        btnEnviar.classList.remove("loading")
    }, 1000)

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {"Accept": "application/json"}
        })

        if (response.ok) {
            toast.classList.add("apertura")
            btnEnviar.classList.add("success");

            setTimeout(() => {
                btnEnviar.classList.remove("success");
            }, 2000);
            form.reset()
        }else {
            let textoBtn = btnEnviar.textContent 

            btnEnviar.textContent = "Error al enviar el mensaje."
            setTimeout(() => {
                btnEnviar.textContent = textoBtn;
            },2000)
        }
    } catch {
        btnEnviar.textContent = "Sin conexión. Intenta otra vez"
    }
})


// animaciones del toast por cierre.. ---
btnCierre.addEventListener("click", (e) => {
    e.preventDefault()
    toast.classList.remove("apertura")
    toast.classList.add('cierre-toast')
})

// btnEnviar.addEventListener("click", () => {
//     if (btnEnviar.classList.contains("loading")) return

//     btnEnviar.classList.add("loading")
// })
