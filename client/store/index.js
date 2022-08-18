import axios from "axios";


export const state = () => ({  
    
   lang:[
    {
        blog:'blog',
        content:'Home',
        Welcome_to_kaboot : ' Welcome to Test Zone',
    Lets_Play_and_Test_ourselves_together :  ' Lets Play and Test ourselves together ',
    joinus : 'Join Us ',
    student:'As a student',
    teacher:'As a Teacher',
    kaboot:'Test Zone',
    signup:' Sign Up',
        login:'login',
    How_kaboot_works : 'How Test Zone works ? ',
    Create : ' Create ',
    You_can_create_your_own_quiz_with_alot_of_questions_and_in_minutes : ' You can create your own quiz with alot of questions and in minutes   ',
    Share : '  Share  ',
    You_can_hare_your_quiz_to_all_your_students_friends_and_children_to_engage_them_when_you_are_together : '  You can share your quiz to all your students , friends and children to engage them when you are together ',
    Play : ' Play  ',
    Explore_our_communitys_quizzes_and_have_fun_playing_it_and_get_your_score_instantly : '  Explore our community"s quizzes and have fun playing it and get your score instantly ',
    Wanna_play_without_creating_an_account : '    Wanna play without creating an account ? ',
    Go_on_and_type_the_generated_code_your_friends_shared_with_you : 'Go on and type the generated code your friends shared with you',
    A_temporary_account_with_the_name_guest_is_made_for_this_need : '    A temporary account with the name guest is made for this need    ',
    Now_You_can_play_with_your_friends_without_the_need_of_an_account : '   Now! You can play with your friends without the need of an account    ',
    play_as_a_guest : '  Play as a guest   ',
    The_News: '    The News!    ',
    Any_Important_New_we_will_post_it_here : '   Any Important New we will post it here    ',
    Better_to_check_every_time_you_join_kaboot : '  Better to check every time you join Test Zone    ',
    We_Have_Alot_Of_Games : '  We Have Alot Of Games    ',
    As_a_teacher_Create_and_share : '   As a teacher Create & share    ',
    to_all_your_students_and_have_fun_together : 'to all your students and have fun together,    ',
    As_a_student_Join_quizzes : '   As a student Join quizzes     ',
    And_fill_Your_profile_with_high_marks : '    And fill Your profile with high marks,    ',
    As_a_guest_Join_and_a_play : '   As a guest Join and a play    ',
    BUT_dont_expect_to_store_any_marks : '   BUT dont expect to store any marks,    ',
    Welcome_to_Kaboot : ' Welcome to Test Zone    ',
    Have_fun_using_our_website : '   Have fun using our website !    ',
    If_you_face_any_problem_dont_hesitate_to_mail_us : '  If you face any problem dont hesitate to mail us    ',
    Everyday_more_teachers_students_and_guests_join_kaboot : 'Everyday more teachers , students and guests join Test Zone',

    Links : 'Links   ',
    Home : '   Home ',
    Blog : ' Blog   ',
    Play : ' Play   ',
    Explore : '   Explore  ',
    Info : 'Info     ',
    All_Rights_Reserved : '      2022 All Rights Reserved.  ',  
    Quiz_category : '   Quiz category    ',
    Computer:'Computer',
    Science:'Science',
    Math : 'Math',
    language : 'Langauge',
    All : 'All',
    Students_attend : '   Students attend   ',
    JoinCode : ' Join Code     ',
    Roomcode : ' Room Code     ',
    To_main_page:'To Main Page',
    question:'Question',
    AnswerOne : ' AnswerOne   ',
    AnswerTwo : '   AnswerTwo ',
    AnswerThree : '  AnswerThree ',
    AnswerFour  : '  AnswerFour  ',
    Quiz_title : ' Quiz title    ',
    Subject :   '   Subject  ',
    close : '  close    ',
    save : '  save   ',
    Quizzes_attended : '   Quizzes attended  ',
    Quizzes_created : '   Quizzes created   ',
    TotalMarks : ' TotalMarks    ',
    Students_attend : '    Students attend ',
    To_mainpage : '  To mainpage    ',
    Join_room_as_guest : '     Join room as guest',
    youcompleted:'You Completed',

    You_cant_add_slide_without_any_correct_answers:'You cant add slide without any correct answers',
        
    },
    {
        blog: 'مدونة',
        content:'الصفحة الرئيسية',
        Welcome_to_kaboot : 'مرحبا بك الى تيست زون',
Lets_Play_and_Test_ourselves_together :  'فلنلعب ونختبر انفسنا',
play:'العب',
joinus : 'انضم الينا',
student :'انضم ك طالب',
teacher :'انضم ك معلم',
Everyday_more_teachers_students_and_guests_join_kaboot : 'ينضم يوميا معلمين,طلاب و ضيوف الى تيست زون',

To_main_page:'الى الصفحة الرئيسية',

kaboot:'تيست زون',

How_kaboot_works : 'كيف يعمل تيست زون',
Create : 'اصنع',
You_can_create_your_own_quiz_with_alot_of_questions_and_in_minutes : 'يمكنك صنع اختبارك الخاص بأسالة كثيرة في دقائق',
Share : 'شارك',
You_can_hare_your_quiz_to_all_your_students_friends_and_children_to_engage_them_when_you_are_together : 'يمكنك مشاركة اختبارك لجميع طلابك واصدقائك واطفالك لتنخرطوا معا',
Play : 'العب',
Explore_our_communitys_quizzes_and_have_fun_playing_it_and_get_your_score_instantly : 'استكشف اختبارات المجتمع واستمتع باختبار نفسك واحصل على مجموعك فورا',
Wanna_play_without_creating_an_account : 'هل تريد العب بدون صنع حساب',
Go_on_and_type_the_generated_code_your_friends_shared_with_you : 'فلتدخل الكود الذي شاركه معك اصدقائك',
A_temporary_account_with_the_name_guest_is_made_for_this_need : '',
Now_You_can_play_with_your_friends_without_the_need_of_an_account : 'يمكنك الان العب مع اصدقائك من غير حساب',
play_as_a_guest : 'العب كزائر',
The_News : '!الاخبار',
Any_Important_New_we_will_post_it_here : 'أي اخبار مهمة سيتم نشرها هنا',
Better_to_check_every_time_you_join_kaboot : 'من الافضل ان تلقي نظرة في كل مرة تدخل الى تيست زون',
We_Have_Alot_Of_Games : 'لدينا الكثير من الالعاب',
As_a_teacher_Create_and_share : 'الصنع والمشاركة كمعلم',
to_all_your_students_and_have_fun_together : 'شارك لجميع طلابك واستمتعوا معا',
As_a_student_Join_quizzes : 'انضم الى الاختبار كطالب',
And_fill_Your_profile_with_high_marks : 'واملئ حسابك بدرجات عالية',
As_a_guest_Join_and_a_play : 'ادخل والعب كزائر',
BUT_dont_expect_to_store_any_marks : 'لكن لا تتوقع حفظ درجاتك',
Welcome_to_Kaboot : 'مرحبا بك الى تيست زون',
Have_fun_using_our_website : 'فلتستمتع باستخدام موقعنا',
If_you_face_any_problem_dont_hesitate_to_mail_us : 'اذا واجهت اي مشاكل فلتراسلنا على الايميل',
Links : 'الروابط',
Home : 'الصفحة الرئيسية',
Blog : 'مقالات',
Play : 'العب',
Explore : 'استكشف',
Info : 'معلومات',
All_Rights_Reserved : 'جميع الحقوق محفوظة 2022',

Quiz_category : 'نوع الاختبار ',
Science : '  العلوم',
Math : '  الرياضيات',
language : '  اللغة',
Computer : 'الحاسب',
All: 'الكل',
Students_attend : 'الطلاب الحاضرين',
JoinCode : 'كود الدخول',
question:'السوال',
AnswerOne : 'الاجابة الاولى',
AnswerTwo : 'الاجابة الثانية',
AnswerThree : 'الاجابة الثالثة',
AnswerFour  : 'الاجابة الرابعة',
Quiz_title : 'اسم الاختبار',
Subject :   'المادة',
close : 'اغلاق',
save : 'حفظ',
Roomcode : ' رقم الغرفة     ',
youcompleted:'لقد اتممت',
login:'تسجيل الدخول',
signup:'انشاء حساب',
Quizzes_attended : 'الاختبارات التي تم حضورها',
Quizzes_created : 'الاختبارات المصنوعة',
TotalMarks : 'الدرجة الكاملة',
Students_attend : 'الطلاب الحاضرون',
To_mainpage : 'الى الصفحة الرئيسية',
Join_room_as_guest : 'انضم الى الغرفة كزائر',
You_cant_add_slide_without_any_correct_answers:'لا تستطيع اضافة الشريحه اخرى بدون اجابات صحيحة',

    }
   ],
    quiz: {
        joinincode: '',
        title:'',
        catagory:"",
        slides:[]
    },
    reset:[],
    title:"",
    catagory:"",
    history :[],
    slide: {
        description : null,
        answer: [
     
            {
                content : null,
                CW : false
            },
            {
                content : null,
                CW : false
            },
            {
                content : null,
                CW : false
            },
            {
                content : null,
                CW : false
            },
           ],
    },
    ...state.slide
    ,
    slidetf: {
        descriptiontf : null,
        answer: [
     
            {
                content: null,
                CW: false
            },
            {
                content : null,
                CW : false
            },
           ],
    },
    ...state.slidetf
    ,
    langnum:0, 
}
    
)

