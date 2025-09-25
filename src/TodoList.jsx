import { useState } from "react";
import "./App.css";
import { SiThealgorithms } from "react-icons/si";
import { MdDelete } from "react-icons/md";

const TodoList = () => {
  const [myList, setmyList] = useState([]);

  const [myData, setmyData] = useState("");

  function changeData(DATA) {
    setmyData(DATA);
  }

  function addData(DATA) {
    if (DATA === null || DATA.trim() === "") return;
    setmyList([...myList, DATA]);
    setmyData("");
  }

  function doDelete(myindex){
    setmyList(myList.filter((_,i) => (i !== myindex)));
  }

  return (
    <>
      <div className="h-screen p-2">
        <div className=" w-full h-full flex flex-col gap-1">
          <div className="h-1/6">
            <p className="font-bold text-black text-6xl  text-center">
              Todo List
            </p>
          </div>
          <div className="p-2 h-5/6 w-full flex flex-col gap-2 items-center justify-center">
            <div className="h-auto w-full ">
              <div className=" p-1 w-full h-auto flex flex-row gap-3">
                <input
                  type="text"
                  className="h-10 w-5/6 p-3 ml-7 bg-slate-100 border border-slate-300"
                  value={myData}
                  onChange={(e) => changeData(e.target.value)}
                />
                <button
                  className="bg-blue-600 px-10 h-10 text-white rounded-sm hover:bg-blue-700"
                  onClick={() => addData(myData)}
                >
                  Create
                </button>
              </div>
            </div>
            <div className="p-3 h-full w-full flex flex-col gap-3 overflow-auto items-center area py-12">
              {myList.map((item, index) => (
                <div key={index} className="bg-white w-5/6 h-fit rounded-lg flex flex-row gap-1 justify-between border border-slate-300">
                  <p className="font-normal text-black p-2 pl-4">{item}</p>
                  <button className="p-2 w-fit h-fit" onClick={()=>doDelete(index)}>
                    <MdDelete className="text-2xl"/>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
