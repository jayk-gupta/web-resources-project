import React from 'react'

const style = "hover:text-white cursor-pointer bg-[#504f4f] rounded-lg text-center";
function SubMenu(props) {

  return (
    <div className={`my-4 flex flex-col gap-4  ${props.hide}`}>
      <div className={style}>HTML</div>
      <div className={style}>CSS</div>
      <div className={style}>JavaScript</div>
      <div className={style}>React</div>
    </div>
  );
}

export default SubMenu