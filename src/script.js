document.querySelectorAll('.accordion li').forEach((li) => li.addEventListener("click", () => {
    if(li.classList.contains('active')) {
        li.classList.toggle('active');
    } else {
        document.querySelectorAll('.accordion li').forEach((li) => li.classList.remove('active'));
        li.classList.add('active');
    }
}));
