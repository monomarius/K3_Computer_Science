function longestCountry(pais1, pais2, pais3, pais4){
    var pais1Count = pais1.length
    var pais2Count = pais2.length
    var pais3Count = pais3.length
    var pais4Count = pais4.length
    console.log("Los caracteres de:", pais1, "son", pais1Count)
    console.log("Los caracteres de:", pais2, "son", pais2Count)
    console.log("Los caracteres de:", pais3, "son", pais3Count)
    console.log("Los caracteres de:", pais4, "son", pais4Count)
    var arr = [pais1, pais2, pais3, pais4]
        
    console.log(arr)

    var lgth = 0
    var longest

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > lgth) {
        var lgth = arr[i].length
        longest = arr[i].length
        paisMasLargo = arr[i]
      }
    }

    console.log("El país más largo es:", paisMasLargo, "con", longest, "caracteres.");
}
longestCountry("Mexico", "Panama", "Guatemala", "El Salvador")
