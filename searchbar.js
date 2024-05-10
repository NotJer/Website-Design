document.getElementById('searchButton').addEventListener('click', function() {
    var searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; 

    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var href = link.getAttribute('href');
        if (href && href.endsWith('.html')) {
            fetch(href)
                .then(response => response.text())
                .then(html => {
                    if (html.toLowerCase().includes(searchTerm)) {
                        var resultItem = document.createElement('div');
                        resultItem.textContent = 'Found in ' + href;
                        searchResults.appendChild(resultItem);
                    }
                })
                .catch(error => console.error('Error fetching ' + href + ':', error));
        }
    }
});
