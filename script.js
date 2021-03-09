var names=new Array();
names[0]="yakoov";
names[1]="jhon";
names[2]="Jen";
names[3]="jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="parul";
names[8]="jin";
names[9]="mohith";


for (var i = 0; i< names.length; i++){
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("goodbye" , names[i])
    }
    else{
        console.log("hello", names[i])
    }
}