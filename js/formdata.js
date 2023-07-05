document.getElementById('submit').addEventListener('click', () => {
    let name = document.getElementsByName('name')[0].value;
    let surname = document.getElementsByName('surname')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let title = document.getElementsByName('title')[0].value;
    let content = document.getElementsByName('content')[0].value;

    localStorage.setItem('name', name);
    localStorage.setItem('surname', surname);
    localStorage.setItem('email', email);
    localStorage.setItem('title', title);
    localStorage.setItem('content', content);
});