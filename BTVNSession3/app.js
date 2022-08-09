//Câu 1
// for (let i =1; i<100;i++){
//     console.log(i);
//     if (i===99){
//         console.log("Đã hoàn thành");
//     }
// }

//Câu 2
// let n1=0; 
// let n2=1;
// let temp = "";
// console.log(n1);
// console.log(n2);
// for (let i=0;i<18;i++){
//     temp = n1 + n2;
//     n1=n2;
//     n2= temp;
//     console.log(temp);
// }
//Câu 3
// let n1=0; 
// let n2=1;
// let temp = "";
// console.log(n1);
// console.log(n2);
// for (let i=0;i<18;i++){
//     temp = n1 + n2;
//     n1=n2;
//     n2= temp;
//     console.log(temp);
//     if (temp%5===0){
//         console.log("Số đầu tiên chia hết cho 5 trong dãy fibonaci là "+temp);
//         break;
//     }  
// }
//Câu 4
// let n1=0; 
// let n2=1;
// let temp = "";
// let sum = 1;
// console.log(n1);
// console.log(n2);
// for (let i=0;i<18;i++){
//     temp = n1 + n2;
//     n1=n2;
//     n2= temp;
//     sum =sum+temp;
//     console.log(temp);
// }
// console.log("Tổng 20 số đầu tiên trong dãy fibonaci là: "+sum);

//Câu 5
// let d = 1;
// let tong =0;
// for (i=1;i<215;i++){
//     if (i%7===0){
//         console.log(`${d}. In ra màn hình ${i}`);
//         d=d+1;
//         tong = tong+i;
//     }
// }
// console.log("Tổng 30 số đầu chia hết cho 7 là "+tong);
//Câu 6
// for (let i=1; i<100;i++){
//     if (i%3===0){
        
//         if(i%5===0){
//             console.log(`${i} chia het cho ca 3 và 5`);
//         }else{
//             console.log(`${i} chia het cho 3`);
//         }
//     }else if(i%5===0){
//         console.log(`${i} chia het cho 5`);
    
//     }else {
//         console.log(`${i} khong chia het cho 3 va 5`);
//     }
// }

//câu 7
// let n = prompt("Nhấp số n");
// let s=1;
// for (i=1;i<=n;i++){
//     s=s*i;
// }
// console.log(s);