import { useState } from 'react'
import './App.css'
import FormTambahGame from './components/FormTambahGame'
import Header from './components/Header'
import ListGame from './components/ListGame'
import DetailGame from './components/DetailGame'
import CardGame from './components/CardGame'

function App() {
  const daftarGameAwal = [
    {
      title: "Grand Theft Auto VI",
      desc: "Game aksi petualangan open-world terbaru dengan setting di Vice City.",
      price: 1200000,
      genre: ["Action", "Adventure", "Open World"],
      size: 150,
      coverImg: null,
      preview: "/images/Grand_Theft_Auto_VI.png"
    },
    {
      title: "Red Dead Redemption 2",
      desc: "Kisah epik Arthur Morgan dan geng Van der Linde di era akhir Wild West.",
      price: 640000,
      genre: ["Action", "Adventure", "Open World", "Story Rich"],
      size: 120,
      coverImg: null,
      preview: "/images/rdr2.jpg"
    },
    {
      title: "Kingdom Come: Deliverance II",
      desc: "RPG aksi realistis berlatar abad pertengahan di Bohemia abad ke-15.",
      price: 790000,
      genre: ["RPG", "Action", "Historical", "Open World"],
      size: 100,
      coverImg: null,
      preview: "/images/kcd2.jpg"
    },
    {
      title: "Clair Obscur: Expedition 33",
      desc: "Game RPG turn-based dengan grafis memukau melawan entitas misterius Paintress.",
      price: 850000,
      genre: ["RPG", "Turn-Based", "Fantasy"],
      size: 60,
      coverImg: null,
      preview: "/images/e33.jpg"
    }
  ];

  const [btnTambah, setBtnTambah] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [daftarGame, setDaftarGame] = useState(daftarGameAwal);

  return (
    <div className='min-h-screen bg-slate-100 text-slate-800 mx-auto p-6'>
      <Header title="Katalog Game" />

      <div className='flex justify-end w-full pr-4'>
        <button className='cursor-pointer text-white bg-black py-2 px-3 rounded font-bold' onClick={(e) => setBtnTambah(true)}>+ Tambah Game</button>
      </div>
      {btnTambah &&
        <div className='fixed inset-0 z-50 bg-black/60 flex justify-center items-center p-4'>
          <div className='bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative max-h-[90vh] overflow-y-auto'>
            <button className='cursor-pointer hover:text-white hover:bg-black font-semibold px-3 py-1 rounded-md' onClick={(e) => setBtnTambah(false)}>&larr; Back</button>
            <FormTambahGame
              onAddGame={(gameBaru) => {
                setDaftarGame([...daftarGame, gameBaru]);
                setBtnTambah(false);
              }}
            />
          </div>
        </div>
      }

      <ListGame
        dataGame={daftarGame}
      />


    </div>
  )
}

export default App
