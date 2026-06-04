import { useState } from "react";
const Header = (props) => {
  // const [Username, setUsername] = useState("");

  // if (!data) {
  //   setUsername("admin");
  // } else {
  //   setUsername(data.firstName);
  // }



  const logoutuser =()=>{
    localStorage.setItem('loggedInUser', '')
    props.ChangeUser('')
    // window.location.reload()

  }
   

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl  font-semibold">
          Hi, Welcome ALI Tech ✌
        </span>
      </h1>
      <button  onClick={logoutuser} className="text-lg font-medium bg-[#fcc338] px-4 py-3 rounded-2xl text-white">
        Log Out
      </button>
    </div>
  );
};

export default Header;
