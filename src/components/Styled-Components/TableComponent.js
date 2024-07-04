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
  caption {
    text-align: left;
    background: hsl(0deg 0% 94.33%);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  th {
    background: hsl(0 0% 92% / 0.9);
    text-align: start;
  }
  tr:nth-of-type(2n) {
    background: hsl(0 1% 95% / 0.7);
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
    td:nth-of-type(1)::before {
      content: "number";
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
