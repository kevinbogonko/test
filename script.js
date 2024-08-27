const sidebarMenu = document.getElementById('sidebar-menu');
const hamburger = document.querySelector('.hamburger');

const studentTag = document.getElementById('student-tag');
const subListStudent = document.getElementById('sub-list-student');

const teacherTag = document.getElementById('teacher-tag');
const subListTeacher = document.getElementById('sub-list-teacher');

const examTag = document.getElementById('exam-tag');
const subListExam = document.getElementById('sub-list-exam');

const reportTag = document.getElementById('report-tag');
const subListReport = document.getElementById('sub-list-report');

const informationTag = document.getElementById('information-tag');
const subListInformation = document.getElementById('sub-list-information');

const user = document.getElementById('user-icon');
const userDropdownMenu = document.querySelector('.user-dropdown-menu');

function toggleMenu() {
    if (sidebarMenu.classList.contains("noDisplay")) {
        sidebarMenu.classList.remove('noDisplay');
    } else {
        sidebarMenu.classList.add('noDisplay');
    }
}

function toggleSideStudentMenuOptions(){
    if(subListStudent.classList.contains('noDisplay')){
        subListStudent.classList.remove('noDisplay');
    } else{
        subListStudent.classList.add('noDisplay');
    }
}

function toggleSideTeacherMenuOptions(){
    if(subListTeacher.classList.contains('noDisplay')){
        subListTeacher.classList.remove('noDisplay');
    } else{
        subListTeacher.classList.add('noDisplay');
    }
}

function toggleSideExamMenuOptions(){
    if(subListExam.classList.contains('noDisplay')){
        subListExam.classList.remove('noDisplay');
    } else{
        subListExam.classList.add('noDisplay');
    }
}

function toggleSideInformationMenuOptions(){
    if(subListInformation.classList.contains('noDisplay')){
        subListInformation.classList.remove('noDisplay');
    } else{
        subListInformation.classList.add('noDisplay');
    }
}

function toggleSideReportMenuOptions(){
    if(subListReport.classList.contains('noDisplay')){
        subListReport.classList.remove('noDisplay');
    } else{
        subListReport.classList.add('noDisplay');
    }
}

function toggleUserInfo(){
    if(userDropdownMenu.classList.contains('noDisplay')){
        userDropdownMenu.classList.remove('noDisplay')
    } else{
        userDropdownMenu.classList.add('noDisplay')
    }
}

hamburger.addEventListener('click', toggleMenu);
studentTag.addEventListener('click', toggleSideStudentMenuOptions);
teacherTag.addEventListener('click', toggleSideTeacherMenuOptions);
examTag.addEventListener('click', toggleSideExamMenuOptions);
informationTag.addEventListener('click', toggleSideInformationMenuOptions);
reportTag.addEventListener('click', toggleSideReportMenuOptions);
user.addEventListener('click', toggleUserInfo);


