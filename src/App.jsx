import './App.css'
import resume from './Resume_James-Russel-Lobusta.pdf';
import moneeLogoBlack from './assets/monee-logo.png';

import { Container } from 'postcss';

const currentYear = new Date().getFullYear();

let cursor = document.querySelector('#cursor');
let body = document.querySelector('body');

document.onmousemove = function(e) {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';

  body.style.backgroundPositionX = e.pageX / -4 + 'px';
  body.style.backgroundPositionY = e.pageY / -4 + 'px';

  let element = document.createElement('div');
  element.className = 'element';
  body.prepend(element);

  element.style.left = e.pageX  + 'px';
  element.style.top = e.pageY  -10 + 'px';

  setTimeout(function() {
    let text = document.querySelectorAll('.element')[0];
    let directionX = Math.random() < 0.5 ? -1 : 1;
    let directionY = Math.random() < 0.5 ? -1 : 1;

    text.style.left = parseInt(text.style.left) - (directionX * (Math.random() * 250)) + 'px';
    text.style.top = parseInt(text.style.top) - (directionY * (Math.random() * 250)) + 'px';

    text.style.opacity = 0;
    text.style.transform = 'scale(0.20)';
    text.innerHTML = randomText();

    setTimeout(function(){
      element.remove()
    },1500)


  }, 10)

}

function randomText(){
  var text = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890<>?/;:{}[]!#%^&()=+";
  var letter = text.charAt(Math.floor(Math.random() * text.length));
  return letter;
}



