async function searchResults(keyword) {
    const encodedKeyword = encodeURIComponent(keyword);
    const json = await fetch(`https://anime-pahe.vercel.app/api/searchResults/${encodedKeyword}`);
    return JSON.parse(json);
}

async function extractDetails(url) {
}

async function extractEpisodes(url) {  
}

async function extractStreamUrl(url) {
}