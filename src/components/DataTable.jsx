import { useEffect } from "react";
import { AddTableARIA } from "../utilties/tableRoles";
import { Table } from "./Styled-Components/TableComponent";

const DataTable = () => {
  useEffect(() => {
    AddTableARIA();
  });

  return (
    <Table>
      <caption>Employees</caption>
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
        <td>1</td> {/* No. */}
        <td>John</td> {/* First Name */}
        <td>Doe</td> {/* Last Name */}
        <td>john.doe@example.com</td> {/* Email */}
        <td>$50,000</td> {/* Salary */}
        <td>2023-01-15</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>2</td> {/* No. */}
        <td>Jane</td> {/* First Name */}
        <td>Smith</td> {/* Last Name */}
        <td>jane.smith@example.com</td> {/* Email */}
        <td>$55,000</td> {/* Salary */}
        <td>2023-03-22</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>3</td> {/* No. */}
        <td>Michael</td> {/* First Name */}
        <td>Johnson</td> {/* Last Name */}
        <td>michael.johnson@example.com</td> {/* Email */}
        <td>$60,000</td> {/* Salary */}
        <td>2023-06-10</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>4</td> {/* No. */}
        <td>Emily</td> {/* First Name */}
        <td>Brown</td> {/* Last Name */}
        <td>emily.brown@example.com</td> {/* Email */}
        <td>$65,000</td> {/* Salary */}
        <td>2023-07-01</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>5</td> {/* No. */}
        <td>Chris</td> {/* First Name */}
        <td>Davis</td> {/* Last Name */}
        <td>chris.davis@example.com</td> {/* Email */}
        <td>$70,000</td> {/* Salary */}
        <td>2023-05-19</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>6</td> {/* No. */}
        <td>Patricia</td> {/* First Name */}
        <td>Wilson</td> {/* Last Name */}
        <td>patricia.wilson@example.com</td> {/* Email */}
        <td>$75,000</td> {/* Salary */}
        <td>2023-04-25</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>7</td> {/* No. */}
        <td>David</td> {/* First Name */}
        <td>Miller</td> {/* Last Name */}
        <td>david.miller@example.com</td> {/* Email */}
        <td>$80,000</td> {/* Salary */}
        <td>2023-02-14</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>8</td> {/* No. */}
        <td>Sarah</td> {/* First Name */}
        <td>Martinez</td> {/* Last Name */}
        <td>sarah.martinez@example.com</td> {/* Email */}
        <td>$85,000</td> {/* Salary */}
        <td>2023-06-28</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>9</td> {/* No. */}
        <td>James</td> {/* First Name */}
        <td>Anderson</td> {/* Last Name */}
        <td>james.anderson@example.com</td> {/* Email */}
        <td>$90,000</td> {/* Salary */}
        <td>2023-01-10</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>10</td> {/* No. */}
        <td>Mary</td> {/* First Name */}
        <td>Lee</td> {/* Last Name */}
        <td>mary.lee@example.com</td> {/* Email */}
        <td>$95,000</td> {/* Salary */}
        <td>2023-03-30</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>11</td> {/* No. */}
        <td>Robert</td> {/* First Name */}
        <td>Harris</td> {/* Last Name */}
        <td>robert.harris@example.com</td> {/* Email */}
        <td>$100,000</td> {/* Salary */}
        <td>2023-05-07</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>12</td> {/* No. */}
        <td>Linda</td> {/* First Name */}
        <td>Clark</td> {/* Last Name */}
        <td>linda.clark@example.com</td> {/* Email */}
        <td>$105,000</td> {/* Salary */}
        <td>2023-07-03</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>13</td> {/* No. */}
        <td>Daniel</td> {/* First Name */}
        <td>Rodriguez</td> {/* Last Name */}
        <td>daniel.rodriguez@example.com</td> {/* Email */}
        <td>$110,000</td> {/* Salary */}
        <td>2023-06-15</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>14</td> {/* No. */}
        <td>Barbara</td> {/* First Name */}
        <td>Lewis</td> {/* Last Name */}
        <td>barbara.lewis@example.com</td> {/* Email */}
        <td>$115,000</td> {/* Salary */}
        <td>2023-04-18</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
      <tr>
        <td>15</td> {/* No. */}
        <td>Steven</td> {/* First Name */}
        <td>Walker</td> {/* Last Name */}
        <td>steven.walker@example.com</td> {/* Email */}
        <td>$120,000</td> {/* Salary */}
        <td>2023-03-21</td> {/* Date */}
        <td>Edit | Delete</td> {/* Actions */}
      </tr>
    </Table>
  );
};

export default DataTable;
