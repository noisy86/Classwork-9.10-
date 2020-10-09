import {generateNewsBox} from "./components";

const articles = [
    {
        title: 'Article 1',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 2',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 3',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 4',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 5',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 6',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 7',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 8',
        description: 'Lorem ipsum'
    },
];

window.onload = function() {

    for (let i = 0; i<articles.length; i++){
      generateNewsBox(articles[i].title, articles[i].description);
    }
}
