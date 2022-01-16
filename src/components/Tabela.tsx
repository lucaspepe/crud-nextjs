import Cliente from '../core/Cliente'
import { IconeEdicao, IconeLixo } from './Icones'

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExluido ||props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {exibirAcoes ? <th className='p-4'>Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0? 'bg-gray-200': 'bg-gray-50'}`}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente): false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className='flex justify-center'>
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2
                        hover:bg-green-400
                    `}>
                        {IconeEdicao}
                    </button>

                ) : false}

                {props.clienteExluido ? (
                    <button onClick={() => props.clienteExluido?.(cliente)} className={`
                        flex justify-center items-center
                        text-red-600 rounded-full p-2
                        hover:bg-red-400
                    `}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
                bg-orange-600 text-white
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}