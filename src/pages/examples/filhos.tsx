import Grade from '../../components/examples/filhos/Grade';
import Caixa from '../../components/examples/filhos/Caixa';
import Pagina from '../../components/template/Pagina'

export default function PaginaFilhos() {
  return (
    <Pagina>
      <Grade>
        <Caixa>#1</Caixa>
        <Caixa>#2</Caixa>
        <Caixa>#3</Caixa>
        <Caixa>#4</Caixa>
        <Caixa>#5</Caixa>
        <Caixa>#6</Caixa>
        <Caixa>#7</Caixa>
        <Caixa>#8</Caixa>
        <Caixa><strong>#9</strong></Caixa>
      </Grade>
    </Pagina>
  )
}