export const mutations = {
    togglelang(state, langnumber){
        if(langnumber == 0)
     {
     
      state.langnum +=1
        console.log(state.langnum)


      
     }
     else{
       state.langnum -=1
       console.log(state.langnum)
     }
    },
    ADD_SLIDE(state, slides) {
        state.slide = slides
        state.history.push(state.slide);
        console.log(state.history)
        state.quiz.slides = state.history
        
      },
    remove_slide(state, slides){
        state.history.splice(state.history.indexOf(slides), 1)
    
       },
       create_title(state, title){
        state.title = title
        state.quiz.title = state.title
        console.log(state.title)


       },
       create_catagory(state, catagory){
        state.catagory = catagory
        state.quiz.catagory = state.catagory
        
       },
       joinroom(state, joiningcode){
        state.joinincode = joiningcode
        console.log(state.joinincode)
       },
       reset(state, slide){
        state.slide = slide
        state.history.splice(state.history.indexOf(slide))
       },
       async create_quiz(state){
        const accesstoken = localStorage.getItem('accesstoken')
        const quiz = state.quiz
        try{
        const res = await axios({  
            url: `http://localhost:9000/create/quiz/`,
            headers: {
              Authorization: `Bearer ` + accesstoken,
            },
            data: {
                quiz : quiz
            },
            method: "POST"
          });
          this.$router.push('/mainpage')
        }
        catch(e){
            console.log(e)
        }
       }
}
