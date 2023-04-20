import { useState } from 'react';
import './App.css'
import songs from './json/songs.json'
import { BsChevronExpand } from 'react-icons/bs'

function App() {

  const [openProxima, setOpenProxima] = useState(false)
  const [openProgresso, setOpenProgresso] = useState(false)
  const [openFinalizada, setOpenFinalizada] = useState(false)
  const [proxima, setProxima] = useState(songs.musicas);
  const [progresso, setProgresso] = useState([]);
  const [finalizada, setFinalizada] = useState([]);


  function openProximaF(){
    setOpenProxima(!openProxima)
  }
  function openProgressof(){
    setOpenProgresso(!openProgresso)
  }
  function openFinalizadaf(){
    setOpenFinalizada(!openFinalizada)
  }
  
  function passarTabela(musica) {

    let filtroProxima = proxima.filter((item) => {return item != musica })
    setProxima(filtroProxima)
    setProgresso([...progresso, musica])

  }
  function passarFinalizada(musica) {

    let filtroFinaizada = progresso.filter((item) => {return item != musica })
    setProgresso(filtroFinaizada)
    setFinalizada([...finalizada, musica])

  }

  return (
    <div className='body'>

      <h1>Evolução Guitarra</h1>
      <div className='table-all'>
        <div className='table'>
          <h2 onClick={ openProximaF } style={{ alignItems: "center", display: "flex", justifyContent: "space-between"}}>
            <div></div> Proximas <BsChevronExpand style={{ textAlign: "right" }}/>
          </h2>
          {openProxima && proxima.map((musica) => (
            <p onClick={() => passarTabela(musica)}>{musica}</p>
          ))}
        </div>
        <div className='table'>
          <h2 onClick={ openProgressof } style={{ alignItems: "center", display: "flex", justifyContent: "space-between"}}>
            <div></div>Progresso <BsChevronExpand style={{ textAlign: "right" }}/>
          </h2>
          {openProgresso && progresso.map((musica) => (
              <p onClick={() => passarFinalizada(musica)}>{musica}</p>
          ))} 
        </div>
        <div className='table'>
          <h2 onClick={ openFinalizadaf } style={{ alignItems: "center", display: "flex", justifyContent: "space-between"}}>
            <div></div>Finalizadas <BsChevronExpand style={{ textAlign: "right" }}/>
          </h2>
          {openFinalizada && finalizada.map((musica) => (
              <p>{musica}</p>
          ))} 
        </div>
      </div>

    </div>
  )
}

export default App
