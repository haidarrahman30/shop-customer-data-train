
import React from 'react';

interface TableProps {
  data: {
    name: string;
    email: string;
    job: string;
    status: string;
    employed: string;
  }[];
}

function Table({ data }: TableProps) {
  return (
    <div className="flex flex-wrap mx-3 w-full">
    <div className="flex-none w-full max-w-full px-3">
      <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
          <h6 className="font-bold">Data Table</h6>
        </div>
        <div className="flex-auto px-0 pt-0 pb-2">
          <div className="p-0 overflow-x-auto">
            <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
              <thead className="align-bottom">
                <tr>
                  <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-nonetext-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Author</th>
                  <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-nonetext-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Function</th>
                  <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-nonetext-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                  <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-nonetext-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Employed</th>
                  <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-nonetracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                </tr>
              </thead>
              <tbody>
              {data.map(({ name, email, job, status, employed }, index) => (
                     <tr key={index}>
                     <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                       <div className="flex px-2 py-1">
                         <div className="flex flex-col justify-center">
                           <h6 className="mb-0 text-sm leading-normal text-dark">{name}</h6>
                           <p className="mb-0 text-xs leading-tight text-dark dark:opacity-80 text-slate-400">{email}</p>
                         </div>
                       </div>
                     </td>
                     <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                       <p className="mb-0 text-xs font-semibold leading-tight text-dark dark:opacity-80">{job}</p>
                       <p className="mb-0 text-xs leading-tight text-dark dark:opacity-80 text-slate-400">Organization</p>
                     </td>
                     <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                       <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white p-2 rounded-lg">{status}</span>
                     </td>
                     <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                       <span className="text-xs font-semibold leading-tight text-dark dark:opacity-80 text-slate-400">{employed}</span>
                     </td>
                     <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                       <a href="javascript:;" className="text-xs font-semibold leading-tight text-dark dark:opacity-80 text-slate-400"> Edit </a>
                     </td>
                   </tr>
               ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Table