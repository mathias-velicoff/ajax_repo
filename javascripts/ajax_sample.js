$(function() {
  const button = $("#btn");
  const videoArea = $("#video");
  const titleArea = $("#title");
  const contentArea = $("#content");
  let number = 0;

  function getData() {
    $.ajax('ajax.json',{
      success: function(data){
        return data; //--1
      }
    })
  };

  function changeVideo() {
    button.click(function(){
      const videoData = getData(); //--2
      videoArea.html(videoData[number].url);
      titleArea.html(videoData[number].title);
      contentArea.html(videoData[number].content);
      number == 2 ? number = 0 : number++;
    });
  };

  changeVideo();
})