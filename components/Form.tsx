"use client";
import { action } from "@/action/createDocument";
import { useState } from "react";
const From = () => {
  const [modal, setmodal] = useState(false);

  const handleChange = () => {
    setmodal(!modal);
  };
  return (
    <div>
      <button className="btn" onClick={handleChange}>
        tambahkan dokumen
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3>tambahkan dokumen</h3>
          <form action={action} className="" onSubmit={(e) => e.preventDefault}>
            <div className="from-control mt-3">
              <input
                type="file"
                className="file-input max-w-xs"
                name="dokumen"
              />
            </div>

            <div className="modal-action">
              <button type="button" onClick={handleChange} className="btn">
                close
              </button>
              <button type="submit" className="btn">
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default From;