var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
}
function save_code2(){
    var sid = document.getElementById("results").innerHTML;
      //alert(res); 
      //var sid = document.getElementById("StudentID").value;
       //var tid = localStorage.teacher_id;
       alert(sid);
       alert(localStorage.teacher_id);
        $.ajax({
          url: 'http://192.168.200.107/github/qrcscanner/home/updateattendance',
          type: 'POST',
          data: {id_number: sid,teacher_id:localStorage.teacher_id },
          success: function(response) {
                          alert(response);
          }
            });
}
function save_code(){

  //save


  /*

  var sid = document.getElementById("StudentID");

    $.ajax({
	url: 'http://localhost/qrcode_admin/save_id.php',
	type: 'POST',
	data: {id_number: sid},
	success: function(response) {
                  console.log(response);
		alert("Saved!");

	}
});

  */

  var modalbutton1=document.getElementById("close");
  modalbutton1.click();
  startScan();
}
function startScan() {

    cordova.plugins.barcodeScanner.scan(


        /*function (result) {
            var s = "Id number: <div id=StudentID>" + result.text + "</div><br/>" +
            "Format: " + result.format + "<br/>" +
            "Cancelled: " + result.cancelled;
            resultDiv.innerHTML = s;
            var modalbutton=document.getElementById("modal1");
            modalbutton.click();
        }*/

        /*function (result) {
            var s = "Result: " + result.text + "<br/>" +
            "Format: " + result.format + "<br/>" +
            "Cancelled: " + result.cancelled;
            resultDiv.innerHTML = s;
            var modalbutton=document.getElementById("modal1");
            modalbutton.click();
        },*/
        function (result) {
            var s =  result.text;
            document.getElementById("results").innerHTML=" ";
            //resultDiv.innerHTML = s;
            $('#results').append(s)
            //document.getElementById("qrvalue").value = s;
            //var modalbutton=document.getElementById("modal1");
            $('#myModal').modal('show')
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
}