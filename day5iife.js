// odd number iife
(function(a){
    var  res="";
    for(i=0;i<a.length-1;i++)
    {
        if(a[i]%2!==0)
        {
            res+=a[i]+" "
        }
    }
    res+=a[a.length-1]
    console.log(res);
})([1,2,3,4,5,7]);
//convert all the strings to title caps ia a string array with iife function
(function (string) {
    var sent = string.toLowerCase().split(" ");
    for(var i = 0; i< sent.length; i++){
       sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
    }
 sent.join(" ");
 var res="";
 for(let i=0;i<sent.length-1;i++)
 {
     res+=sent[i]+" "
 }
 res+=sent[sent.length-1]
 console.log(res);
 }) ("we are guvian");
 //sum of all number in an array in iife function
 (function(a){
    var  res=0;
    for(i=0;i<a.length;i++)
    {
            res+=a[i]
    }
    console.log(res);
})([1,2,3,4,5,7]);
//retuen all prime numbers in an array in iife function 
(function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    console.log(res);
 
})([1,2,3,4,5,6,7,8,9,11]);
//return all plaindromes in an array in iife function
(function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    console.log(ans);
 
}) ([1,11,343,411,575,600,7887,80108,999,11]);
//return median of two sorted array of the same size in iife function
(function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
    if(i<n)
    {
        for(let k=i;k<n;k++)
        {
            c.push(a[k])
        }
    }
    else if(j<p)
    {
        for(let m=j;m<p;m++)
        {
            c.push(b[m])
        }
    }
    if(c.length%2===0)
    {
        med=(c[(c.length/2)-1]+c[c.length/2])/2
    }
    else
    {
        med=c[Math.floor(c.length/2)]
    }
    console.log(med);
   
}) ([1,2,3,7],[4,5,6,8]);
//Remove duplicates from an array by using iife function 
(function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     console.log(c);
    
})([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]);
//Rotate an array by k times in iife function
(function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  console.log(d);
}) ([1,2,3,4,5],3)