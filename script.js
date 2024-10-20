document.addEventListener("DOMContentLoaded", function() {
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then(response => response.json())
      .then(data => {
        const apiContent = document.getElementById('api-content');
        data.forEach(item => {
          const div = document.createElement('div');
          div.className = 'api-item';
          div.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
          apiContent.appendChild(div);
        });
      })
      .catch(error => console.error('Hiba az API hívás során:', error));
  });
