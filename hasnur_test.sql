-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2023 at 09:38 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hasnur_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `id` int(11) NOT NULL,
  `nama_mhs` varchar(255) NOT NULL,
  `p_studi` varchar(255) NOT NULL,
  `semester` int(11) NOT NULL,
  `kelas` varchar(255) NOT NULL,
  `angkatan` varchar(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `ukt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`id`, `nama_mhs`, `p_studi`, `semester`, `kelas`, `angkatan`, `email`, `ukt`) VALUES
(130, 'Prammudia Fitrian', 'Teknologi Informasi', 5, 'TKJ-2', '2020', 'test@ggmail.c', '24.000.000.000'),
(131, 'Oling Anurah Fajar Pratama', 'Teknologi Informasi', 4, 'paralel-1', '2020', '2010817210028@mhs.ulm.ac.id', '24.000.000'),
(133, 'Maulana', 'Teknologi Informasi', 3, 'paralel-1', '2020', '2010817210028@mhs.ulm.ac.id', '24.000.000'),
(134, 'Amazida', 'Teknologi Informasi', 5, 'paralel-1', '2020', '2010817210028@mhs.ulm.ac.id', '24.000.000'),
(135, 'Laily Rachmah ', 'Teknologi Informasi', 5, 'paralel-1', '2020', '2010817210028@mhs.ulm.ac.id', '24.000.000'),
(152, 'Felisitas', 'Teknologi Informasi', 6, 'paralel-2', '2021', '2010817210028@mhs.ulm.ac.id', '24.000.000'),
(153, 'Dyan Paramita', 'Kedokteran Gigi', 5, 'paralel-1', '2020', '2010817210028@mhs.ulm.ac.id', '24.000.000');

-- --------------------------------------------------------

--
-- Table structure for table `program_studi`
--

CREATE TABLE `program_studi` (
  `id` int(11) NOT NULL,
  `program_studi` int(11) NOT NULL,
  `k_prodi` int(11) NOT NULL,
  `alamat_ps` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `program_studi`
--
ALTER TABLE `program_studi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- AUTO_INCREMENT for table `program_studi`
--
ALTER TABLE `program_studi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
