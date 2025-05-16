    const domainListesi = [
      {
        domain: "ateist.net",
        kayit: "2024-04-04",
        bitis: "2026-04-05",
        fiyat: 2500
      },
      {
          domain: "classicalrepertoire.com",
          kayit: "2024-04-12",
          bitis: "2026-04-12",
          fiyat: 2500
      }
  ];

  function yasHesapla(kayitTarihi) {
    const yil = new Date(kayitTarihi).getFullYear();
    const simdi = new Date().getFullYear();
    return simdi - yil;
  }

  const telNo = "905524790895";
  const tbody = document.getElementById("domains");

  domainListesi.forEach((domain) => {
    const tr = document.createElement("tr");
    const wpMesaj = encodeURIComponent(`Selam, ${domain.domain} için teklif vermek istiyorum.`);
    const wpLink = `https://wa.me/${telNo}?text=${wpMesaj}`;
    tr.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700";
    tr.innerHTML = `
        <th class="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">${domain.domain}</th>
        <td class="px-6 py-4">${domain.kayit}</td>
        <td class="px-6 py-4">${domain.bitis}</td>
        <td class="px-6 py-4">${yasHesapla(domain.kayit)}</td>
        <td class="px-6 py-4">₺${domain.fiyat.toLocaleString("tr-TR")}</td>
        <td class="px-6 py-4 text-right">
          <a href="${wpLink}" target="_blank" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Teklif Al
          </a>
        </td>
      `;
    tbody.appendChild(tr);
  });