Projects = [
    {
        name: "University Grade Calculator",
        img: "../data/images/grade-calculator.png",
        desc:"Created with React.js, this is my first react project. I wanted to make this calculator so i cancalculate my semester and year average grade. The calculator works as expected but it haven't got all the features i wanted yet and will be working on creating those features and possibly have own backend as well to store past grade.",
        demoUrl:"https://projects.bishalbhandari.com/university-grade-calculator/",
        sourceCode:"https://github.com/itsbishalb/grade-calculator"
    },
    {
        name: "Password Generator",
        img: "../data/images/password-generator.png",
        desc:"My first javascript project and i am currently using this to create safe password for my online accounts. In future i am planning on making this more user friendly by letting them choose the characters that they want in password.",
        demoUrl:"https://projects.bishalbhandari.com/password-generator/",
        sourceCode:"https://github.com/itsbishalb/Password-Generator"
    },
    {
        name: "Password Generator",
        img: "../data/images/password-generator.png",
        desc:"My first javascript project and i am currently using this to create safe password for my online accounts. In future i am planning on making this more user friendly by letting them choose the characters that they want in password.",
        demoUrl:"https://projects.bishalbhandari.com/password-generator/",
        sourceCode:"https://github.com/itsbishalb/Password-Generator"
    }
]

function loadHtml () {
        return Projects.map((project) => {
            return `<div class="project-info">
            <h1>${project.name}</h1>
            <img alt="${project.name} project" class="project-image"src=${project.img} />
            <p>${project.desc}
            </p>
            <a class="url" href="${project.sourceCode}">Source Code</a>
            <a class="url" href="${project.demoUrl}">Demo Website</a>
        </div>`
        }).join('')
}

document.getElementById ('container').innerHTML = loadHtml()

