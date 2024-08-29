import React, { useState } from "react";

export default function Posts(){

    let posts = [
        {
            user : "assets/meowed.svg",
            srcPost: "assets/gato-telefone.svg",
            alt : "meowed",
            autor: "meowed",
            likes : 10
        },
        {
            user : "assets/barked.svg",
            srcPost: "assets/dog.svg",
            alt : "barked",
            autor: "barked",
            likes : 11
        },
        {
            user : "assets/meowed.svg",
            srcPost: "assets/gato-telefone.svg",
            alt : "meowed",
            autor: "meowed",
            likes : 12
        },
        {
            user : "assets/barked.svg",
            srcPost: "assets/dog.svg",
            alt : "barked",
            autor: "barked",
            likes : 13
        }
    ]

  return (
      <div className="posts">
      {posts.map((post, i ) => (
             <Post 
            srcUser={post.user} 
            srcPost={post.srcPost}  
            alt={post.alt} 
            autor={post.autor} 
            key={i} 
            primeirosLikes={post.likes} />
      ))} 
    </div>
    )
}

function Post(props){

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(props.primeirosLikes);

  let { srcUser, srcPost, alt, autor } = props;

  function likeFoto() {
    if (!liked) {
      setLiked(true);
      setLikes(likes + 1)
    }
  }

  function mudaIcone() {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1); 
    } else {
      setLiked(true);
      setLikes(likes + 1); 
    }
  }

  
  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={srcUser} alt={alt} />
          {autor}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img
          onClick={likeFoto}
          src={srcPost}
          alt="gato-telefone"
        />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              onClick={mudaIcone}
              class={`coracao ${liked ? 'liked' : ''}`}
              
              name={liked ? "heart" : "heart-outline"}
             
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src="assets/respondeai.svg" alt="respondeai" />
          <div className="texto">
            Curtido por <strong>respondeai</strong> e <strong>outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );


  }
 