import React from 'react'
import { NavLink } from 'react-router-dom'
import DATA from '../Data'
const Product = () =>{

//   const DATA=[
//     {
//         id:0, 
//         title:"Iphone 11",
//         price:4884,
//         desc:"Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam, iPhone 13 Pro Max là phiên bản quốc tế 2 sim (Nano + Esim). Máy chưa Active + nguyên seal hộp, mới 100% (Fullbox).iPhone 13 Pro Max 512GB Chính hãng (VN/A) là phiên bản được phân phối chính thức bởi Apple Việt Nam, được bảo hành 12 tháng tại Trung tâm Uỷ quyền cao cấp nhất của Apple tại Việt Nam và trên toàn cầu miễn phí. Đồng thời hưởng nhiều ưu đãi, khuyến mãi hấp dẫn tại Di Động Việt.",
//         img:"/assets/images/products/ip1.jpg"
//     },
//     {
//         id:1,
//         title:"Iphone 11",
//         price:4884,
//         desc:"Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam, iPhone 13 Pro Max là phiên bản quốc tế 2 sim (Nano + Esim). Máy chưa Active + nguyên seal hộp, mới 100% (Fullbox).iPhone 13 Pro Max 512GB Chính hãng (VN/A) là phiên bản được phân phối chính thức bởi Apple Việt Nam, được bảo hành 12 tháng tại Trung tâm Uỷ quyền cao cấp nhất của Apple tại Việt Nam và trên toàn cầu miễn phí. Đồng thời hưởng nhiều ưu đãi, khuyến mãi hấp dẫn tại Di Động Việt.",
//         img:"/assets/images/products/ip1.jpg"
//     },
//     {
//         id:2,
//         title:"Iphone 11",
//         price:4884,
//         desc:"Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam, iPhone 13 Pro Max là phiên bản quốc tế 2 sim (Nano + Esim). Máy chưa Active + nguyên seal hộp, mới 100% (Fullbox).iPhone 13 Pro Max 512GB Chính hãng (VN/A) là phiên bản được phân phối chính thức bởi Apple Việt Nam, được bảo hành 12 tháng tại Trung tâm Uỷ quyền cao cấp nhất của Apple tại Việt Nam và trên toàn cầu miễn phí. Đồng thời hưởng nhiều ưu đãi, khuyến mãi hấp dẫn tại Di Động Việt.",
//         img:"/assets/images/products/ip1.jpg"
//     },
//     {
//         id:3,
//         title:"Iphone 11",
//         price:4884,
//         desc:"Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam, iPhone 13 Pro Max là phiên bản quốc tế 2 sim (Nano + Esim). Máy chưa Active + nguyên seal hộp, mới 100% (Fullbox).iPhone 13 Pro Max 512GB Chính hãng (VN/A) là phiên bản được phân phối chính thức bởi Apple Việt Nam, được bảo hành 12 tháng tại Trung tâm Uỷ quyền cao cấp nhất của Apple tại Việt Nam và trên toàn cầu miễn phí. Đồng thời hưởng nhiều ưu đãi, khuyến mãi hấp dẫn tại Di Động Việt.",
//         img:"/assets/images/products/ip1.jpg"
//     },
//     {
//         id:4,
//         title:"Iphone 11",
//         price:4884,
//         desc:"Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam, iPhone 13 Pro Max là phiên bản quốc tế 2 sim (Nano + Esim). Máy chưa Active + nguyên seal hộp, mới 100% (Fullbox).iPhone 13 Pro Max 512GB Chính hãng (VN/A) là phiên bản được phân phối chính thức bởi Apple Việt Nam, được bảo hành 12 tháng tại Trung tâm Uỷ quyền cao cấp nhất của Apple tại Việt Nam và trên toàn cầu miễn phí. Đồng thời hưởng nhiều ưu đãi, khuyến mãi hấp dẫn tại Di Động Việt.",
//         img:"/assets/images/products/ip1.jpg"
//     },
//     {
//         id:5,
//         title:"Iphone 11",
//         price:4884,
//         desc:"Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam, iPhone 13 Pro Max là phiên bản quốc tế 2 sim (Nano + Esim). Máy chưa Active + nguyên seal hộp, mới 100% (Fullbox).iPhone 13 Pro Max 512GB Chính hãng (VN/A) là phiên bản được phân phối chính thức bởi Apple Việt Nam, được bảo hành 12 tháng tại Trung tâm Uỷ quyền cao cấp nhất của Apple tại Việt Nam và trên toàn cầu miễn phí. Đồng thời hưởng nhiều ưu đãi, khuyến mãi hấp dẫn tại Di Động Việt.",
//         img:"/assets/images/products/ip1.jpg"
//     },
//     {
//       id:6,
//       title:"Iphone 11",
//       price:4884,
//       desc:"Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam, iPhone 13 Pro Max là phiên bản quốc tế 2 sim (Nano + Esim). Máy chưa Active + nguyên seal hộp, mới 100% (Fullbox).iPhone 13 Pro Max 512GB Chính hãng (VN/A) là phiên bản được phân phối chính thức bởi Apple Việt Nam, được bảo hành 12 tháng tại Trung tâm Uỷ quyền cao cấp nhất của Apple tại Việt Nam và trên toàn cầu miễn phí. Đồng thời hưởng nhiều ưu đãi, khuyến mãi hấp dẫn tại Di Động Việt.",
//       img:"/assets/images/products/ip1.jpg"
//   },
//   {
//     id:7,
//     title:"Iphone 11",
//     price:4884,
//     desc:"Động Việt - Đại lý uỷ quyền chính thức của Apple tại Việt Nam, iPhone 13 Pro Max là phiên bản quốc tế 2 sim (Nano + Esim). Máy chưa Active + nguyên seal hộp, mới 100% (Fullbox).iPhone 13 Pro Max 512GB Chính hãng (VN/A) là phiên bản được phân phối chính thức bởi Apple Việt Nam, được bảo hành 12 tháng tại Trung tâm Uỷ quyền cao cấp nhất của Apple tại Việt Nam và trên toàn cầu miễn phí. Đồng thời hưởng nhiều ưu đãi, khuyến mãi hấp dẫn tại Di Động Việt.",
//     img:"/assets/images/products/ip1.jpg"
// }


// ];
const catitem=DATA.map(item=>(
    
        <div class="card my-5 py-4  align-items-center" key={item.id}style={{ width: "18rem" }}>
          <img src={item.img} class="card-img-top" alt={item.title} />
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p className="lead">${item.price}</p>
            <NavLink to={`/product/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink>
          </div>
        </div>
    )
); 

return ( <div>
         <div className="container py-5">
           <div className="row">
             <div className="col-12 text-center">
               <h1>Product</h1>
               <hr />
             </div>
           </div>
         </div>
         <div className="container">
           <div className="row">
                {catitem}
                 </div>
         </div>
       </div>
       )
    
  
}

export default Product 