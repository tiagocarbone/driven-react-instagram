export default function Stories(){
    const stories = [{
        src : "assets/9gag.svg",
        alt: "9gag",
        usuario : "9gag"
    },
    {
        src : "assets/meowed.svg",
        alt: "meowed",
        usuario : "meowed"
    },
    {
        src : "assets/barked.svg",
        alt: "barked",
        usuario : "barked"
    },
    {
        src : "assets/nathanwpylestrangeplanet.svg",
        alt: "nathanwpylestrangeplanet",
        usuario : "nathanwpylestrangeplanet"
    },
    {
        src : "assets/wawawicomics.svg",
        alt: "wawawicomics",
        usuario : "wawawicomics"
    },
    {
        src : "assets/respondeai.svg",
        alt: "respondeai",
        usuario : "respondeai"
    },
    {
        src : "assets/filomoderna.svg",
        alt: "filomoderna",
        usuario : "filomoderna"
    },
    {
        src : "assets/memeriagourmet.svg",
        alt: "memeriagourmet",
        usuario : "memeriagourmet"
    }]
    return (

       <div className="stories">
       { /*<Storie src={stories[0].src} alt={stories[0].alt} usuario={stories[0].usuario} /> */}
            {stories.map((storie, i) => (
                <Storie src={storie.src} alt={storie.alt} usuario={storie.usuario} key={i} />
            ))}
        
        <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}
function Storie(props){
    let {src, alt, usuario} = props
    return (
        <div className="story">
        <div className="imagem">
          <img src={src} alt={alt}/>
        </div>
        <div className="usuario">
          {usuario }
        </div>
      </div>
    )
}