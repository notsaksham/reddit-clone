-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: reddit
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.19.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `comm_id` int(11) NOT NULL AUTO_INCREMENT,
  `comm_desc` varchar(1000) NOT NULL,
  `author` varchar(50) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`comm_id`),
  KEY `author` (`author`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'This is just a test comment','saksham',2),(2,'}','saksham',2),(3,'','saksham',2),(4,'Last try i hope','saksham',2),(5,'Please let comments work flawlessly','saksham',8);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_title` varchar(255) NOT NULL,
  `post_content` varchar(1000) DEFAULT NULL,
  `author` varchar(50) NOT NULL,
  `upvote` int(11) DEFAULT '0',
  `downvote` int(11) DEFAULT '0',
  `sub_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `author` (`author`),
  KEY `sub_id` (`sub_id`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`author`) REFERENCES `users` (`username`),
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`sub_id`) REFERENCES `sub` (`sub_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (2,'First','my%first%post','saksham',0,0,1),(3,'Second','my second post','saksham',0,0,1),(4,'Second','my second post','saksham',0,0,1),(5,'first','This is my first post through UI','okie',0,0,1),(6,'second','much better insertion with things done better','saksham',0,0,1),(7,'hello','posting through UI','saksham',0,0,1),(8,'s','sas','okie',0,0,1),(9,'testing','not sure what','neeraj',0,0,1),(10,'i can enter','random text','rohit',0,0,1),(11,'testing','multiple posts possibilites','rohit',0,0,1),(12,'my signup works','yes it does even with state','test',0,0,1),(13,'this is a post by','the new','new',0,0,1),(14,'xs','sdaf','notsaksham',0,0,1),(15,'Compatibiltiy','Test for comppatibiltiy of cold with new code','saksham',0,0,NULL);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub`
--

DROP TABLE IF EXISTS `sub`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sub` (
  `sub_id` int(11) NOT NULL AUTO_INCREMENT,
  `sub_title` varchar(100) NOT NULL,
  `sub_desc` varchar(1000) NOT NULL,
  PRIMARY KEY (`sub_id`),
  UNIQUE KEY `sub_title` (`sub_title`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub`
--

LOCK TABLES `sub` WRITE;
/*!40000 ALTER TABLE `sub` DISABLE KEYS */;
INSERT INTO `sub` VALUES (1,'All','A place for all your reddit');
/*!40000 ALTER TABLE `sub` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'saksham','saksham'),(3,'newme','okay'),(4,'sakshamn new','dsas'),(5,'saksha','saksja'),(6,'sakshamk','sa'),(7,'TEAM 23','q'),(8,'neeraj','nkg'),(9,'ok','okay'),(10,'stust','stu'),(11,'new','new'),(12,'still','new'),(13,'okie','dokie'),(14,'okieee','dokieee'),(15,'rohit','rohit'),(16,'nreee','wmklsadna'),(18,'test','signup'),(19,'notsaksham','saksham');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `votes`
--

DROP TABLE IF EXISTS `votes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `votes` (
  `vote_id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(50) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `vote` int(11) DEFAULT '0',
  PRIMARY KEY (`vote_id`),
  UNIQUE KEY `author` (`author`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `votes_ibfk_1` FOREIGN KEY (`author`) REFERENCES `users` (`username`),
  CONSTRAINT `votes_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votes`
--

LOCK TABLES `votes` WRITE;
/*!40000 ALTER TABLE `votes` DISABLE KEYS */;
/*!40000 ALTER TABLE `votes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-18 19:46:48
