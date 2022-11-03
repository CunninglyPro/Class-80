names_of_the_students_array = [];
var display_the_names = [];

function submit() {

    for (var i = 0; i <= 4; i++) {
        console.log("hello");
        var names_of_the_students = document.getElementById("name_of_the_student"+i).value;
        names_of_the_students_array.push(names_of_the_students);
     
     }

     var length_of_names = names_of_the_students_array.length;

     for (var k = 0; k < length_of_names; k++) {

        display_the_names.push("<h4> Name - "+ names_of_the_students_array[k] + "</h4>");
     }

     document.getElementById("display_name_with_commas").innerHTML=display_the_names;
     var remove_commas = display_the_names.join(" ");
     document.getElementById("display_name_without_commas").innerHTML=remove_commas;
     document.getElementById("submit_button").style.display="none";
     document.getElementById("sort_button").style.display="inline-block";
}