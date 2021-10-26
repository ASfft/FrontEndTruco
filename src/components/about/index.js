import {Helmet} from "react-helmet";


export default function About() {

    const maior = ">"

    return (

    <>
    <Helmet>
        <title>Truco | Sobre</title>
    </Helmet>

        <div className="sobre">
        <ul>
            <p> Deve-se jogar individual, em duplas/pares ou trios (no caso de duplas ou trios, os jogadores devem alternar suas posições na mesa entre os parceiros e adversários).
Quem faz doze pontos [tentos] primeiro vence. O jogador/dupla/trio ganha a queda quando vence dois jogos.
Os participantes recebem três cartas a cada mão/rodada e disputam uma melhor de três. Uma carta é colocada na mesa por rodada, e a mais valiosa vence a vez.
Ao ganhar duas rodadas, o jogador/dupla/trio recebe os pontos da mão.
Em caso de empate na primeira rodada, a segunda decide o vencedor da mão. Em caso de empate na segunda ou terceira rodada, ganha quem venceu a primeira.
Em raros casos de empate em todas as rodadas, ninguém ganha os pontos da mão.</p>
        <p><h2>PONTUAÇÃO</h2></p>
        <p>
        - Cada mão começa valendo 2 pontos;
- No decorrer das rodadas os jogadores, na sua vez de jogar, podem pedir truco, aumentando o valor da mão para 4 pontos;
- Os adversários podem aceitar, rejeitar ou pedir 6. Quando rejeitam, a mão termina e quem pediu truco ganha 2 pontos. Caso o adversário peça 6, quem pediu truco tem as mesmas possibilidades, aceitar, rejeitar, ou aumentar para 10;
- Os aumentos de apostas podem chegar até 12 e, em seguida, queda.
        </p>
        <p><h2>MÃO DE DEZ</h2></p>
        <p> É quando uma das duplas atinge 10 pontos. Nesta mão, os jogadores da dupla/trio com 10 pontos olham as cartas um do outro antes de jogar, decidindo se vão jogar ou não a mão.
Se jogarem, a mão vale quatro pontos. Se rejeitam, seus adversários ganham dois pontos.
    </p>
    <p><h2>MÃO DE FERRO</h2></p>
    <p  >Em caso de empate em 10 a 10, as duas duplas disputam a mão às cegas. As cartas permanecem viradas de cabeça para baixo, ninguém pode ver suas próprias cartas. Quem vencer a mão, ganha o jogo.</p>
    <p><h2>BARALHO</h2></p>
    <p>
        O truco mineiro é jogado com 40 cartas, retirando os coringas, 8, 9 e 10. A sequência das cartas, independente do naipe, na ordem de mais valiosa para menos valiosa: 3 {maior} 2 {maior} A {maior} k {maior} J {maior} Q {maior} 7 {maior} 6 {maior} 5 {maior} 4.
    </p>
    <p>
        fonte: https://copag.com.br/blog/detalhes/truco-mineiro
    </p>
    </ul>
        </div>
    </>
     );
}
