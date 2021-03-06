import styled from "styled-components";

const Title = styled.h1`
    color: #CCC;
    background-color: rgba(0, 75, 0, 0.2);
    padding: 10px;
    text-align: center;
    justify-content: center;
    font-family: sans-serif;
    font-size: 40px;
    margin-bottom: 0px;
`

const Body = styled.div`
    background-color: rgba(0, 75, 0, 0.2);
    padding: 10px;
    margin: 0px;
    overflow-y: scroll;
    max-height: 550px;
`

const TextArea = styled.div`
    background-color: rgba(51,171,113,0.5);
    box-shadow: 0px 5px 5px 0px #000;
    padding: 5px;
    color: #DDD;
    text-indent: 2em;
    text-align: justify;
    font-family: sans-serif;
    .img{
        display: flex;
        p {
            margin-top: 5px;
        }

        span {
            margin-right: 10px;
            text-indent: 0;
            font-size: 10px;
        }

        .align {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            .max-wid {
                width: auto;
            }
        }

        img {
            height: 250px;
            width: 350px;
            margin-right: 10px;
            margin-top: 5px;
        }

        .colunas{
            flex-direction: column;
        }
    }

    a{
        color: #DDD;

        &:hover {
            color: #AAA;
        }
    }

    .img-list {

        .sets {

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .set {
                display: flex;
                flex-direction: column;
                padding: 10px;
                margin: 10px;
                align-items: center;
                align-content: center;
                justify-content: center;

                img {
                    margin-bottom: 10px;
                }

                ul {
                    list-style-position: inside;

                    li span {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`

export default function Intro(){
    return (
        <>
            <Title>NA'VI</Title>
            <Body>
                <TextArea>
                    <p>
                        Os Pseudo Homin??deos de Pandora s??o um caso ?? parte, suas caracter??sticas divergem muito das outras esp??cies de Pandora, mas ainda
                        podem ser tra??adas a uma ancestralidade comum. As esp??cies que se assemelham a n??s s??o os nativos Na???vi, que medem de 2.5 at?? 3 metros,
                        e as criaturas primatas Prolemuris, medindo em m??dia 1.5 metros.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img className="max-wid" src={process.env.PUBLIC_URL + "/homidatim.png"} alt="terra"/>
                            <img className="max-wid" src={process.env.PUBLIC_URL + "/mamaco.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Os nativos Na???vi s??o a ??nica esp??cie que possui apenas 4 membros, e juntamente com os Prolemuris, possuem narinas acima da boca,
                        al??m da aus??ncia das antenas, presentes em outras esp??cies. A principal resposta para isso pode-se ver nos pequenos primatas que habitam as ??rvores.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img src={process.env.PUBLIC_URL + "/circulos.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        ?? poss??vel ver que os Prolemuris possuem registros do que uma vez foram narinas acima dos ombros, mas agora n??o apenas pequenas imperfei????es
                        na pele, e seus bra??os s??o bifurcados, ao contr??rio das outras esp??cies, que os membros saem do tor??o, os do primata se separam pr??ximo ao cotovelo.
                        Com isso pode-se deduzir que o ancestral do Prolemuris e dos Na???vi sofreram as mesmas press??es evolutivas, gerando duas esp??cies, uma que continuou
                        o ???processo??? de unir os bra??os e migrar as narinas para acima do nariz, gerando os Na???vi, j?? a outra esp??cie n??o teve a necessidade de continuar, 
                        gerando o Prolemuris.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img className="max-wid" src={process.env.PUBLIC_URL + "/hippie.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Outra singularidade dos ???hominideos??? de Pandora, ?? a aus??ncia das antenas, e em seu lugar h?? apenas uma tran??a. por??m ao seu final, 
                        assim como no final das antenas, h?? pequenos tent??culos, que quando entram em contato com outras similares elas se ligam, trocando impulsos nervosos,
                        permitindo compartilhar pensamentos e sentimentos. Durante o filme apenas os Na???vi utilizam dessa caracter??stica com outras esp??cies.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img className="max-wid" src={process.env.PUBLIC_URL + "/trancas.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Os Na???vi chamam essa conex??o de ???Tsaheylu???, que significa ???v??nculo???, o filme n??o d?? uma explica????o o de como funciona, mas imaginamos que
                        isso seja uma vantagem evolutiva, j?? que os Na???vi n??o s??o fisicamente muito fortes em compara????o com as outras esp??cies, eles aprenderam a se
                        conectar com elas, utilizando da criatura para o auxiliar em suas tarefas, ela tamb??m se beneficia com o contato, se aproveitando do nativo para prote????o e cuidado.
                    </p>
                    <p>
                        Como fizemos para as outras esp??cies de Pandora, criamos Ordem, G??nero e Esp??cie para os pseudo primatas. A ordem seria ???Alienosimius??? (Primata alienigena),
                        o G??nero dos Na???vi ???Gracilisimia??? (Macaco gracioso), e dos Prolemuris ???Allosimia??? (Macaco estranho).
                    </p>
                    <div className="img-list">
                        <div className="sets">
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/pessoa.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Alienosimius
                                    </li>
                                    <li>
                                        <span>G??nero:</span> Gracilisimia
                                    </li>
                                    <li>
                                        <span>Esp??cie:</span> <i>G. pseudomo</i>
                                    </li>
                                </ul>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/pedro.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Alienosimius
                                    </li>
                                    <li>
                                        <span>G??nero:</span> Allosimia
                                    </li>
                                    <li>
                                        <span>Esp??cie:</span> <i>A. caureulosimia</i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </TextArea>
            </Body>
        </>
    )
}