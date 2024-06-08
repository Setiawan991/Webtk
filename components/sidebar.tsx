"use client";
import { useState } from "react";

import Link from "next/link";
import {
  AddressBookTabs,
  Calendar,
  CaretCircleDown,
  CaretCircleUp,
  CaretDoubleLeft,
  CaretDoubleRight,
  Person,
  Plus,
  UserPlus,
} from "@phosphor-icons/react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [select, setselect] = useState(false);

  const handleSelect = () => {
    setselect(!select);
  };

  const handlerButton = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-center ">
      <div className={`${open ? "w-60" : "w-20"} bg-cyan-950  min-h-screen `}>
        <div className=" p-5">
          {open ? (
            <div className="flex justify-between text-center ">
              <div className="text-white ">
                <p>img</p>
              </div>
              <button onClick={handlerButton}>
                <CaretDoubleLeft size={32} className="text-white" />
              </button>
            </div>
          ) : (
            <div className="flex justify-between text-center ">
              <button onClick={handlerButton}>
                <CaretDoubleRight size={32} className="text-white" />
              </button>
            </div>
          )}

          <ul className="mt-10  flex justify-center items-center flex-col gap-10 text-center  text-white">
            {open ? (
              <>
                <li>
                  <Link href={"/dashboard/myDocument"}>dokumen saya</Link>
                </li>
                <li>
                  <Link href={"/dashboard/Document"}>tambah dokumen</Link>
                </li>
                <li>
                  <Link href={"/dashboard/kalender"}>kalender</Link>
                </li>
                <li>
                  <Link href={"/dashboard/registrasiMurid"}>
                    registrasi murid
                  </Link>
                </li>
                <li>
                  {!select ? (
                    <div className=" flex gap-2">
                      <Link href={"/dashboard/dataAnak"}>data anak</Link>
                      <button onClick={handleSelect}>
                        <CaretCircleDown size={20} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className=" flex gap-2">
                        <Link href={"/dashboard/dataAnak"}>data anak</Link>
                        <button onClick={handleSelect}>
                          <CaretCircleUp size={20} />
                        </button>
                      </div>
                      <div className="p-5">
                        <ul className="text-sm flex gap-5 flex-col">
                          <Link href={"/dashboard/dataAnak/kelas/A"}>
                            <li>kelas A</li>
                          </Link>

                          <Link href={"/dashboard/dataAnak/kelas/B"}>
                            <li>kelas B</li>
                          </Link>

                          <Link href={"/dashboard/dataAnak/kelas/C"}>
                            <li>kelas C</li>
                          </Link>
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href={"/dashboard/myDiary"}>
                    <AddressBookTabs size={32} />
                  </Link>
                </li>
                <li>
                  <Link href={"/dashboard/Document"}>
                    <Plus size={32} />
                  </Link>
                </li>
                <li>
                  <Link href={"dashboard/kalender"}>
                    <Calendar size={32} />
                  </Link>
                </li>
                <li>
                  <Link href={"dashboard/registrasiMurid"}>
                    <UserPlus size={32} />
                  </Link>
                </li>
                <li>
                  <Link href={"dashboard/dataAnak"}>
                    <Person size={32} />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
