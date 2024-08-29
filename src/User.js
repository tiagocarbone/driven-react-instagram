import React from "react"

export default function User(){

  let [usuario, setUsuario] =    React.useState("catanacomics ")
  let [imgUrl, setImgUrl] = React.useState("assets/catanacomics.svg")

    function mudaNome(){
        let novoNome = prompt("Insira o novo nome")
        if(novoNome === ""){
            return
        }
        setUsuario(novoNome)
    }

    function mudaFoto(){
        let novaUrl = prompt("Insira o nova foto")
        if(novaUrl === ""){
            return
        }
        setImgUrl(novaUrl)
    }

    

    return (
        <div className="usuario">
        <img onClick={() => mudaFoto()}  src={imgUrl} alt="imagem de perfil"/>
        <div className="texto">
          <span >
            <strong >{usuario}</strong>
            <ion-icon onClick={() => mudaNome()}  name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    )
}