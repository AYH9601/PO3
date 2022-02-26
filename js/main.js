// HTML collection 유사배열로 받아지기 때문에 forEach가 작동되지 않으므로 for of 문으로 반복처리
// 1depth li의 갯수만큼 반복을 돌면서 이벤트 연결
for(let li of gnb_lis){
    //마우스 포인터가 해당 영역에 들어갔을 때
    li.addEventListener("mouseenter", e=>{
        //자식인 .sub 보이고
        const sub = e.currentTarget.querySelector(".sub");
        sub.style.display = "block";
        
        // 1depth a요소 활성화
        const depth1 = e.currentTarget.children[0];
        depth1.classList.add("on");
    });
  
    //마우스 포인터가 해당 영역을 떠나면
    li.addEventListener("mouseleave", e=>{
        //자식인.sub 숨기기
        const sub = e.currentTarget.querySelector(".sub");
        sub.style.display = "none";
  
        // 1depth a요소 비활성화
        const depth1 = e.currentTarget.children[0];
        depth1.classList.remove("on");
    });
  
    //각각의 1depth li에 focusin 이벤트 연결
    li.addEventListener("focusin", e=>{
  
        const sub = e.currentTarget.querySelector(".sub");
        sub.style.display = "block";
    });
  
    //sub ul 안쪽에서 제일 마지막 li를 lastElementChild로 탐ㅅ맥
    const sub = li.querySelector(".sub ul");
    const lastEl =  sub.lastElementChild;
  
    //마지막 2depth li에 포커스아웃 이벤트가 발생하면
    //해당 li의 부모 sub를 숨기기
    lastEl.addEventListener("focusout", e=>{
        e.currentTarget.closest(".sub").style.display = "none";
    })
  }
  