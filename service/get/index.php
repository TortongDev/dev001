<?php
    require_once "../connection/index.php";
    try {
        
        $stmt   = $conn->prepare("SELECT * FROM checklist WHERE sys_timestamp between ? and ? ");
        $stmt->execute(['2022-03-01 00:00:00','2022-03-31 23:59:59']);

        $result = $stmt->fetchAll();
         $arr_respont = array(
             'ststus'   => true,
             'respont'  => $result
         );
         echo json_encode($arr_respont);
    } catch (PDOException $err) {
        echo $err->getMessage();
    }
?>