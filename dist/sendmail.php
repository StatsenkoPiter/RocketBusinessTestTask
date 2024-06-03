<?php
$text = filter_var ($_POST['mailtext'],FILTER_SANITIZE_STRIPPED);
mail ('statsenkopiter@yandex.ru','auto-send',$text,'From: test@test.ru\r\n');
