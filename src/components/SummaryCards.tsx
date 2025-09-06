export default function SummaryCards() {
  const data = [
    { title: "AUM", value: "₹12.5 Cr" },
    { title: "SIP Book", value: "₹3.2 L" },
    { title: "Clients", value: "157" },
    { title: "Revenue", value: "₹1.8 Cr" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-0">
      {data.map((card) => (
        <div
          key={card.title}
          className="rounded-xl bg-white dark:bg-white p-4 shadow"
        >
          <h2 className="text-sm font-semibold text-black dark:text-black">
            {card.title}
          </h2>
          <p className="mt-2 text-2xl font-bold text-black">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
