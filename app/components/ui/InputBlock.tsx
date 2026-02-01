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
        <div style={{ margin: "auto" }}>
            <input type="text" style={{ backgroundColor: bgColor }} className="text-black w-[50px] h-[50px]" value={inputValue} onChange={handleChange} />
            <div>
                <button className="grey w-4 h-4 bg-gray-600" onClick={() => setBgColor("grey")} />
                <button className="yellow w-4 h-4 bg-yellow-400" onClick={() => setBgColor("yellow")} />
                <button className="green w-4 h-4 bg-green-800" onClick={() => setBgColor("green")} />
            </div>
        </div>
    );
}