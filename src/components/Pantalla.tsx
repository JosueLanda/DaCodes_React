import { useAppContext } from "./Estado";

export default function Pantalla() {
    const calculator = useAppContext();
    return (
        <div className="calculatorScreen">
            <div className="calculatorCurrentValue">
                {calculator.currentValue}
            </div>
        </div>
    );
}