import { Copy, CopyCheck, UserPlus, X, ShieldCheck } from "lucide-react";
import { useState } from "react";
import type { IMeetingLink } from "@/interfaces";

const MeetingLink = ({ setClose, link, email }: IMeetingLink) => {
  const [copyState, setCopyState] = useState(false);
  const handleCopyState = () => {
    setCopyState(true);
    setTimeout(() => {
      setCopyState(false);
    }, 1000);
  }

  return (
    <div className="w-90 bg-white p-6 px-6 border rounded-lg select-none absolute bottom-4 left-4">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-cabin">Your meeting's ready</h1>
          <button>
            <div className="p-1 hover:bg-black/10 transition duration-400 rounded-full">
              <X className="cursor-pointer" onClick={() => setClose(false)}/>
            </div>
          </button>
        </div>

        <div>
          <button className="flex gap-2 items-center text-white bg-blue-500 text-[13px] font-medium p-2 rounded-full px-3 hover:bg-blue-600 transition duration-400 cursor-pointer">
            <UserPlus size={20} />
            Add others
            </button>
          <p className="text-[11px] font-cabin mt-2">Or share this meeting link with others you want in the meeting</p>
        </div>
        <div className="bg-black/5 flex justify-between my-3 p-3 rounded-md items-center">
          <p className="text-sm select-text">{link}</p>
          <button onClick={() => handleCopyState()}>
            {
              copyState ? <CopyCheck className="cursor-pointer" /> : <Copy className="cursor-pointer" />
            }
            
          </button>
        </div>
        <div>
          <div className="flex gap-2">
            <div className="text-blue-600 p-1 rounded-lg bg-black/5 w-fit"><ShieldCheck size={20} /></div>
            <p className="text-[10px]">People who use this meeting link must get your permission before they can join.</p>
          </div>

          <p className="text-xs mt-4 text-center">Joined as {email}</p>
        </div>
      </div>
  )
}

export default MeetingLink;