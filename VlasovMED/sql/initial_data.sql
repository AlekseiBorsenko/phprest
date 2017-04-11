
--
-- Дамп данных таблицы `services`
--

INSERT INTO `service` (`name`) VALUES
('Терапевт'),
('Узи'),
('Гинеколог'),
('Стоматолог'),
('Массаж'),
('Маникюр');

INSERT INTO `employee` (`id`, `name`, `surname`, `secname`, `contacts`, `ddate`, `service_id`) VALUES
(2, 'Иван', 'Иванов', 'Иванович', '+79602115111', '2017-01-05 14:40:00', (select id from service where `name` like 'Стоматолог')),
(59, 'Вячеслав', 'Жигунов', 'Николаевич', '+79218042236', '2017-03-23 09:30:00', (select id from service where `name` like 'Стоматолог')),
(60, 'Татьяна', 'Андронова', '', '+79536548799', '2017-03-24 10:10:00', (select id from service where `name` like 'Массаж')),
(61, 'Татьяна', 'Власова', 'Николаевна', '+79602114111', '2017-03-24 10:10:00', (select id from service where `name` like 'Массаж'));