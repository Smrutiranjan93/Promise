const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'},
    {title:'post three',body:'this is post three'},
    {title:'post four',body:'this is post four'},
];


function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output +=`<li>${post.title} </li>`
        });
        document.body.innerHTML=output;
    },1000);
}


function createPost(post){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('error:something is wrong');
            }
        },2000);
    })
 
}
function deletePost(){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
           
            if(posts.values !==0){
                resolve(posts.pop());
            }else{
                reject('error:Array is empty now');
            }
    },1000);
   }) ;
}



createPost({title:'post five', body:'this is post five'})
   .then(()=>{
    getPosts()
    deletePost()
    .then(()=>{
        getPosts()
    })
}).catch(err=>console.log(err));
