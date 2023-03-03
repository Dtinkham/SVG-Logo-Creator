const inquirer = require('inquirer')
const fs = require('fs')
const classes = require('./library/classes')
const shape = require('./library/classes')

const choice = shape

// console.log(square)
// let logo = triangle 


inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter the text for your logo, up to 3 characters',
            name: 'logoText',
            validate: function(reply){
                if (reply.length > 3) {
                    return "Text can be a maximum of 3 characters"    
                }
                else if (reply.length < 1) {
                    return "Text must be a minimum of 1 charter"
                }
                else
                    return true
            }
        },
        {
            type: 'input',
            message: 'Please enter a color or hexadecimal number for your logo text',
            name: 'logoTextColor',
        },
        {
            type: 'list',
            message: 'Please choose a shape for your logo background',
            name: 'logoBackgroundShape',
            choices: ['Square','Triangle','Circle']
        },
        {
            type: 'input',
            message: 'Please enter a color for your logo background',
            name: 'logoBackgroundColor',
        },    
    ])

    .then((response)=> {
        const {logoText,logoTextColor,logoBackgroundShape,logoBackgroundColor} = response
         let logo = choice 

        fs.writeFile('examples/logo.svg', logo, (err) =>
         err ? console.error(err) : console.log('Success!')
        )   
        })
        
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
 
    
 
    




