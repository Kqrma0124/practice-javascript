//クリックされたら動作する

function errorInput(){
    console.log(document.getElementById("month").value)
    console.log(document.getElementById("day").value)

    const month = console.log(document.getElementById("month").value);
    const day = console.log(document.getElementById("day").value);

    console.log("month:",month,"day:",day)

}

//document.getElementById("month")はタグを確認するだけ
//valueはそのタグの値を示す
/*JavaScriptのプログラムとHTMLファイルはどこで対応しているかタグについているidで紐づく。
タグの中にある付加情報のことを属性という。
*/