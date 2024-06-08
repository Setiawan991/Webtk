"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation"; // Import useRouter
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const keyword = searchRef.current?.value;
    if (keyword) {
      router.push(`/dashboard/searchDokumen/${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <div className="relative flex">
      <input
        type="text"
        placeholder="cari dokumen"
        className="p-3 rounded-md bg-slate-100"
        ref={searchRef}
      />
      <div className="absolute flex justify-end right-3 top-3">
        <button type="submit" onClick={handleButton}>
          <MagnifyingGlass size={23} />
        </button>
      </div>
    </div>
  );
};

export default InputSearch;