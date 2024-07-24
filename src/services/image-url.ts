const getImageMinimized=(url:string)=>{
if(!url) return "";
    const target="media/";
   const length= url.indexOf(target)+target.length;
//    to get from start of url till /media and concatenate with crop/400/600 to minimize image and concatenate the least of url
return url.slice(0,length)+"crop/600/400/"+url.slice(length);
}
export default getImageMinimized;