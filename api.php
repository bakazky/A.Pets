<?php
include_once('conexao.php');
$postjson=json_decode(file_get_contents('php://input'),true);

$senha_crip = md5($postjson['senha']);
if($postjson['requisicao'] == 'salvar'){

    $query = $pdo->prepare("INSERT INTO usuarios SET
    senha=:senha, nome=:nome_completo, usuario=:usuario,
    senha_original=:senha_original, status=:status");
    $query->bindValue(":senha", $postjson['senha']);
    $query->bindValue(":nome", $postjson['nome']);
    $query->bindValue(":usuario", $postjson['usuario']);
    $query->bindValue(":senha_original", $postjson['senha_original']);
    $id = $pdo->lastInsertId();

if($query){
    $result=json_decode(array('sucess'=>true,
        'id'=>$id));
}else{
    $result=json_decode(array('sucess'=>false));
}

echo $result;
}