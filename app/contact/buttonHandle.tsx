"use client"
import { useState } from "react";

const ButtonHandle = () => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleWa = (e: React.FormEvent) => {
    e.preventDefault();
    if (nama && pesan) {
      const message = `Halo, saya ${nama}. ${pesan}`;
      const urlWA = `https://wa.me/6282118297404?text=${encodeURIComponent(
        message
      )}`;
      if (window.open(urlWA, "_blank")) {
        setNama("");
        setPesan("");
      }
    }else {
      alert("mohon isi form terlebih dahulu");
    }
  };

  return (
    <form className="flex-col flex gap-5">
      <input
        type="text"
        placeholder="Masukkan nama Anda"
        className="input"
        value={nama}
        required
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        type="text"
        className="input"
        placeholder="masukan pesan anda"
        value={pesan}
        required
        onChange={(e) => setPesan(e.target.value)}
      />
      <button className="btn" type="submit" onClick={handleWa}>
        Kirim
      </button>
    </form>
  );
};

export default ButtonHandle