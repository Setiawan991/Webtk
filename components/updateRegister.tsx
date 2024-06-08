"use client";
import UpdateRegistrasi from "@/action/UpdateRegistrasi";
import { useState } from "react";
import { toast } from "sonner";
interface paramProps {
  data: {
    id: number;
    nama: string;
    alamat: string;
    no_hp: string;
    tanggal_lahir: string;
    status: string;
    nama_orangtua: string;
  };
}

const UpdateRegister = ({ data }: paramProps) => {
  const [change, setchange] = useState({ ...data });
  const [modal, setModal] = useState(false);
  console.log(change);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setchange({ ...change, [name]: value });
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const updateRegis = await UpdateRegistrasi(change);
    if (updateRegis.success == true) {
      toast.success("berhasil di update");
      setModal(false);
    } else {
      toast.error("gagal di update");
    }
  };

  return (
    <div>
      <button onClick={handleModal} className="btn">
        edit
      </button>

      <input
        type="checkbox"
        onChange={handleModal}
        checked={modal}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          {change && (
            <div className="">
              <h1 className="py-3 mb-2 rounded-xl shadow-xl text-white bg-fuchsia-500">
                edit
              </h1>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input
                  name="nama"
                  className="input"
                  type="text"
                  value={change.nama}
                  onChange={handleChange}
                />
                <input
                  name="alamat"
                  className="input"
                  type="text"
                  value={change.alamat}
                  onChange={handleChange}
                />
                <input
                  name="no_hp"
                  className="input"
                  type="text"
                  value={change.no_hp}
                  onChange={handleChange}
                />
                <input
                  name="tanggal_lahir"
                  className="input"
                  type="date"
                  value={change.tanggal_lahir}
                  onChange={handleChange}
                />
                <input
                  name="nama_orangtua"
                  className="input"
                  type="text"
                  value={change.nama_orangtua}
                  onChange={handleChange}
                />

                <select
                  name="status"
                  id=""
                  className="select select-bordered w-full max-w-xl"
                  onChange={handleChange}
                  value={change.status}
                >
                  <option value="belum bayar">belum bayar</option>
                  <option value="sudah bayar">sudah bayar</option>
                </select>

                <div className="modal-action">
                  <button className="btn" type="submit">
                    save
                  </button>
                  <button className="btn" type="button" onClick={handleModal}>
                    cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateRegister;