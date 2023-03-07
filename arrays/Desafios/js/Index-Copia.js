
      (function(){
        
let trHeader = document.querySelector("thead tr");
let thsHeader = document.querySelectorAll("th");
let thsAlunosNotas = trHeader.querySelectorAll("[aluno-nota]");
let INDICES_NOTAS = {};

Array.from(thsAlunosNotas).forEach(function(th){
      let prop = th.getAttribute("aluno-nota");
      INDICES_NOTAS[prop] = gatchIndice(prop)
    })

function gatchIndice(indice){
    let th = trHeader.querySelector(`[aluno-nota="${indice}"]`)
    console.log(th);
    let i = Array.from(thsHeader).indexOf(th);
    return i;
  }
      




        let trs = document.querySelectorAll("tbody tr");
          let x = 0;
          let media = 0;

          while (trs[x]){
            console.log(trs[x]);
            
            let tds = trs[x].querySelectorAll("td");
            console.log(tds);
            media = avarege(
              parseFloat(tds[INDICES_NOTAS.n1].textContent),
              parseFloat(tds[INDICES_NOTAS.n2].textContent),
              parseFloat(tds[INDICES_NOTAS.n3].textContent),
              parseFloat(tds[INDICES_NOTAS.n4].textContent)
            );
            
            x++;
            tds[INDICES_NOTAS.media].textContent = media;
          }
        })()
      