function cardTypeService() {
  const cateCard = [
    {
      type: "oto",
      cateName: "Kiểm tra ",
      // img:
    },
    {
      type: "oto",
      cateName: "Bảo trì",
      // img:
    },
    {
      type: "oto",
      cateName: "Vệ sinh",
      // img:
    },
    {
      type: "oto",
      cateName: "Nâng cấp",
      // img:
    },
    {
      type: "oto",
      cateName: "Hỗ trợ",
      // img:
    },
  ];

  const listCard = cateCard.map((il) => (
    <div
      key={il}
      className="w-[256px] h-[296px] bg-red-300 bg-gradient-to-b rounded-lg"
    >
      <div className="">image</div>
      <div className="">
        <div>{il.type}</div>
        <div>{il.cateName}</div>
      </div>
    </div>
  ));
  return (
    <div className="flex flex-row gap-2">{listCard}</div>
  );
}

export default cardTypeService;
