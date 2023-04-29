
new ClipboardJS('.btn_code_copy');

// 카피 시 팝업창 띄우기
$('.btn_code_copy').click(function () {
  $('.copy_complete_modal').fadeIn();
  setTimeout(() => {
    $('.copy_complete_modal').fadeOut();
  }, 1000);
})


// 팝업창 띄우기
// function fillWidth(elem, timer, limit) {
//   if (!timer) { timer = 3000; }
//   if (!limit) { limit = 100; }
//   var width = 1;
//   var id = setInterval(frame, timer / 100);
//   function frame() {
//     if (width >= limit) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + '%';
//     }
//   }
// };

// function toast(msg, timer) {
//   if (!timer) { timer = 3000; }
//   var $elem = $("<div class='toastWrap'><span class='toast'>" + msg + "<b></b><div class='timerWrap'><div class='timer'></div></div></span></div>");
//   $(".wrap_inner").append($elem); //top = prepend, bottom = append
//   $elem.slideToggle(100, function () {
//     $('.timerWrap', this).first().outerWidth($elem.find('.toast').first().outerWidth() - 10);
//     if (!isNaN(timer)) {
//       fillWidth($elem.find('.timer').first()[0], timer);
//       setTimeout(function () {
//         $elem.fadeOut(function () {
//           $(this).remove();
//         });
//       }, timer);
//     }
//   });
// }

// $('')

// $(".btn_code_copy").on("click", "b", function () {
//   $(this).closest('.toastWrap').remove();
// })