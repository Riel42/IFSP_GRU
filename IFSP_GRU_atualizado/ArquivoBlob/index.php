<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php 
        if(isset($_POST['acao'])){
            $arquivo = $_FILES['file'];

            $arquivoNovo = explode('.',$arquivo['name']);

            if($arquivoNovo[sizeof($arquivoNovo)-1] != 'jpg'){
                die('Você não podefazer upload deste tipo de arquivo');
            }
            else{
                echo 'Upload feito com sucesso!';
                move_uploaded_file($arquivo['tmp_name'],'uploads/'.$arquivo['name']);
            }
        }
    ?>

    <form action="" method="post" enctype="multipart/form-data">
        <input type="file" name="file">
        <input type="submit" name="acao" value="Enviar">
    </form>
</body>
</html>