export default function GuessRow(inputs: string[]) {
    const geussRow: React.JSX.Element = <div>{renderLetters(inputs)}</div>;

    return geussRow;

    function renderLetters(inputs: string[]) {
        let result: React.JSX.Element[] = [];
        inputs.forEach(input => {
            result.push(
                <div>{input}</div>
            )
        });
        return result;
    }
}