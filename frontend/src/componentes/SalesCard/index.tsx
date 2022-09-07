import NotificationButton from "../NotificationButton"
import "./styles.css"

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="controleform-container">
                    <input className="controleform" type="text" />
                </div>
                <div className="controleform-container">
                    <input className="controleform" type="text" />
                </div>
            </div>

            <div>
                <table className="dsmeta-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">visitas</th>
                            <th className="show992">vendas</th>
                            <th>total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">04/05/2025</td>
                            <td>anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>5300</td>
                            <td>
                                <div className="dsmeta-red-btn-conteiner">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">04/05/2025</td>
                            <td>jorge</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>5300</td>
                            <td>
                                <div className="dsmeta-red-btn-conteiner">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard
