const Home = () => {
    return ( 
        <div className="home h-screen pt-16 bg-slate-300 drop">
            <div className="container h-5/6 w-11/12 gradi bg-gradient-to-r from-slate-600 to-slate-400 rounded-xl my-16 mx-auto flex flex-row py-20 drop-shadow-lg">
                <h1 className="text-3xl pb-52  py-20 font-semibold text-white p-28"> Selamat Datang di Sistem Pengelolaan Informasi | YHC Internship Program | MSIB Batch 4
                <div>
                    <a href="#table">
                        <button className="bg-slate-400 m-20 font-thin text-black text-lg drop-shadow-2xl hover:bg-slate-600 hover:drop-shadow p-5 rounded-lg font-mono">Daftar Data Mahasiswa</button>    
                    </a>
                </div></h1>
                <img className="px-28" src="Graduation-rafiki.png" alt="grafiti" />
            </div>
        </div>
    );
}
 
export default Home;