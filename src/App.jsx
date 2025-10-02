import React from "react";
import CardJogador from "../src/components/CardJogador"
import Titulo from "./components/Titulo";
import Fallen from "../src/assets/fallen.jpg"
import DonJavon from "../src/assets/DonJavon.png"
import Bobby from "../src/assets/bobby.jpg"
import Daniel from "../src/assets/daniel.png"
import Uno from "../src/assets/Uno.jpg"
import Dalvana from "../src/assets/Dalvana.png"
import Lucas from "../src/assets/Lucas.png"
import Nathy from "../src/assets/nathy.png"
import Pedro from "../src/assets/Pedro.png"
import Dupla from "../src/assets/dupla.png"

// Função principal do App
export default function App(){
  // Array de objetos representando os jogadores
  // Cada objeto tem um id e as props nome, posição, time, avaliação e imagem
  const jogadores = [
    {
      id:1,
      nome: "Fallen",
      posicao: "IGL",
      time: " Fúria",
      avaliacao: 10,
      imagem: Fallen
    },
    {
      id:2,
      nome: "Don Javon",
      posicao: "IGL de Java",
      time: " Java fc",
      avaliacao: 10,
      imagem: DonJavon
    },
    {
      id:3,
      nome: "Bobby charlton",
      posicao: "Meia",
      time: " Manchester United",
      avaliacao: 10,
      imagem: Bobby
    },
    {
      id:4,
      nome: "Daniel-san",
      posicao: "Minoxidil",
      time: " Shampoolândia",
      avaliacao: 10,
      imagem: Daniel
    },
    {  
      id:5,
      nome: "Uno Henrique",
      posicao: " 288",
      time: " Tigrinho fc",
      avaliacao: 10,
      imagem: Uno
    },
    {
      id:6,
      nome: "Dalvana",
      posicao: "Esteroide",
      time: " GH fc",
      avaliacao: 10,
      imagem: Dalvana
    },
    {
      id:7,
      nome: "Lucas",
      posicao: "Voador",
      time: " Veridian fc",
      avaliacao: 10,
      imagem: Lucas
    },
    {
       id:8,
      nome: "Nathy",
      posicao: "Lateral",
      time: " Inter",
      avaliacao: 10,
      imagem: Nathy
    },
    {
      id:9,
      nome: "Pedro",
      posicao: "Defensor",
      time: " Palmeiras",
      avaliacao: 10,
      imagem: Pedro
    },
    {
      id:10,
      nome: "bolsolula",
      posicao: "Presidente",
      time: " Roubados fc",
      avaliacao: 10,
      imagem: Dupla
    }
  ]
    return(
        <main
        style={{
            display: "flex",
            gap: "20px", // espaço entre os cards
            justifyContent: "center", // centraliza os cards na horizontal
            marginTop: "50px", // espaço superior
            flexWrap: "wrap" // permite a quebra de linha se a tela for pequena

        }}
        >
            {/** Componente de Titulo             
             */}
             <div style={{width: "100%"}}>
                <Titulo texto= "Lista de Jogadores" />
             </div>
             {/** Percorre o array de jogadores com .map */}
             {/** Para cada jogador cria um CardJogador  */}
             {
                jogadores.map((j) => (
                    // key é necessário para o React identificar cada item da lista
                    // {...j} espalhar todas as props (nome, posicao, time, avaliacao, imagem)
                    <CardJogador key={j.id}{...j} />
                ))
             }
            

        </main>
  )
}
