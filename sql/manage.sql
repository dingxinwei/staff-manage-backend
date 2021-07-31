/*
Navicat MySQL Data Transfer

Source Server         : 192.168.1.53
Source Server Version : 80021
Source Host           : 192.168.1.53:3306
Source Database       : manage

Target Server Type    : MYSQL
Target Server Version : 80021
File Encoding         : 65001

Date: 2021-07-31 14:18:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_attence`
-- ----------------------------
DROP TABLE IF EXISTS `t_attence`;
CREATE TABLE `t_attence` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eid` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `flag` smallint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `empid` (`eid`),
  CONSTRAINT `empid` FOREIGN KEY (`eid`) REFERENCES `t_emp` (`eid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_attence
-- ----------------------------
INSERT INTO `t_attence` VALUES ('2', '1002', '2020-12-11', '0');
INSERT INTO `t_attence` VALUES ('3', '1003', '2020-12-23', '1');
INSERT INTO `t_attence` VALUES ('5', '1002', '2020-12-10', '0');
INSERT INTO `t_attence` VALUES ('6', '1002', '2020-12-18', '0');
INSERT INTO `t_attence` VALUES ('7', '1006', '2020-12-18', '1');
INSERT INTO `t_attence` VALUES ('8', '1003', '2020-12-17', '1');
INSERT INTO `t_attence` VALUES ('9', '1003', '2020-12-19', '1');
INSERT INTO `t_attence` VALUES ('10', '1011', '2020-12-25', '1');
INSERT INTO `t_attence` VALUES ('11', '1110', '2020-12-19', '1');
INSERT INTO `t_attence` VALUES ('12', '1009', '2020-12-19', '1');
INSERT INTO `t_attence` VALUES ('13', '1005', '2020-12-10', '1');
INSERT INTO `t_attence` VALUES ('14', '1006', '2020-12-01', '1');
INSERT INTO `t_attence` VALUES ('15', '1005', '2020-12-09', '1');
INSERT INTO `t_attence` VALUES ('16', '1008', '2020-12-17', '1');
INSERT INTO `t_attence` VALUES ('17', '1011', '2020-12-24', '1');
INSERT INTO `t_attence` VALUES ('18', '1002', '2020-12-14', '1');
INSERT INTO `t_attence` VALUES ('19', '1005', '2020-12-08', '1');
INSERT INTO `t_attence` VALUES ('20', '1006', '2020-12-23', '0');
INSERT INTO `t_attence` VALUES ('21', '1008', '2020-12-31', '1');
INSERT INTO `t_attence` VALUES ('22', '1006', '2020-12-22', '0');
INSERT INTO `t_attence` VALUES ('23', '1003', '2020-12-23', '0');

-- ----------------------------
-- Table structure for `t_dept`
-- ----------------------------
DROP TABLE IF EXISTS `t_dept`;
CREATE TABLE `t_dept` (
  `did` int NOT NULL AUTO_INCREMENT,
  `dname` varchar(100) NOT NULL,
  PRIMARY KEY (`did`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_dept
-- ----------------------------
INSERT INTO `t_dept` VALUES ('1', '开发部');
INSERT INTO `t_dept` VALUES ('2', '财务部');
INSERT INTO `t_dept` VALUES ('3', '人事部');

-- ----------------------------
-- Table structure for `t_emp`
-- ----------------------------
DROP TABLE IF EXISTS `t_emp`;
CREATE TABLE `t_emp` (
  `eid` varchar(50) NOT NULL,
  `ename` varchar(50) DEFAULT NULL,
  `edate` date DEFAULT NULL,
  `egender` smallint DEFAULT NULL,
  `did` int NOT NULL,
  PRIMARY KEY (`eid`),
  UNIQUE KEY `eid` (`eid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_emp
-- ----------------------------
INSERT INTO `t_emp` VALUES ('1002', '小明', '2020-11-26', '0', '1');
INSERT INTO `t_emp` VALUES ('1003', '小吴', '2020-11-19', '1', '2');
INSERT INTO `t_emp` VALUES ('1005', '小雪', '2020-11-04', '1', '3');
INSERT INTO `t_emp` VALUES ('1006', '小成', '2020-12-02', '0', '1');
INSERT INTO `t_emp` VALUES ('1008', '小陈', '2020-12-10', '1', '3');
INSERT INTO `t_emp` VALUES ('1009', '王五', '2020-12-16', '0', '1');
INSERT INTO `t_emp` VALUES ('1011', '小二', '2020-12-09', '0', '1');
INSERT INTO `t_emp` VALUES ('1110', '小韩', '2020-12-24', '1', '2');
INSERT INTO `t_emp` VALUES ('1111', 'test', '2021-07-23', '1', '2');
INSERT INTO `t_emp` VALUES ('1112', 'test', '2021-07-07', '0', '2');

-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` smallint NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('admin', '123', '1');
INSERT INTO `t_user` VALUES ('dxw', '456', '0');
