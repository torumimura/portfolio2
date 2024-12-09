// モーダルを取得
var modal = document.querySelector('.modal');
var img = document.getElementById('fullImg');
var captionText = document.getElementById('caption');

// 画像をクリックしたときの処理
document.querySelectorAll('.gallerylandscape-item img').forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block";  // モーダルを表示
        img.src = this.src;            // モーダルに画像を表示
        captionText.innerHTML = this.alt; // altをキャプションに設定

        // altに基づいてリンク先を設定
        if (this.alt === "Thai") {
            document.getElementById("link1").href = "thai.html"; // Thaiのページ
        } else if (this.alt === "旅行写真2") {
            document.getElementById("link1").href = "travel_photo2.html"; // 写真2のページ
        } else if (this.alt === "旅行写真3") {
            document.getElementById("link1").href = "travel_photo3.html"; // 写真3のページ
        } else if (this.alt === "旅行写真4") {
            document.getElementById("link1").href = "travel_photo4.html"; // 写真4のページ
        }

        // リンクの要素をクリック可能にするためにdisplayをblockに設定
        document.getElementById('modal-links').style.display = 'block';
    };
});

// モーダルを閉じる処理
document.querySelector('.close').onclick = function() {
    modal.style.display = "none"; // モーダルを非表示
};

// モーダルの外をクリックしたときにモーダルを閉じる処理
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // モーダルを非表示
    }
};
