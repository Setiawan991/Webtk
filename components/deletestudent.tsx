import { DeleteMurid } from "@/action/deleteMurid";

interface propsDelete {
  data: { [id: number]: boolean };
}
const DeleteStudent = ({ data }: propsDelete) => {
  const id = Object.entries(data)
    .filter(([key, value]) => value)
    .map(([key]) => Number(key));

  const HandleCekBoolean = Object.values(data).filter(Boolean).length;

  return (
    <>
      <button className="btn" disabled={HandleCekBoolean < 1}>
        <a href={`/dashboard/deleteMurid/${id}`}>delete</a>
      </button>
    </>
  );
};

export default DeleteStudent;