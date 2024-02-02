import CommentInput from "./CommentInput"

const testComments = [
    { 'created_at': '2023/12/1', 'text': 'test test test', 'ownerName': 'Dexter', 'ownerId': '2341231231512-dsadas12312das' },
    { 'created_at': '2023/12/1', 'text': 'test test2 test2', 'ownerName': 'Dexter', 'ownerId': '2341231231512-dsadas12312das' },
    { 'created_at': '2023/12/1', 'text': 'test test3 test3', 'ownerName': 'Mario', 'ownerId': '2341231231512-dsadas12312das' },
    { 'created_at': '2023/12/1', 'text': 'test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4test test4 test4', 'ownerName': 'Petko', 'ownerId': '2341231231512-dsadas12312das' },
]

export default function CommentSection() {
    return (
        <>
            <div className="sm:w-[50%] w-[85%] ml-[1em] pl-7 py-7">
                <h3 className="mb-[2em] font-bold text-[20px]">Total Comments: 4</h3>
                <CommentInput />
                {testComments.map((comment) => (
                    <div className="flex flex-col bg-white gap-5 mt-5 rounded-xl p-3">
                        <div className="flex justify-between">
                            <h2 className="font-bold text-[18px]">{comment.ownerName}</h2>
                            <p>{comment.created_at}</p>
                        </div>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        </>
    )
}