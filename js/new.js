$(document).ready(() => {

    $('#switch-menu').click(function(e){
      //避免 a 標籤會觸發
      e.preventDefault();
      //展開或收起來
      $('.mb-menu').slideToggle(600);
      
    })
    $('.mb-menu li a').click(function(e){
      
      //收起來
      $('.mb-menu').slideUp(600);
     
    })

    $('#photo').on('click',function(){
      $('.bubble').text('專業捕捉每個重要時刻，婚禮攝影、孕婦寫真和親子寫真服務將您的珍貴時刻永恆凝固。我們細心捕捉每個真實情感，讓每一張照片都散發幸福與溫暖。無論是開啟人生新篇章、孕育新生命，或是家庭幸福團聚，我們將為您締造永恆美好的回憶。')
    })
    $('#makeup').on('click',function(){
      $('.bubble').text('精湛的化妝技巧與精心設計的髮型，讓您在重要場合煥發光彩。我們專業的造型師將根據您的風格與需求，打造出完美妝髮，讓您自信迎接每一個重要時刻。無論是婚禮、派對還是特別活動，讓我們為您帶來完美造型，綻放自信美麗！')
    })
    $('#bouquet').on('click',function(){
      $('.bubble').text('我們提供精緻花束和捧花服務，為您的特殊場合增添色彩與浪漫氛圍。我們精心挑選花材，設計出獨一無二的花束和捧花，展現您的獨特風格與情感。無論是婚禮、慶典或浪漫約會，讓我們的花束為您帶來美好時刻！')
    })
  });