import './Botao.css'

const botao = (props) => {
    return (<button className='botao'>
        {props.texto}
    </button>)
}

export default botao