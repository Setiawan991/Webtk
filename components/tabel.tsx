"use client";

import { useEffect, useState } from "react";

import { DeleteMurid } from "@/action/deleteMurid";
import FromEditMurid from "./formEditmurid";
import DeleteStudent from "./deletestudent";


interface paramMurid {
  id: string;
  nama: string;
  kelas: string;
  foto: string;
  TTL: string;
  alamat: string;
}

interface tabelProps {
  data: paramMurid[];
}

const Table = ({ data }: tabelProps) => {
  const [ubah, setubah] = useState(false);
  const [chekchedItems, setchekchedItems] = useState<{ [id: number]: boolean }>(
    {}
  );
  const handleUpdate = () => {
    setubah(!ubah);
  };

  const handleCheckhed = (id: number, isCheked: boolean) => {
    setchekchedItems((prev) => ({ ...prev, [id]: isCheked }));
  };

  return (
    <>
      <div>
        <button
          className="btn bg-slate-700 text-white hover:bg-primary "
          onClick={handleUpdate}
        >
          {ubah ? "cancel" : "update"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              {ubah && (
                <th>
                  <input type="checkbox" className="checkbox" />
                </th>
              )}
              <th>Nama</th>
              <th>kelas</th>
              <th>foto</th>
              <th>tanggal lahir</th>
              <th>alamat</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((event: any) => {
              return (
                <tr>
                  {ubah && (
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox"
                        onChange={(e) =>
                          handleCheckhed(event.id, e.target.checked)
                        }
                      />
                    </td>
                  )}

                  <td>{event.nama}</td>
                  <td>{event.kelas}</td>
                  <td>{event.foto}</td>
                  <td>{event.TTL}</td>
                  <td>{event.alamat}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {ubah && (
        <div className="flex gap-6 justify-end p-4">
          <FromEditMurid data={chekchedItems} />
          <DeleteStudent data={chekchedItems} />
        </div>
      )}
    </>
  );
};

export default Table;