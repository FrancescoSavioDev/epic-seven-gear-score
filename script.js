// Elementi HTML
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('jsonFile');
const output = document.getElementById('output');

// Eventi per l'area di drag and drop
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('dragover');
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    } else {
        alert('Per favore, carica un file JSON.');
    }
});

// Gestione del file tramite il pulsante
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        handleFile(file);
    } else {
        alert('Per favore, seleziona un file JSON valido.');
    }
});

// Funzione per leggere e analizzare il file JSON
function handleFile(file) {
    const reader = new FileReader();

    reader.onload = (event) => {
        try {
            const jsonData = JSON.parse(event.target.result);
            processGearData(jsonData);
        } catch (error) {
            output.textContent = 'Errore: File JSON non valido.';
        }
    };

    reader.readAsText(file);
}

// Funzione per processare i dati del JSON
function processGearData(jsonData) {
    let gearNumber = 0;
    let accountScore = 0;
    let generic = 0;
    let dps = 0;
    let bruiser = 0;
    let tank = 0;
    let opener = 0;
    let speedarray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let gearscore70 = 0;
    let gearscore75 = 0;
    let gearscore80 = 0;

    try {
        jsonData.items.forEach(item => {
            let tmp = 0;
            if (item.level === 85 || item.level === 88 || item.level === 90) {
                if (item.enhance === 15) {
                    if(item.level === 85){
                        item.substats.forEach(substat => {
                            //controllo su 0 roll
                            if (substat.rolls === 1) {
                                if (substat.type === "AttackPercent" || substat.type === "EffectivenessPercent" || substat.type === "HealthPercent" || substat.type === "EffectResistancePercent" || substat.type === "DefensePercent") {
                                    substat.value += 1;
                                }
                                if (substat.type === "Speed") {
                                    substat.value += 0;
                                }
                                if (substat.type === "CriticalHitChancePercent" || substat.type === "CriticalHitDamagePercent") {
                                    substat.value += 1;
                                }
                                if (substat.type === "Health" || substat.type === "Attack" || substat.type === "Defense") {
                                    substat.value = 4;
                                }
                            }
                            //controllo su 1 roll
                            if (substat.rolls === 2) {
                                if (substat.type === "AttackPercent" || substat.type === "EffectivenessPercent" || substat.type === "HealthPercent" || substat.type === "EffectResistancePercent" || substat.type === "DefensePercent") {
                                    substat.value += 3;
                                }
                                if (substat.type === "Speed") {
                                    substat.value += 1;
                                }
                                if (substat.type === "CriticalHitChancePercent" || substat.type === "CriticalHitDamagePercent") {
                                    substat.value += 2;
                                }
                                if (substat.type === "Health" || substat.type === "Attack" || substat.type === "Defense") {
                                    substat.value = 8;
                                }
                            }
                            //controllo su 2 roll
                            if (substat.rolls === 3) {
                                if (substat.type === "AttackPercent" || substat.type === "EffectivenessPercent" || substat.type === "HealthPercent" || substat.type === "EffectResistancePercent" || substat.type === "DefensePercent") {
                                    substat.value += 4;
                                }
                                if (substat.type === "Speed") {
                                    substat.value += 2;
                                }
                                if (substat.type === "CriticalHitChancePercent" || substat.type === "CriticalHitDamagePercent") {
                                    substat.value += 3;
                                }
                                if (substat.type === "Health" || substat.type === "Attack" || substat.type === "Defense") {
                                    substat.value = 12;
                                }
                            }
                            //controllo su 3 roll
                            if (substat.rolls === 4) {
                                if (substat.type === "AttackPercent" || substat.type === "EffectivenessPercent" || substat.type === "HealthPercent" || substat.type === "EffectResistancePercent" || substat.type === "DefensePercent") {
                                    substat.value += 5;
                                }
                                if (substat.type === "Speed") {
                                    substat.value += 3;
                                }
                                if (substat.type === "CriticalHitChancePercent" || substat.type === "CriticalHitDamagePercent") {
                                    substat.value += 4;
                                }
                                if (substat.type === "Health" || substat.type === "Attack" || substat.type === "Defense") {
                                    substat.value = 16;
                                }
                            }
                            //controllo su 4 roll
                            if (substat.rolls === 5) {
                                if (substat.type === "AttackPercent" || substat.type === "EffectivenessPercent" || substat.type === "HealthPercent" || substat.type === "EffectResistancePercent" || substat.type === "DefensePercent") {
                                    substat.value += 7;
                                }
                                if (substat.type === "Speed") {
                                    substat.value += 4;
                                }
                                if (substat.type === "CriticalHitChancePercent") {
                                    substat.value += 5;
                                }
                                if (substat.type === "CriticalHitDamagePercent"){
                                    substat.value += 6;
                                }
                                if (substat.type === "Health" || substat.type === "Attack" || substat.type === "Defense") {
                                    substat.value = 20;
                                }
                            }
                            //controllo su 5 roll
                            if (substat.rolls === 6) {
                                if (substat.type === "AttackPercent" || substat.type === "EffectivenessPercent" || substat.type === "HealthPercent" || substat.type === "EffectResistancePercent" || substat.type === "DefensePercent") {
                                    substat.value += 9;
                                }
                                if (substat.type === "Speed") {
                                    substat.value += 4;
                                }
                                if (substat.type === "CriticalHitChancePercent") {
                                    substat.value += 7;
                                }
                                if (substat.type === "CriticalHitDamagePercent"){
                                    substat.value += 8;
                                }
                                if (substat.type === "Health" || substat.type === "Attack" || substat.type === "Defense") {
                                    substat.value = 25;
                                }
                            }


                            //console.log(`${substat.type}: ${substat.value} (${substat.rolls})`);
                            tmp += substat.value;
                        });
                        //console.log("------------------------");

                        accountScore += tmp;
                        gearNumber++;
                    }
                    //trasformazione delle stats flat di gear 88 e 90 in punti
                    if(item.level === 88 || item.level === 90){
                        item.substats.forEach(substat => {
                            //controllo su 0 roll
                            if (substat.rolls === 1) {
                                if (substat.type === "Health" || substat.type === "Attack" || substat.type === "Defense") {
                                    substat.value = 4;
                                }
                            }
                            //controllo su 1 roll
                            if (substat.rolls === 2) {
                                if (substat.type === "Health" || substat.type === "Attack" || substat.type === "Defense") {
                                    substat.value = 8;
                                }
                            }
                            //controllo su 2 roll
                            if (substat.rolls === 3) {
                                if (substat.type === "Health" || substat.type === "Attack" || substat.type === "Defense") {
                                    substat.value = 12;
                                }
                            }
                            //controllo su 3 roll
                            if (substat.rolls === 4) {
                                if (substat.type === "Health" || substat.type === "Attack" || substat.type === "Defense") {
                                    substat.value = 16;
                                }
                            }
                            //controllo su 4 roll
                            if (substat.rolls === 5) {
                                if (substat.type === "Health" || substat.type === "Attack" || substat.type === "Defense") {
                                    substat.value = 20;
                                }
                            }
                            //controllo su 5 roll
                            if (substat.rolls === 6) {
                                if (substat.type === "Health" || substat.type === "Attack" || substat.type === "Defense") {
                                    substat.value = 25;
                                }
                            }
                            //console.log(`${substat.type}: ${substat.value} (${substat.rolls})`);
                            tmp += substat.value;
                        });
                    //console.log("------------------------");  

                    accountScore += tmp;
                    gearNumber++;
                    }
                    
                    //calcolo del gear score 
                    //---------------------------------------------------------------------------
                    let gearscoreitem = 0;
                    let bonusSpeed = 1;
                    let bonusCongruenza = 1;
                    let bonusGearScore = 1;
                    let bonusRightSide = 1;
                    let gearscoremoltiplicato = 0;
                    let istank = 0;
                    let isdps = 0;
                    let isbruiser = 0;
                    let isgeneric = 0;
                    item.substats.forEach(substat => {
                        if (substat.type === "Speed") {
                            gearscoreitem += substat.value * 2;
                            if(substat.value >= 15){
                                speedarray[substat.value-15]++;
                            }
                            if(substat.value >= 19){
                                opener ++;
                                bonusSpeed = (substat.value - 17)*3;
                            }
                        }
                        else if (substat.type === "CriticalHitChancePercent") {
                            gearscoreitem += substat.value * 1.6;
                        }
                        else if (substat.type === "CriticalHitDamagePercent") {
                            gearscoreitem += substat.value * 1.15;
                        }
                        else {
                            gearscoreitem += substat.value;
                        }

                        //logica per contare i pezzi tank
                        if(substat.type === "HealthPercent" || substat.type === "DefensePercent" || substat.type === "EffectResistancePercent" || substat.type === "Health" || substat.type === "Defense" || substat.type === "Speed"){
                            istank+=substat.rolls;
                            if(istank >= 8){
                                tank++;
                                isgeneric++;
                            }
                        }

                        //logica per contare i pezzi dps
                        if(substat.type === "AttackPercent" || substat.type === "CriticalHitChancePercent" || substat.type === "CriticalHitDamagePercent" || substat.type === "Attack" || substat.type === "Speed"){
                            isdps+=substat.rolls;
                            if(isdps >= 8){
                                dps++;
                                isgeneric++;

                            }
                        }    

                        //logica per contare i pezzi bruiser
                        if(substat.type === "HealthPercent" || substat.type === "DefensePercent" || substat.type === "CriticalHitChancePercent" || substat.type === "CriticalHitDamagePercent" || substat.type === "Speed"){
                            isbruiser+=substat.rolls;
                            if(isbruiser >= 8){
                                bruiser++;
                                isgeneric++;
                            }
                        }    
                        
                    });
                    if(isgeneric >= 1){
                        isgeneric=0;
                        bonusCongruenza = 2;
                    }else{
                        generic++;
                    }
                    istank = 0;
                    isdps = 0;
                    isbruiser = 0;

                    if(gearscoreitem >= 70 && gearscoreitem <= 74){
                        gearscore70++;
                        bonusGearScore = 1.5;
                    } 
                    if(gearscoreitem >= 75 && gearscoreitem <= 79){
                        gearscore75++;
                        bonusGearScore = 5;
                    } 
                    if(gearscoreitem >= 80){
                        gearscore80++;
                        bonusGearScore = 10;
                    }

                    //logica per il calcolo del punteggio account
                    if(item.type === "Necklace" || item.type === "Ring" || item.type === "Boots"){
                        bonusRightSide = 2;
                    }
                    
                    //console.log(`Gearscore base: ${gearscoreitem}`);
                    gearscoremoltiplicato = gearscoreitem * bonusSpeed * bonusCongruenza * bonusGearScore * bonusRightSide;
                    //console.log(`Gearscore moltiplicato: ${gearscoremoltiplicato}`);
                    accountScore += gearscoremoltiplicato;
                    //---------------------------------------------------------------------------
                    
                    
                    
                } 
                else {
                    //console.log("L'item non è uppato a +15");
                }
            } else {
                //console.log("L'item non ha il livello richiesto.");
            }
        });



        //console.log(`Ho analizzato ${gearNumber} gear con un punteggio totale di ${accountScore}`);
        //console.log(`Gearscore >=70: ${gearscore70}`);
        //console.log(`Gearscore >=75: ${gearscore75}`);
        //console.log(`Gearscore >=80: ${gearscore80}`);  
        //console.log("Distribuzione Speed su gear +15:");
        for(let i=0; i<speedarray.length; i++){
            //console.log(`Speed ${i+15}: ${speedarray[i]} pezzi`);
        }
        //console.log(`Numero di pezzi generici: ${generic}`);
        //console.log(`Numero di pezzi tank: ${tank}`);
        //console.log(`Numero di pezzi dps: ${dps}`);
        //console.log(`Numero di pezzi bruiser: ${bruiser}`);
        //console.log(`Numero di opener: ${opener}`);


        updateDashboard(gearNumber, accountScore, generic, tank, dps, bruiser, opener, gearscore70, gearscore75, gearscore80,speedarray);


    } catch (error) {
        output.textContent = 'Errore: Problema nel processare i dati JSON.';
    }
}

