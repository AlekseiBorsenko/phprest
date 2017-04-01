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

-- --------------------------------------------------------

--
-- Структура таблицы `admission`
--

CREATE TABLE IF NOT EXISTS `admission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day_of_admisson` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `patient_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Структура таблицы `people`
--

CREATE TABLE IF NOT EXISTS `people` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `secname` varchar(30) NOT NULL,
  `contacts` varchar(15) NOT NULL,
  `ddate` datetime NOT NULL,
  `usluga` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=62 ;

--
-- Дамп данных таблицы `people`
--

INSERT INTO `people` (`id`, `name`, `surname`, `secname`, `contacts`, `ddate`, `usluga`) VALUES
(2, 'Иван', 'Иванов', 'Иванович', '+79602115111', '2017-01-05 14:40:00', 'Стоматолог'),
(59, 'Вячеслав', 'Жигунов', 'Николаевич', '+79218042236', '2017-03-23 09:30:00', 'Стоматолог'),
(60, 'Татьяна', 'Андронова', '', '+79536548799', '2017-03-24 10:10:00', 'Массаж'),
(61, 'Татьяна', 'Власова', 'Николаевна', '+79602114111', '2017-03-24 10:10:00', 'Массаж');

-- --------------------------------------------------------

--
-- Структура таблицы `services`
--

CREATE TABLE IF NOT EXISTS `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Дамп данных таблицы `services`
--

INSERT INTO `services` (`id`, `name`) VALUES
(1, 'Терапевт'),
(2, 'Узи'),
(3, 'Гинеколог'),
(4, 'Стоматолог'),
(5, 'Массаж'),
(6, 'Маникюр');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
