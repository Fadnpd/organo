import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulário';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Departamento Adminstrativo',
      corPrimaria: '#f2f2f2',
      corSecundaria: '#95ffd4',
  },
    {
      nome: 'Departamento Comercial',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
  },
  {
      nome: 'Departamento Contábil',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
  },
  {
      nome: 'Departamento Pessoal',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
  },
  {
      nome: 'Departamento de Vendas',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
  },
  {
      nome: 'Departamento Fiscal',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
  },
  {
      nome: 'Logistica e Armazenamento',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
  }
  
]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
  
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
     { times.map (time =><Time 
     key={time.nome}
     nome={time.nome} 
     corPrimaria={time.corPrimaria} 
     corSecundaria={time.corSecundaria} 
     colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
/>)}
    </div>
  );
}

export default App;