// Funzione per elaborare il file dal pulsante
function processFile() {
    const file = fileInput.files[0];
    if (file) {
        handleFile(file);
    } else {
        output.textContent = 'Errore: Nessun file selezionato o formato non valido.';
    }
}
      

// Variabile globale per gestire il grafico
let dataChart = null;
let dataChart2 = null;
let dataChart3 = null;

function updateDashboard(gearNumber, accountScore, generic, tank, dps, bruiser, opener, gearscore70, gearscore75, gearscore80,speedarray) {

  const gearScoreDisplay = document.getElementById('gearScoreValue');
  gearScoreDisplay.textContent = Math.round(accountScore);

  const gearNumberDisplay = document.getElementById('gearNumber');
  gearNumberDisplay.textContent = gearNumber;

  const ctx = document.getElementById('dataChart').getContext('2d');
  const ctx2 = document.getElementById('dataChart2').getContext('2d');
  const ctx3 = document.getElementById('dataChart3').getContext('2d');

  updateGearScore(Math.round(accountScore));

  // === GRAFICO 1 ===
  const labels1 = ['70-74 GS', '75-79 GS', '80+ GS'];
  const dataValues1 = [gearscore70, gearscore75, gearscore80];
  const colors1 = ['#007bff', '#28a745', '#ffc107'];

  if (dataChart) {
    dataChart.data.datasets[0].data = dataValues1;
    dataChart.update();
  } else {
    dataChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels1,
        datasets: [{
          data: dataValues1,
          backgroundColor: colors1,
          borderColor: '#0f172a',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: '#fff',
              padding: 16,
              font: { size: 15, weight: 'bold' },
              generateLabels: (chart) => {
                const dataset = chart.data.datasets[0];
                return chart.data.labels.map((label, i) => {
                  const value = dataset.data[i];
                  return {
                    text: `${label}: ${value}`,
                    fillStyle: dataset.backgroundColor[i],
                    strokeStyle: dataset.borderColor,
                    lineWidth: 1,
                    hidden: false,
                    index: i
                  };
                });
              }
            }
          },
          tooltip: {
            backgroundColor: '#333',
            titleColor: '#fff',
            bodyColor: '#fff'
          }
        },
        layout: { padding: 10 },
        animation: { duration: 1500, easing: 'easeOutCubic' }
      }
    });
  }

  // === GRAFICO 2 ===
