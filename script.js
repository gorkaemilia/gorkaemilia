document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/?results=3')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            data.results.forEach(user => {
                const project = document.createElement('div');
                project.classList.add('project');
                project.innerHTML = `
                    <img src="${user.picture.large}" alt="${user.name.first}">
                    <h3>${user.name.first} ${user.name.last}</h3>
                    <p>${user.email}</p>
                `;
                projectList.appendChild(project);
            });
        });
});
