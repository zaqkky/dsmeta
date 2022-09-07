import NotificationButton from "../NotificationButton";
import "./styles.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function SalesCard() {

    const max = new Date();
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="controleform-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="controleform-container">
                    <DatePicker
                        selected={maxDate }
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
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

export default SalesCard;
