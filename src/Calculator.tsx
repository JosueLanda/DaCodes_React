import React, { useState } from 'react';

// Componente hijo Button
const Button = ({ value, onClick }) => {
    return (
        <button onClick={() => onClick(value)}>{value}</button>
    );
};

// Componente padre Calculator
const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('');

    // Función para manejar los clics en los botones
    const handleButtonClick = (value) => {
        if (value === '=') {
            // Evaluación de la expresión matemática
            try {
                const result = eval(displayValue);
                setDisplayValue(result.toString());
            } catch (error) {
                setDisplayValue('Error');
            }
        } else {
            // Actualización del valor mostrado en la calculadora
            setDisplayValue(prevValue => prevValue + value);
        }
    };

    return (
        <div>
            {/* Campo de texto para mostrar el valor actual */}
            <input type="text" value={displayValue} readOnly />

            {/* Botones para los números y operaciones */}
            <div>
                <Button value="0" onClick={handleButtonClick} />
                <Button value="1" onClick={handleButtonClick} />
                <Button value="2" onClick={handleButtonClick} />
                <Button value="3" onClick={handleButtonClick} />
                <Button value="4" onClick={handleButtonClick} />
                <Button value="5" onClick={handleButtonClick} />
                <Button value="6" onClick={handleButtonClick} />
                <Button value="7" onClick={handleButtonClick} />
                <Button value="8" onClick={handleButtonClick} />
                <Button value="9" onClick={handleButtonClick} />
                <Button value="+" onClick={handleButtonClick} />
                <Button value="-" onClick={handleButtonClick} />
                <Button value="*" onClick={handleButtonClick} />
                <Button value="/" onClick={handleButtonClick} />
                <Button value="=" onClick={handleButtonClick} />
            </div>
        </div>
    );
};

export default Calculator;
