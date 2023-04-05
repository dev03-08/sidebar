const body = document.querySelector('body')
const sidebar = document.querySelector('.sidebar')
const toggle = document.querySelector('.toggle')
const searchbtn = document.querySelector('.search-box')
const modeSwitch = document.querySelector('.mode')
const modeText = document.querySelector('.mode-text')


toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
})

searchbtn.addEventListener('click', () => {
    sidebar.classList.remove('close');
})

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        modeText.innerHTML = "Light Mode"
    } else {
        modeText.innerHTML = "Dark Mode"
    }
})