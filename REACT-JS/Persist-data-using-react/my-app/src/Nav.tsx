type UserInfo = {
  name: string;
  email: string;
}

function exportUserInfo(userInfo: UserInfo) {
  const fileData = JSON.stringify(userInfo);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "user-info.json";
  link.href = url;
  link.click();
}


import React from 'react'

const Nav = () => {
  return (
    <div>
     
    </div>
  )
}

export default Nav
