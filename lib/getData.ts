const API_KEY=process.env.API_KEY;

export default async function getData(){
    try {
        const res = await fetch(`https://api.artsearch.io/artworks/random?api-key=${API_KEY}&query=artworks`);
        if (!res.ok) {
            console.log("Unable to get artworks...");
            throw new Error("Fetch failed");
        }
        return res.json();
    } catch (error) {
        console.log("Unable to get artworks...");
        throw error;
    }

}