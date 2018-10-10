function printToPage(words) {
    const main = document.getElementById("main")
    let newText = document.createTextNode(words)
    let newBreak = document.createElement("br")
    main.appendChild(newText)
    main.appendChild(newBreak)

}


function sportsQuestion() {
    fetch("http://jservice.io/api/category?id=42")
        //sports
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('Your current category is' + newTitle)


        })

}

//U.S Cities category 
function citiesQuestion() {
    fetch("http://jservice.io/api/category?id=7")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('Your current category is ' + newTitle)

        })
}

//State Capitals category
function statecapsQuestion() {
    fetch("http://jservice.io/api/category?id=109")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('Your current category is ' + newTitle)

        })
}

//Bodies of water category
function waterbodiesQuestion() {
    fetch("http://jservice.io/api/category?id=211")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('Your current category is ' + newTitle)

        })
}

//Brand names category
function brandnameQuestion() {
    fetch("http://jservice.io/api/category?id=2537")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('Your current category is ' + newTitle)

        })
}

//Fashion category
function fashionQuestion() {
    fetch("http://jservice.io/api/category?id=26")
        .then(res => res.json())
        .then(data => {
            let newTitle = data.title
            let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
            let question = randomQuestion.question
            let value = randomQuestion.value
            let answer = randomQuestion.answer
            alert(value)
            alert(question)
            prompt("Enter your answer")
            alert("Answer: " + answer)
            printToPage('Your current category is ' + newTitle)

        })
}
class jeopardyGrid {
    constructor(options) {
        this.gridArray = []
        this.numberOfRows = options.numberOfRows || 6
        this.numberOfColumns = options.numberOfColumns || 6
        this.gridContainer = document.getElementById("main")
        this.elementId = options.elementId
        this.newRows()

    }


    newRows() {
        for (let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
            this.rowIndex = rowIndex
            this.rowArray = []
            this.gridArray.push(this.rowArray)
            this.rowElement = document.createElement("div")
            this.rowElement.classList.add("newDiv")
            this.gridContainer.appendChild(this.rowElement)
            for (let columnIndex = 0; columnIndex < this.numberOfColumns; columnIndex++) {
                const cell = new jeopardyCell(rowIndex, columnIndex, this.rowElement)
                // cell.id = "cell" + (String(columnIndex))
                this.rowArray.push(cell)


            }
        }
    }
}

class jeopardyCell {
    constructor(rowIndex, columnIndex, rowParent) {
        this.rowIndex = rowIndex
        this.columnIndex = columnIndex
        this.rowParent = rowParent
        this.cellClasses = this.cellClasses
        this.createCell()
    }
    createCell() {
        this.cell = document.createElement("span")
        this.rowParent.appendChild(this.cell)
        this.cell.id = "cell" + (String(this.columnIndex))
        this.cell.classList.add("row" + (String(this.rowIndex)))
    }
}


const grid = new jeopardyGrid({

})

let categoryOne = document.getElementById("cell0")
categoryOne.innerText = "U.S. Cities"
categoryOne.addEventListener("click", citiesQuestion)


let categoryTwo = document.getElementById("cell1")
categoryTwo.innerText = "Sports"
categoryTwo.addEventListener("click", sportsQuestion)


let categoryThree = document.getElementById("cell2")
categoryThree.innerText = "State Capitals"
categoryThree.addEventListener("click", statecapsQuestion)

let categoryFour = document.getElementById("cell3")
categoryFour.innerText = "Bodies of Water"
categoryFour.addEventListener("click", waterbodiesQuestion)

let categoryFive = document.getElementById("cell4")
categoryFive.innerText = "Brand Names"
categoryFive.addEventListener("click", brandnameQuestion)


let categorySix = document.getElementById("cell5")
categorySix.innerText = "Fashion"
categorySix.addEventListener("click", fashionQuestion)