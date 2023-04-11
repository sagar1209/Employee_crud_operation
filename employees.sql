-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2023 at 08:46 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `infoware`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `sr_no` int(20) NOT NULL,
  `Id` int(20) NOT NULL,
  `Employee_name` varchar(50) NOT NULL,
  `Job_title` varchar(50) NOT NULL,
  `phone_Number` varchar(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `City` varchar(20) NOT NULL,
  `State` varchar(20) NOT NULL,
  `P_contact_name` varchar(20) NOT NULL,
  `P_contact` int(11) NOT NULL,
  `P_Relationship` varchar(20) NOT NULL,
  `S_contact_name` varchar(20) NOT NULL,
  `S_contact` int(11) NOT NULL,
  `S_Relationship` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`sr_no`, `Id`, `Employee_name`, `Job_title`, `phone_Number`, `Email`, `Address`, `City`, `State`, `P_contact_name`, `P_contact`, `P_Relationship`, `S_contact_name`, `S_contact`, `S_Relationship`) VALUES
(6, 0, 'sagar', 'backend', '93133456566', 'sealiya@gmail.com', ' garbichowk', 'Jetpur', 'Gujrat', 'harshil', 1234567890, '0', 'amit', 987654321, '0'),
(15, 3, 'pk', 'science', '234567891', 'pk@gmail.com', ' yxs', 'Rajkot', 'mp', 'harshil', 1234567890, 'Fried', 'amit', 987654321, 'brother'),
(16, 4, 'om', 'science', '2848343434', 'om@gmail.com', ' yxs', 'Rajkot', 'mp', 'ankit', 1234567890, 'Fried', 'amit', 987654321, 'bigbro'),
(18, 5, 'sanket', 'ayurved', '9898989889', 'sanket@gmail.com', 'rajmolinagar,palanapur', 'gondal', 'gujrat', 'amaish', 2147483647, 'uncle', 'dhaval', 2147483647, 'bigbro');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`sr_no`),
  ADD UNIQUE KEY `phone_Number` (`phone_Number`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Id` (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `sr_no` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
