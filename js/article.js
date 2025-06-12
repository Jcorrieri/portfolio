import { marked } from 'marked';
import DOMPurify from 'dompurify';

const params = new URLSearchParams(window.location.search);
const article = params.get('article');

document.addEventListener('DOMContentLoaded', () => {
   const articleContainer = document.getElementById('article');

   fetch(`./articles/${article}.md`)
       .then(response => response.text())
       .then(markdown => {
           const rawHTML = marked.parse(markdown);
           const cleanHTML = DOMPurify.sanitize(rawHTML);

           articleContainer.innerHTML = cleanHTML;
       })
       .catch(error => {
          console.log(error);
       });
});