Projects = [
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

