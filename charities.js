'use strict';

const charityData = [
    {
        name: "CDP COVID-19 Response Fund",
        link: "https://disasterphilanthropy.org/donate-to-the-cdp-covid-19-response-fund/",
        description: "Help the Center for Disaster Philanthropy (CDP) support " +
        "preparedness, containment efforts, response and recovery activities " +
        "for those affected by COVID-19 and for the responders."
    },
    {
        name: "American Civil Liberties Union (ACLU) Foundation",
        link: "https://action.aclu.org/give/now",
        description: "To maintain and advance civil liberties, " +
        "including, without limitation, the freedoms of association, " +
        "press, religion, and speech, and the rights to the franchise, " +
        "to due process of law, and to equal protection of the laws for all " +
        "people throughout the United States and its jurisdictions."
    },
    {
        name: "NAACP Legal Defense and Educational Fund",
        link: "https://www.naacpldf.org/",
        description: "To support litigation in the areas of poverty " +
        "and justice, education, voting rights, fair employment, " +
        "capital punishment, administration of criminal justice, " +
        "and to increase educational opportunities through scholarships."
    },
]


let charityCardTemplate = document.querySelector('template');
let charities = document.getElementById("charities")

function fetchCharities() {
    charityData.forEach(data => {
        let node = document.importNode(charityCardTemplate.content, true);
        node.getElementById("charityName").innerHTML = data.name;
        node.getElementById("charityLink").innerHTML = data.link;
        node.getElementById("charityDesc").innerHTML = data.description;
        charities.appendChild(node);
    })
}

fetchCharities();
