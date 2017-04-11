-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Апр 01 2017 г., 14:56
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `db_clients`
--
--Множим базу на наль
DROP TABLE IF EXISTS `admission`;
DROP TABLE IF EXISTS `employee`;
DROP TABLE IF EXISTS `service`;
-- --------------------------------------------------------

--
-- Структура таблицы `services`
--

CREATE TABLE IF NOT EXISTS `service` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) UNIQUE NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;


-- --------------------------------------------------------

--
-- Структура таблицы `people`
--

CREATE TABLE IF NOT EXISTS `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `secname` varchar(30) NOT NULL,
  `contacts` varchar(15) NOT NULL,
  `ddate` datetime NOT NULL,
  `service_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY(service_id) REFERENCES service(id) -- подключаем поле сервисов т.к. у врача должна быть профессия (если может быть больше чем 1 проффессия то надо менять)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=62 ;


-- --------------------------------------------------------

--
-- Структура таблицы `admission` отвечает за запись к врачу.
--

CREATE TABLE IF NOT EXISTS `admission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(200) NOT NULL,
  `time` varchar(200) NOT NULL,
  --`end_time` time NOT NULL,
  `firstname` varchar(200) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `surname` varchar(200) NOT NULL,
  `contact` varchar(200), -- номер телефона пациента
  `service_id` int(11) NOT NULL,
  --`employee_id` int(11) NOT NULL, -- врач ответственый за процедуру
  PRIMARY KEY (`id`),
FOREIGN KEY(service_id) REFERENCES service(id)
  --FOREIGN KEY(employee_id) REFERENCES employee(id) -- FOREIGN KEY к таблице работников т.к. консультации не может быть без врача.
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
