const getSleepHours = day =>{
    day = day.toLowerCase();
    switch(day){
      case 'monday':
      return 2
      break;
      case 'tuesday':
      return 4
      break;
      case 'wednesday':
      return 6
      break;
      case 'thursday':
      return 5
      break;
      case 'friday':
      return 8
      break;
      case 'saturday':
      return 9
      break;
      case 'sunday':
      return 10
      break;
      default :
      return 1000000000
      break;
  
    }
  }
  
  const getActualSleepHours =() =>{
  let days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
  let sum = getSleepHours(days[0])+getSleepHours(days[1])+getSleepHours(days[2])+getSleepHours(days[3])+getSleepHours(days[4])+getSleepHours(days[5])+getSleepHours(days[6])
  return sum;
  }
  
  const getIdealSleepHours = () =>{
    let IdealHours = 8
  
    return(IdealHours*7)
    
  }
  const calculateSleepDebt = () => {
  
    let actualSleepHours=getActualSleepHours()
    let idealSleepHours=getIdealSleepHours()
    if(actualSleepHours>idealSleepHours){
      console.log('U OVER SLEPT MAN')
      console.log (actualSleepHours-idealSleepHours +' Hours')
  
    }
    else if (actualSleepHours<=idealSleepHours){
      console.log('U LACKING ')
      console.log (idealSleepHours-actualSleepHours +' Hours')
  
    } else {console.log('PERFECT')}
  
  
    }
  calculateSleepDebt()
