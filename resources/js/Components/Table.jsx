export default function Table({ items: records, columns, action, query }) {
    return (
        <div className="relative overflow-x-auto border shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 p-2">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                    <tr>
                        {columns.map((column) => (
                            <th key={column} scope="col" className="px-6 py-3">
                                {column}
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {records
                        .filter((item) =>
                            item.name
                                .toLowerCase()
                                .includes(query.toLowerCase())
                        )
                        .map((item) => (
                            <tr key={item.id} className="bg-white border-b ">
                                {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.id}
                        </th> */}

                                {columns.map((column) => (
                                    <td key={column} className="px-6 py-4">
                                        {item[column]}
                                    </td>
                                ))}
                                <td className="flex gap-3 px-6 py-4">
                                    <a
                                        href={route(action, item.id)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        href={route("estate.show", item.id)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Show
                                    </a>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
