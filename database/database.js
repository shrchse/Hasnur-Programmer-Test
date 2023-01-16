const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hasnur_test',
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM mahasiswa";

    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post('/api/insert', (req, res) => {
    const nama_mhs = req.body.nama_mhs;
    const p_studi = req.body.p_studi;
    const semester = req.body.semester;
    const kelas = req.body.kelas;
    const angkatan = req.body.angkatan;
    const email = req.body.email;
    const ukt = req.body.ukt;

    const sqlInsert = "INSERT INTO mahasiswa (nama_mhs, p_studi, semester, kelas, angkatan, email, ukt) VALUES (?,?,?,?,?,?,?);";

    db.query(sqlInsert, [ nama_mhs, p_studi, semester, kelas, angkatan, email, ukt ], (err, res) => {
        console.log('success inserting data');
    })
});

app.put("/api/update", (req, res) => {
    const id = req.body.id;
    const nama_mhs = req.body.nama_mhs;
    const p_studi = req.body.p_studi;
    const semester = req.body.semester;
    const kelas = req.body.kelas;
    const angkatan = req.body.angkatan;
    const email = req.body.email;
    const ukt = req.body.ukt;

    const sqlUpdate = "UPDATE mahasiswa SET nama_mhs = ?, p_studi = ?, semester = ?, kelas = ?, angkatan = ?, email = ?, ukt = ? WHERE id = ?"

    db.query(sqlUpdate, [nama_mhs, p_studi, semester, kelas, angkatan, email, ukt, id], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.delete("/api/delete/:id", (req, res) => {
    const mhs = req.params.id;
    const sqlDelete = "DELETE FROM mahasiswa WHERE id = ?";

    db.query(sqlDelete, mhs, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})

app.listen(3001, () => {
    console.log('running on port 3001')
});
