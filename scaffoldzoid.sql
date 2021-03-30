-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 30, 2021 at 06:26 AM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `scaffoldzoid`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `rate` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `user_id`, `name`, `rate`) VALUES
(1, 6, 'Mandarin', 200),
(2, 6, 'Seville Orange', 150),
(3, 6, 'Bergamot Orange', 500),
(4, 6, 'Clementine', 450),
(5, 8, 'mosambi', 675);

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `picture` varchar(500) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `user_id`, `picture`, `description`) VALUES
(9, 8, 'https://res.cloudinary.com/dx6zgsncl/image/upload/v1617060480/wghjqr5gfrbqpnlbvxhz.png', 'zibrannnnnn bbbbbb'),
(10, 6, 'https://res.cloudinary.com/dx6zgsncl/image/upload/v1617065835/xhngtihfpljowcmnll2p.jpg', 'vvvvv bbb nnn');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(50) NOT NULL COMMENT '"buyer", "seller"'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`) VALUES
(6, 'zibranshaikh', 'zibranshaikh@ymail.com', '$2a$10$zv1hWSYS0nnMgb0pLSdWT.RrxYQOGHsixUtj7JvfNFKC37taAmL7C', 'seller'),
(8, 'demo@gogo.com', 'demo@gogo.com', '$2a$10$XdPTtbpAI3OeZvGQGK1PeOvmSoQ/qBTQ2UUc4yFt9.WsvGyWGL/oe', 'seller'),
(9, 'arif', 'arif@gmail.com', '$2a$10$vQBchAxjIV8QbtTW9KYDtOxzG5i8UT0Irt7T0QmtWkWBGXse4ESb.', 'buyer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
