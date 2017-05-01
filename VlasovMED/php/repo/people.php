<?php
include_once '../incl.php';
class People extends SimpleOrm {}
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true);
$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
switch ($method) {
  case 'PUT':
    $entry = People::retrieveByPK($request[0]);
    $entry->firstname = $data['firstname'];
    $entry->lastname = $data['lastname'];
    $entry->patronymic = $data['patronymic'];
    $entry->email = $data['email'];
    $entry->phone = $data['phone'];
    $result = $entry->save();
    break;
  case 'POST':
    $entry = new People;
    $entry->firstname = $data['firstname'];
    $entry->lastname = $data['lastname'];
    $entry->patronymic = $data['patronymic'];
    $entry->email = $data['email'];
    $entry->phone = $data['phone'];
    $result = $entry->save();
    break;
  case 'GET':
      $uri = $_SERVER['REQUEST_URI'];
      $matches = explode("/", $uri);
      $myLastElement = end($matches);
      if(is_numeric($myLastElement)){
          $result = People::retrieveByPK($request[0]);
      }else{
          $result = People::all();
      }      
    break;
  case 'DELETE':
    $entry = People::retrieveByPK($request[0]);
    $result = $entry->delete();
    break;
  default:
    //handle_error($request);  
    break;
}
header('Content-Type: application/json; charset=utf-8');
echo json_encode($result);