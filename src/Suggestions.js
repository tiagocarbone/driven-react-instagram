export default function Suggestions(){


    let sugestoes = [
        {
            src: "assets/bad.vibes.memes.svg",
            alt: "bad.vibes.memes.svg",
            nome: "bad.vibes.memes",
            razao: "Segue você"
        },
        {
            src: "assets/chibirdart.svg",
            alt: "chibirdart",
            nome: "chibirdart",
            razao: "Segue você"
        },
        {
            src: "assets/razoesparaacreditar.svg",
            alt: "razoesparaacreditar",
            nome: "razoesparaacreditar",
            razao: "Novo no Instagram"
        },
        {
            src: "assets/adorable_animals.svg",
            alt: "adorable_animals",
            nome: "adorable_animals",
            razao: "Segue você"
        },
        {
            src: "assets/smallcutecats.svg",
            alt: "smallcutecats",
            nome: "smallcutecats",
            razao: "Segue você"
        }

    ]


    return (

        <div className="sugestoes">
        <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
        { /* <Sugestao  src={sugestoes[0].src}  alt={sugestoes[0].alt} nome={sugestoes[0].nome} razao={sugestoes[0].razao} /> */}
        {sugestoes.map((sugestao, i) => (
            <Sugestao src={sugestao.src} alt={sugestao.alt} nome={sugestao.nome} razao={sugestao.razao} key={i} />
        ))}
        </div>
    )
    
}



function Sugestao(props) {

    let { src, alt, nome, razao } = props


    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={src} alt={alt} />
                <div className="texto">
                    <div className="nome">{nome}</div>
                    <div className="razao">{razao}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}