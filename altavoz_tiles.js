function can_reach_end(nums) {
  if(nums[0]==0){
    if(nums.length==1){
      return true
    } else {
      return false;
    }
  }
  const total = nums.reduce((prev, number) => prev + number);
  if(total >= nums.length){
    return true
  }
  
  return false
}

console.log(can_reach_end([1,2,3]))
console.log(can_reach_end([5,0,0,0]))
console.log(can_reach_end([0]))
console.log(can_reach_end([0,2,4]))
console.log(can_reach_end([1,2,0,0,1]))
