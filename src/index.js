module.exports = function check(str, bracketsConfig) {
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{",
    "|": "|",
    2: "1",
    4: "3",
    6: "5",
    7: "7",
    8: "8",
  };

  const st = [];
  for (let i = 0; i < str.length; i++) {
    if (isClosedBracket(str[i])) {
      if (brackets[str[i]] !== st.pop()) return false;
    } else {
      st.push(str[i]);
    }
  }
  return st.length === 0;
};

function isClosedBracket(char) {
  return [")", "]", "}", "|", "2", "4", "6", "7", "8"].indexOf(char) > -1;
}
