export default function CardGame({ dataGame, onClick }) {
    const { preview, title, price, desc, genre, size } = dataGame;

    return (
        <div onClick={onClick}
            className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
        >
            <div className="cursor-pointer w-full h-72">
                <img src={preview} alt={`Gambar ${title}`}
                    className="w-full h-full object-cover" />

            </div>
            <div className="py-2 px-3" >
                <h2 className=" text-lg font-bold text-slate-900 line-clamp-2">{title}</h2>
                <p>Rp. {price.toLocaleString('id-ID')},00</p>
            </div>
        </div>
    )
}