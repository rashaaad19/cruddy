import { useEffect } from "react";
import { AddTableARIA } from "../utilties/tableRoles";
import { Table } from "./Styled-Components/TableComponent";

const DataTable = () => {
  //running the function on the initial render
  useEffect(() => {
    AddTableARIA();
  });

  return (
    <Table>
      <caption>Employees</caption>
      <tbody>
        <tr>
          <th>No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>John</td>
          <td>Doe</td>
          <td>john.doe@example.com</td>
          <td>$50,000</td>
          <td>2023-01-15</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane</td>
          <td>Smith</td>
          <td>jane.smith@example.com</td>
          <td>$55,000</td>
          <td>2023-03-22</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Michael</td>
          <td>Johnson</td>
          <td>michael.johnson@example.com</td>
          <td>$60,000</td>
          <td>2023-06-10</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Emily</td>
          <td>Brown</td>
          <td>emily.brown@example.com</td>
          <td>$65,000</td>
          <td>2023-07-01</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Chris</td>
          <td>Davis</td>
          <td>chris.davis@example.com</td>
          <td>$70,000</td>
          <td>2023-05-19</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Patricia</td>
          <td>Wilson</td>
          <td>patricia.wilson@example.com</td>
          <td>$75,000</td>
          <td>2023-04-25</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>7</td>
          <td>David</td>
          <td>Miller</td>
          <td>david.miller@example.com</td>
          <td>$80,000</td>
          <td>2023-02-14</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Sarah</td>
          <td>Martinez</td>
          <td>sarah.martinez@example.com</td>
          <td>$85,000</td>
          <td>2023-06-28</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>9</td>
          <td>James</td>
          <td>Anderson</td>
          <td>james.anderson@example.com</td>
          <td>$90,000</td>
          <td>2023-01-10</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Mary</td>
          <td>Lee</td>
          <td>mary.lee@example.com</td>
          <td>$95,000</td>
          <td>2023-03-30</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Robert</td>
          <td>Harris</td>
          <td>robert.harris@example.com</td>
          <td>$100,000</td>
          <td>2023-05-07</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Linda</td>
          <td>Clark</td>
          <td>linda.clark@example.com</td>
          <td>$105,000</td>
          <td>2023-07-03</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>13</td>
          <td>Daniel</td>
          <td>Rodriguez</td>
          <td>daniel.rodriguez@example.com</td>
          <td>$110,000</td>
          <td>2023-06-15</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>14</td>
          <td>Barbara</td>
          <td>Lewis</td>
          <td>barbara.lewis@example.com</td>
          <td>$115,000</td>
          <td>2023-04-18</td>
          <td>Edit | Delete</td>
        </tr>
        <tr>
          <td>15</td>
          <td>Steven</td>
          <td>Walker</td>
          <td>steven.walker@example.com</td>
          <td>$120,000</td>
          <td>2023-03-21</td>
          <td>Edit | Delete</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default DataTable;
