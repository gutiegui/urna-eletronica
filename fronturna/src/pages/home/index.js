import React from "react";
import './home.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const Home = () => {
    const [num, setNum] = useState(" ");
    const [num1, setNum1] = useState(" ");

    function inputNum(e) {
        var input = e.target.value
        if (num != " ") {
            setNum1(input);
        } else {
            setNum(input);
        }
    }

    function clear(e) {
        setNum(" ");
        setNum1(" ");
    }

    function confirma(e) {
        if (num1 != " " && num != " ") {
            clear()
        }
    }

    return (
        <div class="urna">
            <div class="tela">
                <div class="d-1">
                    <div class="d-1-left">
                        <div class="d-1-1">
                            <span>SEU VOTO PARA</span>
                        </div>
                        <div class="d-1-2">
                            <span>PREFEITO</span>
                        </div>
                        <div class="d-1-3">
                            <div className={`numero ${num == " " ? "pisca" : ""}`}>{num}</div>
                            <div className={`numero ${num1 == " " && num != " " ? "pisca" : ""}`}>{num1}</div>
                        </div>
                        <div class="d-1-4">
                            Nome: Fulano <br />
                            Partido: P <br />
                            Vice: FulanoVice <br />
                        </div>
                    </div>
                    <div class="d-1-right"></div>
                </div>

                <div class="d-2">
                    Aperte a tecla: <br />
                    CONFIRMA para CONFIRMAR este voto <br />
                    CORRIGE para REINICIAR este voto
                </div>
            </div>

            <div class="teclado">
                <div class="teclado-linha">
                    <button class="teclado-botao" onClick={inputNum} value={1}>1</button>
                    <button class="teclado-botao" onClick={inputNum} value={2}>2</button>
                    <button class="teclado-botao" onClick={inputNum} value={3}>3</button>
                </div>
                <div class="teclado-linha">
                    <button class="teclado-botao" onClick={inputNum} value={4}>4</button>
                    <button class="teclado-botao" onClick={inputNum} value={5}>5</button>
                    <button class="teclado-botao" onClick={inputNum} value={6}>6</button>
                </div>
                <div class="teclado-linha">
                    <button class="teclado-botao" onClick={inputNum} value={7}>7</button>
                    <button class="teclado-botao" onClick={inputNum} value={8}>8</button>
                    <button class="teclado-botao" onClick={inputNum} value={9}>9</button>
                </div>
                <div class="teclado-linha">
                    <button class="teclado-botao botao-reiniciar" onClick={clear}>CADASTRO</button>
                    <button class="teclado-botao" onClick={inputNum} value={0} disabled={num == " "}>0</button>
                    <button class="teclado-botao botao-reiniciar" onClick={clear}>REINICIAR</button>

                </div>

                <div class="teclado-linha">
                    <button class="teclado-botao botao-branco">BRANCO</button>
                    <button class="teclado-botao botao-corrige" onClick={clear}>CORRIGE</button>
                    <button class="teclado-botao botao-confirma" onClick={confirma}>CONFIRMA</button>
                </div>
            </div>
        </div>
    )

}

export default Home;