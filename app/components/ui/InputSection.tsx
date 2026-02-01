import { useState } from "react";
import InputBlock from "./InputBlock";

export default function InputSection() {
    const [guesses, setGuesses] = useState<React.JSX.Element[]>([]);
    const inputBlocks = [<InputBlock index={0} setGuessLetter={setGuessLetter} key={0} />, <InputBlock index={1} setGuessLetter={setGuessLetter} key={1} />, <InputBlock index={2} setGuessLetter={setGuessLetter} key={2} />, <InputBlock index={3} setGuessLetter={setGuessLetter} key={3} />, <InputBlock index={4} setGuessLetter={setGuessLetter} key={4} />];
    let guess: string[] = Array(5).fill("");

    function addGuess(guess: React.JSX.Element) {
        setGuesses(prev => [...prev, guess]);
    }

    function submitGuess(index: number) {
        for (let index = 0; index < 5; index++) {
            const element = inputBlocks[index];
            guess[3] = "hello";
        }
    }

    function setGuessLetter(index: number, input: string) {
        guess[index] = input;
    }

    function clearGuesses() {
        setGuesses([]);
    }

    return (
        <div className="bg-white w-96">
            <div className="guessHistory">
                {guesses}
            </div>
            <div className="inputSection flex">
                {inputBlocks}
            </div>
        </div>
    )
}