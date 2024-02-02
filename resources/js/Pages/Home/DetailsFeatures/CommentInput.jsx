import { useState } from "react"

export default function CommentInput() {

    const [isFocused, setIsFocused] = useState(false);



    return (
        <>
            <div className="flex flex-col gap-3 h-auto mb-[8em]">
                <textarea onFocus={() => setIsFocused(true)} type="text" name="commentText" placeholder="Add a comment..."
                    className="w-full delay-500 h-[150px] text-[18px] mb-[10px] border-none p-3 rounded-xl outline-none resize-none" >
                </textarea>
                {isFocused && (
                    <div className="self-end flex gap-5">
                        <button onClick={() => setIsFocused(false)} className="px-4 py-2 hover:shadow-xl duration-300 rounded-xl">Cancel</button>
                        <button className="bg-zinc-800 px-3 py-2 text-white rounded-xl duration-300 hover:opacity-40">Comment</button>
                    </div>
                )}

            </div>
        </>
    )
}