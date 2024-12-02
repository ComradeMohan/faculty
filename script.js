const facultyData = [
  {
    name: "Dr.T.Yuvaraj",
    phone: "9944648832",
    department: "Power Electronics & Power Systems",
    roomNo: "107B",
    subjects: ["Protection and Switch Gear", "Professional Ethics and Legal Practices"]
  },
  {
    name: "Dr. I. Praveen Kumar",
    phone: "9788166904",
    department: "Medical Biotechnology and Integrative Physiology",
    roomNo: "AHS-A10(2)",
    subjects: ["Plant Biotechnology"]
  },
  {
    name: "Dr.K.Sangeetha",
    phone: "8838930689",
    department: "Environmental Biotechnology",
    roomNo: "AHS-B10",
    subjects: ["Cell Biology"]
  },
  {
    name: "Dr Senthil Kumar C",
    phone: "9940580501",
    department: "Wearable and Nano Sensors",
    roomNo: "AHS12D2",
    subjects: ["Body Area Networks"]
  },
  {
    name: "Dr Praveen R",
    phone: "9962291255",
    department: "Nanobiomaterial",
    roomNo: "AHS12D1",
    subjects: ["Hospital Management"]
  },
  {
    name: "Dr Usha Rani",
    phone: "9600071178",
    department: "Medical Imaging",
    roomNo: "AHS12C1",
    subjects: ["Biomedical Instrumentation"]
  },
  {
    name: "Dr Geetha R",
    phone: "8129511366",
    department: "Medical Imaging",
    roomNo: "AHS12C2",
    subjects: ["Virtual Instrumentation design for medical systems"]
  },
  {
    name: "Dr.R.Ganesan",
    phone: "9444751780",
    department: "Environmental and Water Resources Engineering",
    roomNo: "414",
    subjects: ["Environmental Impact Assessment", "Waste Management"]
  },
  {
    name: "Dr. N. Senthilkumar",
    phone: "9944634394",
    department: "Thermal Engineering",
    roomNo: "Central Workshop",
    subjects: ["Automotive Engines"]
  },
  {
    name: "Dr.Mary Sanitha",
    phone: "9884186752",
    department: "Molecular Analytics",
    roomNo: "AHS-D10(2)",
    subjects: ["Genomics and Proteomics"]
  },
  {
    name: "Dr.M.S.Surender",
    phone: "9791876953",
    department: "Mathematics for Excellence",
    roomNo: "",
    subjects: ["Applied Probability"]
  },
  {
    name: "Dr.Iyyappan J",
    phone: "9600251579",
    department: "Bioengineering",
    roomNo: "AHS-C10(1)",
    subjects: ["Instrumental Methods of Analysis"]
  },
    {
    name: "Dr Priya Rachel",
    phone: "9566019530",
    department: "Structural Engineering",
    roomNo: "412",
    subjects: ["Introduction to Civil Engineering-Societal & Global Impact"]
  },
  {
    name: "Dr. SHAKILA DEVI",
    phone: "7339403331",
    department: "",
    roomNo: "",
    subjects: ["Mathematics I for Agricultural Engineering"]
  },
  {
    name: "Dr M Ramalakshmi",
    phone: "9884241227",
    department: "Geotechnics and Geomatics",
    roomNo: "411",
    subjects: ["Surveying"]
  },
  {
    name: "Dr. V.Savithri",
    phone: "9841531472",
    department: "Design",
    roomNo: "122",
    subjects: ["Fluid Mechanics and Machinery"]
  },
  {
    name: "Dr. Vasudevan",
    phone: "8056227308",
    department: "Design",
    roomNo: "34",
    subjects: ["Engineering Mechanics"]
  },
  {
    name: "Dr. M. Dinesh Kumar",
    phone: "9791558517",
    department: "Environmental and Water Resources Engineering",
    roomNo: "13",
    subjects: ["Fluid Mechanics and Machinery"]
  },
  {
    name: "Dr. B.Raja Bharathi",
    phone: "9500891008",
    department: "Design",
    roomNo: "121",
    subjects: ["Theory of Machines"]
  },
  {
    name: "Dr. P.R. Karthikeyan",
    phone: "9944218001",
    department: "Research and Innovation",
    roomNo: "321",
    subjects: ["Analog Circuits"]
  },
  {
    name: "Dr.VIJAYAKUMARI P",
    phone: "8754723181",
    department: "Applied Electronics",
    roomNo: "326",
    subjects: ["Integrated Circuits"]
  },
  {
    name: "Dr.K.Vijayalakshmi",
    phone: "9655662491",
    department: "Signal and Image Processing",
    roomNo: "410",
    subjects: ["Semiconductor Devices"]
  },
  {
    name: "Dr.R.Saravana kumar",
    phone: "9894951308",
    department: "Wireless communication",
    roomNo: "208A",
    subjects: ["Engineering Electromagnetics"]
  },
  {
    name: "Dr N P G Bhavani",
    phone: "8778068976",
    department: "Electronic Instrumentation Systems",
    roomNo: "214",
    subjects: ["Control Systems"]
  },
   {
    name: "Dr G Manikandan",
    phone: "9176276410",
    department: "Robotics",
    roomNo: "136",
    subjects: ["VLSI Design"]
  },
  {
    name: "Ms. Ashwini.S",
    phone: "9952993184",
    department: "Big Data and Network Security",
    roomNo: "239",
    subjects: ["C Programming"]
  },
  {
    name: "Dr. Soundara",
    phone: "9790953181",
    department: "Geotechnics and Geomatics",
    roomNo: "413",
    subjects: ["Biology and Environmental Science for Engineers"]
  },
  {
    name: "Dr. Shanmuga Prabha",
    phone: "7092072387",
    department: "Big Data and Network Security",
    roomNo: "240",
    subjects: ["C Programming"]
  },
  {
    name: "Dr. Radhika Bhaskar",
    phone: "9710321350",
    department: "Wireless communication",
    roomNo: "215",
    subjects: ["C Programming"]
  },
  {
    name: "Dr. R.Dhanalakshmi",
    phone: "9884787512",
    department: "Machine Learning",
    roomNo: "304",
    subjects: ["Data Structures"]
  },
  {
    name: "Sr. Sudha",
    phone: "9994293489",
    department: "Deep Learning",
    roomNo: "119",
    subjects: ["Data Structures"]
  },
  {
    name: "Dr. T.Rajesh kumar",
    phone: "9842148424",
    department: "Deep Learning",
    roomNo: "120",
    subjects: ["Data Structures"]
  },
  {
    name: "Dr. Mahaveerakannan",
    phone: "9788614129",
    department: "Artificial Intelligence",
    roomNo: "305",
    subjects: ["Data Structures"]
  },
  {
    name: "Mr.Logu",
    phone: "9042768897",
    department: "AR and VR",
    roomNo: "223",
    subjects: ["Operating Systems"]
  },
  {
    name: "Dr. V.Karthick",
    phone: "9884142182",
    department: "Networking",
    roomNo: "222",
    subjects: ["Operating Systems"]
  },
  {
    name: "Dr. S.A.Kalaiselvan",
    phone: "9043333903",
    department: "Networking",
    roomNo: "315",
    subjects: ["Operating Systems"]
  },
  {
    name: "Dr. A.Gnanasoundari",
    phone: "8248974652",
    department: "Machine Learning",
    roomNo: "303",
    subjects: ["Operating Systems"]
  },
  {
    name: "Dr. P.Muneeshwari",
    phone: "9788680336",
    department: "Applied Machine Learning",
    roomNo: "609",
    subjects: ["Database Management Systems"]
  },
  {
    name: "Dr. Kesavan",
    phone: "9444304384",
    department: "Knowledge Engineering",
    roomNo: "314",
    subjects: ["Database Management Systems"]
  },
  {
    name: "Dr. U.Sakthi",
    phone: "9444851523",
    department: "Blockchain and Cybersecurity",
    roomNo: "238",
    subjects: ["Database Management Systems"]
  },
  {
    name: "Dr. U. Arul",
    phone: "9841490831",
    department: "Applied Machine Learning",
    roomNo: "607",
    subjects: ["Database Management Systems"]
  },
  {
    name: "Dr. VijayaBasker",
    phone: "9443033062",
    department: "Programming",
    roomNo: "205",
    subjects: ["Design and Analysis of Algorithms"]
  },
  {
    name: "Dr.V.Parthipan",
    phone: "9787366908",
    department: "Big Data and Network Security",
    roomNo: "225",
    subjects: ["Computer Networks"]
  },
  {
    name: "D. Sheela",
    phone: "99621 07078",
    department: "Embedded System",
    roomNo: "424",
    subjects: ["Computer Networks"]
  },
  {
    name: "Dr.M.Vanitha Lakshmi",
    phone: "9791098344",
    department: "Signal and Image Processing with Computational Intelligence",
    roomNo: "427",
    subjects: ["Computer Networks"]
  },
  {
    name: "Dr.Jesu Jayarin",
    phone: "9444053102",
    department: "Data Analytics",
    roomNo: "404",
    subjects: ["Computer Networks"]
  },
  {
    name: "Dr.Rajasekar M",
    phone: "9677043244",
    department: "Deep Learning",
    roomNo: "312",
    subjects: ["Python Programming"]
  },
  {
    name: "Dr. S. Kalaiarasi",
    phone: "9444564295",
    department: "Data Science",
    roomNo: "401",
    subjects: ["Python Programming"]
  },
  {
    name: "Dr.L. Rama Pavarthy",
    phone: "9840184995",
    department: "Data Science",
    roomNo: "401",
    subjects: ["Python Programming"]
  },
  {
    name: "Dr .MANIKAVELAN",
    phone: "9600040114",
    department: "Blockchain and Cybersecurity",
    roomNo: "241",
    subjects: ["Programming in Java"]
  },
  {
    name: "Dr Tamilselvan",
    phone: "9994095015",
    department: "Big Data and Network Security",
    roomNo: "547",
    subjects: ["Programming in Java"]
  },
  {
    name: "Dr.Kanimozhi",
    phone: "9401730451",
    department: "Computer Vision",
    roomNo: "514",
    subjects: ["Software Engineering"]
  },
  {
    name: "Dr A Shrivindhya",
    phone: "9786197926",
    department: "Big Data and Network Security",
    roomNo: "134",
    subjects: ["Software Engineering"]
  },
  {
    name: "Dr. Rohith Bhat.C",
    phone: "9840546333",
    department: "Deep Learning",
    roomNo: "112",
    subjects: ["Object Oriented Analysis and Design"]
  },
  {
    name: "Dr.Beulah David",
    phone: "7010695064",
    department: "Data Analytics",
    roomNo: "226",
    subjects: ["Computer Architecture"]
  },
  {
    name: "Dr.S.Christy",
    phone: "9884909250",
    department: "Data Analytics",
    roomNo: "233",
    subjects: ["Computer Architecture"]
  },
  {
    name: "Dr.M.Geetha",
    phone: "94443 87531",
    department: "Computer Vision",
    roomNo: "507",
    subjects: ["Theory of Computation"]
  },
  {
    name: "DrG.michael",
    phone: "9940284723",
    department: "Computational Intelligence",
    roomNo: "608",
    subjects: ["Compiler Design"]
  },
  {
    name: "Dr.Somasundaram",
    phone: "9443467264",
    department: "Knowledge Engineering",
    roomNo: "601",
    subjects: ["Cloud Computing and Big Data Analytics"]
  },
  {
    name: "DR Arumugam S S",
    phone: "9962223356",
    department: "Information Security",
    roomNo: "224",
    subjects: ["Data Warehousing and Data Mining"]
  },
  {
    name: "Dr.Saravanan.M.S",
    phone: "8190043400",
    department: "Artificial Intelligence",
    roomNo: "305",
    subjects: ["Artificial Intelligence"]
  },
  {
    name: "Dr.Balamanigandan",
    phone: "8220115532",
    department: "Artificial Intelligence",
    roomNo: "306",
    subjects: ["Artificial Intelligence"]
  }
  
  // ... Rest of the faculty data
].sort((a, b) => a.name.localeCompare(b.name));

