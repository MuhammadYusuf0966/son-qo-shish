while (true) {
 const son = prompt("Iltimos, bir son kiriting (dasturni to'xtatmoqchi bo'lsangiz uchun 'stop' yozing):");

 if (son === "stop") {
   console.log("Kiritish to'xtatildi.");
   break;
 } else if (son) {
   console.log(son);
 } else {
   console.log("Siz hech narsa kiritmadingiz");
 }
}