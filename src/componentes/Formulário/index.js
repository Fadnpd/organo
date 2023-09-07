import Botao from '../Botao'
import CampoTexto from '../CampoTexto/Index'
import ListaSuspensa from '../ListaSuspensa'
import'./Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {
const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')


const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
}    
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os cards dos jogadores</h2>
                <CampoTexto obrigatorio={true}
                 label="Nome"placeholder="Digite o seu nome"
                 valor={nome}
                 aoAlterado={valor => setNome(valor)}
                 />
                <CampoTexto  obrigatorio={true}
                 label="Cargo" placeholder= "Digite o seu cargo"
                 valor={cargo}
                 aoAlterado={valor => setCargo(valor)}
                 />
                <CampoTexto label="Imagem" 
                placeholder="Informe o endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa  
                obrigatorio={true}
                label="Time"
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
            />
                <Botao texto= "Criar Card"/>
            </form>
        </section>
    )}

export default Formulario