// DOM Utilities
function createFacultyCard(faculty) {
  const subjectsList = faculty.subjects
    .map(subject => `<li>${subject}</li>`)
    .join('');

  return `
    <div class="faculty-card">
      <h3 title="${faculty.name}">${faculty.name}</h3>
      <div class="faculty-info">
        <p class="phone"><i class="fas fa-phone"></i>${faculty.phone}</p>
        ${faculty.department ? 
          `<p class="department" title="${faculty.department}">
            <i class="fas fa-building"></i>
            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px; display: inline-block;">
              ${faculty.department}
            </span>
          </p>` : ''}
        ${faculty.roomNo ? 
          `<p class="room"><i class="fas fa-door-open"></i>${faculty.roomNo}</p>` : ''}
      </div>
      <div class="subjects">
        <h4>Subjects:</h4>
        <ul>${subjectsList}</ul>
      </div>
    </div>
  `;
}

function updateFacultyGrid(filteredFaculty) {
  const facultyGrid = document.querySelector('.faculty-grid');
  if (filteredFaculty.length === 0) {
    facultyGrid.innerHTML = '<p class="no-results">No faculty members found</p>';
  } else {
    facultyGrid.innerHTML = filteredFaculty.map(faculty => createFacultyCard(faculty)).join('');
  }
}

// Search Functionality
function filterFaculty(faculty, searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  
  return faculty.filter(member => {
    const nameMatch = member.name.toLowerCase().includes(term);
    const subjectMatch = member.subjects.some(subject => 
      subject.toLowerCase().includes(term)
    );
    const departmentMatch = member.department?.toLowerCase().includes(term);
    const roomMatch = member.roomNo?.toLowerCase().includes(term);
    
    return nameMatch || subjectMatch || departmentMatch || roomMatch;
  });
}

// Initialize App
document.querySelector('#app').innerHTML = `
  <section class="faculty-section">
    <h2 class="section-title">Faculty Directory</h2>
    <div class="search-container">
      <input 
        type="text" 
        id="faculty-search" 
        placeholder="Search faculty by name, subject, department, or room..."
        class="search-input"
      >
    </div>
    <div class="faculty-grid">
      ${facultyData.map(faculty => createFacultyCard(faculty)).join('')}
    </div>
  </section>
`;

// Add search functionality
const searchInput = document.querySelector('#faculty-search');
searchInput.addEventListener('input', (e) => {
  const filteredFaculty = filterFaculty(facultyData, e.target.value);
  updateFacultyGrid(filteredFaculty);
});
