/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
    //ui
    const [isShow, setShow] = useState(false);
    const [table_mahasiswa, setTable_mahasiswa] = useState([]);
    const [isEdit, setEdit] = useState(false);

    //database
    const [id, setId] = useState ("");
    const [nama_mhs, setNama_mhs] = useState ("");
    const [p_studi, setP_studi] = useState ("");
    const [semester, setSemester] = useState ("");
    const [kelas, setKelas] = useState ("");
    const [angkatan, setAngkatan] = useState ("");
    const [email, setEmail] = useState ("");
    const [ukt, setUKT] = useState ("");

    useEffect(() => {
        axios.get('http://localhost:3001/api/get').then((response) => {
            setTable_mahasiswa(response.data)
        });
    }, []);

    const submitMhs = () => {
        axios.post("http://localhost:3001/api/insert", {
            nama_mhs: nama_mhs,
            p_studi: p_studi,
            semester: semester,
            kelas: kelas,
            angkatan: angkatan, 
            email: email, 
            ukt: ukt,
        }).then(
            setTable_mahasiswa([...table_mahasiswa, {
                nama_mhs: nama_mhs,
                p_studi: p_studi,
                semester: semester,
                kelas: kelas,
                angkatan: angkatan, 
                email: email, 
                ukt: ukt
                }
            ]),
            window.location.reload()
        ).catch(console.log(Error));
    }

    const updateMhs = (mhs) => {
        setEdit(!isEdit)
        setShow(false)
        setId(mhs.id)
        setNama_mhs(mhs.nama_mhs)
        setP_studi(mhs.p_studi)
        setSemester(mhs.semester)
        setKelas(mhs.kelas)
        setAngkatan(mhs.angkatan)
        setEmail(mhs.email)
        setUKT(mhs.ukt)
    }

    const updateMhsData = () => {
        axios.put("http://localhost:3001/api/update", {
            id: id,
            nama_mhs: nama_mhs,
            p_studi: p_studi,
            semester: semester,
            kelas: kelas,
            angkatan: angkatan,
            email: email,
            ukt: ukt,
        }).then(
            setTable_mahasiswa([...table_mahasiswa, {
                nama_mhs: nama_mhs,
                p_studi: p_studi,
                semester: semester,
                kelas: kelas,
                angkatan: angkatan, 
                email: email, 
                ukt: ukt
                }
            ]),
            window.location.reload()
        );
    }

    const deleteMhs = (mhsId) => {
        axios.delete(`http://localhost:3001/api/delete/${mhsId}`).then(() => {
            setTable_mahasiswa(table_mahasiswa.filter((a) => {
                return a.id !== mhsId;
            }));
        });
    }

    return ( 
        <div id="table" className="container pt-20 h-fit pb-10 w-full bg-slate-300 min-h-screen">
            <div className="additional flex ml-16 mb-5">
                <button id="btn-create" className="mr-5 py-2 px-5 rounded-md bg-slate-500" type="button" onClick={() => {
                    setId('')
                    setNama_mhs('')
                    setP_studi('')
                    setSemester('')
                    setKelas('')
                    setAngkatan('')
                    setEmail('')
                    setUKT('')
                    setShow(!isShow)
                    setEdit(false)
                }}>Add New Student</button>
            </div>

            {isEdit &&
            <div className="flex m-auto mr-16 mb-5">
                <div className="m-auto w-8/12 ml-16 h-fit pb-5 mb-5 bg-slate-500 rounded-xl">
                    <div>
                        <div className="flex flex-col pt-5 text-black">
                            <form>
                            <div className="flex justify-between mx-24">
                                Nama Mahasiswa 
                                <input type="text" onChange={(e) => {
                                    setNama_mhs(e.target.value);
                                }} className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" name="nama_mhs" id="mhs" value={nama_mhs} required/>
                            </div>
                            <div className="flex justify-between mx-24">
                                Program Studi 
                                <input type="text" onChange={(e) => {
                                    setP_studi(e.target.value);
                                }} className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" name="p_studi" id="ps" value={p_studi} required/>
                            </div>
                            <div className="flex justify-between mx-24">
                                Semester
                                <input onChange={(e) => {
                                    setSemester(e.target.value);
                                }} className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" type="number" name="semester" id="sm" value={semester} required/> 
                            </div>
                            <div className="flex justify-between mx-24">
                                Kelas 
                                <input onChange={(e) => {
                                    setKelas(e.target.value);
                                }} type="text" className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" name="kelas" id="kls" value={kelas} required/>
                            </div>
                            <div className="flex justify-between mx-24">
                                Angkatan
                                <input onChange={(e) => {
                                    setAngkatan(e.target.value);
                                }} type="text" className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" name="angkatan" id="akt" value={angkatan} required/>
                            </div>
                            <div className="flex justify-between mx-24">
                                Email
                                <input onChange={(e) => {
                                    setEmail(e.target.value);
                                }} type="text" className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" name="email" id="email" value={email} required/>
                            </div>
                            <div className="flex justify-between mx-24">
                                UKT
                                <input onChange={(e) => {
                                    setUKT(e.target.value);
                                }} type="text" className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" name="ukt" id="ukt" value={ukt} required/>
                            </div>

                            <div className="flex w-fit ">                            
                                <button type="button" className="bg-slate-300 hover:bg-slate-400 text-slate-600 ml-24 rounded-lg w-28 h-12 basis-1/2"
                                onClick={() => {
                                    if(nama_mhs && p_studi && semester && kelas && angkatan && email && ukt != null)
                                    {
                                        updateMhsData();
                                    } else {
                                        alert ('field cannot be empty')
                                    }
                                }}>Edit</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl h-72 py-5">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 pb5">Hasnur Internship Test</div>
                        <p className="text-gray-700 text-base ">
                            Oling Anugrah Fajar Pratama | Universitas Lambung Mangkurat | Teknologi Informasi - 2020 | This project was created with
                        </p>
                    </div>
                    <div className="px-6 pt-4 animate-pulse">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-500 ">#React.js</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-300 ">#Tailwind.css</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-green-500 ">#Node.js</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-purple-400 ">#Axios.js</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-yellow-300 ">#Javascript</span>
                    </div>
                </div>
                </div>
            }
            
            {isShow &&
            <div className="flex m-auto mr-16 mb-5">
                <div className="m-auto w-8/12 ml-16 h-fit pb-5 mb-5 bg-slate-500 rounded-xl">
                    <div>
                        <div className="flex flex-col pt-5 text-black">
                            <form>
                            <div className="flex justify-between mx-24">
                                Nama Mahasiswa 
                                <input type="text" onChange={(e) => {
                                    setNama_mhs(e.target.value);
                                }} className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" name="nama_mhs" id="mhs" value={nama_mhs} required/>
                            </div>
                            <div className="flex justify-between mx-24">
                                Program Studi 
                                <input type="text" onChange={(e) => {
                                    setP_studi(e.target.value);
                                }} className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" name="p_studi" id="ps" value={p_studi} required/>
                            </div>
                            <div className="flex justify-between mx-24">
                                Semester
                                <input onChange={(e) => {
                                    setSemester(e.target.value);
                                }} className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" type="number" name="semester" id="sm" value={semester} required/> 
                            </div>
                            <div className="flex justify-between mx-24">
                                Kelas 
                                <input onChange={(e) => {
                                    setKelas(e.target.value);
                                }} type="text" className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" name="kelas" id="kls" value={kelas} required/>
                            </div>
                            <div className="flex justify-between mx-24">
                                Angkatan
                                <input onChange={(e) => {
                                    setAngkatan(e.target.value);
                                }} type="text" className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" name="angkatan" id="akt" value={angkatan} required/>
                            </div>
                            <div className="flex justify-between mx-24">
                                Email
                                <input onChange={(e) => {
                                    setEmail(e.target.value);
                                }} type="text" className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" name="email" id="email" value={email} required/>
                            </div>
                            <div className="flex justify-between mx-24">
                                UKT
                                <input onChange={(e) => {
                                    setUKT(e.target.value);
                                }} type="text" className="bg-slate-400 rounded mb-5 w-8/12 pl-2 py-2" name="ukt" id="ukt" value={ukt} required/>
                            </div>

                            <div className="flex w-fit">
                                <button type="button" className="bg-slate-300 hover:bg-slate-400 text-slate-600 ml-24 rounded-lg w-28 h-12 basis-1/2"
                                onClick={() => {
                                    if(nama_mhs && p_studi && semester && kelas && angkatan && email && ukt != null)
                                    {
                                        submitMhs()
                                    } else {
                                        alert('Field Cannot Be Empty');
                                    }
                                }}>Add</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl h-72 py-5">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 pb5">Hasnur Internship Test</div>
                        <p className="text-gray-700 text-base ">
                            Oling Anugrah Fajar Pratama | Universitas Lambung Mangkurat | Teknologi Informasi - 2020 | This project was created with
                        </p>
                    </div>
                    <div className="px-6 pt-4 animate-pulse">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-500 ">#React.js</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-300 ">#Tailwind.css</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-green-500 ">#Node.js</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-purple-400 ">#Axios.js</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-yellow-300 ">#Javascript</span>
                    </div>
                </div>
                </div>
            }

            <table className="table-fixed m-auto bg-slate-400 w-11/12 text-center table rounded-b-xl">
                <thead className="bg-slate-200 rounded">
                    <tr>
                        <th className="py-2 px-3" onClick={() => {
                        }}>Nama Mahasiswa</th>
                        <th className="py-2 px-3">Program Studi</th>
                        <th className="py-2 px-3">Semester</th>
                        <th className="py-2 px-3">Kelas</th>
                        <th className="py-2 px-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {table_mahasiswa.map((value, index) => {
                        return (<tr key={index} className="border-b hover:bg-slate-300">
                        <Link to={'/detail/' + value.id} state={{
                            nama_mhs: value.nama_mhs,
                            p_studi: value.p_studi,
                            semester: value.semester,
                            kelas: value.kelas,
                            angkatan: value.angkatan,
                            email: value.email,
                            ukt: value.ukt
                        }}>
                        <td className="py-2 px-3">{value.nama_mhs}</td> 
                        </Link>
                        <td className="py-2 px-3">{value.p_studi}</td>
                        <td className="py-2 px-3">{value.semester}</td>
                        <td className="py-2 px-3">{value.kelas}</td>
                        <td className="py-2 px-3">
                            <button className="bg-red-400 px-3 py-1 rounded-md hover:bg-red-500 mr-2" onClick={() => {deleteMhs(value.id)}}>Delete</button>
                            <a href="#btn-create">
                                <button className="bg-yellow-400 px-3 py-1 rounded-md hover:bg-yellow-500" onClick={() => {updateMhs(value)}}>Edit</button>
                            </a>
                        </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}
 
export default Dashboard;