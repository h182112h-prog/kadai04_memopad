// 1. 登録イベント



$("#save").on("click", function(){
    const date = $("#date").val();
    const camp_name = $("#name").val();
    const prefectures = $("#prefectures").val();
    const url = `https://www.google.com/maps/search/?api=1&query=${camp_name}+${prefectures}`;

    localStorage.setItem(date, JSON.stringify([date,camp_name,prefectures,url]));
    const html =`
    <ul>
        <li>${date}</li>
        <li>${camp_name}</li>
        <li>${prefectures}</li>
        <li><a href="${url}" target="_blank">所在地</a></li>
    </ul>
    `;
    $("#list").append(html);
}
)

// 2. clearイベント
$("#clear").on("click", function(){
    localStorage.clear();
    $("#list").empty();
})

// ページ読み込み：保存データ取得表示
for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    const html = `
    <ul>
        <li>${value[0]}</li>
        <li>${value[1]}</li>
        <li>${value[2]}</li>
        <li><a href="${value[3]}" target="_blank">所在地</a></li>
    </ul>
    `;
    $("#list").append(html);
}