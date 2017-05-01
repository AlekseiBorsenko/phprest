<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Панель Администратора</title>
        <script src="js/lib/underscore.js"></script>
        <script src="js/lib/jquery.js"></script>
        <script src="js/lib/bb.js"></script>
        <script src="js/lib/timepicker.js"></script>
        <script src="js/lib/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
        <script src="js/models.js"></script>
        <script src="js/views.js"></script>
        <script src="js/admin.js"></script>
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/skeleton.css" />
        <link rel="stylesheet" href="css/jquery-ui.min.css" />
        <link rel="stylesheet" href="css/jquery.timepicker.css" />
    </head>
    <body>
        
        <div align="center">
            <h1>Врачи</h1>
            <table>
                <thead>
                    <tr>
                        <th><a id="add_employee">+</a></th>
                        <th>Имя</th>
                        <th>Специализация</th>
                    </tr>
                </thead>
                <tbody id="employee_list">
                    
                </tbody>
            </table>
            <h1>Консультации</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Имя
                        </th>
                        <th>
                            Фамилия
                        </th>
                        <th>
                            Отчество
                        </th>
                        <th>
                            Дата
                        </th>
                        <th>
                            Время
                        </th>
                        <th>
                           Контакт пациента
                        </th>
                        <th>
                            Специализация
                        </th>
                    </tr>
                </thead>
                <tbody id="service_list">
                    
                </tbody>
            </table>
        </div>
    </body>
</html>
