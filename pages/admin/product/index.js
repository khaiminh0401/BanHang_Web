import AdminLayout from "@layout/AdminLayout"
import * as Popper from "@popperjs/core"
import axios from "axios"
import Menu from "./navbar"
import Table from "./table"

function Product({data}) {
    return (
        <div class="container-fluid mt-4">
            <Menu></Menu>

            <Table></Table>
        </div>
    )
}
// export async function getStaticProps() {
//     // Fetch data from external API
//     const res = await fetch(`http://localhost:8282/api/sanpham/getAllSP`);
//     console.log(res);
//     const data = await res.json()

//     // Pass data to the page via props
//     return res.json()
// }

Product.Layout = AdminLayout
export default Product