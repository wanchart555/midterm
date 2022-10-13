document.addEventListener('DOMContentLoaded', function (){
        const ST_ID = document.querySelector('#st_id');
        const ST_NAME = document.querySelector('#st_name');
        const senname = document.querySelector('#sensor_name');
        const sentype = document.querySelector('#sensor_type');
        const senunit = document.querySelector('#sensor_unit');
        const senvalue = document.querySelector('#sensor_value');
        const registerForm = document.querySelector('.rightframe');
        registerForm.addEventListener('submit', function (event){
        event.preventDefault();
        const user = {
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
                body: JSON.stringify(user)
            })
            .then((response) => {
                return response.json();
            })
                alert("ส่งค่าสำเร็จ")
        })
        let pressure = document.getElementById('pressure');
        let temp = document.getElementById('temp');
        let level = document.getElementById('level');
        let flow = document.getElementById('flow');
        document.querySelector('.innerframe').onsubmit = function (event){
        const currency = document.querySelector('#sensorid').value;
        const sensorty = document.querySelector('#sensorty').value;
        event.preventDefault();
        if(currency <= 2){  
            if(sensorty=="flow-transducer"){
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
                .then(response => response.json())
                .then(sensor_id => {
                    console.log(sensor_id);
                    const flowname = sensor_id[[currency]].name;
                    const flowplant = sensor_id[[currency]]["plant-site"];       
                    const flowrange = sensor_id[[currency]].range; 
                    const flowtype = sensor_id[[currency]].type; 
                    const flowunit = sensor_id[[currency]].unit; 
                    const flowvalue = sensor_id[[currency]].value; 
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
                        const lvname = sensor_id[[currency]].name;
                        const lvplant = sensor_id[[currency]]["plant-site"];       
                        const lvrange = sensor_id[[currency]].range; 
                        const lvtype = sensor_id[[currency]].type; 
                        const lvunit = sensor_id[[currency]].unit; 
                        const lvvalue = sensor_id[[currency]].value; 
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
                        const tempname = sensor_id[[currency]].name;
                        const tempplant = sensor_id[[currency]]["plant-site"];       
                        const temprange = sensor_id[[currency]].range; 
                        const temptype = sensor_id[[currency]].type; 
                        const tempunit = sensor_id[[currency]].unit; 
                        const tempvalue = sensor_id[[currency]].value; 
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
                        const pname = sensor_id[[currency]].name;
                        const pplant = sensor_id[[currency]]["plant-site"];       
                        const prange = sensor_id[[currency]].range; 
                        const ptype = sensor_id[[currency]].type; 
                        const punit = sensor_id[[currency]].unit; 
                        const pvalue = sensor_id[[currency]].value; 
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
                    alert("Error")
                }
            }
            else{
                    alert("Error")
                }
            }
            
            });
