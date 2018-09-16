
module.exports = function getZerosCount(number, base){
  var fact = destruct(base);
  var count = 0;
  var answer_arr = [];

// подсчет количества нулей для каждого множителя
  for(var a = 0; a < fact.length; a++){
      devisor = fact[a][0];
      count = 0;
  while(devisor <= number){
    count += Math.floor(number/devisor);
    devisor*=fact[a][0];
  }
  // количества нулей(деление общего количества нулей для это множителя на
//его степень)
  answer_arr.push(count/fact[a][1]);
  }

// возврат минимального значения из количества нулей для всех множителей
  return Math.floor(Math.min.apply(null, answer_arr));
}

// функция возвращает массив массивов простых множителе и их степеней
function destruct(num){
     var ans = [];
     var i = 2;
     var arr=[];
     var half = num/2;
     //поиск простых множителей
    while(num > 1){
            if(num%i === 0){
                arr.push(i);
                num /=i;
            }
            else if(i >= 3)
            i+=2;
            else
            i++;
    }
    arr.sort((a,b) => b-a);

// создается массив массивов, в каждом по 2 элемента
//0 - простой множитель, 1 - его степень
while(arr.length > 0){
var count = arr.filter(function(value){
    return value === arr[0];
}).length;
ans.push([arr[0], count]);
arr = arr.filter(x=>x!=arr[0]);

}
    return ans;
}
