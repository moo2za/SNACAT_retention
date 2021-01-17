const button = document.querySelector(`button`),
        form = document.querySelector(`form`);


function erchk(event) {
    event.preventDefault();
    if (document.getElementById("name").value == "") {
        alert("이름을 입력해주세요");
        return false;
    }
    else if(document.getElementById("email").value == "") {
        alert("이메일을 입력해주세요");
        return false;
    }
    else if(document.getElementById("phone").value == "") {
        alert("전화번호를 입력해주세요");
        return false;
    }
    else{
        document.sub1.action="https://script.google.com/macros/s/AKfycbxc4PXtBm9IzuyUGpLu1ZVhlaRiMsahGH3M0yoUZStToFQ9EU4/exec";
        document.sub1.submit();
        alert('제출이 완료되었습니다. 확인 후 안내메일을 발송해드리겠습니다.');
        window.open("index.html", "_self").close();
    }
}


function init() {
    button.addEventListener("click", erchk);
}
  
  
init();