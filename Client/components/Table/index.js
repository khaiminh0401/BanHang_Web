function CustomTable() {
    return (
        <table className="table table-hover text-nowrap">
            <thead>
                <tr>
                    <th scope="col" />
                    <th scope="col">Product Detail Views</th>
                    <th scope="col">Unique Purchases</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Product Revenue</th>
                    <th scope="col">Avg. Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Value</th>
                    <td>18,492</td>
                    <td>228</td>
                    <td>350</td>
                    <td>$4,787.64</td>
                    <td>$13.68</td>
                </tr>
                <tr>
                    <th scope="row">Percentage change</th>
                    <td>
                        <span className="text-danger">
                            <i className="fas fa-caret-down me-1" aria-hidden="true" /><span>-48.8%%</span>
                        </span>
                    </td>
                    <td>
                        <span className="text-success">
                            <i className="fas fa-caret-up me-1" aria-hidden="true"  /><span>14.0%</span>
                        </span>
                    </td>
                    <td>
                        <span className="text-success">
                            <i className="fas fa-caret-up me-1" aria-hidden="true"  /><span>46.4%</span>
                        </span>
                    </td>
                    <td>
                        <span className="text-success">
                            <i className="fas fa-caret-up me-1" aria-hidden="true"  /><span>29.6%</span>
                        </span>
                    </td>
                    <td>
                        <span className="text-danger">
                            <i className="fas fa-caret-down me-1" aria-hidden="true"  /><span>-11.5%</span>
                        </span>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Absolute change</th>
                    <td>
                        <span className="text-danger">
                            <i className="fas fa-caret-down me-1" aria-hidden="true"  /><span>-17,654</span>
                        </span>
                    </td>
                    <td>
                        <span className="text-success">
                            <i className="fas fa-caret-up me-1" aria-hidden="true"  /><span>28</span>
                        </span>
                    </td>
                    <td>
                        <span className="text-success">
                            <i className="fas fa-caret-up me-1" aria-hidden="true"  /><span>111</span>
                        </span>
                    </td>
                    <td>
                        <span className="text-success">
                            <i className="fas fa-caret-up me-1" aria-hidden="true"  /><span>$1,092.72</span>
                        </span>
                    </td>
                    <td>
                        <span className="text-danger">
                            <i className="fas fa-caret-down me-1" aria-hidden="true"/><span>$-1.78</span>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>

    );
}

export default CustomTable;