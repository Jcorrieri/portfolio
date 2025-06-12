document.addEventListener('DOMContentLoaded', () => {
   const galleryDiv = document.getElementById('gallery-div');
   const submitBtn = document.getElementById('search-button');
   const textfield = document.getElementById('gallery-input');
   const tagSelector = document.getElementById('tag-selector');
   const noResult = document.getElementById('no-result-div');

   submitBtn?.addEventListener('click', () => {
       noResult.classList.add('hidden');
       let query = textfield.value.trim().toUpperCase();
       let tag = tagSelector.value.replace('-', ' ');

       let visibleCount = 0;
       let galleryItems = Array.from(galleryDiv.children).slice(0, -1); // Exclude last child

       galleryItems.forEach(galleryItem => {
           let itemTitle = galleryItem.querySelector('h2')?.textContent.trim().toUpperCase() || '';
           let itemTags = Array.from(galleryItem.querySelectorAll('li')).map(li => li.textContent);

           let matchesTag = tag === "All" || itemTags.includes(tag);
           let matchesQuery = itemTitle.includes(query);

           if (matchesTag && matchesQuery) {
               galleryItem.classList.remove('hidden');
               visibleCount++;
           } else {
               galleryItem.classList.add('hidden');
           }
       });

       noResult.classList.toggle('hidden', visibleCount !== 0);
   });
});