<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Запись на прием</title>
        <script src="js/lib/underscore.js"></script>
        <script src="js/lib/jquery.js"></script>
        <script src="js/lib/bb.js"></script>
        <script src="js/lib/timepicker.js"></script>
        <script src="js/lib/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
        <script src="js/models.js"></script>
        <script src="js/views.js"></script>
        <script src="js/index.js"></script>
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/skeleton.css" />
        <link rel="stylesheet" href="css/jquery-ui.min.css" />
        <link rel="stylesheet" href="css/jquery.timepicker.css" />
    </head>
    <body>
        <div align="center">
            <form>
            <label for="lastname">Ваша Фамилия</label>
            <input id="lastname" />
            <label for="firstname">Ваше Имя</label>
            <input id="firstname" />
            <label for="surname">Ваше Отчество</label>
            <input id="surname" />
            <label for="contact">Ваш Телефон</label>
            <input id="contact" /><br/>
            <label for="date">Дата консультации</label>
            <input id="date" /><br/>
            <label for="time">Время консультации</label>
            <input id="time" /><br/>
            <label for="service">Услуга</label>
            <select id="service"></select><br/>
            <button class="button-primary" type="button" id="submit">Запись</button>
        </form>
        </div>
    </body>
</html>
