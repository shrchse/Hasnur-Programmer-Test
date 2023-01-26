/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import people from './thisImage.jpg'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const DetailMhs = () => {
    const mySwal = withReactContent(Swal);
    const params = useParams();
    const [fetchData, setFetchData] = useState([])
    const [isEdit, setIsEdit] = useState(false)

    let _id = '', _nama_mhs = '', _p_studi = '', _semester = '', _kelas = '', _angkatan = '', _email = '', _ukt = '' ;
    
    useEffect(() => {
        axios.get('http://localhost:3001/api/get').then((response) => {
            setFetchData(response.data);
        })
    }, []);

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
            window.location.reload()
        ).catch()
    }

    fetchData.filter((value) => {
        if (value.id == params.id){
            _id = value.id;
            _nama_mhs = value.nama_mhs;
            _p_studi = value.p_studi;
            _semester = value.semester;
            _kelas = value.kelas;
            _angkatan = value.angkatan;
            _email = value.email;
            _ukt = value.ukt;
        }
    })

    const [id, setId] = useState ("");
    const [nama_mhs, setNama_mhs] = useState ('');
    const [p_studi, setP_studi] = useState ('');
    const [semester, setSemester] = useState ('');
    const [kelas, setKelas] = useState ('');
    const [angkatan, setAngkatan] = useState ('');
    const [email, setEmail] = useState ('');
    const [ukt, setUKT] = useState ('');


    return ( 
        <div id="this" className="home h-fit pb-10 pt-6 bg-slate-300 drop">
            <div className="container h-fit w-11/12 gradi bg-gradient-to-r from-slate-600 to-slate-400 rounded-xl my-16 mx-auto flex flex-row py-10 drop-shadow-lg">
                <div className="w-3/6 ml-5">
                    <img className="px-28 py-2" src={people} alt="pp" />
                </div>
                <div className="w-4/6 mr-16 text-justify text-md font-semibold text-slate-200">
                    <div className="bg-slate-700 w-full py-4 px-8 m-2 rounded">Nama Lengkap : {_nama_mhs}</div>
                    <div className="bg-slate-700 w-full py-4 px-8 m-2 rounded">Program Studi : {_p_studi}</div>
                    <div className="bg-slate-700 w-full py-4 px-8 m-2 rounded">Semester : {_semester}</div>
                    <div className="bg-slate-700 w-full py-4 px-8 m-2 rounded">Kelas : {_kelas}</div>
                    <div className="bg-slate-700 w-full py-4 px-8 m-2 rounded">Angkatan : {_angkatan}</div>
                    <div className="bg-slate-700 w-full py-4 px-8 m-2 rounded">Email : {_email}</div>
                    <div className="bg-slate-700 w-full py-4 px-8 m-2 rounded">Biaya UKT : {_ukt}</div>
                    <a href="#go_here">
                        <button className="w-15 ml-2 mt-3 px-12 py-3 text-center rounded-md hover:bg-gray-700 bg-gray-900 text-white"
                        onClick={() => {
                            setId(_id)
                            setNama_mhs(_nama_mhs)
                            setP_studi(_p_studi)
                            setSemester(_semester)
                            setKelas(_kelas)
                            setAngkatan(_angkatan)
                            setEmail(_email)
                            setUKT(_ukt)
                            setIsEdit(!isEdit)
                        }}>Edit</button>
                    </a>
                </div>
            </div>
            
            {isEdit &&
            <div id="go_here" className=" flex m-auto mr-16 mb-5">
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
                                        mySwal.fire({
                                            icon: 'success',
                                            title: 'Success!',
                                            text: 'Data Editted'
                                        }).then(() => {
                                            updateMhsData();
                                        })
                                    } else {
                                        mySwal.fire('Missing Information!', 'Please Fill All The Information', 'info');
                                    }
                                }}>Edit</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800 opacity-95 max-w-sm rounded-xl overflow-hidden shadow-2xl h-72 py-5">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 pb5 text-cyan-100">Hasnur Internship Test</div>
                        <p className="text-gray-200 text-base ">
                            Oling Anugrah Fajar Pratama | Universitas Lambung Mangkurat | Teknologi Informasi - 2020 | This project was created with
                        </p>
                    </div>
                    <div className="px-6 pt-4 animate-pulse">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-500 ">#React.js</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-300 ">#Tailwind.css</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-300 ">#Firebase</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-green-500 ">#Node.js</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-purple-400 ">#Axios.js</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-yellow-300 ">#Javascript</span>
                    </div>
                </div>
                </div>
            }

        </div>
    );
}
 
export default DetailMhs;