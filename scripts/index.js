const form = document.getElementById("form");
const enviar = document.getElementById("enviar");


enviar.addEventListener("submit",
async function enviarCorreo (e){
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(formData.action,{
        method: formData.method,
        body: formData,
        headers: {'accept': 'application/json'}
    })
    if(response){
        form.reset();
    }
    
})

