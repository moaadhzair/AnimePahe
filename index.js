const app = require('express')();
const PORT = 3000;





app.get('/api/searchResults/:keyword', (req, res) => {
    const { keyword } = req.params;
    searchResults(keyword)
        .then(data => res.send(data))
        .catch(error => res.send(error));
    
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


async function searchResults(keyword) {
    try {
        const encodedKeyword = encodeURIComponent(keyword);
        const response = await fetch(`https://animepahe.ru/api?m=search&q=${encodedKeyword}`, {
            headers: {
                'Cookie': '__ddg2_=hello'
            }
        });

        const data = await response.json();

        const filteredAnimes = data.data;
        //Filtering out anime's that don't have dub until we fix soft subs issue
        
        const transformedResults = filteredAnimes.map(anime => ({
            title: anime.title,
            image: anime.poster,
            href: `https://animepahe.ru/anime/${anime.session}`
        }));
        
        return JSON.stringify(transformedResults);
        
    } catch (error) {
        console.log('Fetch error:', error);
        return JSON.stringify([{ title: 'Error', image: '', href: '' }]);
    }
}




/*
    title
    image
    description
*/




