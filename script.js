$(document).ready(function(){

    morningmission2();

});

function morningmission2(){

    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/",
        dataType: 'json',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Headers':'*'
        },
        success: function(data) { 
            
            // console.log(data);
            assignHTML(data)
           

        },
        error: function(xhr, status, error) { console.log("ERROR: ", error) }
    })
   
}

function assignHTML(wadesvariable){

for (var i = 1; i < 4; i++){

    $("#title"+i).html(wadesvariable[i].title); 
    $("#body"+i).html(wadesvariable[i].body);
    
}



// $("#title1").html(wadesvariable[1].title); 
// $("#body1").html(wadesvariable[1].body);

// $("#title2").html(wadesvariable[2].title); 
// $("#body2").html(wadesvariable[2].body);

// $("#title3").html(wadesvariable[3].title); 
// $("#body3").html(wadesvariable[3].body);

}

