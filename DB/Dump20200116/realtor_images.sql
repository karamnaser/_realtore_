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
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `apartment_id` int(11) unsigned NOT NULL,
  `url` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_images_apartments` (`apartment_id`),
  CONSTRAINT `fk_images_apartments` FOREIGN KEY (`apartment_id`) REFERENCES `apartments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=190 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (98,63,'images/apartment/apartment_1.jpg'),(99,63,'images/apartment/apartment_2.jpg'),(100,63,'images/apartment/apartment_4.jpg'),(101,63,'images/apartment/apartment_4.jpg'),(102,63,'images/apartment/apartment_5.jpg'),(103,82,'images/apartment/apartment_6.png'),(104,82,'images/apartment/apartment_7.jpg'),(105,82,'images/apartment/apartment_8.jpg'),(106,82,'images/apartment/apartment_9.jpg'),(107,82,'images/apartment/apartment_1.jpg'),(108,83,'images/apartment/apartment_1.jpg'),(109,83,'images/apartment/apartment_1.jpg'),(110,83,'images/apartment/apartment_1.jpg'),(111,83,'images/apartment/apartment_1.jpg'),(112,83,'images/apartment/apartment_1.jpg'),(113,84,'images/apartment/apartment_1.jpg'),(114,84,'images/apartment/apartment_1.jpg'),(115,84,'images/apartment/apartment_1.jpg'),(116,84,'images/apartment/apartment_1.jpg'),(117,84,'images/apartment/apartment_1.jpg'),(118,85,'images/apartment/apartment_1.jpg'),(119,85,'images/apartment/apartment_2.jpg'),(120,85,'images/apartment/apartment_4.jpg'),(121,85,'images/apartment/apartment_4.jpg'),(122,85,'images/apartment/apartment_4.jpg'),(123,86,'images/apartment/apartment_1.jpg'),(124,86,'images/apartment/apartment_2.jpg'),(125,86,'images/apartment/apartment_4.jpg'),(126,86,'images/apartment/apartment_4.jpg'),(127,86,'images/apartment/apartment_4.jpg'),(128,87,'images/apartment/apartment_1.jpg'),(129,87,'images/apartment/apartment_2.jpg'),(130,87,'images/apartment/apartment_4.jpg'),(131,87,'images/apartment/apartment_4.jpg'),(132,87,'images/apartment/apartment_4.jpg'),(133,88,'images/apartment/apartment_1.jpg'),(134,88,'images/apartment/apartment_2.jpg'),(135,88,'images/apartment/apartment_4.jpg'),(136,88,'images/apartment/apartment_4.jpg'),(137,88,'images/apartment/apartment_4.jpg'),(138,89,'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'),(139,89,'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'),(140,89,'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'),(141,89,'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'),(142,90,'images/apartment/apartment_1.jpg'),(143,90,'images/apartment/apartment_2.jpg'),(144,90,'images/apartment/apartment_4.jpg'),(145,90,'images/apartment/apartment_4.jpg'),(146,90,'images/apartment/apartment_4.jpg'),(147,91,'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'),(148,91,'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'),(149,91,'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'),(150,91,'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'),(151,92,'images/apartment/apartment_1.jpg'),(152,92,'images/apartment/apartment_2.jpg'),(153,92,'images/apartment/apartment_4.jpg'),(154,92,'images/apartment/apartment_4.jpg'),(155,92,'images/apartment/apartment_4.jpg'),(156,93,'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'),(157,93,'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'),(158,93,'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'),(159,93,'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'),(160,94,'images/apartment/apartment_1.jpg'),(161,94,'images/apartment/apartment_2.jpg'),(162,94,'images/apartment/apartment_4.jpg'),(163,94,'images/apartment/apartment_4.jpg'),(164,94,'images/apartment/apartment_4.jpg'),(165,95,'images/apartment/apartment_1.jpg'),(166,95,'images/apartment/apartment_2.jpg'),(167,95,'images/apartment/apartment_4.jpg'),(168,95,'images/apartment/apartment_4.jpg'),(169,95,'images/apartment/apartment_4.jpg'),(170,96,'images/apartment/apartment_1.jpg'),(171,96,'images/apartment/apartment_2.jpg'),(172,96,'images/apartment/apartment_4.jpg'),(173,96,'images/apartment/apartment_4.jpg'),(174,96,'images/apartment/apartment_4.jpg'),(175,97,'images/apartment/apartment_1.jpg'),(176,97,'images/apartment/apartment_2.jpg'),(177,97,'images/apartment/apartment_4.jpg'),(178,97,'images/apartment/apartment_4.jpg'),(179,97,'images/apartment/apartment_4.jpg'),(180,98,'images/apartment/apartment_1.jpg'),(181,98,'images/apartment/apartment_2.jpg'),(182,98,'images/apartment/apartment_4.jpg'),(183,98,'images/apartment/apartment_4.jpg'),(184,98,'images/apartment/apartment_4.jpg'),(185,99,'images/apartment/apartment_1.jpg'),(186,99,'images/apartment/apartment_2.jpg'),(187,99,'images/apartment/apartment_4.jpg'),(188,99,'images/apartment/apartment_4.jpg'),(189,99,'images/apartment/apartment_4.jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
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
