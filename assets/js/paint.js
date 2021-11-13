// Function to add paint name, price, and reduce opacity

let colorsArray = [
    {
        color: "Lime Green",
        id: "pn1",
        price: 14.99
    },
    {
        color: "Medium Brown",
        id: "pn2",
        price: 11.14
    },
    {
        color: "Royal Blue",
        id: "pn3",
        price: 22.99
    },
    {
        color: "Solid Red",
        id: "pn4",
        price: 13.42
    },
    {
        color: "Solid White",
        id: "pn5",
        price: 21.98
    },
    {
        color: "Solid Black",
        id: "pn6",
        price: 4.99
    },
    {
        color: "Solid Cyan",
        id: "pn7",
        price: 8.22
    },
    {
        color: "Solid Purple",
        id: "pn8",
        price: 11.99
    },
    {
        color: "Solid Yellow",
        id: "pn9",
        price: 14.99
    }
]

function setInfo (color, price) {
    if (color != null) {
    document.getElementById("color").textContent = color
    document.getElementById("ppg").textContent = '$' + price;
    } else {
        document.getElementById("color").textContent = null
        document.getElementById("ppg").textContent = "Hover over a color!" 
    }
}

// Print info + dim/undim images

function printInfo(id) {
    
    document.getElementById(id).addEventListener("mouseover", function () {
        let imageDim = document.getElementById(this.id)
        imageDim.style.filter = "brightness(50%)"
        let imageColor = colorsArray.find( colorsArray => colorsArray.id === id)
        let printColor = imageColor.color
        let printPrice = imageColor.price
        setInfo(printColor, printPrice)
    })

    document.getElementById(id).addEventListener("mouseout", function () {
        let imageBright = document.getElementById(this.id)
        imageBright.style.filter = "brightness(100%)"
        let printColor;
        let printPrice;
        setInfo(printColor, printPrice)
    })
}

printInfo("pn1")
printInfo("pn2")
printInfo("pn3")
printInfo("pn4")
printInfo("pn5")
printInfo("pn6")
printInfo("pn7")
printInfo("pn8")
printInfo("pn9")


// for (let i = 0; i < colorsArray.length; i++) {
//     let selectedColor = colorsArray[i].color
//     switch (selectedColor) {
//     case selectedColor === "Lime Green":
//         let color = "Lime Green"
//         let price = 14.99
//         setColor (color, price)
//     break;

//     case selectedColor === "Medium Brown":
//         let color = "Medium Brown"
//         let price = 11.14
//         setColor (color, price)
//     break;

//     case selectedColor === "Royal Blue":
//         let color = "Royal Blue"
//         let price = 22.99
//         setColor (color, price)
//     break;

//     case selectedColor === "Solid Black":
//         let color = "Solid Black"
//         let price = 4.99
//         setColor (color, price)
//     break;

//     case selectedColor === "Solid Cyan":
//         let color = "Solid Cyan"
//         let price = 8.22
//         setColor (color, price)
//     break;

//     case selectedColor === "Solid Purple":
//         let color = "Solid Purple"
//         let price = 11.99
//         setColor (color, price)
//     break;

//     case selectedColor === "Solid Red":
//         let color = "Solid Red"
//         let price = 13.42
//         setColor (color, price)
//     break;

//     case selectedColor === "Solid White":
//         let color = "Solid White"
//         let price = 21.98
//         setColor (color, price)
//     break;

//     case selectedColor === "Solid Yellow":
//         let color = "Solid Yellow"
//         let price = 14.99
//         setColor (color, price)
//     break;
// }
// }