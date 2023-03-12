import AdminLayout from "@layout/AdminLayout"
import Toggle from '@atlaskit/toggle'
import Avatar, { AvatarItem } from '@atlaskit/avatar';
import style from "./index.module.scss"
import Menu from "./navbar"
import Table from "./table"

function Product() {
    return (
        <div class={`container-fluid mt-4 ${style.bg}`} style={{ height: "100vh" }}>
            <h1>Danh sách sản phẩm</h1>
            <div className="mt-2">
                <div className="row">
                    <div className="container">
                        <form>
                            <div className="mb-3 row">
                                <label htmlFor="inputName" className="col-4 col-form-label">Mã sản phẩm</label>
                                <div className="col-8">
                                    <input type="text" className="form-control" name="inputName" id="inputName" placeholder="Mã sản phẩm" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputName" className="col-4 col-form-label">Tên sản phẩm</label>
                                <div className="col-8">
                                    <input type="text" className="form-control" name="inputName" id="inputName" placeholder="Tên sản phẩm" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputName" className="col-4 col-form-label">Giá</label>
                                <div className="col-8">
                                    <input type="number" className="form-control" name="inputName" value={0} id="inputName" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputName" className="col-4 col-form-label">Size</label>
                                <div className="col-8">
                                    <input type="number" className="form-control" name="inputName" value={0} id="inputName" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputName" className="col-4 col-form-label">Bộ nhớ</label>
                                <div className="col-8">
                                    <input type="number" className="form-control" name="inputName" value={0} id="inputName" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputName" className="col-4 col-form-label">Thương hiệu</label>
                                <div className="col-8">
                                    <select class="form-select form-select" name="" id="">
                                        <option selected>Select one</option>
                                        <option value="">New Delhi</option>
                                        <option value="">Istanbul</option>
                                        <option value="">Jakarta</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputName" className="col-4 col-form-label">Loại sản phẩm</label>
                                <div className="col-8">
                                    <select class="form-select form-select" name="" id="">
                                        <option selected>Select one</option>
                                        <option value="">New Delhi</option>
                                        <option value="">Istanbul</option>
                                        <option value="">Jakarta</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 d-flex">
                                <label htmlFor="toggle-large" className="col-4 col-form-label">Trạng thái</label>
                                <div className="col-8">
                                    <Toggle id="toggle-large" size="large" defaultChecked />
                                </div>
                            </div>
                            <div className="mb-3 offset-sm-4 d-flex">
                                <button type="submit" className="btn btn-success mx-2">Thêm</button>
                                <button type="submit" className="btn btn-danger mx-2">Cập nhật</button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <Menu />
                    <Table />
                </div>
            </div>

        </div>
    )
}

Product.Layout = AdminLayout
export default Product