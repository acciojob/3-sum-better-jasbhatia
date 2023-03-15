function threeSum(arr, target) {
// write your code here
	arr.sort((a,b)=>{a-b});

	for(var i=0;i<arr.length;i++)
	{
		var first=i+1;
		var last= arr.length-1;

		while(first<last)
		{
			if(arr[i]+arr[first]+arr[last]==target){
				return target;
			}
			else if(arr[i]+arr[first]+arr[last]<target){
				first++;
			}
			else{
				last--;
				
			}
		}
	}
  
}

module.exports = threeSum;
