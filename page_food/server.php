<!-- Команда, позволяющая увидеть пришедшие данные от клиента -->

    <!-- Работа с FormData
        echo var_dump($_POST); -->

        
<!-- Работа с JSON -->
<?php
$_POST = json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST);