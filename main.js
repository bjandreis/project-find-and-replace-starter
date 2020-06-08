const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

const rowElements = document.querySelectorAll(".row")

function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

// 1. Add a click event listener to the replaceAllButton.
replaceAllButton.addEventListener("click", function () {
    // 2. On click but outside of a loop, assign the values of the two input textboxes ( findInput and replaceInput), so that you are only retrieving these values once per click.
    const findField = findInput.value.trim()
    const replaceWithField = replaceInput.value.trim()

    console.log('find: ' + findField)
    console.log('replace with: ' + replaceWithField)

    // 3. Write a loop which loops over the rowElements array (which is already provided in the starter code).
    for (rowIndex = 0; rowIndex < rowElements.length; rowIndex += 1) {
        // 4. Inside this loop, use the getCellElements() function (already provided in the starter code) and assign the resulting array of cell elements to a variable.
        const cellElements = getCellElements(rowElements[rowIndex])

        console.log('---------------------------- NEW ROW ----------------------------')
        let rowContent = rowElements[rowIndex].innerText
        console.log(rowContent) // check contents of row

        // 5. Write a nested loop which loops over the array of cell elements.
        for (cellIndex = 0; cellIndex < cellElements.length; cellIndex += 1) {
            console.log('---------------------------- NEW CELL ----------------------------')
            let cellContent = cellElements[cellIndex].innerHTML
            console.log(cellContent) // check contents of cell

            // 6. For each cell element, check if a cell contains the user-provided search string. Use the string method includes().
            if (cellContent.includes(findField)) {
                console.log('"' + findField+ '"' + ' found in "' + cellContent + '"')
                // 7. If a cell does contain the user-provided search string, use innerHTML and the string method replace() to replace the user-provided search string with the user-provided replacement string.
                console.log('changing ' + '"' + cellContent + '" to ' + cellContent.replace(findField, replaceWithField))
                cellElements[cellIndex].innerHTML = cellContent.replace(findField, replaceWithField)
            } else {
                console.log('"' + findField+ '"' + ' not found in "' + cellContent + '"')
            }
        }
    }
})