const labels2 = ['Generic', 'Tank', 'DPS', 'Bruiser', 'Opener'];
const dataValues2 = [generic, tank, dps, bruiser, opener];
const colors2 = ['#6c757d', '#17a2b8', '#dc3545', '#ffc107', '#66FFFF'];

if (dataChart2) {
  dataChart2.data.datasets[0].data = dataValues2;
  dataChart2.update();
} else {
  dataChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Generic', 'Tank', 'DPS', 'Bruiser', 'Opener'],
    datasets: [{
      label: '',
      data: [generic, tank, dps, bruiser, opener],
      backgroundColor: ['#6c757d', '#66CC33', '#dc3545', '#8A33FF', '#66FFFF'],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff'
      },
      datalabels: {
        color: '#000',
        anchor: 'end',   
        align: 'end',  
        offset: 4,
        font: {
          weight: 'bold',
          size: 13
        },
        formatter: (value) => value
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false 
        },
        ticks: {
          display: false 
        },
        border: {
          display: false
        }
      },
      x: {
        ticks: {
          color: '#000',
          font: { size: 13, weight: 'bold' }
        },
        grid: {
          display: false  
        },
        border: {
          display: false
        },
        title: {
          display: true,
          text: '* Some gear can be used in multiple roles with a little change',
          color: '#cbd5e1',
          font: { size: 12, weight: 'bold' }
        }
      }
    },
    layout: { padding: { top: 20, bottom: 10 } },
    animation: {
      duration: 1500,
      easing: 'easeOutCubic'
    }
  },
  plugins: [ChartDataLabels]
});
}

