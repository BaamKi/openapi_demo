//23-01-06 foot.html 연동
window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});

$(function () {

    // header
    $('.btn_menubar').click(function () {
        $('header').addClass('active');
    });

    $('.btn_menubar_close').click(function () {
        $('header').removeClass('active');
    })

    // footer 탭

    $(document).on("click", ".footer_select button", function(){
        $('.footer_select').toggleClass('active');
      });

    // $(document).ready(function(){

    //     var $footer = $('#footer');
    
    //     var footFunc = function(){
    //         $footer.find('.footer_select button').on('click', function(e){
    //             $(this).parent().toggleClass('active');
    //             e.preventDefault();
    //         });
    //     }
    
    //     // Document Ready Init Function();
    //     footFunc();
    
    // });

    // function footerSelect() {
    //     $('.footer_select button').click(function () {
    //         $('.footer_select').toggleClass('active');
    //     })
    // }
    // footerSelect();

    // header 검색창 띄우기
    $('.btn_search').click(function () {
        $('header').addClass('search_on');
        $('.main').addClass('search_on');
        $('body').addClass('scrollOff');
    })

    $('.btn_search_close').click(function () {
        $('header').removeClass('search_on');
        $('.main').removeClass('search_on');
        $('body').removeClass('scrollOff');
    })


    // 왼쪽 탭메뉴 nav
    $('.menu1 > .arrow_box').click(function () {
        if ($(this).closest('.menu1').hasClass('active')) {
            $(this).closest('.menu1').removeClass('active');
        } else {
            $('.menu1').removeClass('active');
            $(this).closest('.menu1').toggleClass('active');
        }
    })

    // page_nav 스크롤 이동 
    $(".link_point").click(function () {
        const a = $(this).data('target');
        console.log(a)

        $('html,body').animate({
            scrollTop: $("#" + a).offset().top - 200
        });
    });

    // page_nav 해당 섹션에 스크롤 될 시 에 active
    $(window).scroll(function () {
        const height = $(window).scrollTop(); // 해당 스크롤 좌표값(높이)
        const content = $('.scroll_active');

        content.each(function () {
            const a = $(this).position();
            const thisHeight = $(this).outerHeight();

            if (height + 350 > a.top) {
                const target = $(`[data-target="${this.id}"`)

                target.addClass('active');

                if (height - a.top - thisHeight > -350) {
                    target.removeClass('active');
                }

            }

            if (height + 350 < a.top) {
                const target = $(`[data-target="${this.id}"`)
                target.removeClass('active')
            }
        })
    });

    // 외부영역 클릭시 닫기
    $("body").mouseup(function (e) {

        // 헤더검색 영역
        if ($('header').hasClass('search_on')) {
            const selectTarget = $('header');
            if (selectTarget.has(e.target).length === 0) {
                $('header').removeClass('search_on');
                $('.main').removeClass('search_on');
                $('body').removeClass('scrollOff');
            }
        }

        // 코드 리스트 영역
        if ($('.tab_list').hasClass('active')) {
            const selectTarget = $('.tab_list_wrap');
            console.log('why')
            if (selectTarget.has(e.target).length === 0) {
                $('.tab_list').removeClass('active');
                $('.tab_list').slideUp();
            }
        }

        // footer tab 영역
        if ($('.footer_select').hasClass('active')) {
            const selectTarget = $('.footer_select');
            if (selectTarget.has(e.target).length === 0) {
                $('.footer_select').removeClass('active')
            }
        }
    });

    // 모바일 - 메뉴
    $('.depth_title > button').click(function () {

        if ($(this).siblings('.sub_depth').hasClass('hidden')) {
            $('.depth_title > button').removeClass('active');
            $('.sub_depth').addClass('hidden');
            $(this).addClass('active');
            $(this).siblings('.sub_depth').removeClass('hidden');
        } else {
            $(this).removeClass('active');
            $(this).siblings('.sub_depth').addClass('hidden');
        }
    });

    // 접기
    $(".api_name button").click(function () {
        var submenu = $(this).parent().next(".api_info");
        if (submenu.is(":visible")) {
            submenu.slideUp();
            $(this).parent().addClass('active');
        } else {
            submenu.slideDown();
            $(this).parent().removeClass('active');
        }
    });

    // 전체접기
    $(".left_title button").click(function () {
        var submenu = $(this).parent().siblings(".left_content");
        // var rightBox = $(this).parent().parent().next(".right_cont");
        const textBtn = $(this)
        if (submenu.is(":visible")) {
            if ($(this).text() === "전체 접기") {
                $(this).text("펼치기");
                submenu.slideUp();
                // rightBox.slideUp();
            }
            if ($(this).text() === "Collapse all") {
                $(this).text("Expand all");
                submenu.slideUp();
                // rightBox.slideUp();    
            }
        } else {
            if ($(this).text() === "펼치기") {
                $(this).text("전체 접기");
                submenu.slideDown();
            }
            if ($(this).text() === "Expand all") {
                $(this).text("Collapse all");
                submenu.slideDown();
            }
        }
    });

    // 모바일 - header 검색창 띄우기
    $('.btn_search_mb').click(function () {
        $('header').addClass('search_on');
        $('.main').addClass('search_on');
        $('body').addClass('scrollOff');
    })

    // 모바일 - 메뉴
    $('.header nav>ul>li .nav_title').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.depth').toggleClass('hidden');
    })

    //top btn
    const $topBtn = document.querySelector(".top_btn");

    $topBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // window.onload = () => {
    //     window.scrollTo({ top: document.body.scrollHeight });
    // }


    // left_cont highlight 탭
    $('.btn_tab').click(function () {
        $(this).next('.tab_list')
            .toggleClass('active')
            .slideToggle();
    });

    // left_cont highlight 언어별로 보이기
    $('.code_contents').each(function () {
        $(this).find('.highlight_wrap.code').eq(0).addClass('active');
    });

    $('.tab_list.code > li').click(function () {
        const thisIndex = $(this).index();
        const thisWrap = $(this).closest('.highlight_wrap');

        $(this).parent('.tab_list.code')
            .removeClass('active')
            .slideUp();

        thisWrap.find('.code_contents > .highlight_wrap.code')
            .removeClass('active');

        thisWrap.find('.code_contents > .highlight_wrap.code').eq(thisIndex)
            .addClass('active');

        // 텍스트 보이기
        const clickText = $(this).find('button').text();
        $(this).parent().siblings('.btn_tab')
            .text(clickText);
    })

    // 셀렉트박스
    function selectBox(){
        const selectBox = $('.select_wrap');
        const selectList = $('.select_list');
        const selectClick = $('.select_list .list');
        // 셀렉트박스 오픈
        $(document).on('click', '.select_wrap', function(){
            if($(this).hasClass('open')){
                $(this).removeClass('open');
                $(this).find(selectList).hide();
            }else{
                selectList.hide();
                selectBox.removeClass('open');
                $(this).addClass('open');
                $(this).find(selectList).show();
            };
        });

        // 셀렉트 리스트 클릭
        $(document).on('click', '.select_list .list', function(){
        const selectData = $(this).html();
            if($(this).hasClass('selected')){
                $(this).removeClass('selected');
            }else{
                selectClick.removeClass('selected');
                $(this).addClass('selected');
                $(this).closest('.select_wrap').find('.select_title').html(selectData);
                $(this).closest('.select_wrap').find('.select_title').addClass('active');
            };
        });
        
        // 외부 영역 클릭
        $(document).mouseup(function (e) {
            if ($('.select_wrap').has(e.target).length === 0) {
                selectList.stop().hide();
                $('.select_wrap').removeClass('open');
            };
        });
    }
    selectBox();
})