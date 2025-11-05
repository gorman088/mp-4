export default function Home() {
    return (
        <main>
            <section className="p-8 text-center items-center justify-center">
                <h1 className="text-3xl font-bold mb-4"> Welcome to the Art Gallery </h1>
                <p> Historical artwork and artefacts provide valuable insight into the cultures, beliefs, and creativity of past
                    civilizations. By exploring these works, we gain a deeper understanding of how art has shaped human
                    history and continues to inspire modern expression. This application uses the ArtSearch API to
                    display random, freely available pieces of art, allowing users to discover and learn about artwork
                    from different time periods for both educational and entertainment purposes. Use the navigation bar
                    above to explore featured artworks and begin your journey through history.
                </p>
                <div className="flex justify-center gap-6 mt-8 flex-wrap">
                    <div className="text-center">
                        <img
                            src="/StarryNight.jpg"
                            alt="Starry Night"
                            className="rounded-lg shadow-md w-[400px] h-[500px]"
                        />
                        <p className="mt-2 font-semibold"> &#34;Starry Night&#34; (1889)</p>
                        <p className="text-sm"> Vincent Van Gogh</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="/Napoleon.jpg"
                            alt="Napoleon"
                            className="rounded-lg shadow-md w-[400px] h-[500px]"
                        />
                        <p className="mt-2 font-semibold"> &#34;Napoleon Crossing the Alps&#34; (1801-1805)</p>
                        <p className="text-sm"> Jacques-Louis David</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="/Wanderer.jpeg"
                            alt="Wanderer"
                            className="rounded-lg shadow-md w-[400px] h-[500px]"
                        />
                        <p className="mt-2 font-semibold"> &#34;Wanderer above the Sea of Fog&#34;(1818)</p>
                        <p className="text-sm"> Caspar David Friedrich </p>
                    </div>
                </div>
            </section>
        </main>
    );
}