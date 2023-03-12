import Select from "@components/Select";
import React from "react";
import AddProduct from "./addProduct";

const Menu = () => {
    const data = [
        { label: 'Adelaide', value: 'adelaide' },
        { label: 'Brisbane', value: 'brisbane' },
        { label: 'Canberra', value: 'canberra' },
        { label: 'Darwin', value: 'darwin' },
        { label: 'Hobart', value: 'hobart' },
        { label: 'Melbourne', value: 'melbourne' },
        { label: 'Perth', value: 'perth' },
        { label: 'Sydney', value: 'sydney' },
    ];
    return (

        <div className="d-flex">
            <Select data={data} title={"Thương Hiệu"}/>
            <Select data={data} title={"Loại sản phẩm"}/>
            <Select data={data} title={"Chi Nhánh"}/>
            <button className="btn btn-success">Search</button>
        </div>
    )
}

export default Menu