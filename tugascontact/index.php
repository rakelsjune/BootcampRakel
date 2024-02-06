<?php 
  require('backend.php');

  include("header.php");
  
  if (isset($_POST["search-input"])) $contactViews = $contact->searchContact($_POST["search-input"]);
  else $contactViews = $contact->getContacts();
?>

<?php 
  include("section/_listContact.php")
?>