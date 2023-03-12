import Card from '@components/Card';
import Grid from '@components/Grid';
import Nav from '@components/Nav';
import Table from '@components/Table';
import Chart from '@components/Chart';
import { Row } from 'react-bootstrap';
import AdminLayout from '@layout/AdminLayout';
function Admin() {
  return (
    <div className="container">
      <Row className='my-1 w-100'>
        <Chart />

      </Row>
      <Row className='w-100 my-5 d-flex flex-row justify-content-around' sm={3} md={3}>
        <Card className={"d-flex flex-column"} textHeader="Số Đơn Hôm nay" textBody="10" />
        <Card className={"d-flex flex-column"} textHeader="Tổng Doanh thu" textBody="10" />
      </Row>
      <Row style={{backgroundColor:"white !important"}}>
        <Table></Table>
      </Row>
    </div>
  )
}

Admin.Layout = AdminLayout;

export default Admin;
