let ebc={
  "name": "Rajarshi Shahu Maharaj Scholarship (EBC)",

  "des": "The Rajarshi Shahu Maharaj Scholarship (EBC) is a Maharashtra Government scholarship scheme designed for students belonging to the Economically Backward Class (EBC) category. The scheme helps financially weak students pursue higher education by reducing their tuition fee burden. It is mainly available for students studying professional and non-professional courses such as B.Tech, B.Com, B.Sc, Diploma, and other approved courses in recognized colleges of Maharashtra.",

  "benefits": [
    "50% tuition fee reimbursement",
    "Financial support for economically weaker students",
    "Applicable for professional and non-professional courses",
    "Direct benefit transfer through MahaDBT portal",
    "Helps reduce higher education financial burden"
  ],

  "criteria": [
    "Student must be a resident of Maharashtra",
    "Student must belong to Open category (EBC)",
    "Family annual income should be less than or equal to ₹8 lakh",
    "Student must be admitted in a recognized college/institute",
    "Admission should be through government quota/CAP process",
    "Student should not be receiving another major scholarship",
    "Gap in education should not violate scheme rules",
    "Applicable for undergraduate and postgraduate courses including B.Tech"
  ],

  "required_documents": [
    "Aadhaar Card",
    "Income Certificate",
    "Domicile Certificate",
    "CAP Allotment Letter",
    "College Admission Receipt",
    "Bonafide Certificate",
    "Previous Year Marksheet",
    "Bank Passbook",
    "Passport Size Photo"
  ],

  "application_process": [
    "Visit MahaDBT portal",
    "Create student account/login",
    "Select EBC Scholarship scheme",
    "Fill application form",
    "Upload required documents",
    "Submit application",
    "Track application status online"
  ],

  "official_portal": "https://mahadbt.maharashtra.gov.in"
}

function fillSchemeDetail(scheme){

    // console.log( typeof scheme);
    // console.log(scheme);
    

   scheme= JSON.parse(scheme)
    // console.log( typeof scheme);
    // console.log(scheme);
    

    
    let schemeNameContaner=document.querySelector('#nameAndDescription');
    schemeNameContaner.innerHTML='';
    let SchemeNameH1=document.createElement("h1");
    SchemeNameH1.innerText=scheme.name;
    let namePTag=document.createElement('p');
    namePTag.classList.add('schemeItems');
    namePTag.innerText=scheme.des;
    schemeNameContaner.appendChild(SchemeNameH1);
    schemeNameContaner.appendChild(namePTag);
    // benifites schemeNameContaner

    //  console.log(scheme.benefits);
     
    let benifiteContaner=document.getElementById("benifites");
    benifiteContaner.innerHTML='<h1 >benefits</h1>';
    scheme.benefits.forEach(element => { //benefits
        let p=document.createElement('p');
        p.classList.add('schemeItems');
        p.innerText=element;
        benifiteContaner.appendChild(p)
    });

    // criteria contaner

    let creteriaContaner=document.getElementById("criteria");
    creteriaContaner.innerHTML=' <h1 >criteria</h1>';
    scheme.criteria.forEach(element => {
        let p=document.createElement('p');
        p.classList.add('schemeItems');
        p.innerText=element;
        creteriaContaner.appendChild(p)
    });

    //document contaner

    let documentContaner=document.getElementById('documents');
    documentContaner.innerHTML='<h1 >required documents</h1>'
    scheme.required_documents.forEach(element => {
        let p=document.createElement('p');
        p.classList.add('schemeItems');
        p.innerText=element;
        documentContaner.appendChild(p)
    });

    // process contaner

    let processContaner=document.getElementById('application_process');
    processContaner.innerHTML='<h1 >application process</h1>'
     scheme.application_process.forEach(element => {
        let p=document.createElement('p');
        p.classList.add('schemeItems');
        p.innerText=element;
        processContaner.appendChild(p)
    });

    //video links contaner
    let videoLinkContaner=document.getElementById('video_links');
    videoLinkContaner.innerHTML='<h1 >Youtube video links</h1> <h2>Watch any of these videos</h2>'
    let i=1;
     scheme.yt_videos.forEach(element => {
        let a=document.createElement('a');
        a.classList.add('schemeItems');
        a.href=element;
        a.innerText=`click to watch video ${i}`
        videoLinkContaner.appendChild(a)
        i++
    });

    //portal links 

    let siteLinksContainer = document.getElementById('site_links');

siteLinksContainer.innerHTML =
'<h1 class="schemeItems">Official Portal Links</h1>';



Object.entries(scheme.official_links).forEach(([name, link]) => {

    let a = document.createElement('a');

    a.classList.add('schemeItems');
    a.href = link;
    a.target = "_blank";
    a.innerText = name;

    siteLinksContainer.appendChild(a);
    siteLinksContainer.appendChild(document.createElement('br'));
    siteLinksContainer.appendChild(document.createElement('br'));
});

}

// fillSchemeDetail(ebc);


let schemeId = window.location.pathname.split('/').pop();

console.log(schemeId);


async function fillDataByAPt(){
    let res= await fetch(`/getSchemeDetaul/${schemeId}`);
    // console.log(res);
    let data= await res.json();
    // console.log(data);
    // console.log(data.scheme);

    let scheme = data.scheme;
    
    fillSchemeDetail(scheme);
}

fillDataByAPt()



