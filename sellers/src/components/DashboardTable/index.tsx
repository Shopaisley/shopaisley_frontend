import React from "react";
import './index.css'

const DashboardTable = ({ data}) => {
  return (
    <table className="simple-table">
      <thead>
        <tr>
          
          <th>Number</th>
          <th>Name</th>
          <th>Country</th>
          <th>Status</th>
          <th>Date</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.number}</td>
            <td>{row.name}</td>
            <td>{row.country}</td>
            <td>{row.status}</td>
            <td>{row.date}</td>
            <td>{row.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DashboardTable;
