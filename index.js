Projects = [
    {
        name: "University Grade Calculator",
        img: "../data/images/grade-calculator.png",
        desc:"Created with React.js, this is my first react project. I wanted to make this calculator so i cancalculate my semester and year average grade. The calculator works as expected but it haven't got all the features i wanted yet and will be working on creating those features and possibly have own backend as well to store past grade.",
        demoUrl:"https://projects.bishalbhandari.com/grade-calculator/",
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
        name: "Reversi Board Game",
        img: "../data/images/reversi.png",
        desc:"I rewrote my java code for university coursework in javascript. Reversi is a strategy board game for two players, played on an 8×8 uncheckered board. I am planning on implementing simple AI in future if i get back to the project",
        demoUrl:"https://projects.bishalbhandari.com/reversi",
        sourceCode:"https://github.com/itsbishalb/Reversi-Javascript"
    },
    {
        name: "Dead Pixel Test",
        img: "../data/images/dead-pixel-test.png",
        desc:"Simple JS script which shows different colour on screen which makes it easier for user to test for any dead pixels.",
        demoUrl:"https://projects.bishalbhandari.com/dead-pixels-test/",
        sourceCode:"https://github.com/itsbishalb/dead-pixels-test"
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

