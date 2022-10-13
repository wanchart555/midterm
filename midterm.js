document.addEventListener('DOMContentLoaded', function (){
        var pressure = document.getElementById('pressure');
        var temp = document.getElementById('temp');
        var level = document.getElementById('level');
        var flow = document.getElementById('flow');
        var ST_ID = document.querySelector('#st_id');
        var ST_NAME = document.querySelector('#st_name');
        var senname = document.querySelector('#sensor_name');
        var sentype = document.querySelector('#sensor_type');
        var senunit = document.querySelector('#sensor_unit');
        var senvalue = document.querySelector('#sensor_value');
        var postdata = document.querySelector('.rightframe');
        postdata.addEventListener('submit', function (event){
        event.preventDefault();
        const senddata = {
            st_id: ST_ID.value,
            st_name: ST_NAME.value,
            sensor_name: senname.value,
            sensor_type: sentype.value,
            sensor_unit: senunit.value,
            sensor_value: senvalue.value,
        };   
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/student_post', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(senddata)
            })
            .then((response) => {
                return response.json();
            })
                alert("Send data success")
        })
        document.querySelector('.innerframe').onsubmit = function (event){
        const sensorid = document.querySelector('#sensorid').value;
        const sensorty = document.querySelector('#sensorty').value;
        event.preventDefault();
        if(sensorid <= 2){  
            if(sensorty=="flow-transducer"){
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
                .then(response => response.json())
                .then(sensor_id => {
                    console.log(sensor_id);
                    const flowname = sensor_id[sensorid].name;
                    const flowplant = sensor_id[sensorid]["plant-site"];       
                    const flowrange = sensor_id[sensorid].range; 
                    const flowtype = sensor_id[sensorid].type; 
                    const flowunit = sensor_id[sensorid].unit; 
                    const flowvalue = sensor_id[sensorid].value; 
                    flow.style.borderColor = "#FF0033";
                    pressure.style.borderColor = "#FFF";
                    temp.style.borderColor = "#FFF";
                    level.style.borderColor = "#FFF";
                        document.querySelector('p1').innerHTML = `Name-Sensor &nbsp;=&nbsp;${flowname}`;                
                        document.querySelector('p2').innerHTML = `[Plant-Site]-Sensor &nbsp;=&nbsp;${flowplant}`;
                        document.querySelector('p3').innerHTML = `Range-Sensor &nbsp;=&nbsp;${flowrange}`;     
                        document.querySelector('p4').innerHTML = `Type-Sensor &nbsp;=&nbsp;${flowtype}`; 
                        document.querySelector('p5').innerHTML = `Unit-Sensor &nbsp;=&nbsp;${flowunit}`;
                        document.querySelector('p6').innerHTML = `Value-Sensor &nbsp;=&nbsp;${flowvalue}`;  
                })
              return false;                
            }
            if(sensorty=="level-transducer"){
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
                .then(response => response.json())
                .then(sensor_id => {
                        console.log(sensor_id);
                        const lvname = sensor_id[sensorid].name;
                        const lvplant = sensor_id[sensorid]["plant-site"];       
                        const lvrange = sensor_id[sensorid].range; 
                        const lvtype = sensor_id[sensorid].type; 
                        const lvunit = sensor_id[sensorid].unit; 
                        const lvvalue = sensor_id[sensorid].value; 
                        level.style.borderColor = "#FF0033";
                        pressure.style.borderColor = "#FFF";
                        temp.style.borderColor = "#FFF";
                        flow.style.borderColor = "#FFF";
                            document.querySelector('p1').innerHTML = `Name-Sensor &nbsp;=&nbsp;${lvname}`;                
                            document.querySelector('p2').innerHTML = `[Plant-Site]-Sensor &nbsp;=&nbsp;${lvplant}`;
                            document.querySelector('p3').innerHTML = `Range-Sensor &nbsp;=&nbsp;${lvrange}`;     
                            document.querySelector('p4').innerHTML = `Type-Sensor &nbsp;=&nbsp;${lvtype}`; 
                            document.querySelector('p5').innerHTML = `Unit-Sensor &nbsp;=&nbsp;${lvunit}`;
                            document.querySelector('p6').innerHTML = `Value-Sensor &nbsp;=&nbsp;${lvvalue}`;          
                })
              return false;      
            }
            if(sensorty=="temperature-transducer"){
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
                .then(response => response.json())
                .then(sensor_id => {
                        console.log(sensor_id);
                        const tempname = sensor_id[sensorid].name;
                        const tempplant = sensor_id[sensorid]["plant-site"];       
                        const temprange = sensor_id[sensorid].range; 
                        const temptype = sensor_id[sensorid].type; 
                        const tempunit = sensor_id[sensorid].unit; 
                        const tempvalue = sensor_id[sensorid].value; 
                        temp.style.borderColor = "#FF0033";
                        pressure.style.borderColor = "#FFF";
                        level.style.borderColor = "#FFF";
                        flow.style.borderColor = "#FFF";
                            document.querySelector('p1').innerHTML = `Name-Sensor &nbsp;=&nbsp;${tempname}`;                
                            document.querySelector('p2').innerHTML = `[Plant-Site]-Sensor &nbsp;=&nbsp;${tempplant}`;
                            document.querySelector('p3').innerHTML = `Range-Sensor &nbsp;=&nbsp;${temprange}`;     
                            document.querySelector('p4').innerHTML = `Type-Sensor &nbsp;=&nbsp;${temptype}`; 
                            document.querySelector('p5').innerHTML = `Unit-Sensor &nbsp;=&nbsp;${tempunit}`;
                            document.querySelector('p6').innerHTML = `Value-Sensor &nbsp;=&nbsp;${tempvalue}`;          
                })
              return false; 
            }
            if(sensorty=="pressure-transducer"){
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
                .then(response => response.json())
                .then(sensor_id => {
                        console.log(sensor_id);
                        const pname = sensor_id[sensorid].name;
                        const pplant = sensor_id[sensorid]["plant-site"];       
                        const prange = sensor_id[sensorid].range; 
                        const ptype = sensor_id[sensorid].type; 
                        const punit = sensor_id[sensorid].unit; 
                        const pvalue = sensor_id[sensorid].value; 
                        pressure.style.borderColor = "#FF0033";
                        temp.style.borderColor = "#FFF";
                        level.style.borderColor = "#FFF";
                        flow.style.borderColor = "#FFF";
                            document.querySelector('p1').innerHTML = `Name-Sensor &nbsp;=&nbsp;${pname}`;                
                            document.querySelector('p2').innerHTML = `[Plant-Site]-Sensor &nbsp;=&nbsp;${pplant}`;
                            document.querySelector('p3').innerHTML = `Range-Sensor &nbsp;=&nbsp;${prange}`;     
                            document.querySelector('p4').innerHTML = `Type-Sensor &nbsp;=&nbsp;${ptype}`; 
                            document.querySelector('p5').innerHTML = `Unit-Sensor &nbsp;=&nbsp;${punit}`;
                            document.querySelector('p6').innerHTML = `Value-Sensor &nbsp;=&nbsp;${pvalue}`;          
                })  
              return false; 
            }         
                else{
                    alert("Error Type")
                    flow.style.borderColor = "#FFF";
                    pressure.style.borderColor = "#FFF";
                    temp.style.borderColor = "#FFF";
                    level.style.borderColor = "#FFF";
                    document.querySelector('p1').innerHTML = `Error Type`;
                    document.querySelector('p2').innerHTML = ``;
                    document.querySelector('p3').innerHTML = ``;     
                    document.querySelector('p4').innerHTML = ``; 
                    document.querySelector('p5').innerHTML = ``;
                    document.querySelector('p6').innerHTML = ``;
                }
            }
            else{
                    alert("Error Id")
                    flow.style.borderColor = "#FFF";
                    pressure.style.borderColor = "#FFF";
                    temp.style.borderColor = "#FFF";
                    level.style.borderColor = "#FFF";
                    document.querySelector('p1').innerHTML = `Error Id`;
                    document.querySelector('p2').innerHTML = ``;
                    document.querySelector('p3').innerHTML = ``;     
                    document.querySelector('p4').innerHTML = ``; 
                    document.querySelector('p5').innerHTML = ``;
                    document.querySelector('p6').innerHTML = ``;
                }
            }
            
            });