// === TERZO GRAFICO: SPEED ARRAY ===

// Filtra solo i valori diversi da 0
const filteredLabels = [];
const filteredValues = [];

speedarray.forEach((value, i) => {
  if (value !== 0) {
    filteredLabels.push(`${i + 15}`);
    filteredValues.push(value);
  }
});

const reversedLabels = filteredLabels.slice().reverse();
const reversedValues = filteredValues.slice().reverse();

if (dataChart3) {
  // Aggiorna dati e etichette
  dataChart3.data.datasets[0].data = reversedValues;
  dataChart3.data.labels = reversedLabels;

  // Aggiorna limiti asse X
  dataChart3.options.scales.x.min = 0;
  dataChart3.options.scales.x.max = Math.max(...reversedValues) + 5; // aggiunge 5 unità

  // Aggiorna grafico
  dataChart3.update();
} else {
  dataChart3 = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: filteredLabels.reverse(),
    datasets: [{
      label: '',
      data: filteredValues.reverse(),
      backgroundColor: ['#2E004F', '#4B0080', '#8A33FF',     
'#CC0000', '#FF3333', '#FF6600',  
'#FF9900', '#FFCC00',                 
'#66CC33', '#99FF66', '#CCFF99',   
'#66FFFF', '#33CCFF', '#00A3FF',  
'#0066CC', '#004C99', '#003399',   
'#001F66', '#000033' ],
      borderWidth: 0
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff'
      },
      datalabels: {
        color: '#000',
        anchor: 'end', 
        align: 'end',  
        offset: 4,
        font: {
          weight: 'bold',
          size: 13
        },
        formatter: (value) => value
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: false },
        ticks: {
            color: '#000',
            font: { size: 10, weight: 'bold' },
            padding: 6,
            callback: function(value) {
            return this.getLabelForValue(value);
            }
        },
        border: { display: false }
      },
      x: {
        ticks: {
          color: '#000',
          font: { size: 13, weight: 'bold' },
          callback: function(value) {
              return value;
          }
        },
        grid: {
          display: false 
        },
        border: {
          display: false
        },
        title: {
          display: true,
          text: '* Speed gear population',
          color: '#cbd5e1',
          font: { size: 12, weight: 'bold' }
        },
        min: 0, 
        max: Math.max(...filteredValues) + 6 
      }
    },
    layout: { padding: { top: 20, bottom: 10 } },
    animation: {
      duration: 1500,
      easing: 'easeOutCubic'
    }
  },
  plugins: [ChartDataLabels]
});
}

}


function updateGearScore(score) {
  const gearWhale = document.getElementById('gearWhale');

   if (score < 100000) {
    gearWhale.style.filter = 'hue-rotate(0deg) brightness(1.1)';
  } else if (score < 200000) {
    gearWhale.style.filter = 'hue-rotate(50deg) brightness(1.1)';
  } else if (score < 300000) {
    gearWhale.style.filter = 'hue-rotate(80deg) brightness(1.0)';
  } else if (score < 400000) {
    gearWhale.style.filter = 'hue-rotate(140deg) brightness(1.1)';
  } else if (score < 500000) {
    gearWhale.style.filter = 'hue-rotate(175deg) brightness(1.2)';
  }else {
    gearWhale.style.filter = 'hue-rotate(200deg) brightness(1.4)';
  }
}