// const table = "";
// const tbody = "";
// let   datat = "";
// // const news  = $('');


// $.ajax({
//     url:'./service/get/news.php',
//     type:'get',
//     data:'',
//     dataType:'json',
//     success:function(res){
        
        
//         let  respone = res.res;        
//         respone.forEach(element => {
//             var topic           = element.new_topic;
//             var info            = element.new_info;
//             var sys_timestamp   = element.sys_timestamp;

//             if(respone.length == 0){
//                 $('.grid-tem-5').html(
//                     '<div style="width:90%;color:gray;background-color:silver;text-align:center;margin:auto;">None Data</div>'
//                 );
//             }else{
//                 datat +=`
//                     <div class="content">
//                         <img src="./images/unnamed.png" alt="news">
//                         <div class="info">
//                             <h3>${topic}</h3>
//                             <h4>${info}</h4>
//                         </div>
//                     </div>
//                 `;
//                 $('.datat').html(datat);
//             }
//         });
//     },error:function (err) {
//         console.log(err);
//     }
// })