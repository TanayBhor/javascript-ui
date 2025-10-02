const mainList = document.querySelector('.main');
const btn = document.querySelector(".scrollTopBtn");

async function fetchData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        console.log(data);

        for(let i=0; i<data.length; i++){
            const li = document.createElement('li');
            li.textContent = `${i + 1}. ${data[i].title}`;
            mainList.appendChild(li);
        }
    } catch (error) {
        console.log(error);
    }
}

fetchData()

btn.addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior: 'smooth'})
})