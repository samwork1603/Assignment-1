import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "./context";

const Cart = () => {
  const { outletName } = useParams();
  const location = useLocation();
  const { state } = location;
  const cartWrap = useContext(CartContext); 
  console.log(cartWrap);

  const navigate = useNavigate();

  console.log(state, "this is Params and Location");
  //   console.log(cart)
  //   const navigate = useNavigate();
  //   const backToList = () => {
  //     navigate("/outlet/:outletName", { state: cart });  
  //   };

  const handlePayNow = () => {
    alert("Payment Successful");
  };
  const goBackToMenu = () => {
    navigate(`/outlet/${outletName}`, { state: 0});
  };
  const grandTotatl = () => {
    return getTotalAmount() + 2 * (getTotalAmount() * tax());
  };
  const getTotalAmount = () => {
    return cartWrap.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const tax = () => {
    return 25 / 1000;
  };
  //   console.log(getTotalAmount());
  return (
    <div>
      {/* <MUIDataTable
        data={data}
        columns={columns}
        options={options}
      /> */}
      {/* <div>
        <button onClick={backToList}>Back</button>
      </div> */}
      <div>
        <h1 className="text-center text-4xl ">CART</h1>
        <button
          onClick={goBackToMenu}
          className="px-5 bg-slate-100 hover:shadow-md rounded-md"
        >
          Back
        </button>
      </div>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Serial No.</TableCell>
              <TableCell>Image</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartWrap.cart.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell>
                  <img src={item.image} alt={item.name} width="50" />
                </TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.quantity}</TableCell>
                <TableCell align="center">
                  {item.quantity * item.price}
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">{getTotalAmount()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="">
        <div className="absolute right-5">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="left">Cart Total</TableCell>
                <TableCell align="right">
                  {parseFloat(getTotalAmount()).toFixed(2)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">CGST 2.5%</TableCell>
                <TableCell align="right">
                  {parseFloat(getTotalAmount() * tax()).toFixed(2)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">SGST 2.5%</TableCell>
                <TableCell align="right">
                  {parseFloat(getTotalAmount() * tax()).toFixed(2)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Total Amount To Pay</TableCell>
                <TableCell align="right">
                  {parseFloat(grandTotatl()).toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="text-center bg-slate-100 m-2 hover:shadow-md rounded-md">
            <button onClick={handlePayNow}>PAY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

//   const getTotalAmount = () => {
//     return cart.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   const columns = [
//     {
//       name: "serialNo",
//       label: "Serial No.",
//     },
//     {
//       name: "name",
//       label: "Name",
//     },
//     {
//       name: "quantity",
//       label: "Quantity",
//     },
//     {
//       name: "price",
//       label: "Price",
//     },
//     {
//       name: "totalPrice",
//       label: "Total Price",
//     },
//   ];

//   const data = cart.map((item, index) => ({
//     serialNo: index + 1,
//     name: item.name,
//     quantity: item.quantity,
//     price: item.price,
//     totalPrice: item.price * item.quantity,
//   }));

//   const options = {
//     filterType: "none",
//     selectableRows: "none",
//     pagination: false,
//     search: false,
//     download: false,
//     print: false,
//     viewColumns: false,
//     filter: false,
//     sort: false,
//   };
