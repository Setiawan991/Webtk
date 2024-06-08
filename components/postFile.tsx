import { supabase } from "@/utils/supabase";
import Link from "next/link";
import InputSearch from "./inputsearch";
import From from "./Form";

const PostFile = async () => {
  const { data: bucket, error: bucketError } =
    await supabase.storage.listBuckets();
  if (bucketError) return <p>please reload the page...</p>;
  const bucketName = bucket[0]?.name;

  const { data, error } = await supabase.storage
    .from(bucketName)
    .list("public", {
      limit: 100,
    });

  return (
    <>
      <div className="flex justify-between p-5 ">
        <InputSearch />
        <From />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Nama file</th>
              <th>waktu penyimpanan</th>
              <th>download</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((event) => {
              return (
                <tr key={event.id}>
                  <td>
                    <div className="flex items-center gap-3">{event.name}</div>
                  </td>
                  <td>{event.created_at}</td>

                  <td>
                    <Link
                      href={
                        "https://rzvzqlgqxfoubiglnyqn.supabase.co/storage/v1/object/public/dokumen/public/" +
                        event.name
                      }
                    >
                      <button className="btn">unduh disini</button>
                    </Link>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">
                      <Link href={`/dashboard/deleteDocument/${event.name}`}>
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
    </>
  );
};

export default PostFile;
