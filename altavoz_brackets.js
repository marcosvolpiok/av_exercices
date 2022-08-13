function bracket_match(bracket_string) {
  let closed = 0;
  let opened = 0;
  characters = bracket_string.split('');
  for(let i = 0; i<= characters.length -1; i++){
    if(characters[i]=='('){
      if(characters[i + 1]!='('){
        if(characters[i + 1]==')' && i != characters.length -1){
          closed++;
        }else{
          opened++;
        }
      }else{
        opened++;
      }
    }else{
      opened++;
    }
  }
}