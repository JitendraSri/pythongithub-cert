document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('certificateForm');
    const rollNoInput = document.getElementById('rollNo');
    const canvas = document.getElementById('certificateCanvas');
    const downloadLink = document.getElementById('downloadLink');
    const certificateResult = document.getElementById('certificateResult');
    const notRegisteredMessage = document.getElementById('notRegisteredMessage');
    const ctx = canvas.getContext('2d');
    
    // --- YOUR STUDENT DATA IN A SINGLE JAVASCRIPT OBJECT ---
const studentsData = {
    "23A81A4303": "KOTA SRI SAI MAHALSA",
    "23A81A4327": "KODURI GANGA DHAMANESH",
    "23A81A4359": "SHAIK DUNNAPOTHULA JAHEER HUSSAIN",
    "23A81A4361": "TALABATTULA JITENDRA SRI",
    "23A81A4367": "ADAPA NAGA VENKATA DURGAPRASAD",
    "23A81A4370": "AKULA YESU BABU",
    "23A81A4373": "ANISETTI JANAKI SAI PRASANNA",
    "23A81A4384": "CHINIMILLI AKHIL SAI PHANIKAR",
    "23A81A4396": "GUDIMETLA TEJA SRI",
    "23A81A4399": "KANCHERLA TEJESWAR",
    "23A81A43A0": "KANNEGOLLA NAGA LAKSHMI RUCHITHA",
    "23A81A43A6": "KOPPINEEDI PRANAY KALI KRISHNA SAI",
    "23A81A43A7": "KORLEPARA N J K AYYAPPA",
    "23A81A43B1": "MADIREDDI NAGA DURGA BHARGAVI",
    "23A81A43B2": "MAKALA BRAMARAMBA NAGA BHUVANA",
    "23A81A43B7": "MUPPANA SHANMUKHA",
    "23A81A43C0": "NAVELE NEEHAR",
    "23A81A43C6": "REDDY NIKHIL SAI TEJA",
    "23A81A43D2": "YENDLURI KRUPAUL",
    "23A81A6116": "GANTA JAYASAI VINAYA BHARATH",
    "23A81A6123": "KOVVURI HARSHA VARDHAN REDDY",
    "23A81A6125": "KABOTULA TEJAS SAINADH KUMAR",
    "23A81A6141": "MOHAMMED SHEHAAB HAMEED",
    "23A81A6158": "SHEIK RAMEEZ RAZA",
    "23A81A6167": "APPASANI JITENDRA NAGA SANDEEP",
    "23A81A61A3": "MUDDAM BHARATH LAKSHMI NARASIMHA",
    "23A81A61C3": "SUNKARA GANESH",
    "23A81A61C6": "THOTA RANJITH KUMAR",
    "23A81A61C7": "TUPAKULA CHANDRA SEKHARA RAMARAO",
    "24A81A4302": "ADDANKI JAGADEESH KUMAR",
    "24A81A4348": "REDDI SAI",
    "24A81A4351": "SOMALANKA SUBRAHMANYA ABHI RAM",
    "24A81A4352": "SAMMINGI LOKESH SAI SUBRAHMANYAM",
    "24A81A4353": "SANAMANDRA VINAY BABU",
    "24A81A4368": "ALLU HEMA SRIVALLI",
    "24A81A4371": "BHOGISETTY SRI MAHALAKSHMI",
    "24A81A4375": "DULAPALLI PAVANI",
    "24A81A4385": "KANNAJI DHANA BHAVANI",
    "24A81A4386": "KANTETI SRI DURGA MOUNIKA",
    "24A81A4396": "MADASI PRIYA DHARSINI",
    "24A81A4397": "MALLADI KUSUMA",
    "24A81A43A0": "MEDAPATI BHAVYA SRI",
    "24A81A43B8": "RAVILISETTY GEETANJALI",
    "24A81A43B9": "RELLI RESHMA",
    "24A81A43C1": "SHAIK SABEENA",
    "24A81A43C7": "VANKAYALA JYOTHI",
    "24A81A43D1": "YEDIDA DEVI UMA MANI ALEKHYA",
    "25A85A4403": "MANTRABUDDI NAGESWARI",
    "24A81A4441": "NAGIREDDY SRIYA SWATHI NAGA SAILAJA",
    "24A81A4446": "PATSA PADMA PRIYA",
    "24A81A4453": "SANKU LAKSHMI ANJANA",
    "24A81A6122": "GOPISETTI SAI SRI AMRUTA",
    "24A81A6138": "LINGAPARTHI RUCHITHA SRI",
    "24A81A6144": "NARINA SAI HARSHINI",
    "24A81A6170": "ALLAM VENKATA SAI RAM KUMAR",
    "24A81A6178": "BYRRAJU GOPI CHANDANA",
    "24A81A6187": "DUDDUPUDI DURGA GANESH",
    "24A81A61B9": "PRADEEP PULI",
    "24A81A61C0": "RAJAHMUNDRY SRAVANI",
    "24A81A61C7": "TIRANDI NIKHIL SRI KRISHNA",
    "24A85A6108": "SAYYED RAHIMUDDIN",
    "24A85A6109": "CHELLINKALA KARUNAKAR",
    "24A85A6111": "KURELLA JASWANTH NAGA VENKATA GANGADHAR",
    "25A85A4307": "RAVIPATI CHAITANYA RAMAKRISHNA",
    "25A85A4407": "VENDANTAM SRI PRAHARSHITA",
    "23A81A6114": "EMANDI JAGADEESH",
    "23A81A4392": "GOPI VIGNESH",
    "23A81A4393": "GOPISETTI MAHALAKSHMI",
    "23A81A43C4": "PATTULA JASHUVA",
    "24A81A6197": "KURICHETI YAMINI",
    "23A81A6160": "TANINKI DURGA NAGA SURYA MOHITH",
    "25A85A4310": "KOTTAPALLI HARI SATYANARAYANA",
    "23A81A4395": "GUDIMETLA REKHA VINAYA VENI",
    "23A81A4379": "BATHI LEELA KRISHNA",
    "23A81A43A9": "KUNDALA LAKSHMI SRINIVAS",
    "23A81A4309": "CHEKKA ADITHYA VENKATA SAI",
    "23A81A4337": "MANDA PRUDHVI",
    "23A81A6102": "BALUVU ANJALI",
    "23A81A6113": "EENADULA SOUMYA",
    "23A81A6118": "GOGADA VARUN KUMAR",
    "23A81A6137": "MALLIPUDI PRANEETH KUMAR",
    "24A81A43B2": "PAMULA SATISH",
    "24A81A43D0": "YADLAPALLI SRIHARSHA",
    "24A81A43C3": "TALAPAGALA ROHITH",
    "24A81A4341": "PANNEM GOWTHAM",
    "25A85A4313": "YADLA VIJAYA KUMAR",
    "24A81A4339": "NEKKANTI BHUVANA SAI DEEPTHI",
    "23A81A4339": "MEDIDI SATHVIK",
    "23A81A6101": "ARUMELLI VENKATA SAI DURGA PRAKASH",
    "23A81A61C1": "SHAIK FAYAZ AHMED",
    "23A81A6149": "PALLAPOTHU VENKATA RAGHAVA AVINASH",
    "22A81A6197": "MANDA MOUSHMI SREE",
    "23A81A6111": "DARLA NITHYA KAMAKSHI",
    "23A81A6133": "KOTHA KARTHIKEYA RAMALINGESWARA GUPTA",
    "22A81A6184": "GUTTIKONDA PAVANI DURGA BHAVANI",
    "22A81A6193": "KONATALA JAYASRI SRI PUJITA",
    "22A81A6177": "CHIDAY HEMA NAGA SRI",
    "24A81A61A6": "MOHAMMAD SAYYAD BAJI",
    "24A81A43C4": "GAYATRI TANUKU",
    "24A81A4382": "KAKITA KANAKA MAHALAKSHMI",
    "24A81A43A4": "MOTUPALLI BALA NAGA PADMA KOMALI",
    "24A81A43B7": "RAPAKA SHYLU AKSHAYA"

  };
    // -------------------------------------------------------------

    const certificateTemplate = new Image();
    certificateTemplate.src = 'Blue Gold Elegant Certificate of Participation.png'; 

    certificateTemplate.onload = () => {
        canvas.width = certificateTemplate.width;
        canvas.height = certificateTemplate.height;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const rollNo = rollNoInput.value.toUpperCase().trim();

            const name = studentsData[rollNo];
            
            certificateResult.style.display = 'none';
            notRegisteredMessage.style.display = 'none';

            if (name) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(certificateTemplate, 0, 0);

                ctx.font = '60px Arial'; 
                ctx.fillStyle = '#000'; 
                ctx.textAlign = 'center';
                
                const textX = canvas.width / 2;
                // DROPPING THE NAME BY 7 PIXELS
                const textY = canvas.height * 0.45 - 45;

                ctx.fillText(name, textX, textY);

                const dataURL = canvas.toDataURL('image/png');
                downloadLink.href = dataURL;
                downloadLink.download = `Python_GitHub_Certificate_${name}.png`;
                downloadLink.style.display = 'inline-block';
                certificateResult.style.display = 'block';

            } else {
                notRegisteredMessage.style.display = 'block';
            }
        });
    };
});