const App = () => {

  const handleDownload = () => {
    // Replace the URL with the actual URL of your PDF file
    const pdfUrl = resume;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Resume_James-Russel-Lobusta.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    <div id='bodycursor' className=''><div class="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(10,100,198,0.3),rgba(255,255,255,0))]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#2528362e_1px,transparent_1px),linear-gradient(to_bottom,#2528362e_1px,transparent_1px)] bg-[size:8px_8px]"></div></div>
      
      
      <div className='px-10 max-w-screen-xl md:mx-12 lg:px-0 lg:m-auto relative'>
      <div className='right-0 absolute '>
    <nav className="flex justify-end items-center mt-16">
  
    <a href='#'>
  <div className="flex items-center text-left">
  {/* <a className="hover:text-blue-400" href="https://discord.gg/CSkFTPYJEf" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="22" width="18" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" fill="#4ECCA3"/></svg></a> */}
  </div></a>

  
  <div class="flex items-center space-x-4">
    {/* <a className="hover:text-green-300" href="/" target='_blank'></a> */}
  <a className="hover:text-green-300 " href="https://www.instagram.com/jhay.lobusta/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="25" width="22" fill="#38bdf8" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
  <a className="hover:text-green-300 " href="https://github.com/JhayLobusta" target='_blank'><svg version="1.1" viewBox="0 0 1600 1600" width="25" height="25" fill="#38bdf8" xmlns="http://www.w3.org/2000/svg">
<path transform="translate(597,168)" d="m0 0c1.15 0.54 2.31 1.08 3.5 1.64 24.5 11.5 49.4 23.4 71.6 38.9 0.88 0.61 1.76 1.21 2.66 1.83 1.69 1.18 3.37 2.38 5.03 3.6 5.34 3.7 8.9 4.63 15.3 3.62 0.95-0.2 1.9-0.39 2.88-0.59 0.96-0.18 1.92-0.37 2.91-0.55 3.23-0.65 6.44-1.36 9.65-2.07 40.7-8.68 81.9-14.1 123-16.4 0.99-0.06 1.99-0.12 3.01-0.18 71.3-4.04 144 1.89 213 17.3 0.87 0.2 1.75 0.39 2.65 0.59 1.63 0.35 3.26 0.72 4.89 1.09 6.51 1.44 11.3 2.24 17.2-1.49 0.93-0.58 1.86-1.16 2.82-1.76 0.98-0.63 1.96-1.26 2.97-1.91 2.08-1.29 4.16-2.59 6.24-3.89 1.52-0.96 1.52-0.96 3.08-1.94 12.8-8.02 26.1-15.3 39.4-22.4 2.07-1.12 4.13-2.27 6.18-3.42 20.4-11.3 42.3-20.1 64.3-27.9 0.77-0.28 1.53-0.56 2.32-0.85 28.2-10.2 57.8-16.4 87.9-16.6 0.67 0 1.35-0.01 2.04-0.02 22.7-0.13 44.6 5.28 61.6 21.1 39.6 42.2 43.9 125 42.4 180-0.61 17.8-2.34 35.6-5.54 53.1-4.04 22.6 4.09 37.4 15.6 56.1 35.8 58 56.8 127 56.9 195 0 1.28 0.01 2.57 0.01 3.9 0.01 4.14 0.01 8.28 0.01 12.4v2.14c-0.01 21.6-0.14 43.1-2.19 64.7-0.06 0.67-0.13 1.34-0.19 2.02-6.63 69.3-23.1 139-56.8 200-0.47 0.87-0.95 1.73-1.44 2.62-14 25.4-31 49.1-50.8 70.4-2.09 2.25-4.09 4.56-6.09 6.89-3.74 4.29-7.77 8.19-11.9 12.1-1.12 1.05-1.12 1.05-2.27 2.12-5.64 5.24-11.4 10.2-17.5 14.9-1.06 0.88-2.11 1.76-3.16 2.64-24.3 20.3-52.1 36.2-80.8 49.4-1.54 0.71-3.07 1.43-4.61 2.14-67 30.9-67 30.9-95.4 30.9 0.23 0.57 0.46 1.15 0.7 1.74 5.45 14.2 8.56 28.8 11 43.8 0.21 1.26 0.42 2.53 0.64 3.83 2.28 14.2 2.76 27.9 2.76 42.2 0 2.08 0 4.15 0.01 6.23 0 5.62 0.01 11.2 0.01 16.9v10.5c0.01 12.3 0.02 24.6 0.02 36.8-0.01 11.4 0.01 22.8 0.02 34.3 0.01 9.83 0.02 19.7 0.02 29.5 0 5.86 0 11.7 0.01 17.6 0.01 5.51 0.01 11 0 16.5 0 2.02 0.01 4.03 0.01 6.05 0.07 23.2-2.8 43.8-18.8 61.8-12.3 11.9-28.5 19-45.6 19.6-17.8-0.79-33.6-7.52-45.9-20.4-0.64-0.66-1.29-1.32-1.95-2-16.6-17.9-17.4-39.7-17.2-62.9 0.01-1.94 0.01-3.88 0.01-5.82 0.01-4.15 0.03-8.29 0.05-12.4 0.03-6.58 0.05-13.2 0.06-19.7 0.03-16.3 0.09-32.7 0.15-49 0.05-12.7 0.09-25.4 0.11-38.1 0.01-6.52 0.04-13 0.07-19.6 0.02-4.08 0.03-8.16 0.03-12.2l0.03-5.61c0.29-38.1-10.8-71.6-35.1-101-14.1-17.3-19.8-34.2-18.2-56.6 1.88-16 11.6-31.9 23.6-42.2 8.4-6.31 17.2-10.6 27.4-12.8 0.78-0.17 1.55-0.34 2.34-0.51 8.91-1.86 17.9-3.08 26.9-4.33 81.4-11.3 169-35.7 222-103 0.78-0.96 1.56-1.93 2.36-2.92 14.5-18.2 25.9-38.7 34.8-60.2 0.74-1.77 1.51-3.52 2.27-5.28 19.5-45.9 25.4-97.6 27.7-147 0.04-0.91 0.08-1.83 0.13-2.77 2.85-62.3-8.81-120-41.8-173-27.2-44.1-36.6-88.1-29.5-139 0.28-2.04 0.55-4.09 0.83-6.13 0.38-2.81 0.77-5.63 1.17-8.44 1.48-10.6 2.22-20.9 2.25-31.6 0-0.66 0-1.32 0.01-1.99 0.02-15.4-1.47-30.6-3.26-45.8-6.03 1.21-11.7 2.78-17.5 4.94-0.8 0.3-1.6 0.59-2.43 0.9-11.2 4.26-22.1 9.21-33.1 14.2-0.86 0.38-1.71 0.77-2.59 1.16-13.6 6.13-26.5 13.3-39.4 20.8-0.75 0.44-1.51 0.88-2.28 1.33-10.2 5.94-20 12.4-29.6 19.1-20.4 14.2-39.6 24.4-65.2 20-4.69-0.96-9.31-2.18-13.9-3.38-5.08-1.29-10.2-2.56-15.2-3.81-0.69-0.17-1.39-0.35-2.1-0.52-17.7-4.35-35.6-7.63-53.6-10.7-1.06-0.18-2.11-0.36-3.2-0.54-16.5-2.72-33.2-4.13-49.8-5.46-1.19-0.1-2.38-0.2-3.6-0.3-15.5-1.11-31.1-0.94-46.6-0.95h-2.33c-23.6-0.01-47 0.47-70.4 3.25-1.28 0.14-2.56 0.28-3.88 0.42-32.4 3.52-64 10-95.5 17.9-0.93 0.23-1.86 0.46-2.82 0.7-1.74 0.44-3.47 0.88-5.21 1.33-19.3 4.91-37.9 3.89-55.5-6.14-5.88-3.59-11.4-7.69-17-11.7-31-22.2-88.9-62.6-128-62.6-0.48 3.44-0.96 6.87-1.44 10.3-0.2 1.44-0.2 1.44-0.41 2.9-3.9 28.3-1.62 55.4 2.44 83.4 6.01 41.9-0.4 83-20.6 120-0.35 0.66-0.71 1.31-1.07 1.99-4.07 7.51-8.4 14.8-13 22-24.4 38.4-38 86-38.1 131-0.01 1.17-0.02 2.35-0.02 3.55-0.02 3.79-0.03 7.58-0.03 11.4v3.92c0.01 30.6 2.03 60.5 7.25 90.7 0.18 1.06 0.36 2.11 0.54 3.2 5.21 30.6 13.6 60.9 27.5 88.8 0.61 1.27 1.22 2.54 1.83 3.8 9.5 19.6 21.2 37.2 35.7 53.5 1.41 1.58 2.8 3.18 4.19 4.78 6.8 7.73 14.3 14.4 22.3 20.9 0.53 0.44 1.07 0.87 1.62 1.32 55.2 44.7 127 61.7 196 72.1 0.73 0.11 1.45 0.22 2.2 0.34 3.39 0.51 6.78 1 10.2 1.48 20.7 3.01 37 11.5 49.9 28.1 10.4 15.2 14 32.6 11 50.6-3.42 14.1-9.85 25.3-19.4 36.1-20 23-33.2 53-33.1 83.8-0.01 0.85-0.01 1.7-0.02 2.57-0.01 2.82-0.01 5.63-0.01 8.45-0.01 2.03-0.02 4.06-0.02 6.08-0.02 4.36-0.03 8.72-0.04 13.1l-0.06 20.7c-0.08 19.6-0.14 39.2-0.19 58.9-0.03 10.8-0.06 21.7-0.1 32.5-0.03 6.85-0.05 13.7-0.06 20.6-0.01 4.28-0.03 8.55-0.05 12.8 0 1.97-0.01 3.94-0.01 5.91-0.01 23.9-3.17 44.3-20.1 62.6-13.7 13.1-31.6 18.5-50.2 18.3-17.1-0.87-32.2-7.85-44-20.2-0.71-0.69-1.41-1.37-2.14-2.08-13.8-14.2-16.8-32.7-17.2-51.6-0.02-0.87-0.04-1.74-0.06-2.64l-0.18-8.25c-0.05-1.89-0.09-3.77-0.13-5.65-0.11-4.58-0.21-9.15-0.31-13.7-0.59 0.06-1.18 0.12-1.78 0.18-73.2 7.24-150-3.8-216-37.2-0.89-0.45-1.79-0.89-2.71-1.35-30.1-15.1-57.6-33.1-83.2-55-2.98-2.55-6.04-5-9.11-7.45-2.82-2.29-5.43-4.47-7.69-7.31-2.56-3.19-5.38-5.6-8.54-8.17-1.77-1.71-1.77-1.71-2.82-3.86-0.86-2.21-0.86-2.21-3.95-2.85-1.51-1.5-1.51-1.5-3.12-3.44-3.43-4.03-6.94-7.98-10.5-11.9-1.64-1.82-3.28-3.65-4.91-5.49-4.88-5.47-9.84-10.5-15.5-15.2-0.96-0.83-1.91-1.66-2.89-2.52-17.5-15.2-38.6-31.1-60.7-38.5-16.4-5.53-29.4-17.7-37.2-32.9-7.61-15.7-9.22-32.6-4.19-49.4 6.39-17.7 16.8-31.4 33.5-40 15.7-7.32 33.8-9.67 50.3-4.03 8.92 3.29 17.6 7.33 26.1 11.4 1.04 0.49 1.04 0.49 2.09 0.98 17.9 8.4 34.7 18.5 50.2 30.7 2.39 1.84 4.84 3.56 7.3 5.29 15.5 11.3 28.7 25.1 42.1 38.7 4.3 4.35 8.62 8.69 12.9 13 1.49 1.5 2.97 3 4.45 4.5 4.6 4.62 9.23 9.13 14.2 13.4 2.16 1.86 4.23 3.81 6.29 5.76 6.59 6.22 13.5 11.9 20.7 17.4 1.65 1.26 3.27 2.54 4.89 3.83 8.56 6.77 17.6 12.7 26.8 18.5 1.02 0.64 2.03 1.28 3.08 1.93 22.2 13.4 46.5 22.2 71.9 27.1 0.78 0.16 1.56 0.33 2.36 0.5 30.8 6.37 63.8 2.74 94.6-1.5-0.02-0.93-0.04-1.87-0.06-2.83-0.63-32.2 0.84-65.3 12.8-95.7 1.52-3.47 1.52-3.47 1.29-7.46-0.81-0.23-1.63-0.46-2.46-0.7-73.6-20.9-147-51.5-202-107-1.03-1.02-2.06-2.04-3.09-3.05-5.86-5.81-11.6-11.6-16.9-18-0.86-0.97-1.71-1.93-2.59-2.93-18-20.5-33.1-43.3-46.4-67.1-0.35-0.61-0.7-1.23-1.06-1.86-7.34-12.9-13.1-26.6-18.9-40.1-0.32-0.74-0.64-1.47-0.98-2.23-27.5-63.2-36.9-137-38-206-0.01-0.65-0.02-1.3-0.03-1.98-1.29-80 16.8-161 60.8-228 3.21-4.98 6.14-10 8.81-15.3 0.32-0.62 0.64-1.24 0.97-1.89 3.66-7.48 4.8-14.5 4.79-22.7-0.01-0.9-0.01-1.8-0.01-2.72-0.14-8.72-1.43-17.2-2.8-25.8-9.12-57.7-2.4-117 16-173 0.23-0.68 0.45-1.36 0.69-2.06 4.64-13.9 9.48-26.9 18.8-38.5 0.76-1.05 1.53-2.1 2.31-3.19 46.8-49 143-13.2 195 11.2z"/>
</svg></a>

<button type="button" onClick={handleDownload} class="transition-all ease-in-out duration-300 text-sky-400  bg-transparent from-purple-600 via-purple-700 to-purple-800 border border-sky-950 hover:border-purple-900 hover:bg-gradient-to-r hover:text-white font-normal rounded-full text-sm px-5 py-2 text-center inline-flex items-center me-2">
  <svg class="rtl:rotate-180 w-3 h-3 mr-2 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>Resume
</button>


</div>
</nav>
</div>
</div>


<section className="flex flex-col lg:flex-row items-center h-full px-10 max-w-screen-xl md:mx-12 lg:px-0 lg:m-auto lg:h-screen">
  
  <div className="relative flex flex-col flex-1">
    <h1 className="text-6xl font-regular mb-0 leading-tight text-green-300">Hi,</h1>
    <h1 className="text-6xl font-regular mb-0 leading-tight text-sky-200">I design & build <a className='italic text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300'>apps.</a></h1>
    <p className="mt-8 text-md leading-normal text-slate-400">I'm James Russel Lobusta, a versatile graphic designer and occasional</p>
    <p className="mt-1 text-md leading-normal text-slate-400">mobile & web developer — creating visually stunning designs and</p>
    <p className="mt-1 text-md leading-normal text-slate-400">functional digital experiences.</p>
    <div className='mt-20'>
    {/* <button type="button" class="text-green-300 bg-slate-800 hover:text-sky-300 focus:outline-none font-normal rounded-full text-sm px-7 hover:px-10 transition-all duration-200 py-3 text-center inline-flex items-center me-2">
Explore Portfolio
</button> */}
<button type="button" class="text-white bg-gradient-to-r text-center inline-flex items-center font-medium transition-all ease-in-out duration-200 from-purple-600 via-purple-700 to-purple-800 hover:px-12 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 rounded-full text-sm px-8 py-3.5 me-2">
Explore Portfolio<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></button>

</div>
  </div>
</section>

{/* <section className="relative">
  <div className="flex flex-col  px-10 max-w-screen-xl md:mx-12 lg:px-0 lg:m-auto">
    <h1 className="text-4xl font-regular mb-0 leading-tight text-green-300">01</h1>
    <h1 className="text-4xl font-regular mb-0 leading-tight text-sky-100">About me.</h1>
    <p className="mt-8 text-md leading-normal text-cyan-600">I'm James Russel Lobusta, a versatile graphic designer and occasional</p>
    <p className="mt-1 text-md leading-normal text-cyan-600">mobile-web developer. Currently creating visually stunning</p>
    <p className="mt-1 text-md leading-normal text-cyan-600"> designs and functional digital experiences.</p>
  </div>
</section> */}

    </div>
    </>
  );
};

export default App;
