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
-- Table structure for table `apartments_history`
--

DROP TABLE IF EXISTS `apartments_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apartments_history` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `apartment_id` int(11) unsigned DEFAULT NULL,
  `user_id` int(11) unsigned DEFAULT NULL,
  `label` enum('pending','approved','denied','removed') NOT NULL DEFAULT 'pending',
  `description` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartments_history`
--

LOCK TABLES `apartments_history` WRITE;
/*!40000 ALTER TABLE `apartments_history` DISABLE KEYS */;
INSERT INTO `apartments_history` VALUES (1,63,2,'pending',NULL,'2020-01-09 21:24:03'),(2,82,NULL,'pending',NULL,'2020-01-09 21:52:01'),(3,83,NULL,'pending',NULL,'2020-01-09 21:52:01'),(4,84,1,'pending',NULL,'2020-01-09 21:52:01'),(5,85,1,'pending',NULL,'2020-01-09 21:52:01'),(6,86,1,'pending',NULL,'2020-01-09 21:52:01'),(7,87,1,'pending',NULL,'2020-01-09 21:52:01'),(8,88,1,'pending',NULL,'2020-01-09 21:52:01'),(9,89,1,'pending',NULL,'2020-01-09 21:52:01'),(10,90,1,'pending',NULL,'2020-01-09 21:52:01'),(11,91,1,'pending',NULL,'2020-01-09 21:52:01'),(12,92,1,'pending',NULL,'2020-01-09 21:52:01'),(13,93,1,'pending',NULL,'2020-01-09 21:52:01'),(14,94,1,'pending',NULL,'2020-01-09 21:52:01'),(15,95,1,'pending',NULL,'2020-01-09 21:52:01'),(16,96,1,'pending',NULL,'2020-01-09 21:52:01'),(17,97,1,'pending',NULL,'2020-01-09 21:52:01'),(18,98,1,'pending',NULL,'2020-01-09 21:52:01'),(19,99,1,'pending',NULL,'2020-01-09 21:52:01');
/*!40000 ALTER TABLE `apartments_history` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-16 10:52:42
