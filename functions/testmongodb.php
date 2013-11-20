<?php
	$mongo = new MongoClient();
	$db = $mongo->selectDB('test');
	$coll = $db->users;
	$user = $coll->find();
	foreach($user as $item){
		echo $item["first_name"];
	}
?>