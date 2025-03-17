async function searchResults(keyword) {
    const encodedKeyword = encodeURIComponent(keyword);
    const json = await fetch(`https://anime-pahe.vercel.app/api/searchResults/${encodedKeyword}`);
    const finaljson = await json.json();
    return finaljson;
}

async function extractDetails(url) {
}

async function extractEpisodes(url) {  
}

async function extractStreamUrl(url) {
}