<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script src="js/lib/underscore.js"></script>
        <script src="js/lib/jquery.js"></script>
        <script src="js/lib/bb.js"></script>
        <script src="js/script.js"></script>
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/skeleton.css" />
    </head>
    <body>
        <form>
            <label for="lastname">Ваша Фамилия</label>
            <input id="lastname" />
            <label for="firstname">Ваше Имя</label>
            <input id="firstname" />
            <label for="surname">Ваше Отчество</label>
            <input id="surname" />
            <label for="contact">Ваш Телефон</label>
            <input id="contact" /><br/>
            <label for="service">Услуга</label>
            <select id="service"></select><br/>
            <button class="button-primary" type="button" id="submit">Запись</button>
        </form>
    </body>
</html>
