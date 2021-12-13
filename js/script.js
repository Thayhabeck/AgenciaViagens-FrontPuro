function exibirCateg(categoria){
    let elementos = document.getElementsByClassName('box_destino');
    console.log(elementos);
    for(let i = 0; i<elementos.length; i++){
        console.log(elementos[i].id);
        if (categoria == elementos[i].id){
            elementos[i].style = "display:inline-block";
        } else {
            elementos[i].style = "display:none";
        }
    }
}

let exibirTodos = () => {
    let elementos = document.getElementsByClassName('box_destino');
    for(let i = 0; i<elementos.length; i++){
        elementos[i].style = "display:inline-block";
    }
}

let carrinho = () => {
    alert("O destino foi adicionado ao carrinho!\nObrigado!")
}

let enviar = document.querySelector('#btn-enviar');
console.log(enviar.textContent);

enviar.addEventListener("click",function(event){
    event.preventDefault();
    console.log("Clicou no botão");
    let Form = document.querySelector("#contForm");
    alert("Recebemos sua mensagem, e entraremos em contato!\nObrigado!");
    Form.reset();
})