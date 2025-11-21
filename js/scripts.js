let birthyear = 2007;
let currentYear = new Date().getFullYear(); // get this year
let age = currentYear - birthyear

const me = { name: "Nick", lastname: "Decoster", age };
const { name, lastname } = me;

document.getElementById("age").textContent = age;
document.getElementById("name").textContent = name;
document.getElementById("lastname").textContent = lastname;

const projects = [
    { name: "Project1", Difficulty: "easy" },
    { name: "Project2", Difficulty: "hard" }
];

const displayProjects = () => {
    document.getElementById("projects").innerHTML =
        projects.map(p => `${p.name} (${p.Difficulty})`).join("<br>");
};

displayProjects();



