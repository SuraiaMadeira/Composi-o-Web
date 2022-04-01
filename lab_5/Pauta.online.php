<!DOCTYPE html>
<html>
<head>
    <title>Online Grade</title>
    <link rel='stylesheet' href='Pauta.css' type='text/css'>
</head>
<body>
    <?php

        $xml = simplexml_load_file('Pauta.xml');
        echo '<h2>Online Grade</h2><br>';

        foreach($xml->children() as $cd) {
            $media = (($cd->freq1 + $cd->freq2)/2);
            echo '<div class="studentn">';
            echo '<br><a>Nº de Aluno: ', $cd->attributes()->num, '</a><br><br>';
            echo '<a>Nome: ', $cd->nome, '</a><br>';
            echo '<table>';
            echo '<tr class=','.note'>'<td> exame1: </td><td>', $cd->exame1, '</td></tr><br>';
            echo '<tr class=','.note'>'<td> exame2: </td><td>', $cd->exame2, '</td></tr><br>';
            echo '<tr class=','final'>'<td>Nota Final: </td><td>', $media, '</td></tr><br>';
            echo '</table>';
        if ($media >= 10) {
            echo '<p class=';'approved'>'student/a approved/a</p>';
        }
        else {
            echo '<p class=';'approved'>'student/a deproved/a</p>';
        }
            echo '</div>';
            echo '<hr>';
    }
    ?>
    </body>
</html>