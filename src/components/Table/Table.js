import './Table.css'

const Table = () => {
    return (
        <table className='table'>
            <thead><tr><td>Origem</td><td>Destino</td><td>R$/minutos</td></tr></thead>
            <tbody>
                <tr><td>011</td><td>016</td><td>1,90</td></tr>
                <tr><td>011</td><td>017</td><td>1,70</td></tr>
                <tr><td>011</td><td>018</td><td>0,90</td></tr>
                <tr><td>011</td><td>018</td><td>0,90</td></tr>
                <tr><td>016</td><td>011</td><td>2,90</td></tr>
                <tr><td>017</td><td>011</td><td>2,70</td></tr>
                <tr><td>018</td><td>011</td><td>1,90</td></tr>
            </tbody>
        </table>
    )
}

export default Table