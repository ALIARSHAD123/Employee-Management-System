const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl  font-semibold"> Ali Tech ✌ </span>
      </h1>
      <button className="text-lg font-medium bg-[#fcc338] px-4 py-3 rounded-2xl text-white">
        Log Out
      </button>
    </div>
  );
};

export default Header;
