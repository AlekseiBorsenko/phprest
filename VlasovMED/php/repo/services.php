<?php
include_once '../incl.php';
class Services extends SimpleOrm {}
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true);
$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
switch ($method) {
  case 'PUT':
    $entry = Services::retrieveByPK($request[0]);
    $entry->name = $request['name'];
    $result = $entry->save();
    break;
  case 'POST':
    $entry = new Services;
    $entry->name = $data["name"];
    $result = $entry->save();
    break;
  case 'GET':
      $uri = $_SERVER['REQUEST_URI'];
      $matches = explode("/", $uri);
      $myLastElement = end($matches);
      if(is_numeric($myLastElement)){
          $result = Services::retrieveByPK($request[0]);
      }else{
          $result = Services::all();
      }      
    break;
  case 'DELETE':
    $entry = Services::retrieveByPK($request[0]);
    $result = $entry->delete();
    break;
  default:
    //handle_error($request);  
    break;
}
header('Content-Type: application/json; charset=utf-8');
echo json_encode($result);