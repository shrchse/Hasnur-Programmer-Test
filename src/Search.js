/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import axios from "axios";
import { useState, useEffect } from "react";

const Search = () => {
    const [table_mahasiswa, setTable_mahasiswa] = useState([]);
    const [searchItem, setSearchItem] = useState('')
    const [orderItem, setOrderItem] = useState('ASC')

    const sort = (item) => {
        if(orderItem === 'ASC'){
            const sorted = [...table_mahasiswa].sort((a, b) => 
                a[item].toLowerCase() > b[item].toLowerCase() ? 1 : -1
            );
            setTable_mahasiswa(sorted);
            setOrderItem('DSC')
        }

        if(orderItem === 'DSC'){
            const sorted = [...table_mahasiswa].sort((a, b) => 
                a[item].toLowerCase() < b[item].toLowerCase() ? 1 : -1
            );
            setTable_mahasiswa(sorted);
            setOrderItem('ASC')
        }
    }

    const sortInt = (item) => {
        if(orderItem === 'ASC'){
            const sorted = [...table_mahasiswa].sort((a, b) => 
                a[item] > b[item] ? 1 : -1
            );
            setTable_mahasiswa(sorted);
            setOrderItem('DSC')
        }

        if(orderItem === 'DSC'){
            const sorted = [...table_mahasiswa].sort((a, b) => 
                a[item] < b[item] ? 1 : -1
            );
            setTable_mahasiswa(sorted);
            setOrderItem('ASC')
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3001/api/get').then((response) => {
            setTable_mahasiswa(response.data)
        });
    }, []);

    return (
        <div id="this" className="w-screen h-fit min-h-screen bg-slate-300 pt-28">
            <div className="flex w-screen justify-center">
                <input type="text" className="ml-5 mb-5 pl-5 h-12 w-8/12 rounded-md shadow-xl" placeholder="Search..." onChange={
                    event => {
                        setSearchItem(event.target.value)
                    }
                }/>
            </div>

            <table className="table-fixed mx-auto pt-32 bg-slate-400 w-11/12 text-center table rounded-b-xl drop-shadow-xl">
                <thead className="bg-slate-200 rounded">
                    <tr>
                        <th  className="py-2 px-3" onClick={() => { sort('nama_mhs')
                        
                        }}>Nama Mahasiswa</th>
                        <th onClick={() => sort ('p_studi')} className="py-2 px-3">Program Studi</th>
                        <th onClick={() => sortInt ('semester')} className="py-2 px-3">Semester</th>
                        <th onClick={() => sort ('kelas')} className="py-2 px-3">Kelas</th>
                        <th onClick={() => sort ('angkatan')} className="py-2 px-3">Angkatan</th>
                    </tr>
                </thead>
                <tbody>
                    {table_mahasiswa.filter((value) => {
                        if(searchItem == ""){
                            return value
                        } else if (value.nama_mhs.toLowerCase().includes(searchItem.toLowerCase()) || value.p_studi.toLowerCase().includes(searchItem.toLowerCase())){
                            return value 
                        }
                    }).map((value, index) => {
                        return (<tr key={index} className="border-b hover:bg-slate-300">
                        <td className="py-2 px-3">{value.nama_mhs}</td>
                        <td className="py-2 px-3">{value.p_studi}</td>
                        <td className="py-2 px-3">{value.semester}</td>
                        <td className="py-2 px-3">{value.kelas}</td>
                        <td className="py-2 px-3">{value.angkatan}</td>
                        </tr>)
                    })}
                </tbody>
            </table>

            <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto mt-10">
            <div class="px-4 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Click table header to sort</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Type Program Studi or Nama Mahasiswa to search</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Nama not clickable, clickable at /home</span>
            </div>
            </div>
        </div>
    )
}
 
export default Search