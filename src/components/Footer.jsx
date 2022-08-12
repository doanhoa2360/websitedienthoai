import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
{/* Footer*/}
<footer className="page-footer font-small indigo">

  {/* Footer Links*/}
  <div className="container text-left  text-md-left">

 {/* Grid row*/}
    <div className="row">

   {/* Grid column*/}
      <div className="col-md-3 mx-auto">

     {/* Links*/}
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Thông tin công ty


</h5>

        <ul className="list-unstyled">
          <li>
            <a  href="#!">Giới thiệu công ty</a>
          </li>
          <li>
            <a href="#!">Quy chế hoạt động sàn TMĐT </a>
          </li>
          <li>
            <a href="#!"> 
Hệ thống cửa hàng</a>
          </li>
          <li>
            <a href="#!">
Mua hàng doanh nghiệp </a>
          </li>
        </ul>

      </div>
   {/* Grid column*/}

      <hr className="clearfix w-100 d-md-none"/>

   {/* Grid column*/}
      <div className="col-md-3 mx-auto">

     {/* Links*/}
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Chính sách



</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!"> Ưu đãi đối tác</a>
          </li>
          <li>
            <a href="#!">Điều kiện giao dịch </a>
          </li>
          <li>
            <a href="#!">Bảo vệ thông tin người dùng </a>
          </li>
          <li>
            <a href="#!"> Bảo mật giao dịch của khách hàng</a>
          </li>
        </ul>

      </div>
   {/* Grid column*/}

      <hr className="clearfix w-100 d-md-none"/>

   {/* Grid column*/}
      <div className="col-md-3 mx-auto">

     {/* Links*/}
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Hỗ trợ khách hàng



</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!"> Hướng dẫn mua hàng</a>
          </li>
          <li>
            <a href="#!">Hóa đơn điện tử </a>
          </li>
          <li>
            <a href="#!"> Câu hỏi thường gặp</a>
          </li>
          <li>
            <a href="#!"> Vận chuyển và giao nhận</a>
          </li>
        </ul>

      </div>
   {/* Grid column*/}

      <hr className="clearfix w-100 d-md-none"/>

   {/* Grid column*/}
      <div className="col-md-3 mx-auto">

     {/* Links*/}
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Thông tin khác

</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Tổng đài hỗ trợ miễn phí </a>
          </li>
          <li>
            <a href="#!"> Email: NKare@nguyenkim.com</a>
          </li>
          <li>
            <a href="#!"> Đường dây nóng: 1800.1713 (08:00 - 21:00) </a>
          </li>
          <li>
            <a href="#!">  Email:
crv.whistleblower@vn.centralretail.com</a>
          </li>
        </ul>

      </div>
   {/* Grid column*/}

    </div>
 {/* Grid row*/}

  </div>
  {/* Footer Links*/}

  {/* Copyright*/}
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/"> MDBootstrap.com</a>
  </div>
  {/* Copyright*/}

</footer>
{/* Footer*/}

    </div>
  ) 
}

export default Footer