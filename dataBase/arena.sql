-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 30, 2018 at 11:41 AM
-- Server version: 5.7.22-0ubuntu0.16.04.1
-- PHP Version: 7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arena`
--

-- --------------------------------------------------------

--
-- Table structure for table `hero`
--

CREATE TABLE `hero` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `hp` int(11) NOT NULL,
  `armor` int(11) NOT NULL,
  `weapon_id` int(11) NOT NULL,
  `avatar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hero`
--

INSERT INTO `hero` (`id`, `name`, `hp`, `armor`, `weapon_id`, `avatar`) VALUES
(3, 'Iron Man', 90, 85, 4, 'http://pngimg.com/uploads/ironman/ironman_PNG66.png'),
(6, 'Thor', 100, 100, 3, 'https://vignette.wikia.nocookie.net/mightythor/images/0/0a/Thor_Odinson_%28Earth-12131%29.png/revision/latest?cb=20160919171354'),
(7, 'Spiderman', 80, 65, 2, 'http://webiconspng.com/wp-content/uploads/2017/09/Spider-Man-PNG-Image-31202.png'),
(9, 'Hulk', 78, 85, 6, 'http://i150.photobucket.com/albums/s101/pyrson/hulk2o_zps09226a52.png');

-- --------------------------------------------------------

--
-- Table structure for table `weapon`
--

CREATE TABLE `weapon` (
  `weapon_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `damage_min` int(11) NOT NULL,
  `damage_max` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `weapon`
--

INSERT INTO `weapon` (`weapon_id`, `name`, `damage_min`, `damage_max`, `image`) VALUES
(1, 'Epée', 50, 100, ''),
(2, 'Lance patate', 50, 100, ''),
(3, 'Griffe', 50, 100, ''),
(4, 'Lance flamme', 50, 100, ''),
(5, 'Fusil', 50, 100, ''),
(6, 'Bouclier', 50, 100, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hero`
--
ALTER TABLE `hero`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hero`
--
ALTER TABLE `hero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
