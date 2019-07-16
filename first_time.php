<?php
if (!isset($_COOKIE['firsttime']))
{
    setcookie("firsttime", "no");
    header('Location: testsite.html');
    exit();
}
else
{
    header('Location: login.html');
    exit();
}
?>