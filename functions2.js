function alert_paragraph_color() {
    
    //collects the input values from the user for the border color
    //If no input is given, 0 is automatically assigned to make the border color black
    const borderR = document.getElementById("border_R").value || 0;
    const borderG = document.getElementById("border_G").value || 0;
    const borderB = document.getElementById("border_B").value || 0;
    
    //Collects the input values from the user for the border width
    const borderWidth = document.getElementById("border_width").value || 5;

    //collects the input values from the user for the border backgrounds
    //255 automatically assigned to create a white background 
    const bgR = document.getElementById("bg_R").value || 255;
    const bgG = document.getElementById("bg_G").value || 255;
    const bgB = document.getElementById("bg_B").value || 255;

    //Uses the numbers given and converts them into RGB format readable by style.css
    const borderColor = `rgb(${borderR}, ${borderG}, ${borderB})`;
    const bgColor = `rgb(${bgR}, ${bgG}, ${bgB})`;

    //Applys the changes from the user onto the paragraph
    const paragraph = document.getElementById("paragraph");
    paragraph.style.borderColor = borderColor;
    paragraph.style.borderWidth = `${borderWidth}px`;
    paragraph.style.borderStyle = "solid";
    paragraph.style.backgroundColor = bgColor;
}

