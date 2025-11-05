import getData from "@/lib/getData"
import {ArtTypes} from "@/types/ArtTypes";

export default async function Home() {
    let art: ArtTypes;

    try {
        art = await getData()
    } catch {
        // We already logged in getData.ts so we can also show something to the user
        return <p className="p-8 min-h-screen"> Unable to load Artwork :(</p>
    }


    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-4">{art.title}</h1>
            <img
                src={art.image}
                alt={art.title}
                width={400}
                height={400}
                className="rounded-lg shadow-md mb-4"
            />
            <p className="text-white-700 mb-2">
                <strong>Created:</strong> {art.start_date}–{art.end_date}
            </p>

            <p className="text-white-800 leading-relaxed">{art.description}</p>
        </main>
  );
}
