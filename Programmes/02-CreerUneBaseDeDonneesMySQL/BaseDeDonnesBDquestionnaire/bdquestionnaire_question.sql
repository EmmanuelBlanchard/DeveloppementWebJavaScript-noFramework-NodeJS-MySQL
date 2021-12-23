CREATE DATABASE  IF NOT EXISTS `bdquestionnaire` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bdquestionnaire`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: bdquestionnaire
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `idquestion` int NOT NULL AUTO_INCREMENT,
  `descriptionQuestion` varchar(150) NOT NULL,
  `reponseAQuestion` varchar(45) NOT NULL,
  `reponseBQuestion` varchar(45) NOT NULL,
  `reponseCQuestion` varchar(45) NOT NULL,
  `reponseDQuestion` varchar(45) NOT NULL,
  `bonneReponseQuestion` varchar(45) NOT NULL,
  `idQuestionnaire` int NOT NULL,
  PRIMARY KEY (`idquestion`),
  KEY `FK_question_questionnaire_idx` (`idQuestionnaire`),
  CONSTRAINT `FK_question_questionnaire` FOREIGN KEY (`idQuestionnaire`) REFERENCES `questionnaire` (`idquestionnaire`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'Combien de pattes à un chat ?','1','2','3','4','4',1),(2,'Combien de griffes à un chat par patte ?','3','4','5','6','5',1),(3,'Que préfère manger un chat ?','souris','humain','herbe','dragibus','souris',1),(4,'Combien de pattes à un chien ?','1','2','3','4','4',2),(5,'Combien de petits à un chien en moyenne ?','1','2','3','4','3',2),(6,'Quel son caractérise un chien ?','Miaule','Abboie','Ronfle','Renifle','Abboie',2),(7,'Quelle est la capitale de la France ?','Paris','Londres','Bruxelles','Berlin','Paris',3),(8,'Quelle est la capitale de l\'Angleterre ?','Paris','Londres','Bruxelles','Berlin','Londres',3);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-23 16:17:56
