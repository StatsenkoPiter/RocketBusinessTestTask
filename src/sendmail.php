<?php
$text = filter_var ($_POST['mailtext'],FILTER_SANITIZE_STRIPPED);
mail ('rbru-metrika@yandex.ru','Автоматически отправленный текст',$text,'From: statsenkopiter@yandex.ru');
header("Location: /index.html");
exit;
