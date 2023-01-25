function processQuestionnaire() {
            var form = document.getElementById("questionnaire-form");
            var q1 = form.elements["q1"].value;
            var q2 = form.elements["q2"].value;
            var q3 = form.elements["q3"].value;
            var q4 = form.elements["q4"].value;
            var q5 = form.elements["q5"].value;
            var q6 = form.elements["q6"].value;
            var q7 = form.elements["q7"].value;
            var q8 = form.elements["q8"].value;
            var q9 = form.elements["q9"].value;
            // Create an array of question elements
            var questions = [q1, q2, q3, q4,q5,q6,q7,q8,q9];

    // Loop through the questions array
            for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            if (question !== "yes1" && question !== "yes2" && question !== "yes3"&& question !== "no") {
          // Display error message
          swal("โปรดเลือกข้อคำถามให้ครบ", "", "error");
             document.getElementById("processQuestionnaire").innerHTML = "thankyou";
             return;
            }
        }
        
            var score = 0;
            if (q1 == "yes1") { score++; }
            if (q1 == "yes2") { score+=2; }
            if (q1 == "yes3") { score+=3; }
            if (q2 == "yes1") { score++; }
            if (q2 == "yes2") { score+=2; }
            if (q2 == "yes3") { score+=3; }
            if (q3 == "yes1") { score++; }
            if (q3 == "yes2") { score+=2; }
            if (q3 == "yes3") { score+=3; }
            if (q4 == "yes1") { score++; }
            if (q4 == "yes2") { score+=2; }
            if (q4 == "yes3") { score+=3; }
            if (q5 == "yes1") { score++; }
            if (q5 == "yes2") { score+=2; }
            if (q5 == "yes3") { score+=3; }
            if (q6 == "yes1") { score++; }
            if (q6 == "yes2") { score+=2; }
            if (q6 == "yes3") { score+=3; }
            if (q7 == "yes1") { score++; }
            if (q7 == "yes2") { score+=2; }
            if (q7 == "yes3") { score+=3; }
            if (q8 == "yes1") { score++; }
            if (q8 == "yes2") { score+=2; }
            if (q8 == "yes3") { score+=3; }
            if (q9 == "yes1") { score++; }
            if (q9 == "yes2") { score+=2; }
            if (q9 == "yes3") { score+=3; }
            
        
            if (score <= 7 ) {
                swal("ไม่มีอาการของโรคซึมเศร้า","มีอาการของโรคซึมเศร้าระดับน้อยมาก","success");
            } 
            else if (score <= 12)
            {
                swal("มีอาการของโรคซึมเศร้า ระดับน้อย","ควรพบแพทย์เพื่อประเมินอาการและให้การรักษา","success");
            }
            else if(score <=18)
            {
                swal("มีอาการของโรคซึมเศร้า ระดับปานกลาง","ควรพบแพทย์เพื่อประเมินอาการและให้การรักษา","success");
            }
  
            else {
                swal("มีอาการของโรคซึมเศร้า ระดับรุนแรง","ต้องพบแพทย์เพื่อประเมินอาการและให้การรักษาโดยเร็ว ไม่ควรปล่อยทิ้งไว้","success");
            }
            document.getElementById("processQuestionnaire").innerHTML = "thankyou";
          }
const $icon = document.querySelector('.icon');
const $arrow = document.querySelector('.arrow');

$icon.onclick = () => {
  $arrow.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });
}
        