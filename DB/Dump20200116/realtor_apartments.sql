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
-- Table structure for table `apartments`
--

DROP TABLE IF EXISTS `apartments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apartments` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `address` varchar(500) NOT NULL,
  `city_id` int(11) unsigned NOT NULL,
  `price` int(11) NOT NULL,
  `number_of_room` int(4) unsigned DEFAULT NULL,
  `number_of_bath` int(4) unsigned DEFAULT NULL,
  `sqft` int(6) NOT NULL,
  `created_on` datetime DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(500) DEFAULT NULL,
  `sale_status` enum('sale','rent','both') NOT NULL,
  `availability` enum('available','suspended','removed') NOT NULL,
  `property_type` enum('house','ranch','condo','land') NOT NULL,
  `main_image` text,
  `status` enum('pending','approved','denied','removed') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_apartments_cities` (`city_id`),
  KEY `fk_apartments_users` (`user_id`),
  CONSTRAINT `fk_apartments_cities` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`),
  CONSTRAINT `fk_apartments_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartments`
--

LOCK TABLES `apartments` WRITE;
/*!40000 ALTER TABLE `apartments` DISABLE KEYS */;
INSERT INTO `apartments` VALUES (63,2,'330 3rd Ave',1102757,30000000,4,3,448,'2020-01-09 21:24:03','New - 15 Hours ago','both','available','condo','images/apartment/apartment_1.jpg','approved'),(82,4,'Alenby 3 st',1102599,2100000,4,3,340,'2020-01-09 21:52:01','NEW','rent','available','condo','images/apartment/apartment_1.jpg','pending'),(83,5,'Saloona 23 st',1102346,4100000,1,1,251,'2020-01-09 21:52:01','NEW','rent','available','condo','images/apartment/apartment_1.jpg','pending'),(84,6,'Rozeni 423 st',1102173,6100000,4,3,855,'2020-01-09 21:52:01','NEW','both','available','condo','images/apartment/apartment_1.jpg','pending'),(85,1,'Zurik 52 st',1103010,2110000,4,3,281,'2020-01-09 21:52:01','New - 15 Hours ago','rent','available','condo','images/apartment/apartment_1.jpg','pending'),(86,2,'Korab 41 st',1103042,1100000,4,3,54,'2020-01-09 21:52:01','New - 9 Hours ago','both','available','condo','images/apartment/apartment_1.jpg','pending'),(87,3,'Moris 422 st 33s',1102756,343000,4,3,149,'2020-01-09 21:52:01','New OPEN HOUSE 11/12','rent','available','condo','images/apartment/apartment_1.jpg','pending'),(88,4,'Alenby 3 st',1102251,3100000,4,3,51,'2020-01-09 21:52:01','NEW','sale','available','condo','images/apartment/apartment_1.jpg','pending'),(89,5,'Alenby 3 st',1102639,100000,4,3,256,'2020-01-09 21:52:01','New','both','available','condo','images/apartment/apartment_1.jpg','pending'),(90,6,'Alenby 3 st',1102541,4000000,4,3,226,'2020-01-09 21:52:01','NEW - 12 Hours ago','rent','available','condo','images/apartment/apartment_1.jpg','pending'),(91,1,'Alenby 3 st',1102591,100000,4,3,591,'2020-01-09 21:52:01','New','both','available','condo','images/apartment/apartment_1.jpg','pending'),(92,2,'Alenby 3 st',1103080,300000,4,3,629,'2020-01-09 21:52:01','NEW','both','available','condo','images/apartment/apartment_1.jpg','pending'),(93,3,'Alenby 3 st',1102859,200000,4,3,297,'2020-01-09 21:52:01','NEW','rent','available','condo','images/apartment/apartment_1.jpg','pending'),(94,4,'Alenby 3 st',1102716,400000,4,3,517,'2020-01-09 21:52:01','New - 15 Hours ago','sale','available','condo','images/apartment/apartment_1.jpg','pending'),(95,5,'Alenby 3 st',1102522,1300000,4,3,734,'2020-01-09 21:52:01','NEW','rent','available','condo','images/apartment/apartment_1.jpg','pending'),(96,6,'Alenby 3 st',1102451,2300000,4,3,951,'2020-01-09 21:52:01','NEW OPEN HOUSE 11/13','both','available','condo','images/apartment/apartment_1.jpg','pending'),(97,1,'Alenby 3 st',1102738,4300000,4,3,497,'2020-01-09 21:52:01','NEW OPEN HOUSE 11/12','rent','available','condo','images/apartment/apartment_1.jpg','pending'),(98,2,'Alenby 3 st',1102345,5300000,4,3,427,'2020-01-09 21:52:01','New','both','available','condo','images/apartment/apartment_1.jpg','pending'),(99,3,'Alenby 3 st',1103025,7300000,4,3,137,'2020-01-09 21:52:01','New','rent','available','condo','images/apartment/apartment_1.jpg','pending'),(105,2,'Alenby 3 st',1102757,50000,4,4,484,'2020-01-14 12:32:43','NEW','both','available','condo','images/apartment/apartment_1.jpg','pending');
/*!40000 ALTER TABLE `apartments` ENABLE KEYS */;
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
