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
    
    .imgs {
        display: flex;

        .align {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            div {
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 5px 10px;

                span {
                    align-items: center;
                    align-content: center;
                    justify-content: center;
                    font-size: 10px;
                    margin-bottom: 5px;
                    text-indent: 0
                }
                img {
                    height: 100px;
                }
            }
        }
    }

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
            max-width: 500px;
            margin-right: 10px;
            margin-top: 5px;

            .align {
                max-width: 700px;
            }
        }

        .colunas{
            flex-direction: column;
        }
    }

  
    h5 {
        text-decoration: underline;
    }
    ul {
        list-style-position: inside;

        li span {
            text-decoration: underline;
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
            flex-wrap: wrap;
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
                    max-width: 150px;
                    max-height: 150px;
                }

                ul {
                    list-style-position: inside;

                    li span {
                        text-decoration: underline;
                    }

                    span {
                        align-items: center;
                        align-content: center;
                        justify-content: center;
                    }
                }
            }
        }
    }
`

export default function Intro(){
    return (
        <>
            <Title>CARACTER??STICAS</Title>
            <Body>
                <TextArea>
                    <p>
                        H?? muitas caracter??sticas compartilhadas entre as esp??cies, por??m, ao mesmo tempo elas conseguem ser muito distintas umas das outras,
                        ent??o iremos separar as esp??cies em grupos de dois, pegando as esp??cies com maior similaridade, e categorizamos esses grupos com o termo
                        ???pseudo??? (falso, n??o genu??no) antes deles. 
                    </p>
                    <p>
                        Criaremos tamb??m uma nomenclatura cient??fica para cada esp??cie e seus grupos, j?? que essas esp??cies possuem uma coluna vertebral, 
                        todos seriam do filo 'chordata', contudo, como n??o sabemos como funciona a reprodu????o de todas essas esp??cies, pularemos essa parte na
                        classifica????o.
                    </p>
                    <div className="imgs">
                        <div className="align">
                            <div>
                                <span>[P. Paquidermes] </span>
                                <img src={process.env.PUBLIC_URL + "/l1.png"} alt="terra"/>
                            </div>
                            <div>
                                <span>[P. Equ??deos] </span>
                                <img src={process.env.PUBLIC_URL + "/l2.png"} alt="terra"/>
                            </div>
                            <div>
                                <span> [P. Homin??deos] </span>
                                <img src={process.env.PUBLIC_URL + "/l3.png"} alt="terra"/>
                            </div>
                            <div>
                                <span> [P. Canifelineos]  </span>
                                <img src={process.env.PUBLIC_URL + "/l4.png"} alt="terra"/>
                            </div>
                            <div>
                                <span> [Pseudo Pterossauros] </span>
                                <img src={process.env.PUBLIC_URL + "/l5.png"} alt="terra"/>
                            </div>
                        </div>
                    </div>
                    <p>
                        Paquiderme ?? um adjetivo que significa ???que tem a pele grossa???, ent??o usaremos esses termos para os
                        Sturmbeests e Titanothere Cabe??a de Martelo. Eles s??o grandes herb??voros, que medem, respectivamente, 4.5 e 6.5 metros de altura.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img src={process.env.PUBLIC_URL + "/chifrudo.png"} alt="terra"/>
                            <img src={process.env.PUBLIC_URL + "/unicornio.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Ambos possuem 6 pernas, uma carapa??a dura, 4 d??gitos em suas patas e narinas acima dos ombros. Entretanto, diferente do Titanothere,
                        o Sturmbeest n??o possui as duas antenas. Ambos s??o animais sociais que vivem em rebanhos para prote????o. 
                    </p>
                    <p>
                        Sturmbeests ?? um animal grande, mas n??o possui muitas formas de defesa al??m de sua pele grossa e de contar com outros membros do seu rebanho,
                        a obra tamb??m mostra que a protuber??ncia em sua cabe??a ?? extremamente resistente, e pode ser utilizada para se defender de predadores maiores. 
                        Essa esp??cie tamb??m ?? ca??ada pelos nativos gra??as a sua quantidade de carne, por??m n??o ?? uma tarefa f??cil, j?? que seu ??nico local vulner??vel ?? a narina.
                    </p>
                    <p>
                        O Titanothere Cabe??a de Martelo recebe esse nome pelo formato da protuber??ncia em sua cabe??a, que se assemelha a cabe??a de um tubar??o cabe??a de martelo,
                        ele possui penas acima de sua cabe??a, que no filme s??o utilizados como forma de intimida????o, mas tamb??m poderiam ser utilizados para acasalamento, uma 
                        caracter??stica dessa criatura ?? seu n??mero de olhos, possuindo dois pares desse ??rg??o.
                    </p>
                    <p>
                        Equ??deos s??o os mam??feros da fam??lia dos cavalos, e como o nome do Cavalo Selvagem sugere, esse animal possui uma extrema semelhan??a com eles,
                        por??m sendo muito maior, chegando at?? 4 metros de altura. Outra criatura que ?? relativamente similar, mas ainda ?? um parente distante, ?? o Hexapede,
                        com apenas 2 metros de altura.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img src={process.env.PUBLIC_URL + "/bambi.png"} alt="terra"/>
                            <img src={process.env.PUBLIC_URL + "/bambi-bombado.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Assim como os pseudo paquidermes, essas criaturas s??o herb??voras, com 6 pernas e 4 d??gitos em cada pata, al??m das narinas acima dos ombros. 
                        No filme n??o mostra nenhum caso de Cavalo Selvagem n??o domesticado, por??m sabe-se que os Hexapede s??o solit??rios.
                    </p>
                    <p>
                        Os Cavalos Selvagens s??o de extrema import??ncia para o grupo nativo dos Na???Vi, sendo utilizados da mesma forma que os cavalos terrestres s??o:
                        para transporte, ca??a e at?? mesmo para batalha. Eles se alimentam de um l??quido produzido por flores, utilizando de sua comprida l??ngua para 
                        alcan??ar e trazer ?? boca o alimento.
                    </p>
                    <p>
                        Os Hexapede se alimentam de grama, tendo audi????o e vis??o agu??adas para evitar predadores, mas ainda assim, s??o a presa favor??vel dos carn??voros.
                        Eles possuem uma membrana retr??til, que pode se erguer quando eles se sentem amea??ados, essa membrana possui um padr??o que parecem ser olhos,
                        provavelmente isso serve para intimidar potenciais predadores.
                    </p>
                    <p>
                        Os pseudo canifel??neos foram apelidados assim pela sua semelhan??a com c??es (caninos) e felinos (felinos). As criaturas que apareceram no filme, os 
                        Lobos V??bora, s??o extremamente similares aos lobos da Terra, sendo levemente maiores, medindo de 70 cm at?? 1 metro. E o outro representante,
                        o Thanator, predador de 2.5 metros, lembra muito um grande felino como pantera ou on??a.
                    </p>
                    <div className="img">
                        <div className="align">
                            <img src={process.env.PUBLIC_URL + "/pintcher.png"} alt="terra"/>
                            <img src={process.env.PUBLIC_URL + "/gasosa.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Similarmente a todas as esp??cies anteriores, esses animais possuem o mesmo n??mero de patas e d??gitos, al??m da posi????o das narinas e das antenas. 
                        Essas esp??cies s??o predadores, vivendo no mesmo ambiente, e competindo por alimenta????o.
                    </p>
                    <p>
                        Os Lobos V??bora ca??am em grupo, e tendem a encurralar suas presas antes de atacar, possuindo um grau de intelig??ncia similar aos lobos terrestres. 
                        Uma caracter??stica marcante ?? um par extra de olhos, por??m muito pequeno, quase inexistente. Por conta disso, se pode especular que ou as esp??cies 
                        perderam esse par extra de olhos, por??m alguns mantiveram e os lobos v??bora est??o no processo de perd??-los, ou algumas esp??cies desenvolveram mais 
                        olhos, e o lobo v??bora est?? nesse caminho.
                    </p>
                    <p>
                        O Thanator lembra um le??o pelo tecido no lado de sua cabe??a, se assemelhando a juba do felino terr??queo. O tecido provavelmente deve possuir alguma 
                        fun????o reprodutiva, ou por competi????o contra outros da mesma esp??cie por territ??rio ou alimento.
                    </p>
                    <p>
                        Pterossauros foram r??pteis voadores pr??-hist??ricos, que desapareceram a mais de 65 milh??es de anos atr??s. Os predadores a??reos de Pandora se assemelham
                        a essas bestas extintas, tomando certa inspira????o, essas criaturas s??o os Banshees e o predador alfa, Grande Leonopteryx
                    </p>
                    <div className="img">
                        <div className="align">
                            <img src={process.env.PUBLIC_URL + "/papagaio.png"} alt="terra"/>
                            <img src={process.env.PUBLIC_URL + "/pomba.png"} alt="terra"/>
                        </div>
                    </div>
                    <p>
                        Essas criaturas tomaram caminhos evolutivos diferentes dos demais, decidindo habitar os c??us ao inv??s da terra. Mas eles acabam se diferenciando em
                        outros aspectos tamb??m. Mesmo ambos possuindo as narinas acima do ombro e possu??rem as antenas, os Banshees possuem 5 d??gitos no membro da frente, e 
                        o Leonopteryx possui 6, este membro foi adaptado para o voo se tornando uma asa.
                    </p>
                    <p>
                        Os Banshees s??o criaturas que vivem em ninhos, e assim como os Cavalos Selvagens, tamb??m s??o importantes para os nativos, sendo utilizados de forma
                        similar. E diferente das outras esp??cies, eles possuem apenas 4 membros, ambos sendo convertidos em asas.
                    </p>
                    <p>
                        O Grande Leonopteryx ?? o predador incontestado no filme, por conta de sua impon??ncia e amea??a, os nativos o chamam de ???Toruk??? ou ???A ??ltima sombra???, 
                        pois sua sombra ?? a ??ltima coisa que suas v??timas veem. Essa criatura tamb??m possui 2 pares de olhos, como os Titanothere Cabe??a de Martelo e os Lobos V??bora.
                    </p>
                        <h5>Nomenclatura Cient??fica</h5>
                    <p>
                        Como j?? foi mencionado, todos fazem parte do filo Chordata, por possu??rem uma coluna vertebral, e como n??o sabemos ao certo a reprodu????o colocaremos
                        N/A (not available), ent??o ficaria assim:
                    </p>
                    <ul>
                        <li>
                            <span>Filo:</span> Chordata
                        </li>
                        <li>
                            <span>Classe:</span> N/A
                        </li>
                    </ul>
                    <p>
                        A ordem agrupa esp??cies que possuem bastante semelhan??a entre si, ent??o colocaremos a ordem, ???Herb??vora???, para as esp??cies que se alimentam de plantas. 
                        Os carn??voros terrestres, podemos chamar de ???Hexacarnitus???, latim, para ???Seis dedos carn??voros'. E aos predadores a??reos, ???Draconideum??? ou ???Drag??es???.
                    </p>
                    <p>
                        G??nero s??o esp??cies com muitas caracter??sticas em comum, ent??o faremos um para as criaturas grandes com pele grossa, chamado de ???Magnapelide??? ou ???Grande Pele???. 
                        Uma para os carn??voros do ar ???Draculopericulum??? (Drag??o perigoso), e cada outro animal mostrado, ter?? seu pr??prio g??nero. Os Cavalos Selvagens ???Campestride??? (Habitante do Campo), 
                        os Hexapede ???Aurecurreae??? (Corredor de aur??ola), Lobos V??bora ???Parumvenator??? (Pequeno ca??ador), e Thanator ???Ungipericulus??? (Garra Perigosa).
                    </p>
                    <p>
                        E a esp??cie ?? o nome pr??prio do animal, colocaremos o nome de cada um deles abaixo de sua imagem, junto com sua defini????o:
                    </p>
                    <div className="img-list">
                        <div className="sets">
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/8.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Herb??vora 
                                    </li>
                                    <li>
                                        <span>G??nero:</span> Magnapelide 
                                    </li>
                                    <li>
                                        <span>Esp??cie:</span> <i>M. tauromalleo </i>
                                    </li>
                                </ul>
                                <span>(Touro com martelo)</span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/7.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Herb??vora 
                                    </li>
                                    <li>
                                        <span>G??nero:</span> Magnapelide 
                                    </li>
                                    <li>
                                        <span>Esp??cie:</span> <i> M. taurocorneo </i>
                                    </li>
                                </ul>
                                <span>(Touro com chifre)</span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/6.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Herb??vora
                                    </li>
                                    <li>
                                        <span>G??nero:</span> Campestride
                                    </li>
                                    <li>
                                        <span>Esp??cie:</span> <i>C. fortsipede</i>
                                    </li>
                                </ul>
                                <span>(P?? Forte)</span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/5.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Herb??vora 
                                    </li>
                                    <li>
                                        <span>G??nero:</span> Aurecurreae 
                                    </li>
                                    <li>
                                        <span>Esp??cie:</span> <i>A. parvuspreda </i>
                                    </li>
                                </ul>
                                <span>(Pequena Presa)</span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/4.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Hexacarnitus 
                                    </li>
                                    <li>
                                        <span>G??nero:</span> Ungipericulus 
                                    </li>
                                    <li>
                                        <span>Esp??cie:</span> <i>U. cattusrex </i>
                                    </li>
                                </ul>
                                <span>(Gato rei) </span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/3.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Hexacarnitus
                                    </li>
                                    <li>
                                        <span>G??nero:</span> Parumvenator
                                    </li>
                                    <li>
                                        <span>Esp??cie:</span> <i>P. sirius</i>
                                    </li>
                                </ul>
                                <span>(Estrela de c??o maior)</span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/2.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Draconideum 
                                    </li>
                                    <li>
                                        <span>G??nero:</span> Draculopericulum 
                                    </li>
                                    <li>
                                        <span>Esp??cie:</span> <i> D. sinumterrorem   </i>
                                    </li>
                                </ul>
                                <span> (Pavor de bolso)   </span>
                            </div>
                            <div className="set">
                                <img src={process.env.PUBLIC_URL + "/1.png"} alt="terra"/>
                                <ul>
                                    <li>
                                        <span>Filo:</span> Chordata
                                    </li>
                                    <li>
                                        <span>Classe:</span> N/A
                                    </li>
                                    <li>
                                        <span>Ordem:</span> Draconideum
                                    </li>
                                    <li>
                                        <span>G??nero:</span> Draculopericulum
                                    </li>
                                    <li>
                                        <span>Esp??cie:</span> <i>D. toruktiranus</i>
                                    </li>
                                </ul>
                                <span> (??ltima sombra tirana) </span>
                            </div>
                        </div>
                    </div>
                </TextArea>
            </Body>
        </>
    )
}