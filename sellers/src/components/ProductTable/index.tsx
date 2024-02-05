import React from "react";
import { Checkbox, IconButton, Image } from "@chakra-ui/react";
import editIcon from "../../assets/Images/editing.png";
import "./index.css";

const ProductsTable = ({ data }) => {
  const handleRowClick = (productId) => {
    // Handle row click here
    console.log(`Row clicked for product ${productId}`);
  };

  const handleEditClick = (productId) => {
    // Handle edit icon click here
    console.log(`Edit icon clicked for product ${productId}`);
  };

  return (
    <table className="simplex-table">
      <thead>
        <tr>
          <th>Product Category</th>
          <th>Stock</th>
          <th>Price</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} onClick={() => handleRowClick(row.id)}>
            
            <td>{row.productCategory}</td>
            <td>{row.stock}</td>
            <td>{row.price}</td>
            <td>
            <Image
                src={editIcon}
                alt="Edit Icon"
                boxSize="17px"
                objectFit="cover"
                cursor="pointer"
                onClick={() => handleEditClick(row.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
