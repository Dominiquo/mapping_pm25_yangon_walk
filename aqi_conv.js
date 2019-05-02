function aqiFromPM(pm) {

	if (isNaN(pm)) return "-"; 
	if (pm == undefined) return "-";
	if (pm < 0) return pm; 
	if (pm > 1000) return "-"; 
	/*      
	Good                              0 - 50         0.0 - 15.0         0.0 – 12.0
	Moderate                        51 - 100           >15.0 - 40        12.1 – 35.4
	Unhealthy for Sensitive Groups   101 – 150     >40 – 65          35.5 – 55.4
	Unhealthy                                 151 – 200         > 65 – 150       55.5 – 150.4
	Very Unhealthy                    201 – 300 > 150 – 250     150.5 – 250.4
	Hazardous                                 301 – 400         > 250 – 350     250.5 – 350.4
	Hazardous                                 401 – 500         > 350 – 500     350.5 – 500
	*/
	if (pm > 350.5) {
	  return calcAQI(pm, 500, 401, 500, 350.5);
	} else if (pm > 250.5) {
	  return calcAQI(pm, 400, 301, 350.4, 250.5);
	} else if (pm > 150.5) {
	  return calcAQI(pm, 300, 201, 250.4, 150.5);
	} else if (pm > 55.5) {
	  return calcAQI(pm, 200, 151, 150.4, 55.5);
	} else if (pm > 35.5) {
	  return calcAQI(pm, 150, 101, 55.4, 35.5);
	} else if (pm > 12.1) {
	  return calcAQI(pm, 100, 51, 35.4, 12.1);
	} else if (pm >= 0) {
	  return calcAQI(pm, 50, 0, 12, 0);
	} else {
	  return undefined;
	}
  
}



function calcAQI(Cp, Ih, Il, BPh, BPl) {
	var a = (Ih - Il);
	var b = (BPh - BPl);
	var c = (Cp - BPl);
	return Math.round((a/b) * c + Il);
}



function getAQIColor(aqi) {
	if (aqi >= 301) {
	  return '#7e0023';
	} else if (aqi >= 201) {
	  return '#8f3f97';
	} else if (aqi >= 151) {
	  return '#ff0000';
	} else if (aqi >= 101) {
	  return '#ff7e00';
	} else if (aqi >= 51) {
	  return '#ffff00';
	} else if (aqi >= 0) {
	  return '#00e400';
	} else {
	  return undefined;
	}
}