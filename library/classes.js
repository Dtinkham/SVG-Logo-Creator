
response = require('./index')

// class Square{
//     constructor(fontSize,fill,width,height,backgroundColor,textColor,text,page)
    
//     font= "100" 
//     fill= `${logoBackgroundColor}`
    
//     backgroundColor= `${logoBackgoundColor}`
//     textColor= `${logoTextColor}`
//     text= `${logoText}`
//     page= `<svg xmlns="http://www.w3.org/2000/svg" width = "${Square.width}" height="${Square.height}">
//     <rect fill="${logoBackgroundColor}" width = "${Square.width}" height = "${Square.height}"/>
//     <text font-size="${Square.fontSize}" text-anchor="middle" alignment-baseline="central" fill="${logoTextColor}">${logoText}</text>
//   </svg>`

// }

// class Triangle extends Square {
//     constructor(points, text, textColor, backgroundColor, height, width, fontSize, page){
//     points = "0,0 -150,-150 150,-150",
//     page = `<svg xmlns="http://www.w3.org/2000/svg" width = "${Square.width}" height="${Square.height}">
//     <polygon points="${Triangle.points}" fill="${logoBackgroundColor}" width = "${Square.width}" height = "${Square.height}"/>
//     <text font-size="${Square.fontSize}" text-anchor="middle" alignment-baseline="central" fill="${logoTextColor}">${logoText}</text>
//   </svg>`
//     super(text, textColor, backgroundColor, height, width, fontSize)
//     test
        
        
//     }
// }


// class Circle extends Square {
//     constructor(radius,text, textColor, backgroundColor, height, width, fontSize, page){
//         super(text, textColor, backgroundColor, height, width, fontSize)
//         radius = "150"
//         page = `<svg xmlns="http://www.w3.org/2000/svg" width = "${Square.width}" height="${Square.height}">
//         <circle r="${Circle.radius}" fill="${logoBackgroundColor}" width = "${Square.width}" height = "${Square.height}"/>
//         <text font-size="${Square.fontSize}" text-anchor="middle" alignment-baseline="central" fill="${logoTextColor}">${logoText}</text>
//       </svg>` 
//     }
// }
// //


function triangle() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width = "300" height="300">
    <polygon points= 0,0 -150,-150 150,-150  fill="Blue" width = "300" height = "300"/>
    <text font-size="100" text-anchor="middle" alignment-baseline="central" fill="Red">DST</text>
  </svg>`
}
function Circle() {
    return `<svg xmlns="http://www.w3.org/2000/svg">
                <circle r="150" fill="${logoBackgroundColor}" width = "300" height = "300"/>
                <text font-size="100" fill="${response.logoText}">${logoText}</text>
            </svg>` 
}
function Square() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width = "300" height="300">
    <polygon points= 0,0 -150,-150 150,-150  fill="Blue" width = "300" height = "300"/>
    <text font-size="100" text-anchor="middle" alignment-baseline="central" fill="Red">DST</text>
  </svg>`
}

const shape = triangle()


module.exports = shape