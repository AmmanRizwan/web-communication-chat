import { Copy, CopyCheck, X } from "lucide-react";
import { useState } from "react";

const MeetingDetail = ({ link }: { link: string}) => {
  const [copyState, setCopyState] = useState(false);

  const handleCopyState = () => {
    setCopyState(true);
    setTimeout(() => {
      setCopyState(false);
    }, 1000);
  }

  return (
    <div className="w-80 p-3 px-4 border h-dvh rounded-lg select-none">
        <div className="flex justify-between items-center mb-7">
          <h1 className="text-cabin">Meeting details</h1>
          <button>
            <div className="p-1 hover:bg-black/10 transition duration-400 rounded-full">
              <X className="cursor-pointer"/>
            </div>
          </button>
        </div>

        <div className="text-sm">
          <p className="mb-4">Joining info</p>
          <p className="bg-black/5 rounded-md p-2 text-xs select-text">{link}</p>
          <button onClick={() => handleCopyState()} className="flex gap-2 text-[13px] text-blue-600 font-medium my-5 cursor-pointer w-fit hover:bg-black/5 p-2 rounded-full px-4">
            {
              copyState ? <CopyCheck size={20}  /> : <Copy size={20} /> 
            } Copy joining info
          </button>
        </div>

        <div className="text-[13px] text-slate-700">
          Meeting is Active broadcast to the permitted users
        </div>
    </div>
  )
}

export default MeetingDetail;