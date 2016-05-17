jQuery(function($) {
    $('.student_1_title').click(function(){
        if($('.student_1 ul').attr('class') == "student_sidebar_active"){
            $('.student_1 ul').removeClass('student_sidebar_active');
            $('.student_1 ul').addClass('student_sidebar_inactive');
        }else{
            $('.student_1 ul').removeClass('student_sidebar_inactive');
            $('.student_1 ul').addClass('student_sidebar_active');
        }
    });
    $('.student_2_title').click(function(){
        if($('.student_2 ul').attr('class') == "student_sidebar_active"){
            $('.student_2 ul').removeClass('student_sidebar_active');
            $('.student_2 ul').addClass('student_sidebar_inactive');
        }else{
            $('.student_2 ul').removeClass('student_sidebar_inactive');
            $('.student_2 ul').addClass('student_sidebar_active');
        }
    });
    $('.student_3_title').click(function(){
        if($('.student_3 ul').attr('class') == "student_sidebar_active"){
            $('.student_3 ul').removeClass('student_sidebar_active');
            $('.student_3 ul').addClass('student_sidebar_inactive');
        }else{
            $('.student_3 ul').removeClass('student_sidebar_inactive');
            $('.student_3 ul').addClass('student_sidebar_active');
        }
    });
    $('.student_4_title').click(function(){
        if($('.student_4 ul').attr('class') == "student_sidebar_active"){
            $('.student_4 ul').removeClass('student_sidebar_active');
            $('.student_4 ul').addClass('student_sidebar_inactive');            
        }else{
            $('.student_4 ul').removeClass('student_sidebar_inactive');
            $('.student_4 ul').addClass('student_sidebar_active');
        }
    });
    $('.student_5_title').click(function(){
        if($('.student_5 ul').attr('class') == "student_sidebar_active"){
            $('.student_5 ul').removeClass('student_sidebar_active');
            $('.student_5 ul').addClass('student_sidebar_inactive');            
        }else{
            $('.student_5 ul').removeClass('student_sidebar_inactive');
            $('.student_5 ul').addClass('student_sidebar_active');
        }
    });
});