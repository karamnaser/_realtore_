-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: realtor
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(11) unsigned NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(25) DEFAULT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`),
  KEY `fk_users_roles` (`role_id`),
  CONSTRAINT `fk_users_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'karam','naser','karamnaser@hotmail.com','6331cb6dd2d47573745f44108bfabfce6d58cba55e32b422a824da0da21d0fbeeb1452602297cb94004492264e3099df2a1449510e0b08cde8fd7a034312c11f','+972 123456444','active'),(2,2,'saveliy','shiryaev','sava@gmail.com','6331cb6dd2d47573745f44108bfabfce6d58cba55e32b422a824da0da21d0fbeeb1452602297cb94004492264e3099df2a1449510e0b08cde8fd7a034312c11f','+972 123456789','active'),(3,2,'maya','bridgwater','maya@gmail.com','6331cb6dd2d47573745f44108bfabfce6d58cba55e32b422a824da0da21d0fbeeb1452602297cb94004492264e3099df2a1449510e0b08cde8fd7a034312c11f','+972 123456788','active'),(4,2,'ziv','abramovich','ziv@gmail.com','6331cb6dd2d47573745f44108bfabfce6d58cba55e32b422a824da0da21d0fbeeb1452602297cb94004492264e3099df2a1449510e0b08cde8fd7a034312c11f','+972 123456777','active'),(5,2,'aviv','tendler','aviv@gmail.com','6331cb6dd2d47573745f44108bfabfce6d58cba55e32b422a824da0da21d0fbeeb1452602297cb94004492264e3099df2a1449510e0b08cde8fd7a034312c11f','+972 123456765','active'),(6,2,'stav','abergel','stav@gmail.com','6331cb6dd2d47573745f44108bfabfce6d58cba55e32b422a824da0da21d0fbeeb1452602297cb94004492264e3099df2a1449510e0b08cde8fd7a034312c11f','+972 1234567878','active');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-16 14:23:34
