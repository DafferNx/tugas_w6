import { useState } from "react";


export default function FormTambahGame({ onAddGame }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState();
    const [genre, setGenre] = useState("");
    const [size, setSize] = useState();
    const [coverImg, setCoverImg] = useState(null);
    const [previewURL, setPreviewURL] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const dataGame = {
            title: title,
            desc: desc,
            price: Number(price),
            genre: genre.split(', ').map((item) => item.trim()),
            size: Number(size),
            coverImg: coverImg,
            preview: previewURL
        }

        onAddGame(dataGame);
    }

    const handleImg = (e) => {
        const file = e.target.files[0];

        if (file) {
            setCoverImg(file);
            setPreviewURL(URL.createObjectURL(file));
        }
    }

    return (
        <div className="my-4">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <h2 className="text-xl flex justify-center font-bold">Tambah Game</h2>

                <div className="flex flex-col gap-1">
                    <label className="mb-2 font-semibold" htmlFor="inputJudul">Judul Game</label>
                    <input
                        id="inputJudul"
                        type="text"
                        value={title}
                        placeholder="Contoh: Grand Theft Auto 5"
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-black focus:ring-1"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="mb-2 font-semibold" htmlFor="inputDeskripsi">Deskripsi</label>
                    <textarea
                        id="inputDeskripsi"
                        value={desc}
                        placeholder="Deskripsi Game"
                        onChange={(e) => setDesc(e.target.value)}
                        className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-black focus:ring-1"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="mb-2 font-semibold" htmlFor="inputHarga">Harga</label>
                    <input
                        id="inputHarga"
                        type="text"
                        value={price}
                        placeholder="Contoh: 12000"
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-black focus:ring-1"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="mb-2 font-semibold" htmlFor="inputGenre">Genre</label>
                    <input
                        id="inputGenre"
                        type="text"
                        value={genre}
                        placeholder="Contoh: Action, RPG, Open World"
                        onChange={(e) => setGenre(e.target.value)}
                        className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-black focus:ring-1"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="mb-2 font-semibold" htmlFor="inputSize">Ukuran Game</label>
                    <input
                        id="inputSize"
                        type="text"
                        value={size}
                        placeholder="Ukuran dalam GB"
                        onChange={(e) => setSize(e.target.value)}
                        className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-black focus:ring-1"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="mb-2 font-semibold" htmlFor="inputImg">Gambar Cover</label>
                    <input
                        id="inputImg"
                        type="file"
                        accept="image/*"
                        onChange={handleImg}
                        className="block w-full text-sm text-slate-500 
                            file:mr-4 file:py-2 file:px-4 
                            file:rounded-md file:border-0 
                            file:text-sm file:font-semibold 
                            file:bg-blue-50 file:text-blue-700 
                            hover:file:bg-blue-100 cursor-pointer"
                    />

                    {previewURL && <img src={previewURL} alt="" />}

                </div>

                <div className="flex flex-col gap-1">
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-black hover:bg-blue-700 text-white font-semibold py-2 rounded-md mt-2 transition"
                    >Tambah</button>
                </div>
            </form>
        </div>
    )
}