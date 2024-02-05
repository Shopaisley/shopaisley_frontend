
import { Checkbox, IconButton, Image } from "@chakra-ui/react";
import editIcon from "../../assets/Images/menuv.png";
import "./index.css";

const OrderTable = ({ data }) => {
  const handleRowClick = (orderId) => {
    // Handle row click here
    console.log(`Row clicked for product ${orderId}`);
  };

  const handleEditClick = (orderId) => {
    // Handle edit icon click here
    console.log(`Edit icon clicked for product ${orderId}`);
  };

  return (
    // <table className="order-table">
    //   <thead>
    //     <tr>
    //       <th>Customer</th>
    //       <th>Date</th>
    //       <th>Status</th>
    //       <th>Total</th>
    //       <th></th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((row, index) => (
    //       <tr key={index} onClick={() => handleRowClick(row.id)}>
    //         <td>{row.customer}</td>
    //         <td>{row.date}</td>
    //         <td>{row.status}</td>
    //         <td>{row.total}</td>
    //         <td>
    //         <Image
    //             src={editIcon}
    //             alt="Edit Icon"
    //             boxSize="17px"
    //             objectFit="cover"
    //             cursor="pointer"
    //             onClick={() => handleEditClick(row.id)}
    //           />
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
};

export default OrderTable;
