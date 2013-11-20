<?php
try {
    $mongo = new MongoClient();
    $db = $mongo->selectDB('sample');
}catch(MongoConnectionException $e){
    $result = array('status'=>'failed', 'msg'=>'MongoDB connection error');
}
$collection = $db->selectCollection('user');
$startIndex = 5;
$endIndex = 505;
$queryResult = $collection->find(array('id'=> array('$gt'=>$startIndex, '$lt'=>$endIndex )));
$result = "";
$start = microtime(true);
foreach($queryResult as $item) {
    $result .= json_encode($item) . ',';
}
if($_REQUEST['totalItem']) {
    echo $_REQUEST['totalItem'];
}else{
    echo 'no request';
}
$result = "[" . substr($result,0,strlen($result) - 1) . "]";
//header('Content-Type: application/json');
//echo $result;
?>
