document.getElementById('searchForm').addEventListener('submit',function (event) {
    event.preventDefault();
    const searchQuery = document.getElementById('q').value;
    const queryString = encodeURIComponent(q);
    window.location.href = 'https://www.4399.com/';
    console.log("zhu");
})