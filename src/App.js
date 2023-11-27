import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {

    if (input.length > 20) {
      alert('El máximo permitido de caracteres es 21');
      return;
    };

    console.log("val: ", val);
    console.log("input: ", input);

    if (repiteOperador(input, val)) {
      return;
    };

    setInput(input + val);
  };

  const repiteOperador = (input, val) => {
    if ((input.charAt(input.length - 1) == '+' || 
        input.charAt(input.length - 1) == '-' || 
        input.charAt(input.length - 1) == '*' || 
        input.charAt(input.length - 1) == '/') && 
        (val == '+' || 
         val == '-' || 
         val == '*' || 
         val == '/')) {
          console.log("clickeo 2 operadores seguidos");
          return true;
    };

    return false;
  };

  const calcularResultado = () => {

    if (input) {
      console.log(input);
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar el cálculo');
    };
    
  }; 

  return (
    <div className="App">
      
      <div className='contenedor-calculadora'>

        <Pantalla input={input} />

        <div className='fila'>
          <Boton handleClick={agregarInput}>7</Boton>
          <Boton handleClick={agregarInput}>8</Boton>
          <Boton handleClick={agregarInput}>9</Boton>
          <Boton handleClick={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton handleClick={agregarInput}>4</Boton>
          <Boton handleClick={agregarInput}>5</Boton>
          <Boton handleClick={agregarInput}>6</Boton>
          <Boton handleClick={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton handleClick={agregarInput}>1</Boton>
          <Boton handleClick={agregarInput}>2</Boton>
          <Boton handleClick={agregarInput}>3</Boton>
          <Boton handleClick={agregarInput}>/</Boton>
        </div>

        <div className='fila'>
          <Boton handleClick={calcularResultado}>=</Boton>
          <Boton handleClick={agregarInput}>0</Boton>
          <Boton handleClick={agregarInput}>.</Boton>
          <Boton handleClick={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <BotonClear handleClear={ () => setInput('')}>
            Clear
          </BotonClear>
        </div>

      </div>

    </div>
  );
}

export default App;
