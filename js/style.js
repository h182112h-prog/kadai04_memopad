// 1. 登録イベント



$("#save").on("click", function(){
    const date = $("#date").val();
    const camp_name = $("#name").val();
    const prefectures = $("#prefectures").val();
    const url = `https://www.google.com/maps/search/?api=1&query=${camp_name}+${prefectures}`;

    localStorage.setItem(date, JSON.stringify([date,camp_name,prefectures,url]));
    const html =`
      <tr>
        <td>${date}</td>
        <td><a href="${url}" target="_blank">${camp_name}</a></td>
        <td>${prefectures}</td>
      </tr>
      
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
      <tr>
        <td>${value[0]}</td>
        <td><a href="${value[3]}" target="_blank">${value[1]}</a></td>
        <td>${value[2]}</td>
      </tr>
    `;
    $("#list").append(html);
}