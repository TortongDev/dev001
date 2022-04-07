<?php
    require_once "../connection/index.php";
    try {
        $stmt = $conn->query("SELECT * FROM news");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
    

        if($result):
            $arr_data = array(
                "res"     => $result,
                "status"  => "seccess"
            );

            echo json_encode($arr_data);      
        else: 
            $arr_data = array(
                "status"  => "False"
            );

            echo json_encode($arr_data);       

        endif;
    } catch (PDOException $errr) {
        echo "False is :".$errr.getMessage();
    }

?>