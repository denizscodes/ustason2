"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Filter = ({
  kategoriler = [],
  markalar = [],
  modeller = [],
  initialKategori = "",
  initialMarka = "",
  initialModel = ""
}) => {
  const router = useRouter();
  const [selectedKategori, setSelectedKategori] = useState(initialKategori);
  const [selectedMarka, setSelectedMarka] = useState(initialMarka);
  const [selectedModel, setSelectedModel] = useState(initialModel);

  // Update URL query parameters
  useEffect(() => {
    const query = new URLSearchParams();
    if (selectedKategori) query.set("kategori", selectedKategori);
    if (selectedMarka) query.set("marka", selectedMarka);
    if (selectedModel) query.set("model", selectedModel);

    const newUrl = `?${query.toString()}`;
    router.push(newUrl, { shallow: true });
  }, [selectedKategori, selectedMarka, selectedModel, router]);

  return (
    <div className="container">
      <select
        value={selectedKategori}
        onChange={(e) => setSelectedKategori(e.target.value)}
      >
        <option value="">Kategori Seçin</option>
        {kategoriler.length > 0 ? (
          kategoriler.map(k => (
            <option key={k} value={k}>
              {k}
            </option>
          ))
        ) : (
          <option value="">Kategori Bulunamadı</option>
        )}
      </select>

      <select
        value={selectedMarka}
        onChange={(e) => setSelectedMarka(e.target.value)}
      >
        <option value="">Marka Seçin</option>
        {markalar.length > 0 ? (
          markalar.map(m => (
            <option key={m} value={m}>
              {m}
            </option>
          ))
        ) : (
          <option value="">Marka Bulunamadı</option>
        )}
      </select>

      <select
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        <option value="">Model Seçin</option>
        {modeller.length > 0 ? (
          modeller.map(mod => (
            <option key={mod} value={mod}>
              {mod}
            </option>
          ))
        ) : (
          <option value="">Model Bulunamadı</option>
        )}
      </select>
    </div>
  );
};

export default Filter;
