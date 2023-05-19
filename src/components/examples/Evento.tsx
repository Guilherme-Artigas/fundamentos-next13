import { useState, useEffect } from 'react';
import { IconPlus, IconMinus } from '@tabler/icons-react';

export default function Evento() {
  const [valor, setValor] = useState(0);

  function aumentarValor() {
    setValor(valor + 1);
  };

  function diminuirValor() {
    try {
      if (valor > 0) {
        setValor(valor - 1);
      } else {
        throw new Error('Valor não pode ser menor que 0');
      };
    } catch (erro) {
      console.log(erro)
    }
  };

  useEffect(() => {}, [valor])

  return (
    <>
      <div className={`
        flex flex-col gap-5 items-center
      `}>
        <span className="text-3xl"><strong>Valor: </strong>{valor}</span>
        <div className={`
          flex gap-5
        `}>
          <button onClick={diminuirValor}><IconMinus /></button>
          <button onClick={aumentarValor}><IconPlus /></button>
        </div>
      </div>
    </>
  )
}