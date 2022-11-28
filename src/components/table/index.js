import React from 'react'

const tabs = [
    {
        profile: "Patrick Fearon",
        date: "23.10.22",
        test: "SQ1",
        jumpheight: "89CM",
        other: "67MJH",
        other1: "675J"
    },
    {
        profile: "Patrick Fearon",
        date: "23.10.22",
        test: "SQ1",
        jumpheight: "89CM",
        other: "67MJH",
        other1: "675J"
    },

    {
        profile: "Patrick Fearon",
        date: "23.10.22",
        test: "SQ1",
        jumpheight: "89CM",
        other: "67MJH",
        other1: "675J"
    },
    {
        profile: "Patrick Fearon",
        date: "23.10.22",
        test: "SQ1",
        jumpheight: "89CM",
        other: "67MJH",
        other1: "675J"
    },
    {
        profile: "Patrick Fearon",
        date: "23.10.22",
        test: "SQ1",
        jumpheight: "89CM",
        other: "67MJH",
        other1: "675J"
    },
    {
        profile: "Patrick Fearon",
        date: "23.10.22",
        test: "SQ1",
        jumpheight: "89CM",
        other: "67MJH",
        other1: "675J"
    },
];

const Table = () => {

    return (
        <>
            <div className="overflow-x-auto py-4 w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Profile</th>
                            <th>Date</th>
                            <th>Test</th>
                            <th>Jump Height</th>
                            <th>other metric</th>
                            <th>other metric</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabs.map((item) => {
                            return (
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{item.profile}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{item.date}</span>
                                    </td>
                                    <td>{item.test}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">{item.jumpheight}</button>
                                    </th>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{item.other}</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{item.other1}</span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>


                </table>
            </div>



        </>
    )
}

export default Table