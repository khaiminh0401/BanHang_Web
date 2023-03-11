import { useEffect } from "react"
// import { fetch } from "utils/Axios";
import axios from "axios";

const Table = () => {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Mã sản phẩm</th>
                    <th scope="col">Hình</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>MarkS</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>Jacob</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table;