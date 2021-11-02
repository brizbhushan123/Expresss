-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: nodeDB
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ADMIN`
--

DROP TABLE IF EXISTS `ADMIN`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ADMIN` (
  `id` int NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ADMIN`
--

LOCK TABLES `ADMIN` WRITE;
/*!40000 ALTER TABLE `ADMIN` DISABLE KEYS */;
INSERT INTO `ADMIN` VALUES (1,'Admin','node@gmail.com','admin',1,'2016-04-10 23:50:40');
/*!40000 ALTER TABLE `ADMIN` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `slug` varchar(255) NOT NULL,
  `views` int NOT NULL DEFAULT '0',
  `image` varchar(255) NOT NULL,
  `published` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,NULL,'xcdsadxsa','cxasc','xcdsadxsa',0,'/home/ginger/Videos/ExpressJs/blogExpress/public/uploads/blog/upload_2eb8f2fda666132c03c467f4bcf290a5.jpeg',0,'2021-08-03 19:57:10'),(2,NULL,'briz bhushan','cxasc','briz-bhushan',0,'/home/ginger/Videos/ExpressJs/blogExpress/public/uploads/blog/upload_350264638ce578ec874235619576fc48.jpg',0,'2021-08-03 19:59:01'),(3,NULL,'briz','safsafv','briz',0,'/home/ginger/Videos/ExpressJs/blogExpress/public/uploads/blog/upload_1f7186724598b38ea8a7fae3a54f124b.png',0,'2021-08-05 18:58:37'),(5,NULL,'briz dfsefewf','safsafv','briz-dfsefewf',0,'/home/ginger/Videos/ExpressJs/blogExpress/public/uploads/blog/upload_f92e9007f12601a2e507c6894e10df20.png',0,'2021-08-05 19:01:33'),(6,NULL,'xcdsadxsa dsvsd','efewf','xcdsadxsa-dsvsd',0,'/home/ginger/Videos/ExpressJs/blogExpress/public/uploads/blog/upload_7e4a9b9f94ec8eff3e071feea7998c53.png',0,'2021-08-05 19:04:27'),(10,NULL,'','','',0,'/home/ginger/Videos/ExpressJs/blogExpress/public/uploads/blog/upload_7fa5b6a15fb3965eecf220c4802bf756',0,'2021-08-05 19:15:37'),(25,NULL,'cxvd','','cxvd',0,'/home/ginger/Videos/ExpressJs/blogExpress/public/uploads/blog/upload_a2e0fb7427427e5797cd8716d9d54cde',0,'2021-08-05 20:37:44'),(26,NULL,'abababa','sdfsdfsd','abababa',0,'/home/ginger/Videos/ExpressJs/blogExpress/public/uploads/blog/upload_e9309b9a901a303725555fda8e92f73d.png',0,'2021-09-08 09:10:42');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-02 18:15:43
