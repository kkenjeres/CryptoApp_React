import { useState } from "react";
import useSWR from "swr";

const Coins = () => {
  const [query, setQuery] = useState("");

  const url = "https://api.coincap.io/v2/assets";
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher, { refreshInterval: 15000 });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const dataCoin = data.data;

  const filteredCoins = dataCoin.filter((item) =>
    item.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="text-center">
      <input
        type="text"
        placeholder="Search"
        className="w-[50%] p-4 h-[20px] text-black mt-2 rounded"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="w-[80%] m-auto mt-10">
        {filteredCoins.map((item) => (
          <ul key={item.id} className="flex">
            <li>{item.id}</li>
            <li>{Number(item.priceUsd).toFixed(2)}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Coins;
