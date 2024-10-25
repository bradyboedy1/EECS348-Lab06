<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    //Gets user input to find the size of the table
    $size = isset($_POST['size']) ? intval($_POST['size']) : 0;

    //makes sure teh size is a valid number from the user
    if ($size > 0) {
        echo "<table border='1' cellspacing='0' cellpadding='5'>";
        
        //Prints the first row
        echo "<tr><th></th>"; // Top-left corner cell
        for ($i = 1; $i <= $size; $i++) {
            echo "<th>$i</th>"; // Column indexes
        }
        echo "</tr>";

        //Prints the remaining rows
        for ($j = 1; $j <= $size; $j++) {
            echo "<tr>";
            echo "<th>$j</th>"; // Row index
            
            //Prints the values for the table
            for ($k = 1; $k <= $size; $k++) {
                echo "<td>" . ($j * $k) . "</td>";
            }
            echo "</tr>";
        }
        
        echo "</table>";

    } else {
        echo "<h2>Enter a positive NUMBER</h2>";
    }
} else {
}
?>

