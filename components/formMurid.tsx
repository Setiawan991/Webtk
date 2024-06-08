"use client";
import { actionMurid } from "@/action/createMurid";
import { useState } from "react";
import { toast } from "sonner";

const FormMurid = () => {
  const [modal, setModal] = useState(false);
  const [nama, setnama] = useState("");
  const [kelas, setkelas] = useState("");
  const [foto, setfoto] = useState("");
  const [ttl, setTtl] = useState("");
  const [alamat, setalamat] = useState("");

  const handleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("kelas", kelas);
    formData.append("foto", foto);
    formData.append("ttl", ttl);
    formData.append("alamat", alamat);

    try {
      await actionMurid(formData);
      toast.success("Murid berhasil ditambahkan!");
      setnama("");
      setkelas("");
      setfoto("");
      setTtl("");
      setalamat("");
      setModal(false);
    } catch (error) {
      toast.error("Gagal menambahkan murid!");
    }
  };

  return (
    <div>
      <button className="btn" onClick={handleModal}>
        tambahkan murid
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleModal}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <form className=" flex flex-col gap-7" onSubmit={handleSubmit}>
            <h3>tambahkan murid</h3>
            <div>
              <input
                type="text"
                className="input w-full"
                placeholder="nama"
                name="nama"
                onChange={(e) => setnama(e.target.value)}
                value={nama}
              />
            </div>
            <div>
              <select
                name="kelas"
                onChange={(e) => setkelas(e.target.value)}
                value={kelas}
                className="w-full select"
              >
                <option value="" disabled>
                  pilih kelas
                </option>
                <option value="A">kelas A</option>
                <option value="B">kelas B</option>
                <option value="C">kelas C</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                className="input w-full"
                placeholder="foto"
                name="foto"
                onChange={(e) => setfoto(e.target.value)}
                value={foto}
              />
            </div>
            <div>
              <input
                type="date"
                className="input w-full"
                placeholder="tanggal lahir"
                name="ttl"
                onChange={(e) => setTtl(e.target.value)}
                value={ttl}
              />
            </div>
            <div>
              <input
                type="text"
                className="input w-full"
                placeholder="alamat"
                name="alamat"
                onChange={(e) => setalamat(e.target.value)}
                value={alamat}
              />
            </div>

            <div className="flex justify-end gap-4">
              <button type="submit">save</button>
              <button type="button" onClick={handleModal}>
                close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormMurid;
