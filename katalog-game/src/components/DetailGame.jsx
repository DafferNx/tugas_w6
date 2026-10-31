export default function DetailGame({ dataGame, onClose }) {
    const { preview, title, price, desc, genre, size } = dataGame;

    return (
        <div className="bg-white rounded-xl p-6 flex flex-col gap-4 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex justify-start">
                <button className='cursor-pointer hover:text-white hover:bg-black font-semibold px-3 py-1 rounded-md'
                    onClick={onClose}
                >&larr; Back</button>
            </div>


            <img className="w-full h-auto max-h-72 object-contain rounded-lg mx-auto" src={preview} alt={`Cover ${title}`} />

            <div>
                <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
                <p className="text-lg font-semibold text-slate-600 leading-relaxed">Rp. {price.toLocaleString('id-ID')},00</p>
            </div>

            <p className="text-slate-600 leading-relaxed">{desc}</p>

            <div>
                <p className="text-sm font-semibold text-slate-800 mb-2">Genre: </p>
                <ul className="flex flex-wrap gap-2">
                    {genre.map((item) => (
                        <li key={item}
                            className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-sm text-slate-700"
                        >{item}</li>
                    ))}
                </ul>
            </div>

            <p className="text-sm font-medium text-slate-500 mt-2">Size: {size} GB</p>
        </div>
    )
}