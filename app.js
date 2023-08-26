function extractValue(arr, key) {
  return arr.reduce(function (result, obj) {
    result.push(obj[key]);
    return result;
  }, []);
}

function vowelCount(str) {
  const vowels = "aeiou";

  return Array.from(str.toLowerCase()).reduce(function (result, char) {
    if (vowels.includes(char)) {
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
    return result;
  }, {});
}

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (result, obj) {
    obj[key] = value;
    result.push(obj);
    return result;
  }, []);
}

function partition(arr, callback) {
  return arr.reduce(
    function (result, value) {
      if (callback(value)) {
        result[0].push(value);
      } else {
        result[1].push(value);
      }
      return result;
    },
    [[], []]
  );
}
