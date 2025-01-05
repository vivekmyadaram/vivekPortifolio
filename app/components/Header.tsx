function Header({ headerItems, fullName, designation }: any) {
  return (
    <header
      className="h-[auto] w-full p-6 bg-primary font-sans flex items-end text-white"
      style={{ backgroundColor: "#4A90E2" }}
    >
      <div className="flex-1 text-white">
        <h1 className="text-[22px] font-sans">{fullName}</h1>
        <h4 className="text-[14px]">{designation}</h4>
        <div className="grid grid-cols-3 mt-6 gap-4">
          {headerItems.map((item: any, index: number) => (
            <div key={index} className="flex gap-1 items-center">
              {item.icon && <item.icon color="white" className="w-4" />}
              <span className="text-[14px]">
                {item.link ? (
                  <a target="_blank" href={item.link}>
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
