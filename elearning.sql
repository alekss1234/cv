-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2022 at 01:43 AM
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
-- Database: `elearning`
--

-- --------------------------------------------------------

--
-- Table structure for table `form2`
--

CREATE TABLE `form2` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `Message` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `form2`
--

INSERT INTO `form2` (`id`, `name`, `email`, `subject`, `Message`) VALUES
(1, 'aleks', 'aleks@gmail.com', 'prove', 'provve123'),
(2, 'aleks', 'alekssulce1@gmail.com', 'matematike', 'hiii'),
(3, 'aleks', 'sulce', 'prove2', 'hello'),
(4, 'Ilir Cuko', 'icuko@gmail.com', 'Permiresim i faqes', 'Duhet permiresuar faqja --------'),
(5, 'ALEKS', 'asulce@uet.edu.al', 'webb', 'webbb'),
(6, 'Xhoni Gupi', 'xhgupi@gmailo.com', 'webb', 'kot prove'),
(7, 'ALEKS', 'al', 'a', 'a'),
(8, 'a', 'aa', 'a', 'a'),
(9, 'ALEKS', 'alekssulce1@gmail.com', 'aaaa', 'aaaaaaaaaaaaaaa'),
(10, '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user_form`
--

CREATE TABLE `user_form` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` varchar(255) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_form`
--

INSERT INTO `user_form` (`id`, `name`, `email`, `password`, `user_type`) VALUES
(3, 'aleks', 'alekssulce1@gmail.com', '202cb962ac59075b964b07152d234b70', 'user'),
(4, 'klaurent', 'klaumadhi2000@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(5, 'ilir', 'alekssulce1@gmail.com', 'c20ad4d76fe97759aa27a0c99bff6710', 'user'),
(6, 'franci', 'alekssulce1@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 'user'),
(7, 'edionis', 'edionispantera@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', 'user'),
(8, 'aleks', 'asulce@uet.edu.al', '8a8bb7cd343aa2ad99b7d762030857a2', 'user'),
(9, 'ilir', 'ilir@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', 'user'),
(10, 'Franci', 'franci.llulla1@gmail.com', '7694f4a66316e53c8cdd9d9954bd611d', 'user'),
(11, 'ALEKS', 'alekssulce1@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `form2`
--
ALTER TABLE `form2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_form`
--
ALTER TABLE `user_form`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `form2`
--
ALTER TABLE `form2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user_form`
--
ALTER TABLE `user_form`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
