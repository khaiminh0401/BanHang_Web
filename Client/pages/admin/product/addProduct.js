import React from "react"

const AddProduct = () => {
    return (
        <div class="float-end mb-5">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Thêm sản phẩm
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm sản phẩm</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label class="form-label">Mã sản phẩm</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Tên sản phẩm</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Giá sản phẩm</label>
                                    <input type="number" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Mô tả</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Mã loại</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Mã thương hiệu</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Thêm SP</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddProduct