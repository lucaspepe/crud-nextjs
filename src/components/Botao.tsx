interface BotaoProps {
    color?: 'green' | 'blue' | 'gray'
    clasName?: string
    children: any
    onClick?: () => void
}

export default function Botao(props) {

    const cor = props.cor ?? 'gray'
    return (
        <button onClick={props.onClick} className={`
            bg-zinc-800 text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}