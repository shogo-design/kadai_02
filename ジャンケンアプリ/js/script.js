const gu = document.querySelector("#gu_btn");
console.log(gu.id);
console.log(gu.innerHTML)
$("#gu_btn").on("click", function () {
    // 乱数
    const r = Math.ceil(Math.random() * 3);
    // if分岐処理
    let view = "";
    let nice = "";
    if (r == 1) {
        view = '勝ち' ;
    }
    if (r == 2) {
        view = '引き分け';
    }
    if (r == 3) {
        view = '負け';
    }
    $("#judgment").html(view);
    

    if (r == 1) {
        nice = 'チョキ';
    }
    if (r == 2) {
        nice = 'グー';
    }
    if (r == 3) {
        nice = 'パー';
    }
    $("#pc_hands").html(nice);
    
})
$("#cho_btn").on("click", function () {
    // 乱数
    const r = Math.ceil(Math.random() * 3);
    // if分岐処理
    let view = "";
    if (r == 1) {
        view = '勝ち';
    }
    if (r == 2) {
        view = '引き分け';
    }
    if (r == 3) {
        view = '負け';
    }
    $("#judgment").html(view);

    if (r == 1) {
        nice = "パー";
    }
    if (r == 2) {
        nice = "チョキ";
    }
    if (r == 3) {
        nice = "グー";
    }
    $("#pc_hands").html(nice);
    
})
$("#par_btn").on("click", function () {
    // 乱数
    const r = Math.ceil(Math.random() * 3);
    // if分岐処理
    let view = "";
    if (r == 1) {
        view = '勝ち';
    }
    if (r == 2) {
        view = '引き分け';
    }
    if (r == 3) {
        view = '負け';
    }
    $("#judgment").html(view);

    if (r == 1) {
        nice = "グー";
    }
    if (r == 2) {
        nice = "パー";
    }
    if (r == 3) {
        nice = "チョキ";
    }
    $("#pc_hands").html(nice);
    
})

   // 表示処理
// $("#gu_btn").on("click", function () {
//     const r = Math.ceil(Math.random() * 3);
//     let nice = "";
//     if (r == 1) {
//         nice = 'チョキ';
//     }
//     if (r == 2) {
//         nice = 'グー';
//     }
//     if (r == 3) {
//         nice = 'パー';
//     }
//     $("#pc_hands").html(nice)
// })



    




