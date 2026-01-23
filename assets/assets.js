import user_image from './user_image.jpeg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.svg';
import git from './git.svg';
import nodejs from './nodejs.svg';
import nextjs from './nextjs.svg';
import intellij from './intellij.svg';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpeg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.svg';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.svg';
import arrow_icon_dark from './arrow-icon-dark.svg';
import menu_black from './menu-black.svg';
import menu_white from './menu-white.svg';
import close_black from './close-black.svg';
import close_white from './close-white.svg';
import programming_black from './programming-black.svg';
import right_arrow from './right-arrow.svg';
import book from './book.svg';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.svg';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import sql from './sql.svg';
import flyway from './flyway.svg';
import linkedin_white from './linkedin-white.svg';
import maven from './maven.svg';
import development from './development.svg';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    linkedin_white,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    git,
    nodejs,
    intellij,
    sql,
    nextjs,
    flyway,
    maven,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    programming_black,
    book,
    development
};

export const workData = [
    {
        title: 'AROS Loot Shop',
        description: 'Java & Swing App',
        bgImage: '/aros.png',
        link: 'https://github.com/yigituygun8/aros-lootshop'
    },
    {
        title: 'Tile-Clicking Game',
        description: 'CSS & JS & DOM API',
        bgImage: '/tile-click.png',
        link: 'https://github.com/yigituygun8/frontend-game-project'
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
        link: ''
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
        link: ''
    },
]

export const serviceData = [
    { icon: assets.programming_black, title: 'Programming Lessons', description: (
        <>
            Tutoring university students in languages such as <strong>Java, C, Python</strong>. Helping students succeed in coursework and exam preparation across different universities.
        </>
    ), link: '#contact' },
    { icon: assets.book, title: 'Middle & High School Tutoring', description: (
        <>
            Personalized tutoring for middle school and high school students. Focused on preparing for university entrance exams, <strong>MSÜ & YKS</strong>.
        </>
    ), link: '#contact' },
    { icon: assets.development, title: 'Development ', description: (
        <>
            End-to-end web development for small to medium projects.
            From <strong>UI implementation to backend logic and database design</strong>, tailored to project needs.
        </>
    ), link: 'https://github.com/yigituygun8?tab=repositories' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Java | C | JavaScript | PL/SQL | Python' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BSc at CTIS, Bilkent University' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Available in GitHub Repos | Click To View' }
];

export const toolsData = [
    {title: "Git", icon: assets.git},
    {title: "SQL", icon: assets.sql},
    {title: "Node.js", icon: assets.nodejs},
    {title: "Next.js", icon: assets.nextjs},
    {title: "Flyway", icon: assets.flyway},
    {title: "Maven", icon: assets.maven},
    {title: "IntelliJ", icon: assets.intellij},
    {title: "VSCode", icon: assets.vscode}
];