import { useState } from "react";

interface InputBlockProps {
    index: number;
    setGuessLetter;
}

export default function InputBlock({ index, setGuessLetter }: InputBlockProps) {
    const [inputValue, setInputValue] = useState("");
    const [bgColor, setBgColor] = useState("grey")

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
        setGuessLetter(index, setGuessLetter)
    }

    return (
        <div className="m-auto">
            <input type="text" style={{ backgroundColor: bgColor, margin: "auto" }} className="text-black w-12.5 h-12.5 m-auto!" value={inputValue} onChange={handleChange} />
            <div>
                <button className="grey w-4 h-4 bg-gray-600 cursor-pointer rounded-[8px]" onClick={() => setBgColor("grey")} />
                <button className="yellow w-4 h-4 bg-yellow-400 cursor-pointer m-1.5 rounded-[8px]" onClick={() => setBgColor("yellow")} />
                <button className="green w-4 h-4 bg-green-800 cursor-pointer rounded-[8px]" onClick={() => setBgColor("green")} />
            </div>
        </div>
    );
}