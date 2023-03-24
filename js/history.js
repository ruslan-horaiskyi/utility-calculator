// const historyElementsArray = [];
// const tableElement = document.createElement("table");
// tableElement.className = "history_table";

// const DETAILS = document.createElement("details");
// DETAILS.className = "history_details";

// const DETAILS_SUMMARY = document.createElement("summary");
// DETAILS_SUMMARY.innerHTML = "test";

// const getHistoryElements = () => {
//   for (const key in localStorage) {
//     if (key.startsWith("H_")) {
//       historyElementsArray.push(JSON.parse(localStorage.getItem(key)));
//     }
//   }

//   for (let i = 0; i < historyElementsArray.length; i++) {
//     for (const [key, value] of Object.entries(historyElementsArray[i])) {
//       const row = document.createElement("tr");
//       row.innerHTML = `<td>${key}</td>`;
//       row.innerHTML += `<td>${value}</td>`;
//       tableElement.appendChild(row);
//     }
//   }
//   // DETAILS.appendChild(tableElement);
//   // historyOfIndicators.append(DETAILS);
// };

// getHistoryElements();

/* <details>
    <summary>Details</summary>
    Something small enough to escape casual notice.
</details> */

const historyElementsArray = [];
const getHistoryElements = () => {
  for (const key in localStorage) {
    if (key.startsWith("H_")) {
      historyElementsArray.push(JSON.parse(localStorage.getItem(key)));
    }
  }
  for (let i = 0; i < historyElementsArray.length; i++) {
    const DETAILS = document.createElement("details");
    DETAILS.className = "history_details";
    const DETAILS_SUMMARY = document.createElement("summary");
    DETAILS.appendChild(DETAILS_SUMMARY);

    const tableElement = document.createElement("table");
    tableElement.className = "history_table";
    for (const [key, value] of Object.entries(historyElementsArray[i])) {
      DETAILS_SUMMARY.innerHTML = `${historyElementsArray[i].calculation_date} /// ${historyElementsArray[i].total_to_pay}`;
      const row = document.createElement("tr");
      row.innerHTML = `<td>${key}</td>`;
      row.innerHTML += `<td>${value}</td>`;
      tableElement.appendChild(row);
    }
    DETAILS.appendChild(tableElement); // Append the table element to the details element
    historyOfIndicators.appendChild(DETAILS); // Append the details element to the body or any other parent element you want
  }
};

getHistoryElements();
