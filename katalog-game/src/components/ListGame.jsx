import { useState } from "react"
import CardGame from "./CardGame"
import DetailGame from "./DetailGame"

export default function ListGame({ dataGame }) {
    const [selectedGame, setSelectedGame] = useState(null);

    return (
        <div className="bg-white my-6 p-6 rounded-lg">
            {dataGame.length === 0 ? ("Belum ada data Game") :
                (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {dataGame.map((item) => (
                            <CardGame
                                onClick={() => { setSelectedGame(item) }}
                                key={item}
                                dataGame={item}
                            />
                        ))}
                    </div>
                )}

            {selectedGame && (
                <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center p-4">
                    <DetailGame
                        dataGame={selectedGame}
                        onClose={() => setSelectedGame(null)}
                    />
                </div>
            )}
        </div>
    )
}