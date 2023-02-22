const historyElementsArray = [];
const tableElement = document.createElement("table");

historyOfIndicators.append(tableElement);

const getHistoryElements = () => {
  for (const key in localStorage) {
    if (key.startsWith("H_")) {
      historyElementsArray.push(JSON.parse(localStorage.getItem(key)));
    }
  }

  for (let i = 0; i < historyElementsArray.length; i++) {
    for (const [key, value] of Object.entries(historyElementsArray[i])) {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${key}</td>`;
      row.innerHTML += `<td>${value}</td>`;
      tableElement.appendChild(row);
    }
  }
};

getHistoryElements();
