import Link from "next/link";
import UpdateRegister from "./updateRegister";
import UpdateServerSide from "./Updateserverside";

interface muridRegisterPorps {
  id: number;
  nama: string;
  alamat: string;
  no_hp: string;
  tanggal_lahir: string;
  nama_orangtua: string;
  status: string;
}

interface register {
  data: muridRegisterPorps[];
}

const MuridRegistrasi = ({ data }: register) => {
  return (
    <div className="p-5">
      <div className="overflow-x-auto ">
        <table className="table text-center">
          <thead>
            <tr>
              <th>Nama</th>
              <th>alamat</th>
              <th>no hp</th>
              <th>tanggal lahir</th>
              <th>nama orang tua</th>
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((event) => {
              return (
                <tr key={event.id}>
                  <td>{event.nama}</td>
                  <td>{event.alamat}</td>
                  <td>{event.no_hp}</td>
                  <td>{event.tanggal_lahir}</td>
                  <td>{event.nama_orangtua}</td>
                  <td>{event.status}</td>
                  <td className="flex gap-2">
                    <UpdateServerSide id={event.id} />

                    <button className="btn btn-ghost ">
                      <Link href={`/dashboard/deleteRegis/${event.id}`}>
                        delete
                      </Link>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MuridRegistrasi;
