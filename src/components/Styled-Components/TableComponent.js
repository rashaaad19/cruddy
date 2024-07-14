import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: white;
  padding: 1rem;
  color: #323232;
  border-collapse: collapse;
  caption,
  th,
  td {
    padding: 1rem;
  }
  td {
    font-weight: 600;
  }
  th {
    font-weight: 700;
  }
  caption {
    text-align: left;
    background: #d371e4ab;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #45094e;
  }
  th {
    background: #d535e745;
    text-align: start;
    color: #4f4350;
  }
  tr {
    color: #240031;
  }
  tr:nth-of-type(2n) {
    background: #b942c417;
  }
  @media (max-width: 650px) {
    th {
      display: none;
    }
    td {
      display: grid;
      grid-template-columns: 15ch auto;
      padding: 0.5rem 1rem;
    }
    td:first-child {
      padding-top: 2rem;
    }
    td:last-child {
      padding-bottom: 2rem;
    }
    td::before {
      font-weight: 700;
      text-transform: capitalize;
    }
    
    //override content before the loading spinner
    #loadingCell::before{
      content:none
    }

    
    td:nth-of-type(1)::before {
      content: "ID";
    }
    td:nth-of-type(2)::before {
      content: "first name";
    }
    td:nth-of-type(3)::before {
      content: "last name";
    }
    td:nth-of-type(4)::before {
      content: "email";
    }
    td:nth-of-type(5)::before {
      content: "salary";
    }
    td:nth-of-type(6)::before {
      content: "date";
    }
    td:nth-of-type(7)::before {
      content: "actions";
    }
  }
`;
