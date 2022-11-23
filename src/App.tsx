import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [cameras, setCameras] = useState([
    {
      id: "13",
      link: "https://video02.logicahost.com.br/jaba/jaba/playlist.m3u8",
    },
    {
      id: "12",
      link: "https://video02.logicahost.com.br/bl3/bbl3/playlist.m3u8",
    },
    {
      id: "1",
      link: "https://59f2354c05961.streamlock.net:1443/tereza/default.stream/playlist.m3u8",
    },
    {
      id: "11",
      link: "https://video02.logicahost.com.br/ruadomeio/ruadomeio/playlist.m3u8",
    },
    {
      id: "14",
      link: "https://video02.logicahost.com.br/pierdavila/pierdavila/playlist.m3u8",
    },
    {
      id: "10",
      link: "https://video02.logicahost.com.br/ruadomeio/ruadomeio/playlist.m3u8",
    },
    {
      id: "3",
      link: "https://59f2354c05961.streamlock.net:1443/borra/default.stream/playlist.m3u8",
    },
    {
      id: "2",
      link: "https://59f2354c05961.streamlock.net:1443/manapani/default.stream/playlist.m3u8",
    },
    {
      id: "9",
      link: "https://video02.logicahost.com.br/campingsul/campingsul/default.stream/playlist.m3u8",
    },
    {
      id: "6",
      link: "https://59f2354c05961.streamlock.net:1443/maremars/default.stream/playlist.m3u8",
    },
    {
      id: "5",
      link: "https://59f2354c05961.streamlock.net:1443/barravelhan/default.stream/playlist.m3u8",
    },
    {
      id: "8",
      link: "https://video02.logicahost.com.br/tartatura/tartatura/playlist.m3u8",
    },
    {
      id: "4",
      link: "https://video02.logicahost.com.br/paraobi/paraobi/playlist.m3u8",
    },
  ]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cameras.map((c) => {
        return (
          <div style={{ display: "flex" }}>
            <video autoPlay controls width={300} height={200}>
              <source src={c.link} />
            </video>
          </div>
        );
      })}
    </div>
  );
}

export default App;
