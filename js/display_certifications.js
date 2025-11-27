const programmingLanguages = [
    { 
        language: "Javascript", 
        level: "Beginner",
        img: "../../images/js.png"
    },
    {
        language: "Python",
        level: "Intermediate",
        img: "../../images/python.webp"
    },
    {
        language: "PostgreSQL",
        level: "Advanced",
        img: "../../images/postgresql.png"
    }
];

const programmingDisplay = document.createElement('div');
programmingDisplay.classList.add("programming-container");

programmingLanguages.forEach(item => {
    const card = document.createElement('div');
    card.classList.add("programming-card");

    if (item.img) {
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.language;
        card.appendChild(img);
    }

    const name = document.createElement('div');
    name.textContent = item.language;
    name.classList.add("name");

    const level = document.createElement('div');
    level.textContent = item.level;
    level.classList.add("level");

    card.append(name, level);
    programmingDisplay.appendChild(card);
});

document.body.appendChild(programmingDisplay);
