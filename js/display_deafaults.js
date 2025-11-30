

// create navigation
const elementsInNav = ["index.html","studies.html", "certifications.html", "intrests.html"];

const navigation = document.createElement('nav');
const ul = document.createElement('ul');

elementsInNav.forEach(element => {
    const li = document.createElement('li');
    
    // Create clickable link
    const a = document.createElement('a');
    a.href = element;
    a.textContent = element.replace('.html', ''); // optional: cleaner text, prePend: display js before html loads

    li.appendChild(a);
    ul.appendChild(li);
});

navigation.appendChild(ul);
document.body.prepend(navigation); // make it show on page
// create footer
const statusFooter = document.createElement('footer');
statusFooter.id = "footercontent"
// put content in footer
statusFooter.append("© 2025 Nick Decoster")
// append footer to body (this makes it visible on the page)
document.body.appendChild(statusFooter);

// create stylesheet
const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "../css/styles.css"
document.head.appendChild(cssLink);



