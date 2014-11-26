<?php
try {
    $mongo = new MongoClient();
    $db = $mongo->selectDB('sample');
}catch(MongoConnectionException $e){
    $result = array('status'=>'failed', 'msg'=>'MongoDB connection error');
}
$collection = $db->selectCollection('user');
$startIndex = 0;
$total = 500;
if(isset($_REQUEST['totalItem']) && intval($_REQUEST['totalItem'])!= 0) {
    $total = intval($_REQUEST['totalItem']);
}
if(isset($_REQUEST['startIndex'])) {
    $startIndex = intval($_REQUEST['startIndex']);
}
$endIndex = $startIndex + $total;
$queryResult = $collection->find(array('id'=> array('$gt'=>$startIndex, '$lt'=>$endIndex )));
$result = "";
foreach($queryResult as $item) {
    $result .= json_encode($item) . ',';
}
$result = "[" . substr($result,0,strlen($result) - 1) . "]";
header('Content-Type: application/json');
echo $result;
?>
