"use client";

import actionRegistrasiMurid from "@/action/registrasiMurid";
import { ArrowRight } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const ModalDaftar = () => {
  const [nama, setnama] = useState("");
  const [alamat, setalamat] = useState("");
  const [no_hp, setnohp] = useState("");
  const [tanggalLahir, settanggalLahir] = useState("");
  const [nama_orangtua, setnamaOrangtua] = useState("");

  const router = useRouter();
  const [modal, setModal] = useState(false);

  const trimMessage = () => {
    const name = nama.trim();
    const address = alamat.trim();
    const no = no_hp.trim();
    const name_parent = nama_orangtua.trim();
    const tanggal_lahir = tanggalLahir.trim();

    return (
      name == "" ||
      address == "" ||
      no == "" ||
      tanggal_lahir == "" ||
      name_parent == ""
    );
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("nama", nama);
    formdata.append("alamat", alamat);
    formdata.append("no_hp", no_hp);
    formdata.append("tanggal_lahir", tanggalLahir);
    formdata.append("nama_orangtua", nama_orangtua);
    formdata.append("status", "belum bayar");

    try {
      const respone = await actionRegistrasiMurid(formdata);
      if (
        respone.success == false ||
        !nama ||
        !alamat ||
        !no_hp ||
        !tanggalLahir ||
        !nama_orangtua ||
        trimMessage()
      ) {
        toast.error(
          "ada kesalahan anda gagal daftar harap mengulangi pendaftaran"
        );
        setnama("");
        setalamat("");
        setnohp("");
        settanggalLahir("");
        setnamaOrangtua("");
      } else {
        toast.success("anda berhasil daftar");
        setnama("");
        setalamat("");
        setnohp("");
        settanggalLahir("");
        setnamaOrangtua("");
        setModal(false);
        router.push("/registrasi");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = () => {
    setModal(!modal);
    if (modal == false) {
      setnama("");
      setalamat("");
      setnohp("");
      settanggalLahir("");
      setnamaOrangtua("");
    }
  };

  return (
    <div className="">
      <div className="flex gap-3 btn" onClick={handleModal}>
        <ArrowRight size={32} />
        <button>daftar sekarang</button>
      </div>
      <input
        type="checkbox"
        onChange={handleModal}
        checked={modal}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <h1>form daftar murid</h1>
            <input
              type="text"
              placeholder="Nama calon peserta murid"
              className="input"
              required
              onChange={(e) => setnama(e.target.value)}
              id="nama"
              value={nama}
            />
            <input
              type="text"
              placeholder="Alamat"
              className="input"
              required
              onChange={(e) => setalamat(e.target.value)}
              id="alamat"
              value={alamat}
            />
            <input
              type="text"
              placeholder="No hp"
              className="input"
              required
              onChange={(e) => setnohp(e.target.value)}
              id="no_hp"
              value={no_hp}
            />
            <input
              type="date"
              placeholder="tanggal lahir"
              className="input"
              required
              onChange={(e) => settanggalLahir(e.target.value)}
              id="tanggal_lahir"
              value={tanggalLahir}
            />
            <input
              type="text"
              placeholder="Nama orang tua"
              className="input"
              required
              onChange={(e) => setnamaOrangtua(e.target.value)}
              id="nama_orangtua"
              value={nama_orangtua}
            />

            <input type="hidden" id="status" value="belum bayar" />

            <div className="modal-action gap-3">
              <button type="button" onClick={handleModal} className="btn">
                cancel
              </button>
              <button className="btn" type="submit">
                daftar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalDaftar;
