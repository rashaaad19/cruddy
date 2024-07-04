//functino to add aria roles to each table cell
export function AddTableARIA() {
    try {
      let allTables = document.querySelectorAll('table');
      for (let i = 0; i < allTables.length; i++) {
        allTables[i].setAttribute('role', 'table');
      }
      let allCaptions = document.querySelectorAll('caption');
      for (let i = 0; i < allCaptions.length; i++) {
        allCaptions[i].setAttribute('role', 'caption');
      }
      let allRowGroups = document.querySelectorAll('thead, tbody, tfoot');
      for (let i = 0; i < allRowGroups.length; i++) {
        allRowGroups[i].setAttribute('role', 'rowgroup');
      }
      let allRows = document.querySelectorAll('tr');
      for (let i = 0; i < allRows.length; i++) {
        allRows[i].setAttribute('role', 'row');
      }
      let allCells = document.querySelectorAll('td');
      for (let i = 0; i < allCells.length; i++) {
        allCells[i].setAttribute('role', 'cell');
      }
      let allHeaders = document.querySelectorAll('th');
      for (let i = 0; i < allHeaders.length; i++) {
        allHeaders[i].setAttribute('role', 'columnheader');
      }
      // this accounts for scoped row headers
      let allRowHeaders = document.querySelectorAll('th[scope=row]');
      for (let i = 0; i < allRowHeaders.length; i++) {
        allRowHeaders[i].setAttribute('role', 'rowheader');
      }
    } catch (e) {
      console.log("AddTableARIA(): " + e);
    }
  }
