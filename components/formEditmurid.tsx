"use client";
import { useState } from "react";

interface paramChecked {
  data: { [id: number]: boolean };
}

const FromEditMurid = ({ data }: paramChecked) => {
  const jumalhTrue = Object.values(data).filter(Boolean).length;
  console.log(data);
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <button onClick={handleModal} className="btn" disabled={jumalhTrue !== 1}>
        edit
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleModal}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <form action="" className="flex flex-col gap-5">
            <input type="text" placeholder="name" className="input" />
            <input type="text" placeholder="kelas" className="input" />
            <input type="text" placeholder="foto" className="input" />
            <input type="text" placeholder="TTL" className="input" />
            <input type="text" placeholder="alamat" className="input" />

            <div className="modal-action">
              <button className="btn" type="submit">
                save
              </button>
              <button type="button" className="btn" onClick={handleModal}>
                close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FromEditMurid;